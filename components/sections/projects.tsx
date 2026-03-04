"use client"

import { useInView } from "@/hooks/use-in-view"
import SectionHeading from "@/components/ui/section-heading"
import ProjectCard from "@/components/ui/project-card"
import { cn } from "@/lib/utils"

export default function Projects() {
  const { ref, isInView } = useInView()

  const projects = [
    {
      title: "L'influence des réseaux sociaux sur la polarisation politique en France",
      description: "Mémoire de M1 analysant l'impact des algorithmes des plateformes numériques sur la fragmentation du débat démocratique et la radicalisation des opinions politiques en France (2017–2024).",
      date: "Juin 2025",
      techStack: ["Analyse qualitative", "Entretiens", "Traitement de presse", "Sciences Po Paris"],
      demoUrl: "/files/memoire-m1-Minguemra.pdf",
    },
    {
      title: "Comparaison des systèmes électoraux en Union Européenne",
      description: "Étude comparative des modes de scrutin des 27 États membres de l'UE et de leur impact sur la représentativité parlementaire, la gouvernabilité et la participation citoyenne.",
      date: "Déc. 2024",
      techStack: ["Droit électoral", "Science politique comparée", "Eurostat", "Analyse statistique"],
      demoUrl: "/files/etude-comparative-ue.pdf",
    },
    {
      title: "Stage au Parlement Européen – Rapport de mission",
      description: "Rapport d'activité rédigé à l'issue d'un stage auprès d'un eurodéputé, portant sur le suivi des négociations du règlement sur l'intelligence artificielle et ses implications politiques.",
      date: "Fév. 2025",
      techStack: ["Affaires européennes", "IA Act", "Veille législative", "Rédaction institutionnelle"],
      demoUrl: "/files/rapport-stage-pe.pdf",
    },
    {
      title: "L'ONU face aux conflits asymétriques : entre légitimité et impuissance",
      description: "Dissertation analysant les limites du droit d'intervention de l'ONU dans les conflits contemporains non-conventionnels, du Kosovo à la Syrie.",
      date: "Mars 2024",
      techStack: ["Droit international", "Relations internationales", "Sécurité collective"],
      demoUrl: "/files/onu-conflits-asymetriques.pdf",
    },
  ]

  return (
    <section id="projects" className="py-20 relative scroll-mt-16" ref={ref}>
      <SectionHeading title="Travaux académiques" subtitle="Recherches, mémoires et études de cas" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              isInView && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: isInView ? `${index * 200}ms` : "0ms",
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              date={project.date}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
