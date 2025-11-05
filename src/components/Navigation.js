'use client'

import { motion } from 'framer-motion'
import { Menu, X, Home, User, Code, Briefcase, Folder, Award, Mail, Moon, Sun, FolderOpen } from 'lucide-react'
import { useState } from 'react'

export default function Navigation({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false) // Close mobile menu after click
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 dark:border-white/10 border-black/10 bg-black/50 dark:bg-black/50 bg-white/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <FolderOpen size={18} className="text-white dark:text-white text-black" />
            </div>
            <span className="text-xl font-bold gradient-text">Parth</span>
            <motion.div 
              className="text-xs text-yellow-400 border border-yellow-400/30 rounded-full px-2 py-0.5"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Level 2
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-sm font-medium text-white dark:text-white text-gray-700 cursor-pointer flex items-center gap-1"
              >
                <item.icon size={14} />
                {item.label}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 glass rounded-full hover:glow-effect transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} className="text-gray-700" /> : <Sun size={20} className="text-yellow-400" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white dark:text-white text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/90 dark:bg-black/90 bg-white/90 backdrop-blur-lg border-t border-white/10 dark:border-white/10 border-black/10"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
                whileTap={{ scale: 0.95 }}
                className="block py-2 px-4 text-white dark:text-white text-gray-700 hover:bg-white/5 dark:hover:bg-white/5 hover:bg-black/5 rounded-lg cursor-pointer flex items-center gap-3"
              >
                <item.icon size={18} className="text-primary" />
                <span>{item.label}</span>
                {item.id === 'projects' && (
                  <motion.span 
                    className="text-xs text-yellow-400 border border-yellow-400/30 rounded-full px-2 py-0.5"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    Quest
                  </motion.span>
                )}
              </motion.a>
            ))}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                toggleTheme()
                setIsOpen(false)
              }}
              className="block w-full text-left py-2 px-4 text-white dark:text-white text-gray-700 hover:bg-white/5 dark:hover:bg-white/5 hover:bg-black/5 rounded-lg cursor-pointer flex items-center gap-3"
            >
              {theme === 'light' ? <Moon size={18} className="text-primary" /> : <Sun size={18} className="text-primary" />}
              <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
