import { Body, Container, Head, Heading, Html, Preview, Section, Text, Button, Hr, Link } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface AdminNotificationEmailProps {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export const AdminNotificationEmail = ({
  name = "Visitor",
  email = "abusalman.device@gmail.com",
  phone = "Not provided",
  subject = "Contact Form Submission",
  message = "Hello, I'd like to connect.",
}: AdminNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Tailwind>
        <Body className="bg-lime-950 font-sans">
          <Container className="max-w-2xl mx-auto p-8 bg-lime-950 text-white border-2 border-amber-500 rounded-lg shadow-lg">
            <Heading className="text-3xl font-bold text-amber-500 text-center mb-4">
              New Contact Form Submission
            </Heading>

            <Section className="bg-lime-900 p-6 rounded-lg border border-amber-500 mb-6">
              <Text className="text-lg font-semibold mb-4">
                You&apos;ve received a new message from your portfolio contact form.
              </Text>

              <Section className="mb-4">
                <Text className="font-bold text-amber-400 mb-1">Name:</Text>
                <Text className="mb-3">{name}</Text>

                <Text className="font-bold text-amber-400 mb-1">Email:</Text>
                <Link href={`mailto:${email}`} className="text-lime-300 underline mb-3">
                  {email}
                </Link>

                <Text className="font-bold text-amber-400 mb-1">Phone:</Text>
                <Text className="mb-3">{phone}</Text>

                <Text className="font-bold text-amber-400 mb-1">Subject:</Text>
                <Text className="mb-3">{subject}</Text>

                <Text className="font-bold text-amber-400 mb-1">Message:</Text>
                <Section className="bg-lime-950 p-4 rounded border border-amber-400 mb-4">
                  <Text className="italic text-lime-200">&quot;{message}&quot;</Text>
                </Section>
              </Section>

              <Text className="text-sm text-lime-300">This message was sent on {new Date().toLocaleString()}.</Text>
            </Section>

            <Section className="text-center">
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-lime-950 font-bold py-3 px-6 rounded-lg"
                href={`mailto:${email}?subject=Re: ${subject}`}
              >
                Reply to {name}
              </Button>
            </Section>

            <Hr className="border-t border-amber-500 my-6" />

            <Text className="text-sm text-center text-lime-300 mt-6">
              © {new Date().getFullYear()} Shahed Imran. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default AdminNotificationEmail

