# 🚀 AWS + CyberPanel Deployment Guide (Git Clone Method)

**Website:** Hariom LaxmiNarayan Jewellers (Next.js 16)
**Repo:** https://github.com/prashantkumarupd2004/jwellry.git

Is guide mein AWS EC2 par CyberPanel install karke, git clone se website live karne ka **pura process** step-by-step diya gaya hai.

---

## 📋 Requirements

- AWS Account (credit/debit card required)
- Domain name (e.g. GoDaddy / Hostinger se)
- SSH client (Windows: PowerShell ya PuTTY)

---

## STEP 1: AWS EC2 Instance Launch karo

1. [AWS Console](https://console.aws.amazon.com) mein login karo
2. Search bar mein **EC2** likho → EC2 Dashboard kholo
3. **Launch Instance** button dabao
4. Settings ye rakho:

   | Setting | Value |
   |---|---|
   | Name | `hlj-jewellers-server` |
   | OS (AMI) | **Ubuntu Server 22.04 LTS** (CyberPanel ke liye best) |
   | Instance type | **t3.medium** (2 vCPU, 4 GB RAM) — minimum `t3.small` |
   | Key pair | **Create new key pair** → naam do `hlj-key` → `.pem` file download hogi (sambhal ke rakho!) |
   | Storage | **25 GB** gp3 |

5. **Security Group** mein ye ports allow karo (Edit → Add rule):

   | Type | Port | Source |
   |---|---|---|
   | SSH | 22 | My IP |
   | HTTP | 80 | Anywhere (0.0.0.0/0) |
   | HTTPS | 443 | Anywhere (0.0.0.0/0) |
   | Custom TCP | 8090 | My IP *(CyberPanel admin panel)* |
   | Custom TCP | 3000 | My IP *(Next.js test ke liye, baad mein hata dena)* |

6. **Launch Instance** dabao

### Elastic IP lagao (zaroori — warna IP restart par badal jayega)

1. EC2 sidebar → **Elastic IPs** → **Allocate Elastic IP address**
2. Allocate hone ke baad → **Actions → Associate** → apna instance select karo
3. Ye IP note kar lo — aage `YOUR_SERVER_IP` ki jagah yahi use hoga

---

## STEP 2: Server mein SSH se ghuso

Windows PowerShell kholo (jahan `.pem` file rakhi hai us folder mein):

```powershell
ssh -i hlj-key.pem ubuntu@YOUR_SERVER_IP
```

> Agar "permissions too open" error aaye:
> File par Right-click → Properties → Security → sirf apne user ko Read permission do.

Pehli baar `yes` type karke Enter dabao.

---

## STEP 3: CyberPanel Install karo

Server ke andar (SSH session mein):

```bash
sudo su -
sh <(curl https://cyberpanel.net/install.sh || wget -O - https://cyberpanel.net/install.sh)
```

Installer sawal poochega — ye answers do:

| Sawal | Answer |
|---|---|
| Install CyberPanel? | `1` (CyberPanel with OpenLiteSpeed) |
| Full service install? | `Y` |
| Remote MySQL? | `N` |
| Version | Enter (latest) |
| Admin password | `s` (set your own) → strong password rakho, **note kar lo** |
| Memcached / Redis | `Y` (dono) |
| Watchdog | `Y` |

⏳ Install mein **15–25 minute** lagenge. End mein admin URL + password dikhega — screenshot le lo.

Install ke baad reboot:

```bash
reboot
```

---

## STEP 4: CyberPanel mein Website banao

1. Browser mein kholo: `https://YOUR_SERVER_IP:8090`
   *(SSL warning aayegi — "Advanced → Proceed" dabao, normal hai)*
2. Login: username `admin` + jo password set kiya tha
3. **Websites → Create Website**:
   - Package: `Default`
   - Owner: `admin`
   - Domain: `yourdomain.com` (apna asli domain)
   - Email: apna email
   - PHP: koi bhi (hum Node.js use karenge, PHP matter nahi karta)
4. **Create Website** dabao

---

## STEP 5: Domain ko Server se jodo (DNS)

Apne domain provider (GoDaddy / Hostinger / Namecheap) ke DNS settings mein:

| Type | Name | Value |
|---|---|---|
| A | `@` | `YOUR_SERVER_IP` |
| A | `www` | `YOUR_SERVER_IP` |

⏳ DNS propagate hone mein 10 min – 24 hour lag sakte hain. Check: [dnschecker.org](https://dnschecker.org)

---

## STEP 6: Node.js 20 Install karo

SSH mein wapas jao:

```bash
ssh -i hlj-key.pem ubuntu@YOUR_SERVER_IP
sudo su -
```

Node.js 20 install:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs
node -v    # v20.x dikhna chahiye
npm -v
```

PM2 install (app ko hamesha chalata rakhta hai):

```bash
npm install -g pm2
```

---

## STEP 7: Git Clone karke Website Setup karo

```bash
# Website ke folder mein jao
cd /home/yourdomain.com

# Purana public_html hatao aur repo clone karo
rm -rf public_html
git clone https://github.com/prashantkumarupd2004/jwellry.git public_html
cd public_html

# Dependencies install karo
npm ci

# Environment file banao
cp .env.example .env
nano .env
```

`.env` mein ye value check/set karo, phir `Ctrl+X → Y → Enter` se save karo:

```
NEXT_PUBLIC_CONTACT_WHATSAPP=919199985111
```

Ab production build banao:

```bash
npm run build
```

⏳ Build 2–5 minute lega. `✓ Compiled successfully` dikhna chahiye.

---

## STEP 8: PM2 se App chalao

```bash
cd /home/yourdomain.com/public_html

# App start karo port 3000 par
pm2 start npm --name "hlj-website" -- start

# Status check karo — "online" dikhna chahiye
pm2 status

# Server reboot par auto-start ke liye
pm2 startup systemd
# (jo command output mein aaye, use copy-paste karke chalao)
pm2 save
```

Test karo: browser mein `http://YOUR_SERVER_IP:3000` kholo — website dikhni chahiye ✅

---

## STEP 9: OpenLiteSpeed Reverse Proxy lagao (Domain → Next.js)

Ab domain ko port 3000 wali app se jodna hai:

1. CyberPanel kholo: `https://YOUR_SERVER_IP:8090`
2. **Websites → List Websites → yourdomain.com → Manage**
3. Neeche **Rewrite Rules** section kholo
4. Ye rules paste karo aur **Save**:

```
REWRITERULE ^(.*)$ HTTP://127.0.0.1:3000/$1 [P,L]
```

**Agar upar wala kaam na kare** to ye advanced method use karo:

1. OpenLiteSpeed WebAdmin kholo: `https://YOUR_SERVER_IP:7080`
   *(password ke liye SSH mein: `cat /usr/local/lsws/adminpasswd` ya `/usr/local/lsws/admin/misc/admpass.sh` se naya set karo)*
2. **Virtual Hosts → yourdomain.com → External App → Add**:
   - Type: `Web Server`
   - Name: `nextjs`
   - Address: `127.0.0.1:3000`
   - Max Connections: `100`
3. **Context → Add**:
   - Type: `Proxy`
   - URI: `/`
   - Web Server: `nextjs`
4. **Graceful Restart** dabao (upar right corner)

Ab `http://yourdomain.com` par website khulni chahiye ✅

---

## STEP 10: Free SSL (HTTPS) lagao

1. CyberPanel → **SSL → Manage SSL**
2. Website select karo: `yourdomain.com`
3. **Issue SSL** dabao (Let's Encrypt free SSL)

⚠️ **Note:** SSL tabhi issue hoga jab DNS (Step 5) propagate ho chuka ho.

Ab `https://yourdomain.com` live hai! 🎉

---

## 🔄 Website UPDATE kaise kare (naya code push karne ke baad)

Jab bhi GitHub par naya code push karo, server par ye chalao:

```bash
ssh -i hlj-key.pem ubuntu@YOUR_SERVER_IP
sudo su -
cd /home/yourdomain.com/public_html
git pull origin main
npm ci
npm run build
pm2 restart hlj-website
```

**Shortcut:** ek update script bana lo:

```bash
cat > /root/update-site.sh << 'EOF'
#!/bin/bash
cd /home/yourdomain.com/public_html
git pull origin main
npm ci
npm run build
pm2 restart hlj-website
echo "✅ Website updated!"
EOF
chmod +x /root/update-site.sh
```

Phir har baar sirf ye chalana hoga:

```bash
/root/update-site.sh
```

---

## 🛠️ Useful Commands

| Kaam | Command |
|---|---|
| App status dekho | `pm2 status` |
| Live logs dekho | `pm2 logs hlj-website` |
| App restart | `pm2 restart hlj-website` |
| App stop | `pm2 stop hlj-website` |
| Server RAM/CPU | `htop` (install: `apt install htop`) |
| Disk space | `df -h` |

---

## ❗ Common Problems & Fixes

| Problem | Fix |
|---|---|
| Website nahi khul rahi | `pm2 status` check karo — app "online" hai? `pm2 logs` mein error dekho |
| Build fail (out of memory) | Instance chhota hai — swap add karo: `fallocate -l 2G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile` |
| SSL issue nahi ho raha | DNS propagate hua hai check karo ([dnschecker.org](https://dnschecker.org)) |
| 503 error domain par | Reverse proxy (Step 9) dobara check karo, OpenLiteSpeed restart karo |
| `git pull` permission error | `cd /home/yourdomain.com/public_html && git config --global --add safe.directory $(pwd)` |
| Port 3000 already in use | `pm2 delete all` phir Step 8 dobara |

---

## 💰 Approx Monthly Cost

| Item | Cost |
|---|---|
| EC2 t3.medium | ~$30/month (~₹2,500) |
| EC2 t3.small (budget) | ~$15/month (~₹1,250) |
| Elastic IP (attached) | Free |
| SSL | Free (Let's Encrypt) |
| CyberPanel | Free |

> 💡 **Tip:** Agar budget kam hai to AWS Lightsail ($10–20/month fixed) ya AWS Amplify (pay-per-use, no server management) bhi options hain.

---

*Guide generated for HLJ Group website deployment — July 2026*
