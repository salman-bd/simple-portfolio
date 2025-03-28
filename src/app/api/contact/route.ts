import { NextResponse } from "next/server"
import { Resend } from "resend"
import UserConfirmationEmail from "@/emails/user-confirmation-email"
import AdminNotificationEmail from "@/emails/admin-notification-email"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

// The admin email where notifications will be sent
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "abusalman.device@gmail.com"

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "Portfolio <contact@cscsylhet.com>",
      to: email,
      subject: "Thank you for contacting Shahed Imran",
      react: UserConfirmationEmail({ name, email, message }),
    })

    // Send notification email to the admin
    const adminEmailResponse = await resend.emails.send({
      from: "Portfolio Contact <contact@cscsylhet.com>",
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      react: AdminNotificationEmail({ name, email, phone, subject, message }),
    })

    if (!userEmailResponse.data && !adminEmailResponse.data) {
      return NextResponse.json({ success: false, message: 'Message sending failed'}, { status: 403 })
    }
    return NextResponse.json({ success: true, message: "Your Message Sending Successful!" })
    
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

