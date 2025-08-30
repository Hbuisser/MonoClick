import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'

// Rate limiting storage (in production, use Redis or a database)
const submissionCache = new Map<string, number>()

// Simple rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const lastSubmission = submissionCache.get(ip) || 0
  const timeDiff = now - lastSubmission

  // Allow one submission per minute
  if (timeDiff < 60000) {
    return false
  }

  submissionCache.set(ip, now)
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get the client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute before submitting again.' },
        { status: 429 }
      )
    }

    // Parse and validate the request body
    const body = await request.json()
    const result = contactFormSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.flatten() },
        { status: 400 }
      )
    }

    const { honeypot, ...formData } = result.data

    // Check honeypot field for bot detection
    if (honeypot) {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status:400 }
      )
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notifications
    // 3. Integrate with CRM (HubSpot, Salesforce, etc.)
    // 4. Send to Slack/Discord for team notifications

    // For now, we'll just log the submission
    console.log('Contact form submission:', {
      ...formData,
      submittedAt: new Date().toISOString(),
      ip,
    })

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
