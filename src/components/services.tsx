"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Figma, FileCode, Globe, Server, Palette, Database, GitBranch, Layers } from "lucide-react"

const skills = [
  {
    name: "JavaScript",
    progress: 90,
    color: "#F7DF1E",
    icon: Code,
  },
  {
    name: "TypeScript",
    progress: 80,
    color: "#007ACC",
    icon: FileCode,
  },
  {
    name: "React",
    progress: 85,
    color: "#61DAFB",
    icon: Globe,
  },
  {
    name: "Next.js",
    progress: 75,
    color: "#000000",
    icon: Layers,
  },
  {
    name: "Node.js",
    progress: 70,
    color: "#339933",
    icon: Server,
  },
  {
    name: "UI/UX Design",
    progress: 90,
    color: "#06B6D4",
    icon: Figma,
  },
  {
    name: "HTML",
    progress: 95,
    color: "#E34F26",
    icon: Globe,
  },
  {
    name: "CSS",
    progress: 90,
    color: "#1572B6",
    icon: Palette,
  },
  {
    name: "Git",
    progress: 80,
    color: "#F05032",
    icon: GitBranch,
  },
  {
    name: "Docker",
    progress: 60,
    color: "#2496ED",
    icon: Database,
  },
]

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section id="skills" className="pt-20 bg-gradient-to-b from-lime-900 to-lime-950 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 text-white">
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto bg-amber-500 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.5),0_0_50px_rgba(132,204,22,0.3)] hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold text-lime-950">Skills</h2>
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border-2 border-lime-500"
            style={{ translateX: "-50%", translateY: "-50%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {skills.slice(0, 10).map((skill, index) => {
              const angle = (index / 10) * 2 * Math.PI
              const x = Math.cos(angle) * 40
              const y = Math.sin(angle) * 40
              return (
                <motion.div
                  key={index}
                  className="absolute w-14 h-14 bg-lime-950 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:shadow-[0_0_25px_rgba(132,204,22,0.5)] transition-shadow cursor-pointer"
                  style={{
                    left: `${50 + x}%`,
                    top: `${50 + y}%`,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  whileHover={{ scale: 1.2 }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        <div className="space-y-8 pt-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <span>{skill.progress}%</span>
              </div>
              <div className="relative h-2 bg-lime-800 rounded-full overflow-hidden">
                <div
                  className={`absolute h-full transition-all duration-500 ease-in-out ${
                    hoveredSkill === skill.name ? "animate-pulse" : ""
                  }`}
                  style={{ width: `${skill.progress}%`, backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

