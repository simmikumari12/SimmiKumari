"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Award, BookOpen, Code, Brain } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  const certifications = [
    {
      title: "CS50x: Introduction to Computer Science",
      issuer: "Harvard University",
      image: "/harvard-cs50x-certificate.jpg",
      description: "Comprehensive introduction to computer science and programming.",
      icon: Code,
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "CS50P: Introduction to Programming with Python",
      issuer: "Harvard University",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cs50P%20Introduction_to_Programming_with_python.PNG-FTdzW8kZGXti6YmY7G5KLGyXY9jq0Y.png",
      description: "In-depth Python programming course covering fundamentals to advanced topics.",
      icon: Code,
      color: "text-green-600",
      bgColor: "bg-green-500/10",
    },
    {
      title: "CS50 AI: Introduction to AI with Python",
      issuer: "Harvard University",
      image: "/harvard-cs50-ai-certificate.jpg",
      description: "Artificial Intelligence with Python covering machine learning and neural networks.",
      icon: Brain,
      color: "text-purple-600",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Advanced Data Structures and Algorithms",
      issuer: "CodePath",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Advanced%20Data%20Structure%20and%20Algorithm%20CodePath.PNG-uRiZVL9QAlQS1J4bHrXIoMI7omSmSq.png",
      description: "Advanced data structures, algorithms, and technical interview preparation.",
      icon: BookOpen,
      color: "text-orange-600",
      bgColor: "bg-orange-500/10",
    },
    {
      title: "Intermediate Python for Non-Programmers",
      issuer: "LinkedIn Learning",
      image: "/linkedin-learning-python-certificate.jpg",
      description: "Advanced Python concepts and practical applications.",
      icon: Code,
      color: "text-cyan-600",
      bgColor: "bg-cyan-500/10",
    },
    {
      title: "Intermediate Technical Interview Prep",
      issuer: "CodePath",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/codepath-certificate-hDmCU.png",
      description: "Technical interview preparation with focus on problem-solving.",
      icon: Award,
      color: "text-pink-600",
      bgColor: "bg-pink-500/10",
    },
  ]

  return (
    <section id="certifications" className="py-12 md:py-16 px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Professional certifications and completed courses.
          </p>
          {/* </CHANGE> */}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 cursor-pointer h-full hover:border-primary/50"
                  onClick={() => setSelectedCert(index)}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`w-16 h-16 rounded-lg ${cert.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 ${cert.color}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <p className="text-xs text-primary hover:underline">Click to view</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedCert !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full bg-background rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="p-6">
                  <div className="relative w-full aspect-[3/2] mb-4">
                    <Image
                      src={certifications[selectedCert].image || "/placeholder.svg"}
                      alt={certifications[selectedCert].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{certifications[selectedCert].title}</h3>
                  <p className="text-lg text-primary mb-2">{certifications[selectedCert].issuer}</p>
                  <p className="text-muted-foreground">{certifications[selectedCert].description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
