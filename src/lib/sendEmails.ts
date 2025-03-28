// import { Resend } from "resend"


// const resend = new Resend(process.env.RESEND_API_KEY)
// const adminEmail = process.env.OWNER_EMAIL || "abusalmaln.device@gmail.com"



// export async function sendContactConfirmationEmail(name: string, email: string, message: string, date: string): Promise<ApiResponse> {
//   try {
//     await resend.emails.send({
//       from: `${siteName} <contact@cscsylhet.com>`,
//       to: [email],
//       subject: `Thank you for contacting to ${siteData?.name}, We have received your message`,
//       react: ContactConfirmationEmail( name, email, message, date, siteName, siteLogo ),
//     })
//     return { success: true, message: "Contact confirmation email sent successfully" }

//   } catch (error) {
//     console.error("Error sending contact confirmaiton email: ", error)
//     return { success: false, message: "Failed to send contact confirmaiton email" }
//   }
// }


// export async function sendContactNotificationEmail(name: string, email: string, subject: string, message: string, date: string): Promise<ApiResponse> {
//   try {
//     await resend.emails.send({
//       from: `${name} Contact <contact@cscsylhet.com>`,
//       to: adminEmail,
//       subject: `New Contact Form Submission from ${name}`,
//       react: ContactNotificationEmail(name, email, subject, message, date),
//     })
//     return { success: true, message: "Contact notification email sent successfully" }

//   } catch (error) {
//     console.error("Error sending contact nofification email: ", error)
//     return { success: false, message: "Failed to send contact notification email" }
//   }
// }


