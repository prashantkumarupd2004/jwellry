/*
 * One-off image optimizer for public/.
 * - Resizes any image wider than MAX_WIDTH down to MAX_WIDTH (keeps aspect ratio).
 * - Recompresses JPEGs at QUALITY.
 * - Converts the large product PNG photos to JPEG (they have no transparency).
 * - Leaves small graphics/logos/transparent PNGs untouched.
 *
 * Usage:  node scripts/optimize-images.js
 * Originals are copied to public/_originals_backup/ before any change.
 */
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const PUBLIC = path.join(__dirname, '..', 'public')
const BACKUP = path.join(PUBLIC, '_originals_backup')
const MAX_WIDTH = 1400
const QUALITY = 80
// Files above this size get processed; tiny assets are skipped.
const MIN_BYTES = 150 * 1024 // 150 KB

// PNG product photos that should become JPEG (no transparency needed).
const PNG_TO_JPEG_PREFIXES = ['necklace_set_22k_']

if (!fs.existsSync(BACKUP)) fs.mkdirSync(BACKUP)

const files = fs.readdirSync(PUBLIC).filter(f => /\.(jpe?g|png)$/i.test(f))

let before = 0
let after = 0
const renamed = [] // {from, to}

async function run() {
  for (const file of files) {
    const src = path.join(PUBLIC, file)
    const stat = fs.statSync(src)
    if (!stat.isFile()) continue

    const ext = path.extname(file).toLowerCase()
    const base = path.basename(file, ext)
    const isPng = ext === '.png'
    const convertToJpeg = isPng && PNG_TO_JPEG_PREFIXES.some(p => file.startsWith(p))

    // Skip small assets that are not being format-converted.
    if (stat.size < MIN_BYTES && !convertToJpeg) continue

    before += stat.size
    const buf = fs.readFileSync(src)
    let img = sharp(buf, { failOn: 'none' })
    const meta = await img.metadata()
    if (meta.width && meta.width > MAX_WIDTH) {
      img = img.resize({ width: MAX_WIDTH })
    }

    // Backup original once.
    fs.copyFileSync(src, path.join(BACKUP, file))

    let outName = file
    let outBuf
    if (convertToJpeg) {
      outBuf = await img.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer()
      outName = base + '.jpeg'
    } else if (ext === '.png') {
      outBuf = await img.png({ compressionLevel: 9, palette: true }).toBuffer()
    } else {
      outBuf = await img.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer()
    }

    // Only keep the new version if it is actually smaller (or format changed).
    if (outBuf.length < stat.size || outName !== file) {
      fs.writeFileSync(path.join(PUBLIC, outName), outBuf)
      after += outBuf.length
      if (outName !== file) {
        fs.unlinkSync(src)
        renamed.push({ from: file, to: outName })
      }
    } else {
      after += stat.size
    }
  }

  console.log('Before:', (before / 1048576).toFixed(1), 'MB')
  console.log('After: ', (after / 1048576).toFixed(1), 'MB')
  if (renamed.length) {
    console.log('\nRenamed (update code references):')
    renamed.forEach(r => console.log(`  ${r.from} -> ${r.to}`))
  }
}

run().catch(e => { console.error(e); process.exit(1) })
