"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import { MapPin, Mail, Linkedin, Send } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import SectionHeading from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function Contact() {
  const { ref, isInView } = useInView()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    alert("Votre message a bien été envoyé !")
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-gray-700 dark:text-gray-400" />,
      label: "Localisation",
      value: "Paris, France",
    },
    {
      icon: <Mail className="h-5 w-5 text-gray-700 dark:text-gray-400" />,
      label: "Email",
      value: "Davyla.Minguemra@sciences-po.fr",
      link: "mailto:Davyla.Minguemra@sciences-po.fr",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-400" />,
      label: "LinkedIn",
      value: "linkedin.com/in/Davyla-Minguemra",
      link: "https://www.linkedin.com/in/Davyla-Minguemra",
    },
  ]

  return (
    <section id="contact" className="py-20 relative scroll-mt-16" ref={ref}>
      <SectionHeading title="Me contacter" subtitle="Collaborations, stages, questions — je vous réponds avec plaisir" />

      <div className="grid md:grid-cols-2 gap-10">
        <div
          className={cn(
            "space-y-6 opacity-0 transform -translate-x-8 transition-all duration-1000",
            isInView && "opacity-100 translate-x-0",
          )}
        >
          <div className="bg-slate-100/40 dark:bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-slate-200/60 dark:border-gray-800/50">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Informations de contact</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">{info.icon}</div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">{info.label}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100/40 dark:bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-slate-200/60 dark:border-gray-800/50">
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Disponible pour des <span className="text-gray-700 dark:text-gray-400 font-semibold">stages</span>, des collaborations académiques, des interventions ou tout simplement un échange professionnel. N'hésitez pas à me contacter.
            </p>
          </div>
        </div>

        <div
          className={cn(
            "opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
            isInView && "opacity-100 translate-x-0",
          )}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Votre nom</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nom complet"
                className="bg-slate-100 dark:bg-gray-800/50 border-slate-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-gray-900 dark:focus:ring-gray-300 focus:border-gray-900 dark:focus:border-gray-300 h-12"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre.email@example.com"
                className="bg-slate-100 dark:bg-gray-800/50 border-slate-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-gray-900 dark:focus:ring-gray-300 focus:border-gray-900 dark:focus:border-gray-300 h-12"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                rows={6}
                className="bg-slate-100 dark:bg-gray-800/50 border-slate-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-gray-900 dark:focus:ring-gray-300 focus:border-gray-900 dark:focus:border-gray-300 resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-300 dark:to-gray-200 hover:from-gray-900 hover:to-gray-800 dark:hover:from-gray-400 dark:hover:to-gray-300 text-white dark:text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              Envoyer mon message
            </Button>
          </form>
        </div>
      </div>

      <div className="mt-20 text-center text-gray-400 dark:text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Davyla Minguemra. Tous droits réservés.</p>
      </div>
    </section>
  )
}
