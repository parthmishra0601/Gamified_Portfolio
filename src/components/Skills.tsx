'use client'

import { motion } from 'framer-motion'
import { Code, Server, Cloud, Database, Globe } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Globe,
      color: 'from-blue-400 to-blue-600',
      skills: ['C', 'C++', 'Java', 'Python', 'SQL', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Backend & Frameworks',
      icon: Server,
      color: 'from-green-400 to-green-600',
      skills: ['Spring Boot', 'Node.js', 'Express.js', 'FastAPI', 'React.js', 'Next.js', 'RESTful APIs', 'MERN Stack']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-purple-400 to-purple-600',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      title: 'Databases, Security & QA',
      icon: Database,
      color: 'from-orange-400 to-orange-600',
      skills: ['Oracle', 'MySQL', 'MongoDB', 'PostgreSQL', 'SQLite', 'Redis', 'OAuth/JWT', 'Unit Testing', 'API Testing', 'Observability']
    },
    {
      title: 'Engineering Practices',
      icon: Code,
      color: 'from-rose-400 to-pink-600',
      skills: ['SOLID', 'OOP', 'API Design', 'Automation & QA', 'Risk Management', 'System Monitoring']
    }
  ]

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl p-6 hover-lift relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 glass rounded-full text-sm text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
