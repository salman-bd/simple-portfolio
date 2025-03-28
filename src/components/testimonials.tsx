import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    text: "This is a great product! I highly recommend it to anyone looking for a solution to their problem.",
    image: "/portfolio-shahed-t1.jpg?height=150&width=150",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director",
    text: "I was skeptical at first, but this product exceeded my expectations. It's easy to use and delivers amazing results.",
    image: "/portfolio-shahed-t2.jpg?height=150&width=150",
  },
  {
    name: "Peter Jones",
    role: "Freelance Developer",
    text: "I've tried many similar products before, but this one is by far the best. It's worth every penny!",
    image: "/portfolio-shahed-t3.jpg?height=150&width=150",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-lime-900 to-lime-950 py-24">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 text-amber-500">
          What People <span className="text-lime-300">Say</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-amber-500 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-lime-500 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Card */}
                <Card className="bg-gradient-to-br from-lime-950 to-lime-900 border-none shadow-xl overflow-hidden transform transition-all duration-300 group-hover:translate-y-[-10px]">
                  <CardContent className="p-0">
                    {/* Top section with quote icon */}
                    <div className="bg-amber-500 p-4 flex justify-end">
                      <Quote className="w-8 h-8 text-lime-950" />
                    </div>

                    {/* Content */}
                    <div className="p-6 text-center">
                      <div className="flex flex-col items-center">
                        {/* Image */}
                        <div className="relative w-20 h-20 -mt-16 mb-4 rounded-full overflow-hidden border-4 border-lime-500 shadow-lg">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                          ))}
                        </div>

                        {/* Text */}
                        <p className="text-lime-100 italic mb-6">&quot;{testimonial.text}&quot;</p>

                        {/* Name and role */}
                        <div className="mt-auto">
                          <h3 className="text-xl font-heading font-semibold text-amber-400">{testimonial.name}</h3>
                          <p className="text-sm text-lime-300">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

