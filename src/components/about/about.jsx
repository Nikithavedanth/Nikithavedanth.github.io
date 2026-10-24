import './about.css';
import aboutImg from '../../assets/Nikki.jpg';
import CV from '../../assets/NikithaResume.pdf';
import { Info } from './info';
import { SectionHeading } from '../section-heading';

export function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="A little about me"
          title="About me"
          subtitle="The person behind the pixels"
        />
        <div className="about__story">
          <figure className="about__visual">
            <img src={aboutImg} alt="Nikitha Vedant Madabhushi" className="about__img" />
            <figcaption className="about__caption">
              Software developer · Full-stack, cloud &amp; AI
            </figcaption>
          </figure>
          <div className="about__data">
            <span className="about__kicker">A thoughtful approach to building</span>
            <p className="about__description">
              I’m a software developer with experience building full-stack products across
              banking, healthcare, and supply-chain platforms. I work across React, Angular,
              Java, and cloud services, bringing ideas from an early sketch through to
              dependable, production-ready software.
            </p>
            <p className="about__description">
              I care about the details that make technology work well for people: reliable
              systems behind the scenes and clear, accessible experiences on the screen.
              I’m also curious about how data and AI can make useful products even better.
            </p>
            <a href={CV} className="button about__resume" download>
              Download résumé <i className="uil uil-arrow-down" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <blockquote className="about__statement">
          <span className="about__statement-label">What guides my work</span>
          <p>Reliable systems. Clear, human experiences.</p>
        </blockquote>
        <Info />
      </div>
    </section>
  );
}