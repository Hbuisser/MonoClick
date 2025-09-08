# SaaS Valuation Widget

A modern, animated lead magnet component that calculates SaaS company valuations and captures leads.

## Features

- **Multi-step form** with progress indicator
- **Framer Motion animations** for smooth transitions
- **Real-time validation** with Zod schemas
- **Confetti celebration** on completion
- **Responsive design** with Tailwind CSS
- **Lead capture** with API integration
- **Calendly integration** for booking calls

## Usage

### As a standalone page

The widget is already implemented at `/valuation` with full page layout, hero section, and FAQ.

### As a reusable component

```tsx
import { SaasValuationWidget } from '@/components/SaasValuationWidget'

export default function MyPage() {
  const handleComplete = (leadData: any) => {
    console.log('Lead captured:', leadData)
    // Handle lead data as needed
  }

  return (
    <div className="container mx-auto py-8">
      <SaasValuationWidget
        className="max-w-2xl mx-auto"
        onComplete={handleComplete}
      />
    </div>
  )
}
```

## Props

- `className?: string` - Additional CSS classes
- `onComplete?: (data: any) => void` - Callback when form is completed

## Form Steps

1. **Business Basics** (required)
   - Business type
   - Geography
   - Annual Recurring Revenue (ARR)
   - Gross margin

2. **Growth & Retention** (optional)
   - MRR growth rate
   - Logo churn rate
   - Net Revenue Retention (NRR)
   - ARPU/ACV
   - Customer count
   - Sales model

3. **Lead Capture** (required)
   - Full name
   - Work email (validated against free domains)
   - Phone (optional)
   - Company (optional)
   - Website (optional)
   - Consent checkbox

4. **Results**
   - Valuation range display
   - Key insights
   - CTA to book call

## Valuation Model

The valuation is calculated using:

- **Base multiples** by ARR tier (2x-6x)
- **Business type modifiers** (AI SaaS gets +0.5x premium)
- **Growth adjustments** based on MRR growth rate
- **Retention modifiers** based on churn and NRR
- **Quality factors** like gross margins and geography
- **Sales model considerations**

## API Integration

Leads are automatically sent to `/api/lead` endpoint. Customize the API route to integrate with your CRM:

```typescript
// app/api/lead/route.ts
export async function POST(request: NextRequest) {
  const leadData = await request.json()

  // Send to your CRM
  await sendToHubSpot(leadData)
  await sendToSlack(leadData)

  return NextResponse.json({ success: true })
}
```

## Styling

The component uses your existing design system:
- Tailwind CSS classes
- Custom gradient utilities (`bg-gradient-brand`, `text-gradient`)
- Dark theme with zinc color palette
- Responsive breakpoints

## Dependencies

- `framer-motion` - Animations
- `react-hook-form` - Form handling
- `zod` - Validation
- `react-confetti` - Celebration effect
- `@radix-ui` components - UI primitives
