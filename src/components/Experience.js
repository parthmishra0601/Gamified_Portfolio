'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, TrendingUp } from 'lucide-react'

export default function Experience() {
  const achievements = [
    { value: '~20%', label: 'User Interaction Increase' },
    { value: '~15%', label: 'Faster Page Load' },
    { value: '~30%', label: 'Interview Success Rate' },
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-8 glass rounded-3xl p-8 hover-lift relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Web Development Intern</h3>
                    <p className="text-white font-semibold">Zummit Infolabs</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Calendar size={18} />
                  <span className="text-sm text-white">Apr - Aug 2024</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white">
                    Engineered <span className="text-white font-semibold">immersive, premium, and executive pages</span> for the company website using ReactJS and Tailwind CSS, enhancing user experience and streamlining navigation for seamless browsing.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white">
                    Developed a comprehensive landing page with sections like Hero, Navbar, Testimonials, and About Us, resulting in an engaging and cohesive user interface that <span className="text-white font-semibold">increased user interaction by ~20%</span>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white">
                    Implemented React Router to ensure smooth transitions between integrated pages, improving user navigation efficiency and <span className="text-white font-semibold">reducing page load times by ~15%</span>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white">
                    Created a knowledge test feature for departments like AI/ML, Python, and Data Science to evaluate user proficiency, resulting in tailored internship and premium opportunities based on scores.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white">
                    Built <span className="text-white font-semibold">Bias-Zero</span>, an AI-driven mock interview platform that generates personalized questions from user-provided files, enhancing interview preparation and <span className="text-white font-semibold">boosting success rates by ~30%</span>.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['ReactJS', 'Tailwind CSS', 'React Router', 'AI/ML Integration'].map((tech) => (
                  <span key={tech} className="px-3 py-1 glass rounded-full text-sm text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievement Cards */}
          <div className="lg:col-span-4 space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="glass rounded-3xl p-6 hover-lift relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={20} className="text-accent" />
                    <div className="text-3xl font-bold gradient-text text-white">{achievement.value}</div>
                  </div>
                  <div className="text-sm text-white">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
