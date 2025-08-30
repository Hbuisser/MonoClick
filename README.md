# MonoClick.ai - AI Automation Agency Website

A production-ready marketing website for MonoClick, an AI automation agency specializing in B2B workflow automation solutions.

## 🚀 Features

- **Modern Design**: Clean, professional layout inspired by leftclick.ai with custom branding
- **Full-Stack**: Next.js 14 App Router with TypeScript and Tailwind CSS
- **Component Library**: shadcn/ui components with custom styling
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter cards, and JSON-LD
- **Contact Form**: Server-side validation with Zod, rate limiting, and success states
- **Animations**: Smooth Framer Motion animations with reduced motion support
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **Performance**: Optimized images, fonts, and Core Web Vitals

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Fonts**: Inter (body) + Outfit (headings)

## 📁 Project Structure

```
├── app/
│   ├── (marketing)/           # Marketing pages group
│   │   ├── page.tsx          # Home page
│   │   ├── work/             # Case studies
│   │   ├── services/         # Service offerings
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact form
│   │   ├── privacy/          # Privacy policy
│   │   └── legal/            # Terms of service
│   ├── api/contact/          # Contact form API endpoint
│   ├── layout.tsx            # Root layout
│   ├── sitemap.ts            # Dynamic sitemap
│   ├── robots.ts             # Robots.txt
│   └── opengraph-image.tsx   # OG image generation
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── site-header.tsx       # Navigation header
│   ├── site-footer.tsx       # Footer
│   ├── hero.tsx             # Hero section
│   ├── contact-form.tsx     # Contact form with validation
│   └── [other-components]   # Various page sections
├── lib/
│   ├── utils.ts             # Utility functions
│   ├── seo.ts               # SEO configuration
│   ├── schema-org.ts        # JSON-LD schemas
│   └── validations.ts       # Zod schemas
└── styles/
    └── globals.css          # Global styles + custom CSS
```

## 🎨 Design System

### Colors
- **Background**: `zinc-950` / `zinc-900`
- **Text**: `zinc-100` / `zinc-300` / `zinc-400`
- **Primary**: `#4F46E5` (indigo-600)
- **Accent**: `#22D3EE` (cyan-400)
- **Gradient**: Indigo to Cyan

### Typography
- **Body**: Inter (via next/font)
- **Headings**: Outfit (via next/font)

### Components
- **Cards**: `rounded-2xl` with soft shadows
- **Buttons**: Gradient primary, outline secondary
- **Animations**: Subtle fades, slides, and hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+
- pnpm (recommended) or npm

### Installation

1. **Clone and install dependencies**:
```bash
cd MonoClick
pnpm install
```

2. **Start the development server**:
```bash
pnpm dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start

# Type checking
pnpm type-check

# Linting
pnpm lint

# Format code
pnpm format
```

## 📝 Content Management

### Pages
All page content is defined in the respective page components:
- **Home**: `app/(marketing)/page.tsx`
- **Services**: `app/(marketing)/services/page.tsx`
- **Case Studies**: `app/(marketing)/work/page.tsx`
- **About**: `app/(marketing)/about/page.tsx`
- **Contact**: `app/(marketing)/contact/page.tsx`

### SEO Configuration
Update SEO settings in `lib/seo.ts`:
- Site name, description, and URL
- Social media handles
- Keywords
- Open Graph images

### Contact Form
The contact form submits to `/api/contact` with:
- **Validation**: Zod schema validation
- **Rate Limiting**: 1 submission per minute per IP
- **Bot Protection**: Honeypot field
- **Success State**: Dialog with confirmation

To integrate with your CRM or email service, modify `app/api/contact/route.ts`.

## 🎯 Customization

### Branding
1. **Logo**: Update the logo component in `components/site-header.tsx`
2. **Colors**: Modify the color scheme in `tailwind.config.ts`
3. **Content**: Update copy throughout the components
4. **Images**: Add your images to the `public/` directory

### Adding New Pages
1. Create a new directory in `app/(marketing)/`
2. Add a `page.tsx` file
3. Update navigation in `components/site-header.tsx`
4. Add to sitemap in `app/sitemap.ts`

### Contact Form Integration
To connect the contact form to your services:

1. **Email Service** (e.g., SendGrid, Resend):
```typescript
// In app/api/contact/route.ts
import { sendEmail } from '@/lib/email'

await sendEmail({
  to: 'hello@monoclick.ai',
  subject: 'New Contact Form Submission',
  data: formData
})
```

2. **CRM Integration** (e.g., HubSpot):
```typescript
// In app/api/contact/route.ts
import { createContact } from '@/lib/hubspot'

await createContact(formData)
```

3. **Database Storage**:
```typescript
// In app/api/contact/route.ts
import { db } from '@/lib/database'

await db.contact.create({ data: formData })
```

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Database (if using)
DATABASE_URL="your_database_url"

# Email service (if using)
SENDGRID_API_KEY="your_sendgrid_key"
RESEND_API_KEY="your_resend_key"

# CRM integration (if using)
HUBSPOT_ACCESS_TOKEN="your_hubspot_token"

# Analytics (if using)
NEXT_PUBLIC_GA_ID="your_google_analytics_id"
```

## 📊 Performance

The website is optimized for Core Web Vitals:
- **LCP**: Optimized with next/font and image optimization
- **CLS**: Stable layouts with proper sizing
- **FID**: Minimal JavaScript with SSR/SSG where possible

### Lighthouse Scores
Target scores (all ≥95):
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🚢 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main
3. Add environment variables in Vercel dashboard

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For questions or support:
- Email: hello@monoclick.ai
- Documentation: This README
- Issues: GitHub Issues tab

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
