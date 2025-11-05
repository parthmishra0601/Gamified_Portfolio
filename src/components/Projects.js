'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Zap, Database } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'GreenCart AI',
      subtitle: 'Eco-Friendly Shopping Assistant',
      institution: 'SRM University',
      period: 'Jun 2025 – Jul 2025',
      description: 'Developed a web-based shopping assistant that promotes eco-friendly consumer behavior by assigning products an eco-score and recommending greener alternatives using an AI-powered backend, designed as a part of the Walmart Sparkathon.',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      achievements: [
        'Built a fully responsive frontend using ReactJS, integrated with a Flask backend to handle AI model inference, product comparison, and routing logic, ensuring a smooth and fast user experience.',
        'Designed and implemented an AI engine leveraging TF-IDF vectorization to analyze product descriptions and recommend sustainable alternatives, increasing relevance and personalization in product suggestions.',
        'Integrated Firebase for secure user authentication and real-time database handling, enabling user-specific dashboards, sustainability tips, and leaderboard features to gamify and track eco-conscious behavior.',
        'Ensured end-to-end deployment and scalability of the application using Vercel for frontend hosting and Render for backend services, optimizing load time and performance during user testing.',
        'Collaborated with a 3-member team focusing on AI development, UX design, and full-stack integration, delivering a complete solution in under four weeks for a real-world sustainability challenge.'
      ],
      tech: ['ReactJS', 'Flask', 'Firebase', 'Python', 'TF-IDF', 'Web Development', 'API Integration', 'Sustainability Solutions', 'Git & GitHub'],
      liveLink: 'https://greencart-frontend-8hfz.vercel.app/',
      githubLink: 'https://github.com/parthmishra0601/Greencart-Frontend'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-3xl p-8 hover-lift relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700`}></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Project Header */}
                  <div className="lg:col-span-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <project.icon size={32} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                            <p className="text-primary font-semibold">{project.subtitle}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-white text-sm">
                          <span>{project.institution}</span>
                          <span>•</span>
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-white mb-6">{project.description}</p>

                    <div className="space-y-3 mb-6">
                      {project.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <Zap size={16} className="text-primary mt-1 flex-shrink-0" />
                          <p className="text-sm text-white">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 glass rounded-full text-sm text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.liveLink, '_blank')}
                      className="glass-strong rounded-2xl p-6 flex items-center justify-center gap-3 hover:glow-effect transition-all"
                    >
                      <ExternalLink size={20} />
                      <span className="font-semibold text-white">View Live</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.githubLink, '_blank')}
                      className="glass-strong rounded-2xl p-6 flex items-center justify-center gap-3 hover:glow-effect transition-all"
                    >
                      <Github size={20} />
                      <span className="font-semibold text-white">View Code</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
