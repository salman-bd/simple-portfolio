import Link from "next/link"
import { Linkedin, Github, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-lime-950 to-lime-900 py-12">
      <div className="container flex flex-col items-center gap-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex gap-4">
          {[
            { icon: Linkedin, href: "#" },
            { icon: Github, href: "#" },
            { icon: Facebook, href: "#" },
            { icon: Twitter, href: "#" },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-lime-500 text-lime-500 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-colors"
            >
              <social.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center gap-4 lg:gap-8 text-sm text-lime-100">
            <li>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                About Me
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-8">
          <p className="text-sm text-amber-300">&copy; Shahed Imran</p>
          <p className="text-sm text-amber-300">Developed by: Md. Abu Salman</p>
        </div>
      </div>
    </footer>
  )
}

