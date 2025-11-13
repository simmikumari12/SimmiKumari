"use client"

import { Card } from "@/components/ui/card"
import { Code, Palette, Users, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  const interests = [
    {
      icon: Code,
      title: "Software Development",
      description: "Building scalable applications with modern technologies.",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences.",
      color: "text-purple-600",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connecting with fellow developers and learners.",
      color: "text-green-600",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Tackling complex challenges with creative solutions.",
      color: "text-orange-600",
      bgColor: "bg-orange-500/10",
    },
  ]

  return (
    <section id="about" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance">About Me</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-5 sm:p-6 border-border/50">
              <div className="grid md:grid-cols-[250px_1fr] gap-6 items-start">
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-FwRwHcHcPkWxykPYOXdViWQsgr1LKP.jpeg"
                    alt="Simmi Kumari"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="prose prose-sm sm:prose-base max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-3 mt-0">
                    Hi! I'm Simmi, a Computer Science student at Georgia State University's Honors College. I'm
                    passionate about leveraging technology to solve real-world problems and create meaningful impact.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    My journey in tech started with curiosity and has evolved into a deep commitment to continuous
                    learning. From building full-stack applications to exploring AI and machine learning, I'm always
                    excited to take on new challenges.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond coding, I'm actively involved in campus organizations, mentoring fellow students, and
                    documenting my college journey on YouTube. I believe in the power of community and sharing knowledge
                    to help others grow.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {interests.map((interest, index) => {
            const Icon = interest.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 h-full hover:border-primary/50">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`w-14 h-14 rounded-lg ${interest.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${interest.color}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">{interest.title}</h3>
                      <p className="text-sm text-muted-foreground">{interest.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
