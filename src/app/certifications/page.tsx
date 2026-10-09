import SiteLayout, { PageHeading } from '@/components/SiteLayout'
import { achievements, certifications } from '@/lib/portfolio'

export default function CertificationsPage() {
  return (
    <SiteLayout activePath="/certifications">
      <PageHeading eyebrow="Credentials" title="Certifications & achievements" intro="Professional certifications and measurable progress in competitive programming and engineering work." />
      <section className="portfolio-section route-section">
        <div className="resume-grid">
          {certifications.map((certification, index) => (
            <article className="resume-item" key={certification.name}>
              <p className="section-kicker">Certification · 0{index + 1}</p>
              <h2>{certification.name}</h2>
              <p>{certification.issuer}</p>
              {certification.issued && certification.expires && (
                <p className="resume-meta">Issued {certification.issued} · Expires {certification.expires}</p>
              )}
              {certification.credentialUrl && (
                <a className="text-link" href={certification.credentialUrl} target="_blank" rel="noreferrer">
                  View certificate <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
          {achievements.map((achievement, index) => (
            <article className="resume-item" key={achievement.name}>
              <p className="section-kicker">Achievement · 0{index + 1}</p>
              <h2>{achievement.name}</h2>
              <p>{achievement.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
