"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Youtube } from "lucide-react"

export function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:simmikumari942@gmail.com?subject=Portfolio Contact&body=Hi Simmi,"
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/simmikumari12", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/simmi-kumari12", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@simmikumari12", label: "YouTube" },
    { icon: Mail, href: "mailto:simmikumari942@gmail.com", label: "Email" },
  ]

  return (
    <section id="contact" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-4 text-balance">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 md:p-8 border-border/50 flex flex-col justify-center items-center text-center space-y-6">
            <div>
              <Mail className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">Get In Touch</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Click the button below to send me an email directly
              </p>
            </div>
            <Button onClick={handleEmailClick} className="rounded-full" size="lg">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
            <p className="text-sm text-muted-foreground">simmikumari942@gmail.com</p>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 md:p-8 border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Follow me on social media for updates, tips, and behind-the-scenes content.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <Button key={index} variant="outline" className="justify-start bg-transparent" asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <Icon className="w-4 h-4 mr-2" />
                        {social.label}
                      </a>
                    </Button>
                  )
                })}
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-2">Quick Response</h3>
              <p className="text-muted-foreground leading-relaxed">
                I typically respond within 24-48 hours. For urgent inquiries, feel free to reach out via email or
                LinkedIn.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
