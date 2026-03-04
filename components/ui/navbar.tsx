"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Linkedin, Mail, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Travaux", href: "#projects" },
  { name: "Parcours", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/Davyla-Minguemra", label: "LinkedIn" },
  { icon: Mail, href: "#contact", label: "Email" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-300/20 dark:border-gray-700/30 shadow-lg shadow-gray-900/5"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative group flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:blur-md"></div>
              <div className="relative px-4 py-2 bg-white dark:bg-gray-900 rounded-lg">
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                  AJ
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-600 dark:text-gray-300 text-sm font-medium group overflow-hidden rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-300"
              >
                <span className="relative z-10 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {item.name}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-400/0 via-gray-400/10 to-gray-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Social Links + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-300"
              >
                <link.icon size={20} />
              </Link>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Changer de thème"
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-300"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Changer de thème"
                className="p-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-300"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-300/20 dark:border-gray-700/30 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 sm:px-6 py-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-300 group"
                onClick={() => setIsOpen(false)}
              >
                <span className="absolute left-0 h-1 w-1 bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-3"></span>
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}

            {/* Mobile Social Links */}
            <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex-1 p-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-300 flex justify-center"
                >
                  <link.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
