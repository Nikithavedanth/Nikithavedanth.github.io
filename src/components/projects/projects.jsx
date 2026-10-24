import './projects.css';
import { Data } from './data';
import { SectionHeading } from '../section-heading';

export function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Projects" subtitle="A selection of things I’ve designed, built, and explored." />
        <div className="projects__container">
          {Data.map(({ id, image, title, description }) => (
            <article className="projects__card" key={id}>
              <img className="projects__image" src={image} alt={`${title} project preview`} loading="lazy" />
              <div className="projects__body">
                <h3 className="projects__name">{title}</h3>
                <p className="projects__description">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
