"use client"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function ResumeSection() {
  const resumeImagePath =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simmi%20Kumari%20Technical%20Resume_page-0001-7vbyVLG74CX4f3As9ZMuhV5SJRzvHu.jpg"

  const handleViewResume = () => {
    window.open(resumeImagePath, "_blank", "noopener,noreferrer")
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = resumeImagePath
    link.download = "Simmi_Kumari_Resume.jpg"
    link.setAttribute("download", "Simmi_Kumari_Resume.jpg")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="py-12 md:py-16 px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance">Resume</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-6">
            Download or view my complete resume with all my experience and qualifications.
          </p>

          <div className="mb-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden shadow-lg border border-border bg-background"
            >
              <Image
                src={resumeImagePath || "/placeholder.svg"}
                alt="Simmi Kumari Technical Resume"
                width={800}
                height={1035}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleViewResume} size="lg" className="rounded-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Resume
            </Button>
            <Button onClick={handleDownloadResume} size="lg" variant="outline" className="rounded-full bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
