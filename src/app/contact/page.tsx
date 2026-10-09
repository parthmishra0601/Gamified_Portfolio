import SiteLayout, { PageHeading } from '@/components/SiteLayout'
import { profile } from '@/lib/portfolio'

export default function ContactPage() {
  return (
    <SiteLayout activePath="/contact">
      <PageHeading eyebrow="Contact" title="Let’s talk engineering" intro="For technical roles, collaborations, or a conversation about systems and software." />
      <section className="portfolio-section route-section">
        <div className="contact-grid">
          <a className="contact-item" href={`mailto:${profile.email}`}>
            <span className="fact-label">Email</span>
            <span className="contact-value">{profile.email}</span>
            <span className="contact-action">Send an email <span aria-hidden="true">↗</span></span>
          </a>
          <a className="contact-item" href="tel:+919971546328">
            <span className="fact-label">Phone</span>
            <span className="contact-value">{profile.phone}</span>
            <span className="contact-action">Call <span aria-hidden="true">↗</span></span>
          </a>
          <a className="contact-item" href={profile.github} target="_blank" rel="noreferrer">
            <span className="fact-label">GitHub</span>
            <span className="contact-value">github.com/parthmishra0601</span>
            <span className="contact-action">View profile <span aria-hidden="true">↗</span></span>
          </a>
          <a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="fact-label">LinkedIn</span>
            <span className="contact-value">www.linkedin.com/in/parthmishra06</span>
            <span className="contact-action">View profile <span aria-hidden="true">↗</span></span>
          </a>
        </div>
      </section>
    </SiteLayout>
  )
}
