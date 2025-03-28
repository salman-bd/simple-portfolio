import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Web Development",
    description:
      "We create responsive and user-friendly websites tailored to your specific needs. Our expertise includes front-end and back-end development, ensuring a seamless online experience for your customers.",
  },
  {
    title: "Mobile App Development",
    description:
      "Reach your audience on the go with our mobile app development services. We build native iOS and Android apps that are both functional and visually appealing.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our design team crafts intuitive and engaging user interfaces that enhance the overall user experience. We focus on creating designs that are both aesthetically pleasing and easy to navigate.",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility and attract more organic traffic with our SEO optimization services. We employ proven strategies to boost your search engine rankings and drive qualified leads to your site.",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-lime-950 to-lime-900">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 pb-4 border-b-2 border-amber-500 text-amber-500">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-lime-950 border-4 border-lime-500 hover:border-amber-500 hover:bg-amber-500 group transition-colors duration-300 cursor-pointer"
            >
              <CardContent className="p-8 text-white group-hover:text-lime-950">
                <h4 className="text-3xl font-heading font-semibold mb-4 text-amber-400 group-hover:text-lime-950">
                  {service.title}
                </h4>
                <p className="group-hover:text-lime-950">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

