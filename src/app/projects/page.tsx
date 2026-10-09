import SiteLayout, { PageHeading } from '@/components/SiteLayout'
import { projects } from '@/lib/portfolio'

export default function ProjectsPage() {
  return (
    <SiteLayout activePath="/projects">
      <PageHeading eyebrow="Selected work" title="Projects" intro="Systems-focused projects spanning data platforms, developer tooling, application backends, and Windows performance monitoring." />
      <section className="portfolio-section route-section">
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-item" key={project.name}>
              <div className="project-title-row">
                <div>
                  <h2>{project.name}</h2>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <span className="project-index">0{index + 1}</span>
              </div>
              <div className="project-meta-row">
                <p>{project.stack}</p>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-link">View repo ↗</a>
                ) : null}
              </div>
              <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
