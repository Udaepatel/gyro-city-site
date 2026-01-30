import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validate required fields
    const required = ['firstName', 'lastName', 'email', 'phone', 'eventDateTime', 'guestCount']
    for (const field of required) {
      if (!formData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Format the email content
    const emailContent = `
New Catering Lead from Gyro City Website
=========================================

CONTACT INFORMATION:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
${formData.companyName ? `- Company: ${formData.companyName}` : ''}

EVENT DETAILS:
- Date & Time: ${new Date(formData.eventDateTime).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })}
- Guest Count: ${formData.guestCount}
${formData.address ? `- Delivery Address: ${formData.address}` : ''}

NEXT STEPS:
1. Call the client at ${formData.phone}
2. Email quote to ${formData.email}
3. Follow up within 24 hours

---
Lead submitted on: ${new Date().toLocaleString()}
Source: Gyro City Website Lead Form
`

    // Send email notification
    // TODO: Integrate with your email service (SendGrid, Resend, etc.)
    // For now, we'll just log it
    console.log('New Lead Submission:', emailContent)

    // You can also save to database here if needed
    // await prisma.lead.create({ data: formData })

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead submitted successfully',
        data: formData 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
