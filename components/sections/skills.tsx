"use client"

import { Globe, BookOpen, PenLine, Brain } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

export default function Skills() {
  const { ref, isInView } = useInView()

  const skillCategories = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Relations Internationales",
      skills: ["Droit international public", "Géopolitique comparée", "Organisations multilatérales", "Diplomatie européenne"],
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Méthodes de recherche",
      skills: ["Analyse qualitative", "Analyse quantitative", "Veille politique", "Traitement de données"],
    },
    {
      icon: <PenLine className="h-6 w-6" />,
      title: "Compétences rédactionnelles",
      skills: ["Rédaction académique", "Notes de synthèse", "Dossiers de presse", "Argumentation juridique"],
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Soft Skills",
      skills: ["Esprit critique", "Prise de parole en public", "Travail en équipe", "Adaptabilité"],
    },
  ]

  return (
    <section id="skills" className="py-20 relative scroll-mt-16" ref={ref}>
      <SectionHeading title="Compétences" subtitle="Savoirs et aptitudes acquis au fil de mon parcours" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={cn(
              "bg-slate-100/40 dark:bg-gray-900/30 backdrop-blur-sm border border-slate-200/60 dark:border-gray-800/50 rounded-xl p-6 hover:border-gray-400/50 dark:hover:border-gray-600/50 transition-all duration-500 opacity-0 transform translate-y-8",
              isInView && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: isInView ? `${index * 100}ms` : "0ms",
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-200/60 dark:bg-gray-800/50 rounded-lg text-gray-700 dark:text-gray-400">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{category.title}</h3>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="bg-slate-100/50 dark:bg-gray-800/30 px-4 py-2 rounded-lg border border-slate-300/50 dark:border-gray-700/50 hover:border-gray-400/30 dark:hover:border-gray-600/30 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.05)] transition-all duration-300"
                    >
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
