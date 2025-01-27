"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary-dark">
      <div className="container max-w-2xl">
        <h2 className="text-4xl font-heading font-bold text-center text-orange-500 border-b-2 border-primary-secondary mb-16 pb-4">
          Contact <span className="text-primary-tertiary">Me</span>
        </h2>
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border-2 border-orange-500 rounded-lg placeholder:text-primary-tertiary"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-transparent border-2 border-orange-500 rounded-lg placeholder:text-primary-tertiary"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent border-2 border-orange-500 rounded-lg placeholder:text-primary-tertiary"
            />
            <Input
              type="text"
              placeholder="Subject"
              className="bg-transparent border-2 border-orange-500 rounded-lg placeholder:text-primary-tertiary"
            />
          </div>
          <Textarea
            placeholder="Your Message"
            className="min-h-[160px] bg-transparent border-2 border-orange-500 rounded-lg placeholder:text-primary-tertiary"
          />
          <div className="flex justify-center">
            <Button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white min-w-[200px]">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

