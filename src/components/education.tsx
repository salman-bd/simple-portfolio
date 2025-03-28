import { Card, CardContent } from "@/components/ui/card"

const educationData = [
  {
    year: "2023",
    title: "AI Nanodegree",
    description:
      "Learned about neural networks, deep learning, and reinforcement learning. Built projects such as an image classifier, a dog breed identifier, and a game-playing agent.",
  },
  {
    year: "2022",
    title: "Data Science Nanodegree",
    description:
      "Learned about data analysis, data visualization, and machine learning. Built projects such as a customer churn prediction model, a stock price predictor, and a recommendation system.",
  },
  {
    year: "2021",
    title: "Full Stack Web Development",
    description:
      "Learned about front-end and back-end web development. Built projects such as a social media app, an e-commerce website, and a blog.",
  },
  {
    year: "2020",
    title: "Bachelor of Science in Computer Science",
    description:
      "Majored in Computer Science with a focus on software engineering. Took courses in data structures, algorithms, and object-oriented programming.",
  },
]

const Education = () => {
  return (
    <section id="education" className="bg-gradient-to-b from-lime-900 to-lime-950">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 pb-4 text-amber-500 border-b-2 border-lime-500">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {educationData.map((item, index) => (
            <Card
              key={index}
              className="bg-lime-950 border-2 border-amber-500 hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-24 bg-amber-500 text-lime-950 text-xl text-center py-2 rounded-tr-3xl font-bold">
                  {item.year}
                </div>
                <h3 className="text-xl font-heading font-bold text-center pb-4 text-lime-300 border-b-2 border-lime-700">
                  {item.title}
                </h3>
                <p className="text-lime-100 text-justify leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

