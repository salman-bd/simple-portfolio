import Link from "next/link"
import { Github, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className=" bg-gradient-to-b from-violet-950 py-12">
      <div className="container flex flex-col items-center gap-8">
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
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary-secondary text-primary-secondary hover:bg-primary-secondary hover:text-white transition-colors"
            >
              <social.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li>
              <Link href="#" className="hover:text-primary-secondary transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary-secondary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary-secondary transition-colors">
                About Me
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary-secondary transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary-secondary transition-colors">
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex justify-between gap-6">
          <p className="text-sm text-muted-foreground">&copy; Shahed Imran</p>
          <p className="text-sm text-muted-foreground">Developed by: Md. Abu Salman</p>
        </div>
        
      </div>
    </footer>
  )
}

