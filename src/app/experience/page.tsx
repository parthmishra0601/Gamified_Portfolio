import SiteLayout, { PageHeading } from '@/components/SiteLayout'
import { experience } from '@/lib/portfolio'

export default function ExperiencePage() {
  return (
    <SiteLayout activePath="/experience">
      <PageHeading eyebrow="Experience" title="Engineering in practice" intro="Internship experience across backend systems, full-stack development, and production engineering." />
      <section className="portfolio-section route-section">
        <div className="resume-grid">
          {experience.map((item) => (
            <article className="resume-item" key={item.company}>
              <h2>{item.role} · {item.company}</h2>
              <p className="resume-meta">{item.meta}</p>
              <p>{item.summary}</p>
              <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
