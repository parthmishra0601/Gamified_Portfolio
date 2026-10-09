import { IBM_Plex_Sans, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import './globals.css'

const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})
const displayFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})

export const metadata = {
  title: 'Parth Mishra - Portfolio',
  description: 'Parth Mishra is a software engineer focused on backend systems, cloud infrastructure, and full-stack development.',
  keywords: 'Parth Mishra, Web Developer, Full Stack, React, Next.js, Cloud Computing',
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Parth Mishra',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <ServiceWorkerRegistration />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
