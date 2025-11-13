"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"
import { motion } from "framer-motion"

export function GitHubSection() {
  const pinnedRepos = [
    {
      name: "1301",
      description: "CSC 1301 with Honors",
      language: "Python",
      languageColor: "bg-blue-500",
      stars: 0,
      forks: 0,
      visibility: "Public",
      url: "https://github.com/simmikumari12/1301",
    },
    {
      name: "tic-tac-toe-game",
      description:
        "This is a simple yet engaging tic-tac-toe game built with HTML, CSS, JavaScript. It provides classic pen-and-paper experience of striking the winning row, column or diagonal. It also provides a tou...",
      language: "CSS",
      languageColor: "bg-purple-500",
      stars: 0,
      forks: 0,
      visibility: "Public",
      url: "https://github.com/simmikumari12/tic-tac-toe-game",
    },
    {
      name: "amazonClone",
      description:
        "The project is in the early stages of development, with the landing page and basic layout already implemented.",
      language: "HTML",
      languageColor: "bg-orange-500",
      stars: 0,
      forks: 0,
      visibility: "Public",
      url: "https://github.com/simmikumari12/amazonClone",
    },
    {
      name: "100-Days-Python-Code-Challenge",
      description: "",
      language: "Python",
      languageColor: "bg-blue-500",
      stars: 0,
      forks: 0,
      visibility: "Public",
      url: "https://github.com/simmikumari12/100-Days-Python-Code-Challenge",
    },
    {
      name: "data-structure",
      description: "",
      language: "Python",
      languageColor: "bg-blue-500",
      stars: 0,
      forks: 0,
      visibility: "Public",
      url: "https://github.com/simmikumari12/data-structure",
    },
  ]

  return (
    <section id="github" className="py-12 md:py-16 px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="w-10 h-10 text-foreground" />
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground text-balance">GitHub</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Check out my open source contributions and projects.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground">Popular repositories</h3>
            <Button asChild variant="link" size="sm" className="text-primary">
              <a href="https://github.com/simmikumari12?tab=repositories" target="_blank" rel="noopener noreferrer">
                Customize your pins
              </a>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {pinnedRepos.map((repo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 h-full">
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Github className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <h4 className="text-sm font-semibold text-primary hover:underline">{repo.name}</h4>
                      </div>
                      <span className="text-xs text-muted-foreground border border-border rounded-full px-2 py-0.5">
                        {repo.visibility}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2 min-h-[2.5rem]">
                      {repo.description || "No description provided"}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <span className={`w-3 h-3 rounded-full ${repo.languageColor}`} />
                        {repo.language}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        {repo.forks}
                      </span>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <Button asChild className="rounded-full">
            <a href="https://github.com/simmikumari12" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Visit GitHub Profile
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
