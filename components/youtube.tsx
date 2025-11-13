"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Youtube, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export function YouTube() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const videos = [
    {
      title: "How I got free ticket",
      url: "https://youtu.be/uBKEgU4kbMI",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumbnail-mYpBNSdZjRp06z3v4iDxVtzOTMFddI.png",
    },
    {
      title: "Bengaluru to the USA Vlog'24",
      url: "https://youtu.be/WglhgmzXwLw",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/move_to_usa_thumbnail-ojLeoZcDAZ6nzQyVgSCpJ3z37AaDSu.webp",
    },
    {
      title: "GSU Dorm Tour",
      url: "https://youtu.be/ccpmMJg0ssU",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gsu_dorm_tour-dXxUIFYkSIOi98dBohxjJtInuNLJ7T.webp",
    },
    {
      title: "Visiting Georgia Tech for the first time!",
      url: "https://youtu.be/xygAmmuEjMk",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/georgia_tech-prVY6uUZYw2GZCWClvOeNrAKWOmcmu.webp",
    },
    {
      title: "Valentine's Day is Not Boring Anymore",
      url: "https://youtu.be/0PYad7S9Cl4",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/valentines-69m4r5TOeo8vyNyO00wwBKY1nYupIR.jpg",
    },
    {
      title: "A productive day in my life as an International Student in the USA",
      url: "https://youtu.be/XgRm3Xcjyjw?si=BTMLh1p6xeZTjeLA",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4ikZgXDHpoCuHou6Xkd4baZTCD28HO.png",
    },
    {
      title: "Packing for the USA",
      url: "https://youtu.be/Uv-x1CD1Zsw?si=xv0uzA4asOui8yhl",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D0poyYMuDFrRyHxHRDOISTlOhnjDtj.png",
    },
    {
      title: "My USA F-1 Visa Experience 2024 | Chennai Consulate",
      url: "https://youtu.be/rUD6JgDdaZI?si=-2bKd15FqvOX6hyj",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZygTggPC9uu4Rwtwff4cptep21FYRo.png",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="youtube" className="py-12 md:py-16 px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            My College Journey 📺
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Follow my college journey, coding tutorials, and tech insights.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-8">
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar px-12"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 snap-center"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-red-500/50 cursor-pointer h-full">
                    <a href={video.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <div className="relative w-full aspect-video">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-foreground line-clamp-2 min-h-[2.5rem]">
                          {video.title}
                        </h3>
                      </div>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <Button asChild className="rounded-full bg-red-500 hover:bg-red-600">
            <a href="https://www.youtube.com/@simmikumari12" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-4 h-4 mr-2" />
              Visit YouTube Channel
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
