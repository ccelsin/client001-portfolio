"use client"

import { useInView } from "@/hooks/use-in-view"
import SectionHeading from "@/components/ui/section-heading"
import AchievementCard from "@/components/ui/achievement-card"
import { cn } from "@/lib/utils"

export default function Achievements() {
  const { ref, isInView } = useInView()

  const achievements = [
    {
      icon: "�",
      title: "Mention Très Bien – Licence de Science Politique",
      description: "Diplômée avec les félicitations du jury à l'Université Paris I Panthéon-Sorbonne",
    },
    {
      icon: "🏛️",
      title: "Stage au Parlement Européen – Bruxelles",
      description: "Stagiaire auprès d'un eurodéputé au sein de la commission LIBE (Libertés civiles)",
    },
    {
      icon: "🏆",
      title: "Prix du Meilleur Mémoire de Master – Sciences Po",
      description: "Récompensée pour ses recherches sur la polarisation politique à l'ère numérique",
    },
    {
      icon: "🌍",
      title: "Modèle ONU – Conférence de Paris (PMUN)",
      description: "Déléguée de la France au Conseil de Sécurité, Best Delegate Award",
    },
    {
      icon: "📝",
      title: "Publication dans la revue « Regards Politiques »",
      description: "Article académique sur la gouvernance algorithmique et les droits démocratiques",
    },
    {
      icon: "🎤",
      title: "Conférence TEDx Sciences Po – Oratrice",
      description: "Intervention sur le thème « Désinformation et démocratie : quelles réponses institutionnelles ? »",
    },
  ]

  return (
    <section id="achievements" className="py-20 relative scroll-mt-16" ref={ref}>
      <SectionHeading title="Parcours & Distinctions" subtitle="Expériences et reconnaissances académiques" />

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              isInView && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: isInView ? `${index * 150}ms` : "0ms",
            }}
          >
            <AchievementCard icon={achievement.icon} title={achievement.title} description={achievement.description} />
          </div>
        ))}
      </div>
    </section>
  )
}
