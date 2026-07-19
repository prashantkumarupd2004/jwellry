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
1. Near SBI, Sonapatti, Bhagalpur City, Bihar - 812002 (Est. 1987 — flagship) — [Map](https://maps.app.goo.gl/fK76WchvUkweZRL77)
2. Ground Floor, Jaiuriya Tower, Kharmanchak, D.N. Singh Road, Bhagalpur, Bihar - 812002
3. Tilkamanjhi Police Line, Lalbagh, Nawabbag Colony, Bhagalpur, Bihar - 812001 — [Map](https://maps.app.goo.gl/cBfzA8c3czquSaMQA)
4. Court Road, Near VIP Chowk, B. Deoghar, Jharkhand - 814112 — [Map](https://maps.app.goo.gl/SfwBA3DrNZrFTMm78)
5. Rajni Chowk, Navratan Hatta, Bhatta Bazar, Purnia, Bihar - 854301 — [Map](https://maps.app.goo.gl/yiKBYj8FRyL9fF9v5)
6. Sonapatti Branch 2, Bhagalpur, Bihar - 812002

**Hours**: Mon–Sun, 10:00 AM – 9:00 PM

## 📄 License

This project is proprietary software owned by Hariom LaxmiNarayan Jewellers.
