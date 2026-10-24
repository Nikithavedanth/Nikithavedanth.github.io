const socialLinks = [
  { href: 'https://github.com/Nikithavedanth', label: 'GitHub', icon: 'uil-github' },
  { href: 'https://web.telegram.org/k/', label: 'Telegram', icon: 'uil-telegram' },
  { href: 'https://www.linkedin.com/in/nikitha-vedant-madabhushi-0643b1182/', label: 'LinkedIn', icon: 'uil-linkedin' },
];

export function Social() {
  return (
    <div className="home__social" aria-label="Social profiles">
      {socialLinks.map(({ href, label, icon }) => (
        <a key={label} href={href} className="home__social-icon" aria-label={label} target="_blank" rel="noreferrer">
          <i className={`uil ${icon}`} aria-hidden="true"></i>
        </a>
      ))}
    </div>
  );
}
