"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative py-20" id="hero">
      {/* Animated background glow */}
      <div
        className={cn(
          "absolute w-[500px] h-[500px] bg-gray-400/10 rounded-full blur-[120px] opacity-0 transition-opacity duration-1000",
          mounted && "opacity-30",
        )}
      ></div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl w-full px-4">
        {/* Photo à gauche */}
        <div
          className={cn(
            "relative opacity-0 transform -translate-x-8 transition-all duration-1000 order-2 md:order-1 flex justify-center md:justify-end",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-400/10 to-gray-300/10 rounded-3xl -rotate-6 transform scale-95"></div>
            <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl border border-slate-200/60 dark:border-gray-800/50"></div>
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/profile.png"
                alt="Davyla Minguemra"
                width={400}
                height={400}
                className="object-cover h-full w-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Contenu à droite */}
        <div
          className={cn(
            "space-y-8 opacity-0 transform translate-x-8 transition-all duration-1000 delay-300 order-1 md:order-2 flex flex-col justify-center",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-gray-600/70 dark:text-gray-400/80 font-semibold">
              Master de Science Politique
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 dark:from-gray-300 dark:via-gray-400 dark:to-gray-500 drop-shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Davyla
                <br />
                Minguemra
              </span>
            </h1>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                Relations Internationales · Analyse Politique · Droit Public
              </p>
              <p className="text-gray-600 dark:text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
                Étudiante passionnée par les enjeux géopolitiques contemporains, la gouvernance démocratique et l'analyse des politiques publiques.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-300 dark:to-gray-200 text-white dark:text-gray-900 font-semibold px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 group"
            >
              <span>Voir mes travaux</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a
              href="/files/Davyla-Minguemra-cv.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-gray-200/40 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border border-gray-400/60 dark:border-gray-600/30 font-semibold px-8 py-3 rounded-full hover:shadow-[0_0_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105"
            >
              <span>📄</span>
              <span>CV</span>
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gray-200/40 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border border-gray-400/60 dark:border-gray-600/30 font-semibold px-8 py-3 rounded-full hover:shadow-[0_0_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105"
            >
              <span>✉️</span>
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Défiler vers la section À propos">
          <ArrowDown className="text-gray-700 dark:text-gray-400 h-8 w-8" />
        </Link>
      </div>
    </section>
  )
}
