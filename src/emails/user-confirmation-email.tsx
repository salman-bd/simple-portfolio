import { Body, Container, Head, Heading, Html, Preview, Section, Text, Button, Hr } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface UserConfirmationEmailProps {
  name: string
  email: string
  message: string
}

export const UserConfirmationEmail = ({
  name = "Visitor",
  message = "Thank you for reaching out!",
}: UserConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Shahed Imran</Preview>
      <Tailwind>
        <Body className="bg-violet-950 font-sans">
          <Container className="max-w-2xl mx-auto p-8 bg-violet-950 text-white border-2 border-orange-600 rounded-lg shadow-lg">
            <Heading className="text-3xl font-bold text-orange-500 text-center mb-4">
              Thank You for Reaching Out!
            </Heading>

            <Section className="bg-violet-900 p-6 rounded-lg border border-orange-600 mb-6">
              <Text className="text-lg mb-4">Hello {name},</Text>
              <Text className="mb-4">
                Thank you for contacting me through my portfolio website. I&apos;ve received your message and will get back
                to you as soon as possible.
              </Text>
              <Text className="mb-4">Here&apos;s a copy of your message:</Text>
              <Section className="bg-violet-950 p-4 rounded border border-orange-500 mb-4">
                <Text className="italic text-gray-300">&quot;{message}&quot;</Text>
              </Section>
              <Text>
                I typically respond within 24-48 hours. If your matter is urgent, please feel free to reach out to me
                directly.
              </Text>
            </Section>

            <Section className="text-center">
              <Button
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg"
                href={process.env.NEXT_PUBLIC_URL}
              >
                Visit My Portfolio
              </Button>
            </Section>

            <Hr className="border-t border-orange-600 my-6" />

            <Text className="text-sm text-center text-gray-300">
              © {new Date().getFullYear()} Shahed Imran. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default UserConfirmationEmail

