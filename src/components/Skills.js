'use client'

import { motion } from 'framer-motion'
import { Code, Server, Cloud, Database, Globe } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-400 to-blue-600',
      skills: [
        { name: 'ReactJS', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML/CSS', level: 92 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-400 to-green-600',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'Python', level: 82 },
        { name: 'Flask', level: 78 },
        { name: 'REST APIs', level: 80 }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'from-purple-400 to-purple-600',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'Firebase', level: 80 },
        { name: 'AWS', level: 65 },
        { name: 'Azure', level: 60 },
        { name: 'Docker', level: 70 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Code,
      color: 'from-orange-400 to-orange-600',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'CI/CD', level: 70 },
        { name: 'Webpack', level: 65 },
        { name: 'Jest', level: 60 },
        { name: 'Figma', level: 55 }
      ]
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
          Skill Arsenal
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

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1, duration: 0.8 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-1">
                        <div className="flex justify-between mb-1 text-sm text-white">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                          <div
                            className={`h-2.5 bg-gradient-to-r ${category.color} rounded-full`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                      <motion.div 
                        className="text-xs text-yellow-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.1 + 0.8, duration: 0.5 }}
                      >
                        {skill.level >= 80 ? 'Mastered' : skill.level >= 60 ? 'Proficient' : 'Learning'}
                      </motion.div>
                    </motion.div>
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
