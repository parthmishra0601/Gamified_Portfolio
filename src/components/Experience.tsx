'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'Software Development Intern',
      company: 'Tally Solutions',
      location: 'Bangalore, India',
      period: 'May – August 2026',
      summary: 'Designed an in-house Go streaming platform for TallyPrime (64-bit, Windows-only), replacing paid third-party tools.',
      details: [
        'Built Go-based streaming and TCP server infrastructure for TallyPrime.',
        'Worked with Docker and Kubernetes to build fault-tolerant, high-performance systems.',
        'Applied CI/CD, quality assurance, OOP, and data structures and algorithms across the software development lifecycle.',
      ],
      technologies: ['Go', 'Docker', 'Kubernetes', 'CI/CD', 'Quality Assurance'],
    },
    {
      role: 'Web Development Intern',
      company: 'Zummit Infolabs',
      location: '',
      period: 'April – August 2024',
      summary: 'Built full-stack applications with React.js frontends and Python REST APIs.',
      details: [
        'Contributed across the software development lifecycle, applying OOP, data structures and algorithms, CI/CD, and QA.',
        'Delivered work that included an 85% lift in matching accuracy.',
      ],
      technologies: ['React.js', 'Python', 'REST APIs', 'CI/CD', 'QA'],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text text-white">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl p-8 hover-lift relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Briefcase size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
                      <p className="text-white font-semibold">{experience.company}{experience.location ? ` · ${experience.location}` : ''}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Calendar size={18} />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                </div>

                <p className="text-white mb-4">{experience.summary}</p>
                <ul className="space-y-3">
                  {experience.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-white">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span key={technology} className="px-3 py-1 glass rounded-full text-sm text-white">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
