"use client"

import { BookOpen, Globe, GraduationCap, MapPin } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export default function About() {
  const { ref, isInView } = useInView()

  const quickFacts = [
    {
      icon: <GraduationCap className="h-5 w-5 text-gray-700 dark:text-gray-400" />,
      title: "Master Science Politique",
      description: "Spécialisation en relations internationales",
    },
    {
      icon: <Globe className="h-5 w-5 text-gray-700 dark:text-gray-400" />,
      title: "Relations Internationales",
      description: "Géopolitique et gouvernance mondiale",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-gray-700 dark:text-gray-400" />,
      title: "Recherche Académique",
      description: "Analyse des politiques publiques",
    },
    {
      icon: <MapPin className="h-5 w-5 text-gray-700 dark:text-gray-400" />,
      title: "Paris, France",
      description: "Disponible pour stages et opportunités",
    },
  ]

  return (
    <section id="about" className="py-20 relative scroll-mt-16">
      <SectionHeading title="À propos" subtitle="Mon parcours et mes ambitions" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <div
          className={cn(
            "space-y-6 opacity-0 transform translate-y-8 transition-all duration-1000",
            isInView && "opacity-100 translate-y-0",
          )}
        >
          <div className="bg-slate-100/40 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/60 dark:border-gray-800/50 shadow-lg">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Étudiante en Master de Science Politique, je me spécialise dans l'analyse des relations internationales et des dynamiques géopolitiques contemporaines. Mon parcours académique m'a permis de développer une approche rigoureuse et critique des enjeux politiques actuels.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Passionnée par les questions de gouvernance démocratique, de diplomatie et de politiques publiques européennes, je cherche à contribuer à la compréhension des transformations politiques de notre époque à travers la recherche et l'engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-slate-100/40 dark:bg-gray-900/30 backdrop-blur-sm p-4 rounded-xl border border-slate-200/60 dark:border-gray-800/50 hover:border-gray-400/50 dark:hover:border-gray-600/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">{fact.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-gray-200">{fact.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{fact.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
