import './footer.css';

const socialLinks = [
    ['https://github.com/Nikithavedanth', 'GitHub', 'bxl-github'],
    ['https://web.telegram.org/k/', 'Telegram', 'bxl-telegram'],
    ['https://www.linkedin.com/in/nikitha-vedant-madabhushi-0643b1182/', 'LinkedIn', 'bxl-linkedin'],
];

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h2 className="footer__title">Nikitha Vedant Madabhushi</h2>
                <nav aria-label="Footer navigation">
                    <ul className="footer__list">
                        <li><a href="#about" className="footer__link">About me</a></li>
                        <li><a href="#internships" className="footer__link">Experience</a></li>
                        <li><a href="#projects" className="footer__link">Projects</a></li>
                        <li><a href="#contact" className="footer__link">Contact</a></li>
                    </ul>
                </nav>
                <div className="footer__social" aria-label="Social profiles">
                    {socialLinks.map(([href, label, icon]) => (
                        <a key={label} href={href} className="footer__social-link" aria-label={label} target="_blank" rel="noreferrer">
                            <i className={`bx ${icon}`} aria-hidden="true"></i>
                        </a>
                    ))}
                </div>
                <span className="footer__copy">© {new Date().getFullYear()} Nikitha Vedant Madabhushi. All rights reserved.</span>
            </div>
        </footer>
    );
}
