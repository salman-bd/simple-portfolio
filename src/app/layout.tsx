import { Poppins, Rubik } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${rubik.variable} font-sans bg-indigo-950 text-white`}>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}

