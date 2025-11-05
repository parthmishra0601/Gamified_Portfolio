'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Lock, User, ArrowRight } from 'lucide-react'

export default function LoginModal({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsLoading(false)
            onLogin()
            return 100
          }
          return prev + 2
        })
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isLoading, onLogin])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && password) {
      setIsLoading(true)
      setProgress(0)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="glass-strong rounded-3xl p-8 w-full max-w-md shadow-xl border border-primary/30"
      >
        <div className="text-center mb-8">
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Lock size={30} className="text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold gradient-text">Access Parth's Portfolio</h2>
          <p className="text-gray-400 mt-2">Enter the game realm to explore</p>
        </div>

        {!isLoading ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <User size={16} /> Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-white/10"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <Lock size={16} /> Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-white/10"
                placeholder="Enter password"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold glow-effect flex items-center justify-center gap-2"
            >
              <ArrowRight size={18} />
              Enter Realm
            </motion.button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="text-center py-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-xl font-bold gradient-text"
              >
                Loading Game World...
              </motion.div>
              <p className="text-gray-400 mt-2">Preparing your personalized experience</p>
            </div>
            
            <div className="w-full h-2 glass rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>
            <div className="text-center text-gray-400 text-sm">{progress}% Complete</div>

            <div className="grid grid-cols-3 gap-2 mt-6">
              {['Skills', 'Projects', 'Experience'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 + 1 }}
                  className="p-3 glass rounded-lg"
                >
                  <div className="text-xs text-primary">Loading {item}</div>
                  <motion.div 
                    className="text-sm font-bold"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2 }}
                  >
                    {item}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
