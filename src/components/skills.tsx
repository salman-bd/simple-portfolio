"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Html5, Css3, Javascript, ReactLogo, Python, Nodejs } from "styled-icons/boxicons-logos"

const skills = [
  { name: "HTML", icon: Html5, color: "#f26b20", progress: 98 },
  { name: "CSS", icon: Css3, color: "#6d83ff", progress: 92 },
  { name: "JavaScript", icon: Javascript, color: "#ffd700", progress: 80 },
  { name: "React", icon: ReactLogo, color: "#00ffff", progress: 75 },
  { name: "Python", icon: Python, color: "#ff8c00", progress: 90 },
  { name: "Node.js", icon: Nodejs, color: "#90ee90", progress: 65 },
]

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="pt-20 bg-gradient-to-b from-violet-950 overflow-hidden">
      <div className="container  max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 text-white">
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto bg-primary-secondary rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(241,90,36,0.5),0_0_50px_rgba(241,90,36,0.3)] hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold text-white">Skills</h2>
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border-2 border-primary-secondary"
            style={{ translateX: "-50%", translateY: "-50%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * 2 * Math.PI
              const x = Math.cos(angle) * 40
              const y = Math.sin(angle) * 40
              return (
                <motion.div
                  key={index}
                  className="absolute w-14 h-14 bg-violet-950 border-2 border-primary-secondary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(241,90,36,0.5)] hover:shadow-[0_0_25px_rgba(241,90,36,0.5)] transition-shadow cursor-pointer"
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
                  <skill.icon size={32} color={skill.color} />
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
                  <skill.icon size={24} color={skill.color} />
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <span>{skill.progress}%</span>
              </div>
              <div className="relative h-2 bg-violet-800">
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

