'use client'

import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "UI Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Frontend Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Backend Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Testing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary-dark">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 pb-4 border-b-2 border-white">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-secondary-dark border-4 border-white hover:border-orange-500 hover:bg-white group transition-colors duration-300 cursor-pointer"
            >
              <CardContent className="p-8 hover:text-violet-950">
                <h4 className="text-3xl font-heading font-semibold mb-4 group-hover:text-foreground">
                  {service.title}
                </h4>
                <p className="group-hover:text-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

