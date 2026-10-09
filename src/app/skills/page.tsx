import SiteLayout, { PageHeading } from '@/components/SiteLayout'
import { skillGroups } from '@/lib/portfolio'

export default function SkillsPage() {
  return (
    <SiteLayout activePath="/skills">
      <PageHeading eyebrow="Technical toolkit" title="Skills" intro="Languages, frameworks, infrastructure, databases, and engineering practices used across my work." />
      <section className="portfolio-section route-section">
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.name}>
              <h2>{group.name}</h2>
              <p className="skill-list">{group.skills}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
