import Link from "next/link"
import { Github, Linkedin, Youtube, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#youtube", label: "YouTube" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/simmikumari12", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/simmi-kumari12/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@simmikumari12", label: "YouTube" },
    { icon: Mail, href: "mailto:simmikumari942@gmail.com", label: "Email" },
  ]

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Simmi Kumari</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              CS Student @ GSU | AI Researcher | Frontend Developer | Mentor
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Get in Touch</h4>
            <p className="text-sm text-muted-foreground mb-2">Have a project in mind or want to collaborate?</p>
            <Link href="#contact" className="inline-block text-sm font-medium text-primary hover:underline">
              Let's work together →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Simmi Kumari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
