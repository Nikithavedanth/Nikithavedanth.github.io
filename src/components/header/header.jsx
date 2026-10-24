import './header.css';
import React, { useEffect, useState } from 'react';
const navigation = [
    ['home', 'Home'],
    ['about', 'About'],
    ['skills', 'Skills'],
    ['internships', 'Experience'],
    ['projects', 'Projects'],
    ['certifications', 'Certifications'],
    ['education', 'Education'],
    ['contact', 'Contact'],
];

export function Header(){
    const [showMenu, setShowMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return undefined;
        const sections = navigation.map(([id]) => document.getElementById(id)).filter(Boolean);
        const observer = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting);
            if (visibleSection) setActiveNav(visibleSection.target.id);
        }, { rootMargin: '-30% 0px -60% 0px' });
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const updateHeader = () => setScrolled(window.scrollY > 16);
        window.addEventListener('scroll', updateHeader, { passive: true });
        updateHeader();
        return () => window.removeEventListener('scroll', updateHeader);
    }, []);

    const closeMenu = () => {
        setShowMenu(false);
    };

    return(
        <header className={`header${scrolled ? ' scroll-header' : ''}${showMenu ? ' menu-open' : ''}`}>
            <nav className="nav container" aria-label="Main navigation">
                <div className="nav__left">
                    <button type="button" className="nav__toggle" aria-label={showMenu ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={showMenu} aria-controls="site-navigation" onClick={() => setShowMenu(!showMenu)}>
                        <span>{showMenu ? 'Close' : 'Menu'}</span>
                        <i className={`uil ${showMenu ? 'uil-times' : 'uil-bars'}`} aria-hidden="true"></i>
                    </button>
                </div>
                <div id="site-navigation" className={`nav__menu${showMenu ? ' show-menu' : ''}`}>
                    <ul className="nav__list">
                        {navigation.map(([id, label]) => (
                            <li key={id}>
                                <a href={`#${id}`} onClick={closeMenu} className={`nav__link${activeNav === id ? ' active-link' : ''}`}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="nav__social">
                    <a href="#contact">Talk to me</a>
                    <a href="https://www.linkedin.com/in/nikitha-vedant-madabhushi-0643b1182/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/Nikithavedanth" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </nav>
        </header>
    )
}