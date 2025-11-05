'use client'

import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Navigation from '../components/Navigation'
import Cursor from '../components/Cursor'
import LoadingScreen from '../components/LoadingScreen'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setMounted(true)
    // Check for user preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        setTheme('light')
      }
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      document.body.classList.remove('light-mode', 'dark-mode')
      document.body.classList.add(theme === 'light' ? 'light-mode' : 'dark-mode')
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return null
  }

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <main className="relative min-h-screen">
      <Cursor />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 py-8 border-t border-white/10 dark:border-white/10 border-black/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 dark:text-gray-400 text-gray-600">
            2024 Parth Mishra. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  )
}
