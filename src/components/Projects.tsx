'use client'

import { motion } from 'framer-motion'
import { Zap, Database, ShieldCheck, BookOpen, Activity } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'PolyGlot',
      subtitle: 'Multi-Database Enterprise Backend',
      description: 'An enterprise backend combining a Python core engine with a Java and Spring Boot API layer, designed to work across file formats and relational database systems.',
      icon: Database,
      color: 'from-cyan-500 to-blue-500',
      achievements: [
        'Built a Python 3.13 core engine with SQLite and a Java 21, Spring Boot 3.2.x REST API layer.',
        'Designed multi-database support for SQL Server, Oracle, PostgreSQL, and MySQL.',
        'Included ingestion for CSV, TSV, JSON, PDF, DOCX, and XLSX data, with AWS in the project stack.'
      ],
      tech: ['Java 21', 'Spring Boot 3.2.x', 'Python 3.13', 'AWS', 'SQLite', 'SQL Server', 'Oracle', 'PostgreSQL', 'MySQL'],
      link: 'https://github.com/parthmishra0601/PolyGlot'
    },
    {
      title: 'CodeGuard',
      subtitle: 'Zero-command code review and GitHub automation',
      description: 'A Python automation system that reviews changes before push, creates GitHub repositories when needed, and keeps developer workflows moving with minimal manual steps.',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-500',
      achievements: [
        'Runs automated review checks before GitHub push and enforces quality gates for clean repository state.',
        'Creates repositories, installs pre-commit hooks, and supports both web and native local clients for zero-command operation.'
      ],
      tech: ['Python', 'GitHub CLI', 'Flask', 'Black', 'Pylint', 'Pre-commit'],
      link: 'https://github.com/parthmishra0601/GithubPush/tree/codeguard/20260823-212202440484'
    },
    {
      title: 'BookBot',
      subtitle: 'Digital Library System',
      description: 'A full-stack digital library application built around a relational MySQL database and REST APIs.',
      icon: BookOpen,
      color: 'from-amber-500 to-orange-500',
      achievements: [
        'Designed a normalized MySQL schema for authentication, inventory, rentals, and notifications; indexing improved query performance by 25%.',
        'Built REST APIs with Node.js and Express.js, with React on the frontend and Firebase in the stack.',
        'Optimized search and recommendation queries, reducing transaction failures by 20% and average response time by 30%.'
      ],
      tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'Firebase'],
      link: 'https://github.com/parthmishra0601/Bookbot'
    },
    {
      title: 'TaskAutomator',
      subtitle: 'Real-Time System Resource Optimizer',
      description: 'A Windows system monitoring and automation tool with a real-time FastAPI dashboard.',
      icon: Activity,
      color: 'from-rose-500 to-pink-500',
      achievements: [
        'Monitored CPU, RAM, disk, and per-process usage at sub-second intervals.',
        'Provided live metrics, alert thresholds, and task controls through a FastAPI dashboard.',
        'Stress testing reduced memory usage and inefficiencies by more than 50%.'
      ],
      tech: ['Python', 'FastAPI', 'Windows API'],
      link: 'https://github.com/parthmishra0601/TaskAutomator/tree/codeguard/20260829-183132296305'
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
                <div className="grid grid-cols-1 gap-6">
                  {/* Project Header */}
                  <div>
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
                      </div>
                    </div>

                    <p className="text-white mb-6">{project.description}</p>

                    {project.link ? (
                      <div className="mb-6">
                        <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200 hover:bg-emerald-500/20 transition-colors">
                          View repository ↗
                        </a>
                      </div>
                    ) : null}

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

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
