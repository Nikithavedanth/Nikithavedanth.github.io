import { SectionHeading } from '../section-heading';
import './certifications.css';

const certifications = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    icon: 'uil-chart-line',
  },
  {
    title: 'Secure Software Development Lifecycle',
    issuer: 'C-DAC Professional Certification',
    icon: 'uil-shield-check',
  },
  {
    title: 'AI Hackathon Certification',
    issuer: 'Hackathon',
    icon: 'uil-robot',
  },
];

export function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <SectionHeading eyebrow="Ongoing learning" title="Certifications" subtitle="Formal learning across data, secure development, and AI." />
        <div className="certifications__grid">
          {certifications.map(({ title, issuer, icon }) => (
            <article className="certification__card" key={title}>
              <span className="certification__icon" aria-hidden="true"><i className={`uil ${icon}`}></i></span>
              <div>
                <h3 className="certification__title">{title}</h3>
                <p className="certification__issuer">{issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
