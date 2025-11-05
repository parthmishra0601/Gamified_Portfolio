'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

export default function Certifications() {
  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2024 Certified Foundations Associate',
      issuer: 'Oracle',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Programming in Java',
      issuer: 'NPTEL',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Computer Architecture',
      issuer: 'NPTEL',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Computer Networks and Internet Protocols',
      issuer: 'NPTEL',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-3xl p-6 hover-lift relative overflow-hidden group cursor-pointer"
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${cert.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Award size={24} />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="dark:text-gray-400 text-gray-700 hover:text-black transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.div>
                </div>

                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-sm dark:text-gray-400 text-gray-700">{cert.issuer}</p>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-xs text-primary font-semibold">Verified Certification</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
