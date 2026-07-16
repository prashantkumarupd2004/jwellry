# Hariom LaxmiNarayan Jewellers (HLJ Group)

A premium jewellery website for HLJ Group — trusted craftsmanship since 1987, with 6 branches across Bihar & Jharkhand.

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Luxury Design**: Premium gold/cream design system with smooth Framer Motion animations
- **Signature Bridal Looks**: Interactive 3-theme royal showcase (Kundan & Polki, Temple Heritage, Modern Diamond) with 3D tilt frames and per-theme WhatsApp enquiry
- **Product Catalog**: Collections for rings, necklaces, earrings, bracelets, and bridal
- **WhatsApp Integration**: Floating chat widget with quick-select enquiry topics
- **Branch Locator**: All 6 branches listed on About & Contact pages with Google Maps links
- **SEO Optimized**: Sitemap, robots.txt, structured metadata
- **Fully Responsive**: Mobile-first, tested across viewports

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   copy .env.example .env
   ```
   Then fill in the contact details in `.env`.

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                   # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page (brand story, branches, timeline)
│   ├── contact/           # Contact page (form, branches, FAQ)
│   ├── products/          # Product catalog + detail pages
│   └── collections/       # Category collection pages
├── components/
│   ├── home/              # Homepage sections (hero, royal looks, stats, marquee…)
│   ├── layout/            # Header & footer
│   ├── product/           # Product cards, grid, filters
│   ├── modern/            # Back-to-top, smooth scroll, lazy image
│   └── ui/                # Button, WhatsApp widget
├── lib/                   # Utilities, constants, product data
├── store/                 # Zustand state
├── types/                 # TypeScript definitions
├── proxy.ts               # Security headers (CSP, HSTS, etc.)
└── public/                # Images & static assets
```

## 🎨 Design System

- **Primary Gold**: `#d4af37` · **Dark Brown**: `#2d2010` · **Cream**: `#f9f2e5`
- **Headings**: Playfair Display · **Body**: Inter · **Accents**: Cormorant Garamond

## 🔧 Configuration

All contact details are set via environment variables — see `.env.example`:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_CONTACT_WHATSAPP` | WhatsApp number for all chat CTAs |
| `NEXT_PUBLIC_CONTACT_PHONE` | Displayed phone number |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email |
| `NEXT_PUBLIC_BASE_URL` | Canonical site URL (SEO/sitemap) |

To update products, edit `lib/data.ts` and `app/products/page.tsx`.

## 🚀 Deployment (Vercel recommended)

1. Push code to GitHub
2. Import the repository in Vercel
3. Add the environment variables from `.env.example`
4. Deploy

## 📞 Business Information

**Hariom LaxmiNarayan Jewellers (HLJ Group)** — Founded 1987 by Hari Om Verma & Laxmi Narayan Verma

**Branches:**
1. Sonapatti, Bhagalpur, Bihar (Est. 1987 — flagship)
2. Kharamnchak, Bhagalpur, Bihar
3. Police Lane, Tilkamanji, Bhagalpur, Bihar
4. Deoghar, Jharkhand
5. Purnea, Bihar
6. Sonapatti Branch 2, Bhagalpur, Bihar

**Hours**: Mon–Sun, 10:00 AM – 9:00 PM

## 📄 License

This project is proprietary software owned by Hariom LaxmiNarayan Jewellers.
