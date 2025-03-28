// components/hero.tsx
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Facebook, Twitter } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-lime-900 to-lime-950">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white">
                Hi, I&apos;m <span className="text-amber-500">Shahed</span>
              </h1>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white flex flex-wrap items-center justify-center lg:justify-start gap-x-3">
                I&apos;m a{" "}
                <div className="mt-2 lg:mt-0 w-auto inline-block">
                  {/* Animated text container with glass effect */}
                  <div className="relative rounded-lg p-1 bg-gradient-to-r from-lime-500 to-amber-500 shadow-lg">
                    <div className="relative bg-lime-950/90 backdrop-blur-sm rounded-md px-4 py-2 overflow-hidden">
                      {/* Animated dots in corners */}
                      <span className="absolute top-1 left-1 w-1.5 h-1.5 bg-lime-400 rounded-full animate-ping"></span>
                      <span
                        className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></span>

                      {/* Text animation wrapper */}
                      <div className="h-[1.2em] w-[180px] sm:w-[220px] overflow-hidden">
                        <ul className="animate-text-slide text-center [&_li]:block">
                          <li className="font-bold text-amber-400 drop-shadow-md">Web Developer</li>
                          <li className="font-bold text-lime-400 drop-shadow-md">Frontend Designer</li>
                          <li className="font-bold text-amber-400 drop-shadow-md">UI/UX Designer</li>
                          <li className="font-bold text-lime-400 drop-shadow-md">Full-Stack Developer</li>
                          <li aria-hidden="true" className="font-bold text-amber-400 drop-shadow-md">
                            Web Developer
                          </li>
                        </ul>
                      </div>

                      {/* Light reflection effect */}
                      <div className="absolute inset-0 overflow-hidden rounded-md pointer-events-none">
                        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent absolute -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </h2>

              <p className="text-lime-100 text-justify max-w-2xl mx-auto lg:mx-0">
                Passionate about creating beautiful, functional, and user-centered digital experiences. With 5 years of
                experience in the field. I am always looking for new and innovative ways to bring my clients&apos;
                visions to life.
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
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-lime-500 text-lime-500 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white transform hover:scale-105 transition-all duration-200"
                >
                  Hire Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-lime-500 text-lime-100 bg-lime-800  hover:bg-lime-700 hover:text-white transform hover:scale-105 transition-all duration-200"
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-amber-500 rounded-3xl animate-[spin_20s_linear_infinite] opacity-70 blur-md"></div>
              <Image
                src="/shahed-00.png"
                alt="Profile"
                fill
                className="object-cover rounded-3xl border-4 border-amber-500 shadow-[0_0_25px_rgba(132,204,22,0.5),0_0_50px_rgba(245,158,11,0.3)] z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

