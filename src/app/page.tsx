import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'
import { achievements, profile, projects } from '@/lib/portfolio'

export default function Home() {
  return (
    <SiteLayout activePath="/">
      <>
        <section className="hero-section" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">Software engineer · Backend, systems & cloud</p>
            <h1 id="hero-title" className="hero-title">Parth <span>Mishra</span></h1>
            <p className="hero-lede">{profile.summary}</p>
            <div className="hero-actions">
              <Link className="action-link primary" href="/projects">Selected projects</Link>
              <a className="action-link" href={profile.resume} target="_blank" rel="noreferrer">Download Resume</a>
              <Link className="action-link" href="/experience">Experience</Link>
              <a className="action-link" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="action-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <aside className="hero-facts" aria-label="Profile details">
            <div className="hero-fact"><span className="hero-fact-index">01</span><div><span className="fact-label">Current role</span><p className="fact-value">{profile.currentTitle}<br />{profile.currentCompany}</p></div></div>
            <div className="hero-fact"><span className="hero-fact-index">02</span><div><span className="fact-label">Education</span><p className="fact-value">{profile.degree}<br />{profile.institution}</p></div></div>
            <div className="hero-fact"><span className="hero-fact-index">03</span><div><span className="fact-label">Academic score</span><p className="fact-value">{profile.cgpa} CGPA</p></div></div>
          </aside>
        </section>

        <section className="home-highlights" aria-label="Career highlights">
          {achievements.map((achievement) => (
            <article className="home-highlight" key={achievement.name}>
              <p className="fact-label">{achievement.name}</p>
              <p className="fact-value">{achievement.detail}</p>
            </article>
          ))}
        </section>

        <section className="portfolio-section home-projects">
          <div className="section-heading">
            <p className="section-kicker">Selected work</p>
            <div>
              <h2 className="section-title">Built to solve real engineering problems</h2>
              <p className="section-intro">A preview of data platforms and developer tooling. Browse the projects page for the full technical breakdown.</p>
              <Link className="text-link" href="/projects">Explore all projects <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="project-list">
            {projects.slice(0, 2).map((project, index) => (
              <article className="project-item" key={project.name}>
                <div className="project-title-row">
                  <div>
                    <h3>{project.name}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <span className="project-index">0{index + 1}</span>
                </div>
                <div className="project-meta-row">
                  <p>{project.stack}</p>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-link">Repo ↗</a>
                  ) : null}
                </div>
                <p>{project.details[0]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-next-step">
          <p className="section-kicker">Explore the portfolio</p>
          <div className="home-route-links">
            <Link href="/experience">Experience <span aria-hidden="true">↗</span></Link>
            <Link href="/skills">Technical skills <span aria-hidden="true">↗</span></Link>
            <Link href="/education">Education <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </>
    </SiteLayout>
  )
}
