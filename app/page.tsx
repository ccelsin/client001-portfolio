import Navbar from "@/components/ui/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Achievements from "@/components/sections/achievements"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
      <main className="min-h-screen bg-gradient-to-br from-stone-50/40 via-slate-50/20 to-stone-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <Navbar />
      <div className="container mx-auto px-4 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </main>
  )
}
