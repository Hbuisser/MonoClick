import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Send to n8n webhook
    try {
      const webhookPayload = {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        website: body.website || '',
        valuation: {
          pointEstimate: body.valuation?.pointEstimate,
          lowEstimate: body.valuation?.lowEstimate,
          highEstimate: body.valuation?.highEstimate,
          multiple: body.valuation?.multiple
        },
        // Additional context data
        company: body.company,
        phone: body.phone,
        businessType: body.businessType,
        geography: body.geography,
        arr: body.arr,
        grossMargin: body.grossMargin,
        timestamp: new Date().toISOString(),
        utmParams: body.utmParams
      }

      const webhookResponse = await fetch('https://n8n.srv970538.hstgr.cloud/webhook/f5ca5405-cd74-41d3-bf4a-9ebf9b862891', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload),
      })

      if (!webhookResponse.ok) {
        console.error('Webhook failed:', webhookResponse.status, await webhookResponse.text())
      } else {
        console.log('Webhook sent successfully')
      }
    } catch (webhookError) {
      // Don't fail the main request if webhook fails
      console.error('Error sending webhook:', webhookError)
    }

    // In a real implementation, you would also:
    // 1. Validate the data
    // 2. Save to your database
    // 3. Send to your CRM (HubSpot, Salesforce, etc.)
    // 4. Trigger email sequences
    // 5. Send to analytics platforms

    // Example of what you might do:
    // await saveToCRM(body)
    // await sendToEmailSequence(body)
    // await trackAnalytics(body)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    )
  }
}

// Example function for CRM integration (commented out)
/*
async function saveToCRM(leadData: any) {
  // Example HubSpot integration
  const response = await fetch('https://api.hubapi.com/contacts/v1/contact/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: [
        {
          property: 'email',
          value: leadData.email
        },
        {
          property: 'firstname',
          value: leadData.fullName.split(' ')[0]
        },
        {
          property: 'lastname',
          value: leadData.fullName.split(' ').slice(1).join(' ')
        },
        {
          property: 'company',
          value: leadData.company
        },
        {
          property: 'phone',
          value: leadData.phone
        },
        {
          property: 'website',
          value: leadData.website
        },
        // Custom properties for SaaS metrics
        {
          property: 'arr',
          value: leadData.arr
        },
        {
          property: 'business_type',
          value: leadData.businessType
        },
        {
          property: 'estimated_valuation',
          value: leadData.valuation?.pointEstimate
        }
      ]
    })
  })

  if (!response.ok) {
    throw new Error('Failed to save to CRM')
  }
}
*/
