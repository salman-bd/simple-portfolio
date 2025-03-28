"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <button
      className={`fixed bottom-4 right-4 w-10 h-10 bg-amber-500 text-lime-950 rounded-full border-2 border-lime-500 flex items-center justify-center transition-all duration-300 hover:bg-lime-500 hover:text-amber-950 hover:shadow-lg z-50 ${
        isVisible ? "translate-y-0 opacity-100 visible" : "translate-y-4 opacity-0 invisible"
      }`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}

export default BackToTop

