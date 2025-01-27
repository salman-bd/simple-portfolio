import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Education />
      <Skills />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  )
}

