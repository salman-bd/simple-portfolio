'use client'

import { Card, CardContent } from "@/components/ui/card"

const educationData = [
  {
    year: "2021",
    title: "High School",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    year: "2022",
    title: "University",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    year: "2023",
    title: "Internship",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    year: "2024",
    title: "Job",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
]

export function Education() {
  return (
    <section id="education" className="bg-gradient-to-b from-violet-900 to-violet-950 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 pb-4 text-orange-500 border-b-2 border-primary-secondary">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {educationData.map((item, index) => (
            <Card
              key={index}
              className="bg-secondary border-2 border-orange-500 hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-24 bg-primary-secondary text-white text-xl text-center py-2 rounded-tr-3xl">
                  {item.year}
                </div>
                <h3 className="text-xl font-heading font-bold text-center pb-4 text-primary-tertiary border-b-2 border-primary-secondary">
                  {item.title}
                </h3>
                <p className="text-white text-justify leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

