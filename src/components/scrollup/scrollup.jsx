import { useEffect, useState } from 'react';
import './scrollup.css';

export function ScrollUp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`scrollup${visible ? ' show-scroll' : ''}`} aria-label="Back to top" aria-hidden={!visible} tabIndex={visible ? 0 : -1}>
      <i className="uil uil-arrow-up scrollup__icon" aria-hidden="true"></i>
    </button>
  );
}
