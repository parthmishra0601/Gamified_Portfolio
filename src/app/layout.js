import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parth Mishra - Portfolio',
  description: 'Full Stack Developer & Cloud Computing Enthusiast',
  keywords: 'Parth Mishra, Web Developer, Full Stack, React, Next.js, Cloud Computing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {/* Background gradient circles */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-20 left-10 w-72 h-72 dark:bg-primary/20 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-96 h-96 dark:bg-secondary/20 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 dark:bg-accent/20 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
