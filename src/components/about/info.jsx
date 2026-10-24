const highlights = [
  { number: '01', title: 'Technical range', detail: 'React, Angular, Java, and AWS' },
  { number: '02', title: 'Product experience', detail: 'Full-stack applications across industries' },
  { number: '03', title: 'What matters', detail: 'Reliable, responsive, accessible software' },
];

export function Info() {
  return (
    <div className="about__info" aria-label="At a glance">
      {highlights.map(({ number, title, detail }) => (
        <article className="about__fact" key={number}>
          <span className="about__fact-number">{number}</span>
          <div>
            <h3 className="about__title">{title}</h3>
            <p className="about__subtitle">{detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}