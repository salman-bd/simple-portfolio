import Contact from "@/components/contact";
import Education from "@/components/education";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";


export default function Home() {
  return (
    <main>
      <Hero />
      <Education />
      <Skills />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  )
}

