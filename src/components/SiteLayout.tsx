import Link from 'next/link'
import type { ReactNode } from 'react'
import { profile } from '@/lib/portfolio'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/education', label: 'Education' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/contact', label: 'Contact' },
]

type SiteLayoutProps = {
  activePath: string
  children: ReactNode
}

export function PageHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <header className="page-heading">
      <p className="section-kicker">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      <p className="section-intro">{intro}</p>
    </header>
  )
}

export default function SiteLayout({ activePath, children }: SiteLayoutProps) {
  return (
    <>
      <div className="code-backdrop" aria-hidden="true">
        <span>&lt;/&gt;</span>
        <span>{'{ }'}</span>
        <span>() =&gt;</span>
        <span>0x01</span>
        <span>[ ]</span>
        <span>&amp;&amp;</span>
        <span>;</span>
        <span>fn()</span>
      </div>
      <header className="site-header">
        <div className="portfolio-shell site-nav">
          <Link className="site-brand" href="/"><span>PM</span> / Parth Mishra</Link>
          <nav className="site-links" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} aria-current={activePath === item.href ? 'page' : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <nav className="site-links" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} aria-current={activePath === item.href ? 'page' : undefined}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </header>
      <main className="portfolio-shell page-main" id="main-content">{children}</main>
      <footer className="site-footer portfolio-shell">
        <span>{profile.name}</span>
        <nav className="footer-links" aria-label="Professional profiles">
          <a href={profile.github} target="_blank" rel="noreferrer">github.com/parthmishra0601</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">www.linkedin.com/in/parthmishra06</a>
        </nav>
        <span>Software engineering · 2026</span>
      </footer>
    </>
  )
}
