import { useState } from 'react';
import './education.css';
import { SectionHeading } from '../section-heading';

const education = [
  { title: 'M.S. in Applied Computer Science', school: 'Northwest Missouri State University', years: '2022–2023', grade: '3.9 GPA' },
  { title: 'B.Tech in Electrical and Electronics Engineering', school: 'Mahatma Gandhi Institute of Technology', years: '2018–2022', grade: '3.0 GPA' },
  { title: '12th grade', school: 'Bhavans Sri RamaKrishna Vidyalaya', years: '2017–2018', grade: '8.7 / 10.0' },
  { title: '10th grade', school: 'Cal Public School', years: '2015–2016', grade: '9.4 / 10.0' },
];

export function Education() {
  const [showGrades, setShowGrades] = useState(false);

  return (
    <section className="qualification section" id="education">
      <div className="container">
        <SectionHeading eyebrow="Learning journey" title="Education" subtitle="The foundations behind my work." />
        <div className="qualification__container">
          <div className="qualification__tabs" role="tablist" aria-label="Education details">
            <button type="button" role="tab" id="education-tab" aria-selected={!showGrades} aria-controls="education-panel" onClick={() => setShowGrades(false)} className={`qualification__button${!showGrades ? ' qualification__active' : ''}`}>
              <i className="uil uil-graduation-cap qualification__icon" aria-hidden="true"></i> Education
            </button>
            <button type="button" role="tab" id="grades-tab" aria-selected={showGrades} aria-controls="education-panel" onClick={() => setShowGrades(true)} className={`qualification__button${showGrades ? ' qualification__active' : ''}`}>
              <i className="uil uil-chart qualification__icon" aria-hidden="true"></i> Grades
            </button>
          </div>
          <div className="qualification__sections">
            <div id="education-panel" role="tabpanel" aria-labelledby={showGrades ? 'grades-tab' : 'education-tab'} className="qualification__content qualification__content-active">
              {education.map((item) => (
                <div className="qualification__data" key={item.title}>
                  <div className="qualification__entry">
                    <h3 className="qualification__title">{showGrades ? item.grade : item.title}</h3>
                    <span className="qualification__subtitle">{showGrades ? 'Overall grade' : item.school}</span>
                    <div className="qualification__calendar"><i className="uil uil-calendar-alt" aria-hidden="true"></i> {item.years}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
