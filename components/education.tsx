"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, ExternalLink } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import Image from "next/image"

export function Education() {
  const [selectedImages, setSelectedImages] = useState<string[]>([])

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Georgia State University | Honors College",
      location: "Atlanta, Georgia",
      period: "August 2024 - December 2028",
      description:
        "100% Campus Atlanta Freshmen Scholarship recipient. Empowering Excellence Award Scholarship. Active member of Computer Science Club, Cybersecurity Club, WomenLead, and Girls++.",
      icon: GraduationCap,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gsu_logo-Q1uwQ0bNjsoFKDeEPO7s5yNgwiryb4.jpg",
      coursework: [
        "Data Structures",
        "System Level Programming",
        "Computer Organization & Programming",
        "Theoretical Foundation of Computer Science",
        "Probability & Statistics for CS",
        "Linear Algebra",
      ],
    },
    {
      degree: "Technical Interview Preparation",
      institution: "CodePath",
      location: "Online",
      period: "2024 - 2025",
      description:
        "Intensive program focused on data structures, algorithms, and technical interview skills for software engineering roles.",
      icon: GraduationCap,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CodePath-Logo-Circle-CL6NDhB1Z3hgnxvJgV2ugIazqYhJTo.webp", // Updated CodePath logo to use blob URL
      coursework: ["Advanced Algorithms", "System Design", "Technical Interviews", "Problem Solving"],
    },
    {
      degree: "High School Diploma, PCMC",
      institution: "Jain (Deemed-to-be University)",
      location: "Bengaluru, India",
      period: "May 2021 - Feb 2023",
      description:
        "Grade: Distinction. Activities: Cultural Forum, Orientation Leader. Major Subjects: Physics, Chemistry, Maths, Computer Science. Language Subjects: English, Hindi.",
      icon: GraduationCap,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JGI-logo-dh67tpG8sYM95fMlzf5tvM3DcicmcA.png",
      coursework: ["Database Management System (DBMS)", "C++", "C Programming", "SQL", "HTML", "Web Development"],
    },
  ]

  const programs = [
    {
      title: "Math Path Scholar",
      organization: "CASA | Georgia State University",
      period: "June 2025 - August 2025",
      description:
        "Sloan Foundation-funded program preparing underrepresented students for quantitative science graduate programs.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jmO3HSEwOkwOE6QDmFOGrnx9ZTOZtF.png",
      hasGallery: false,
    },
    {
      title: "Global Ambassador",
      organization: "Georgia State University",
      period: "2024 - Present",
      description: "Representing GSU to international students and promoting diversity and inclusion on campus.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7iW6E91TAPPBTmn7B6N4GmtHet6uFu.png",
      hasGallery: true,
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/98598AA2-494A-433E-A74B-9A0B5965F9B0-2Y3KfQU4rMqNj47oWSdmAudhlu6NiC.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6756%20%281%29.JPG-syMtOqW1JCbJWEFhRTErfjWUNN1URv.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C7BD3A1F-E28C-45B4-A24B-A574A073C71C%20%281%29-ADJQiSgTghFWP80UVGTR7pnKBw0CNA.jpg",
      ],
    },
  ]

  const certifications = [
    {
      title: "CS50P: Python Programming",
      issuer: "Harvard University",
      date: "March 2025",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-el0l3rz0MB1oTlUC2jNhl3Pa54z2xd.png",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cs50P%20Introduction_to_Programming_with_python.PNG-FTdzW8kZGXti6YmY7G5KLGyXY9jq0Y.png",
    },
    {
      title: "Intermediate Python for Non-Programmers",
      issuer: "LinkedIn Learning",
      date: "February 2025",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-el0l3rz0MB1oTlUC2jNhl3Pa54z2xd.png",
      url: "#",
    },
    {
      title: "Advanced Data Structures and Algorithms",
      issuer: "CodePath",
      date: "2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-el0l3rz0MB1oTlUC2jNhl3Pa54z2xd.png",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Advanced%20Data%20Structure%20and%20Algorithm%20CodePath.PNG-uRiZVL9QAlQS1J4bHrXIoMI7omSmSq.png",
    },
    {
      title: "Intermediate Technical Interview Prep",
      issuer: "CodePath",
      date: "2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-el0l3rz0MB1oTlUC2jNhl3Pa54z2xd.png",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/codepath-certificate-hDmCU.png",
    },
  ]

  return (
    <section id="education" className="py-12 md:py-16 px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6 text-balance">Education</h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 mb-12">
          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    {edu.logo ? (
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                        <Image
                          src={edu.logo || "/placeholder.svg"}
                          alt={edu.institution}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-base font-medium text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground/80 mb-3">{edu.location}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{edu.description}</p>

                    {edu.coursework && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-foreground mb-2">
                          {index === 0 ? "Relevant Coursework:" : "Skills & Subjects:"}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
            Programs, Ambassadorships & Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => {
              const content = (
                <Card
                  key={index}
                  className={`p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 h-full ${
                    program.hasGallery ? "cursor-pointer" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                        <Image
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-lg font-semibold text-foreground">{program.title}</h4>
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
                          {program.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium mb-2">{program.organization}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{program.description}</p>
                      {program.hasGallery && (
                        <p className="text-xs text-primary mt-2 font-medium">Click to view gallery</p>
                      )}
                    </div>
                  </div>
                </Card>
              )

              if (program.hasGallery && program.images) {
                return (
                  <Dialog key={index}>
                    <DialogTrigger asChild>{content}</DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">{program.title} Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {program.images.map((img, idx) => (
                            <div key={idx} className="relative aspect-video rounded-lg overflow-hidden">
                              <Image
                                src={img || "/placeholder.svg"}
                                alt={`${program.title} ${idx + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )
              }

              return content
            })}

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Certifications</h4>
                  <div className="space-y-3">
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="border-l-2 border-primary/30 pl-3 flex gap-2">
                        <div className="flex-shrink-0">
                          <Image
                            src={cert.image || "/placeholder.svg"}
                            alt="Certification"
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{cert.title}</p>
                          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                          <p className="text-xs text-muted-foreground/70">{cert.date}</p>
                          {cert.url !== "#" && (
                            <Button
                              asChild
                              variant="link"
                              size="sm"
                              className="h-auto p-0 text-xs text-primary hover:underline"
                            >
                              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                                View Certificate <ExternalLink className="w-3 h-3 ml-1 inline" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
