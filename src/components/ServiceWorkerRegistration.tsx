'use client'

import { useEffect } from 'react'

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      return
    }

    const workerUrl = process.env.NODE_ENV === 'production' ? '/sw.js' : '/sw.js?dev=1'

    navigator.serviceWorker.register(workerUrl).catch((error) => {
      console.error('Service worker registration failed:', error)
    })
  }, [])

  return null
}
