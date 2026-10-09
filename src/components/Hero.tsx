'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Award } from 'lucide-react'

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/parthmishra0601', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/parthmishra06/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mishra.parth04@gmail.com', label: 'Email' },
  ]

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Hero Card - Takes 8 columns */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 glass rounded-3xl p-8 md:p-12 hover-lift relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full glass text-sm font-semibold gradient-text">
                👋 Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
            >
              Parth Mishra
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white mb-6"
            >
              Full-Stack Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white mb-8 max-w-2xl"
            >
              I build fault-tolerant, high-performance systems across the SDLC, from Go, Docker, and Kubernetes infrastructure to React.js and Python REST APIs and Java/Spring Boot backends on AWS. I apply OOP, data structures and algorithms, CI/CD, and QA to deliver measurable results, including an 85% lift in matching accuracy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={handleViewProjects}
                className="px-6 py-3 glass rounded-full font-semibold hover-lift text-white"
              >
                View Projects
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Side Cards - Takes 4 columns */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-3xl p-6 hover-lift"
          >
            <h3 className="text-xl font-semibold mb-4 gradient-text">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white">
                <Phone size={20} className="text-primary" />
                <span className="text-sm">+91 9971546328</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Mail size={20} className="text-primary" />
                <span className="text-sm">mishra.parth04@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-3xl p-6 hover-lift"
          >
            <h3 className="text-xl font-semibold mb-4 gradient-text">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:glow-effect transition-all"
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Stats Card with Gamification Badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-3xl p-6 hover-lift relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Award size={20} className="text-yellow-400" />
                <span className="font-semibold text-white">Software Engineer</span>
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">85%</div>
              <div className="text-sm text-white">Matching accuracy improvement</div>
              <motion.div 
                className="text-xs text-white mt-2 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                Focus: systems, backend, and cloud engineering
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
