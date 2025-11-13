import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Artwork } from "@/components/artwork"
import { GitHubSection } from "@/components/github"
import { ResumeSection } from "@/components/resume"
import { YouTube } from "@/components/youtube"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Artwork />
        <GitHubSection />
        <ResumeSection />
        <YouTube />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
