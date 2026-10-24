import React, { useState } from 'react';
import { Data } from './data';
import './internships.css';
import { SectionHeading } from '../section-heading';

export function Internships() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section className="internships section" id="internships">
      <div className="container">
        <SectionHeading eyebrow="Where I’ve contributed" title="Experience" subtitle="A few places where I’ve learned, collaborated, and made an impact." />
        <div className="internships__container grid">
          {Data.map((item) => {
            const isExpanded = expandedCard === item.company;
            return (
              <article className="internships__card" key={item.company}>
                <div className="internships__content">
                  <div className="internship__heading">
                    <div>
                      <h3 className="internship__title">{item.role}</h3>
                      <p className="internship__company">{item.company}</p>
                      <span className="internship__location">{item.location}</span>
                    </div>
                    <span className="internship__dates">{item.dates}</span>
                  </div>
                  <p className="internship__description">{item.summary}</p>
                  {isExpanded && (
                    <ul className="internship__details">
                      {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  )}
                  <button type="button" className="internships__details-button" aria-expanded={isExpanded} onClick={() => setExpandedCard(isExpanded ? null : item.company)}>
                    {isExpanded ? 'Show less' : 'Key contributions'} <i className={`uil ${isExpanded ? 'uil-arrow-up' : 'uil-arrow-right'}`} aria-hidden="true"></i>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
