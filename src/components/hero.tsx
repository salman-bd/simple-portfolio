import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Facebook } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 ">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white">
                Hi, I&apos;m <span className="text-primary-secondary">Shahed</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white">
                I&apos;m a{" "}
                <span className="text-orange-500 inline-flex flex-col h-[1.25em] overflow-hidden">
                  <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                    <li>Web Developer</li>
                    <li>Frontend Designer</li>
                    <li>UI/UX Designer</li>
                    <li>Full-Stack Developer</li>
                    <li aria-hidden="true">Web Developer</li>
                  </ul>
                </span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Passionate about creating beautiful, functional, and user-centered digital experiences. With 5 years of
                experience in the field. I am always looking for new and innovative ways to bring my clients&apos; visions to
                life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-center lg:justify-start gap-4">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Github, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary-secondary text-primary-secondary hover:bg-orange-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-violet-800 text-white transform hover:scale-105 transition-all duration-200"
                >
                  Hire Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-secondary text-white hover:bg-orange-600 transform hover:scale-105 transition-all duration-200"
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <Image
                src="/shahed-00.png"
                alt="Profile"
                fill
                className="object-cover rounded-full border-4 border-primary-secondary shadow-[0_0_25px_rgba(241,90,36,0.5),0_0_50px_rgba(241,90,36,0.3)] animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

