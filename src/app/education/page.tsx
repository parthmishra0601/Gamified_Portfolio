import SiteLayout, { PageHeading } from '@/components/SiteLayout'
import { education } from '@/lib/portfolio'

export default function EducationPage() {
  return (
    <SiteLayout activePath="/education">
      <PageHeading eyebrow="Education" title="Computer Science & Engineering" intro={`${education.degree}, ${education.specialization} · ${education.institution}`} />
      <section className="portfolio-section route-section">
        <div className="resume-grid">
          <article className="resume-item">
            <p className="section-kicker">Degree</p>
            <h2>{education.degree}</h2>
            <p>{education.specialization}</p>
          </article>
          <article className="resume-item">
            <p className="section-kicker">Institution</p>
            <h2>{education.institution}</h2>
            <p>{education.location}</p>
          </article>
          <article className="resume-item">
            <p className="section-kicker">Dates</p>
            <h2>{education.dates}</h2>
          </article>
          <article className="resume-item">
            <p className="section-kicker">Academic score</p>
            <h2>{education.cgpa} CGPA</h2>
          </article>
        </div>
        <div className="coursework-panel">
          <p className="section-kicker">Relevant coursework</p>
          <ul className="coursework-list">
            {education.coursework.map((course, index) => (
              <li key={course}><span>0{index + 1}</span>{course}</li>
            ))}
          </ul>
        </div>
      </section>
+    </SiteLayout>
  )
}
