"use client"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { Toaster, toast } from "sonner"
import { useState } from "react"

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      // console.log("Contact api response: ", result);

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }
      if (!result.success) {
        toast.error("Message sending failed!  Please try again later.", { duration: 4000 })
      }

      // Success
      toast.success( "Message sent! Thank you for reaching out. I'll response shortly.", { duration: 4000 })

      // Reset the form
      reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      toast("Your message couldn't be sent. Please try again later.", { duration: 4000 })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-lime-800 to-lime-950">
      <Toaster position="top-center" />
      <div className="container max-w-2xl">
        <h2 className="text-4xl text-amber-500 font-heading font-bold text-center mb-16">
          Contact <span className="text-lime-300">Me</span>
        </h2>
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                placeholder="Full Name"
                className="bg-transparent border-2 border-lime-500 rounded-lg placeholder:text-lime-300 text-white"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email"
                className="bg-transparent border-2 border-lime-500 rounded-lg placeholder:text-lime-300 text-white"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <Input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent border-2 border-lime-500 rounded-lg placeholder:text-lime-300 text-white"
              {...register("phone")}
            />

            <Input
              type="text"
              placeholder="Subject"
              className="bg-transparent border-2 border-lime-500 rounded-lg placeholder:text-lime-300 text-white"
              {...register("subject")}
            />
          </div>

          <div>
            <Textarea
              placeholder="Your Message"
              className="min-h-[160px] bg-transparent border-2 border-lime-500 rounded-lg placeholder:text-lime-300 text-white"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white min-w-[200px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

