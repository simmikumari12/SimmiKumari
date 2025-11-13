import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Crimson_Pro } from "next/font/google"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Simmi Kumari - CS Student @ GSU | AI Researcher | Frontend Developer",
  description:
    "Computer Science student at Georgia State University passionate about AI, mental health tech, and education. Explore my projects, research, and journey in tech.",
  generator: "v0.app",
  keywords: [
    "Simmi Kumari",
    "Computer Science Student",
    "Georgia State University",
    "AI Research",
    "Machine Learning",
    "Frontend Developer",
    "Mental Health Tech",
    "Python",
    "JavaScript",
    "React",
    "YouTube Creator",
    "Tech Mentor",
  ],
  authors: [{ name: "Simmi Kumari" }],
  openGraph: {
    title: "Simmi Kumari - CS Student @ GSU | AI Researcher | Frontend Developer",
    description:
      "Computer Science student passionate about AI, mental health tech, and education. Explore my projects and research.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simmi Kumari - Honors CS Student @ GSU | AI Researcher | Frontend Developer",
    description: "Computer Science student passionate about AI, mental health tech, and education.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${crimsonPro.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
