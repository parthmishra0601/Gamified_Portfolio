'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create and play background sound - intense track
    const sound = new Audio('https://cdn.freesound.org/previews/676/676402_14739410-lq.mp3')
    sound.loop = true
    sound.volume = 1.0 // Maximum volume
    sound.play().catch(err => console.log('Audio error:', err))
    audioRef.current = sound

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          if (audioRef.current) audioRef.current.pause()
          onLoadingComplete()
          return 100
        }
        return prev + 5 // Faster progress
      })
    }, 50)

    // Fallback timeout to ensure loading completes
    const timeout = setTimeout(() => {
      clearInterval(interval)
      if (audioRef.current) audioRef.current.pause()
      onLoadingComplete()
      setProgress(100)
    }, 5000) // Force complete after 5 seconds

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
      if (audioRef.current) audioRef.current.pause()
    }
  }, [onLoadingComplete])

  // Update audio volume separately to avoid render updates
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1.0
    }
  }, [progress])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm overflow-hidden">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="glass-strong rounded-3xl p-8 w-full max-w-md shadow-xl border border-primary/30 text-center"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Zap size={40} className="text-white" />
        </motion.div>

        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-3xl font-bold gradient-text mb-4"
        >
          Loading Portfolio Realm
        </motion.div>
        <p className="text-white mb-6">Initializing your personalized experience...</p>

        <div className="w-full h-3 glass rounded-full overflow-hidden relative mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.05 }}
          />
        </div>
        <div className="text-center text-white text-sm mb-8">{progress}% Complete</div>

        <div className="grid grid-cols-3 gap-3">
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
                className="text-sm font-bold text-white"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2 }}
              >
                {item}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0.3,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.8,
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute w-12 h-12 bg-primary/30 rounded-full blur-lg"
          />
        ))}
      </div>
    </div>
  )
}
