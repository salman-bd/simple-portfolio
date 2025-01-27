import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Imran",
    image: "/avatar.png?height=150&width=150",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    name: "Shahed",
    image: "/avatar.png?height=150&width=150",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    name: "Mohammad",
    image: "/avatar.png?height=150&width=150",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className=" bg-gradient-to-b from-violet-950">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 pb-4 text-primary-tertiary border-b-2 border-primary-secondary">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-secondary-dark border-4 border-orange-600 hover:shadow-[0_0_25px_rgba(241,90,36,0.5),0_0_50px_rgba(241,90,36,0.3)] transition-shadow ${
                index === 0 ? "hover:skew-x-[-2deg]" : index === 2 ? "hover:skew-x-[2deg]" : ""
              }`}
            >
              <CardContent className="p-6 flex flex-col items-center gap-4">
                <div className="relative w-40 h-40 transition-all duration-300 hover:w-44 hover:h-44">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="rounded-full border-4 border-primary-secondary shadow-[0_0_25px_rgba(241,90,36,0.5)]"
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold">{testimonial.name}</h3>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-secondary text-primary-secondary" />
                  ))}
                </div>
                <p className="text-sm text-justify">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

