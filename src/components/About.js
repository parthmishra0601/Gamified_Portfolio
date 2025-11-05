'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, BookOpen } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 glass rounded-3xl p-8 hover-lift relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    BTech in Computer Science & Engineering
                  </h4>
                  <p className="text-primary font-semibold mb-2">
                    Specialization: Cloud Computing
                  </p>
                  <p className="text-gray-400">
                    SRM Institute of Science and Technology, Chennai, India
                  </p>
                </div>

                <div className="flex items-center gap-2 dark:text-gray-300 text-gray-800">
                  <Calendar size={18} className="text-primary" />
                  <span>Expected September 2026</span>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm dark:text-gray-400 text-gray-700 mb-3 flex items-center gap-2">
                    <BookOpen size={18} className="text-primary" />
                    <span className="font-semibold">Relevant Coursework:</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Database Management Systems', 'Data Structures & Algorithms', 'Operating Systems', 'Computer Networks'].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 glass rounded-full text-sm dark:text-gray-300 text-gray-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-6 hover-lift">
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="dark:text-gray-400 text-gray-700">Technologies</div>
            </div>
            <div className="glass rounded-3xl p-6 hover-lift">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="dark:text-gray-400 text-gray-700">Projects Completed</div>
            </div>
            <div className="glass rounded-3xl p-6 hover-lift">
              <div className="text-4xl font-bold gradient-text mb-2">4+</div>
              <div className="dark:text-gray-400 text-gray-700">Certifications</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
