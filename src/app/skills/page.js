'use client'

import Skills from '@/components/Skills'
import Navigation from '@/components/Navigation'
import Cursor from '@/components/Cursor'
import PageTransition from '@/components/PageTransition'

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen">
      <PageTransition>
        <Cursor />
        <Navigation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 mt-20">
          <Skills />
        </div>
        <footer className="relative z-10 mt-20 py-8 dark:border-t dark:border-white/10 border-t border-gray-300/50">
          <div className="container mx-auto px-4 text-center">
            <p className="dark:text-gray-400 text-gray-700">
              2024 Parth Mishra. Built with Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </PageTransition>
    </main>
  )
}
