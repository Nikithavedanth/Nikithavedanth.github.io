import { useEffect, useState } from 'react';

const professions = ['Frontend Developer', 'Software Developer', 'React Developer'];

export function Data() {
  const [professionIndex, setProfessionIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;

    const intervalId = window.setInterval(() => {
      setProfessionIndex((index) => (index + 1) % professions.length);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="home__data">
      <span className="home__eyebrow">Hello, I’m</span>
      <h1 className="home__title">Nikitha Vedant Madabhushi</h1>
      <h2 className="home__subtitle" aria-live="off">
        <span key={professions[professionIndex]} className="home__profession">
          {professions[professionIndex]}
        </span>
      </h2>
      <p className="home__description">
        I build reliable full-stack products and thoughtful interfaces across banking, healthcare, and supply-chain platforms.
      </p>
      <div className="home__actions">
        <a href="#contact" className="button">
          Let’s talk <i className="uil uil-arrow-up-right" aria-hidden="true"></i>
        </a>
        <a href="#projects" className="button button--outline">
          Explore my work
        </a>
      </div>
    </div>
  );
}
