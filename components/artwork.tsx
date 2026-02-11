"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Artwork() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [selectedArtwork, setSelectedArtwork] = useState<(typeof artworks)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Form state for purchase request modal
  const [buyerName, setBuyerName] = useState("")
  const [buyerEmail, setBuyerEmail] = useState("")
  const [buyerMessage, setBuyerMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const artworks = [
    {
      title: "Mandala Love",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art1-LQIiuusfP0Xtl3bYUqrEgTtJkvR2tW.jpeg"],
      description: "Colorful mandala art with intricate patterns and love theme",
      price: "",
    },
    {
      title: "Sunset Swing",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art2-PWihSNzEjuV3DgzV3Zdk1RmdDR17rg.jpeg"],
      description: "Person on swing at sunset with vibrant orange sky and colorful trees",
      price: "",
    },
    {
      title: "Peacock Elegance",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art3-HZRuONf6D33g6JiyxSwts8y7QjFzln.jpeg"],
      description: "Black and white peacock drawing with detailed feather patterns",
      price: "",
    },
    {
      title: "Whimsical Birds",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art4-SpUkvf9vl7ZvpmqsmhnQLYtHujmMfA.jpeg"],
      description: "Colorful birds painting on blue background with paint supplies",
      price: "",
    },
    {
      title: "Indian Heritage",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art5-BDUmMlyGDP5uHIXwdh3KkqPPwte1fO.jpeg"],
      description: "Indian flag artwork with intricate mandala patterns and monuments",
      price: "",
    },
    {
      title: "Golden Deer Mandala",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art6-sGm7TyohhKD8vrYfXpQI92FPFrOMsB.jpeg"],
      description: "Intricate mandala-style artwork featuring a golden deer with ornate patterns",
      price: "",
    },
    {
      title: "Scooter Scene",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art7-Rte7T971i7yDou1t1EowQlqg44Ij5v.jpeg"],
      description: "Colorful painting of a scooter parked in front of a vibrant building",
      price: "",
    },
    {
      title: "Be Yourself Collection",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art8-1SSO7BpkmdISzfcVjurlVEF8EvN8Si.jpeg"],
      description: "Collection of small blue-themed artworks with positive messages",
      price: "",
    },
    {
      title: "Digital Portrait",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art9-8XvUEOIgSm9t9QmSSPjsVh0s4DLox8.jpeg"],
      description: "Digital portrait illustration with colorful background",
      price: "",
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

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedArtwork(null)

    // reset modal state
    setBuyerName("")
    setBuyerEmail("")
    setBuyerMessage("")
    setError("")
    setSuccess(false)
    setLoading(false)
  }

  const handlePurchaseClick = (artwork: (typeof artworks)[0]) => {
    setSelectedArtwork(artwork)
    setIsModalOpen(true)

    // reset status when opening
    setError("")
    setSuccess(false)
  }

  // Submit purchase request -> server route -> Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedArtwork) return

    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("/api/purchase-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          artworkTitle: selectedArtwork.title,
          name: buyerName,
          email: buyerEmail,
          message: buyerMessage,
          company: "", // honeypot
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setError(data?.error ?? "Something went wrong. Please try again.")
        return
      }

      setSuccess(true)
      setBuyerName("")
      setBuyerEmail("")
      setBuyerMessage("")

      // Close after a short moment (keeps UX nice)
      setTimeout(() => {
        closeModal()
      }, 800)
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="artwork" className="py-12 md:py-16 px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Buy My Artwork
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Browse and purchase high-quality digital copies of my artwork.
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
              {artworks.map((artwork, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 snap-center"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 h-full">
                    <div className="relative w-full aspect-square cursor-pointer" onClick={() => handlePurchaseClick(artwork)}>
                      <Image src={artwork.images[0] || "/placeholder.svg"} alt={artwork.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-foreground mb-1">{artwork.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{artwork.description}</p>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" className="rounded-full w-full" onClick={() => handlePurchaseClick(artwork)}>
                          Purchase
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">Digital copy only</p>
                        <p className="text-lg font-bold text-primary text-center">{artwork.price}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && selectedArtwork && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Purchase Digital Copy</h3>

              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image src={selectedArtwork.images[0] || "/placeholder.svg"} alt={selectedArtwork.title} fill className="object-cover" />
              </div>

              <div>
                <p className="text-lg font-semibold text-foreground">{selectedArtwork.title}</p>
                <p className="text-sm text-muted-foreground mb-2">{selectedArtwork.description}</p>
                <p className="text-xl font-bold text-primary">{selectedArtwork.price}</p>
                <p className="text-xs text-muted-foreground mt-1">Digital copy only</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                  <Textarea
                    placeholder="Any special requests or questions?"
                    rows={3}
                    value={buyerMessage}
                    onChange={(e) => setBuyerMessage(e.target.value)}
                  />
                </div>

                {/* honeypot */}
                <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

                <Button type="submit" className="w-full rounded-full" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Purchase Request"}
                </Button>

                {error && <p className="text-sm text-red-500">{error}</p>}
                {success && <p className="text-sm text-green-600">Request sent ✨</p>}
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
