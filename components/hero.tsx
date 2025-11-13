"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Youtube, Mail, Download, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ReactTyped } from "react-typed"

export function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/simmikumari12", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/simmi-kumari12/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@simmikumari12", label: "YouTube" },
    { icon: Mail, href: "mailto:simmikumari942@gmail.com", label: "Email" },
  ]

  const handleViewResume = () => {
    window.open("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simmi_Kumari_Resume-O5rj0.pdf", "_blank")
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simmi_Kumari_Resume-O5rj0.pdf"
    link.download = "Simmi_Kumari_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headshot%20%282%29-PGYAlOTpIrBOILXYkWTctv0UxJlWbi.png"
                alt="Simmi Kumari"
                fill
                className="object-cover rounded-full"
                style={{ objectPosition: "center 30%" }}
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-4">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-primary font-medium mb-2"
                >
                  Hi, I'm
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-3 text-balance bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
                >
                  Simmi Kumari
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xl sm:text-2xl text-muted-foreground mb-4 text-pretty h-16"
                  aria-live="polite"
                >
                  <ReactTyped
                    strings={[
                      "Machine Learning & GenAI Enthusiast",
                      "Aspiring Software Engineer",
                      "YouTuber | Honors CS @ GSU",
                      "Multimedia Artist",
                      "Mentor",
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                    className="font-medium"
                  />
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-xl"
              >
                Passionate about leveraging technology to solve real-world problems. Building innovative solutions at
                the intersection of AI, web development, and education.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="rounded-full">
                  <a href="https://github.com/simmikumari12" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
                  <a href="https://www.linkedin.com/in/simmi-kumari12/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button onClick={handleViewResume} size="lg" variant="outline" className="rounded-full bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View My Resume
                </Button>
                <Button
                  onClick={handleDownloadResume}
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button asChild size="lg" className="rounded-full">
                  <a href="#contact">Get in Touch</a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex gap-4 pt-4"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-all group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
