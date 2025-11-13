"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "AI Mental Health Assistant",
      description:
        "Developed an AI-powered mental health chatbot using Python and LLM APIs (Gemma 3) with RAG/CAG architecture. Integrated PHQ-8 scoring for depression assessment and personalized mental health support.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ai-mental-health-chatbot-interface-xAmYnhj4d7pDomokpl3OG6ogxBXk90.jpg",
      tags: ["Python", "Gemma 3", "RAG/CAG", "PHQ-8", "LLM APIs", "Mental Health"],
      github: "https://github.com/simmikumari12",
      demo: "#",
    },
    {
      title: "Frontend for AI2 Research Lab",
      description:
        "Built interactive frontend interfaces for AI2 Research Lab using HTML, CSS, and JavaScript. Created user-friendly research tools and data visualization components.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/research-lab-frontend-interface-7ZsfZKhOP6ozN4VE1P5t078H9gI5YO.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Research UX", "Data Visualization"],
      github: "https://github.com/simmikumari12",
      demo: "#",
    },
    {
      title: "Math Tutoring Platform",
      description:
        "Developed interactive learning tools for math education. Created engaging educational content and tutoring resources with measurable impact on student learning outcomes.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/math-tutoring-educational-platform-jn4wPNZKk2B9oATChL8TbU8r1CPVbt.jpg",
      tags: ["Education", "Interactive Learning", "JavaScript", "React", "EdTech"],
      github: "https://github.com/simmikumari12",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-12 md:py-16 px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            A showcase of my recent work and personal projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 h-full flex flex-col">
                <div className="relative w-full aspect-video">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" disabled>
                      <Github className="w-4 h-4 mr-2" />
                      Coming Soon
                    </Button>
                    {/* </CHANGE> */}
                    {project.demo !== "#" && (
                      <Button asChild size="sm" className="flex-1">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
