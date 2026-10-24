import './contact.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SectionHeading } from '../section-heading';

const contactMethods = [
    { title: 'Email', value: 'nikithavedanth@gmail.com', href: 'mailto:nikithavedanth@gmail.com', icon: 'bx-mail-send' },
    { title: 'Phone', value: '+91 79952 70187', href: 'tel:+917995270187', icon: 'bx-phone' },
    { title: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/nikitha-vedant-madabhushi-0643b1182/', icon: 'bxl-linkedin' },
];

export function Contact() {
    const [sendStatus, setSendStatus] = useState('idle');

    const sendEmail = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setSendStatus('sending');
        try {
            await emailjs.sendForm('service_jhnsvww', 'template_s2yvsbb', form, 'DhHImJwVvadAQohx2');
            form.reset();
            setSendStatus('sent');
        } catch (error) {
            console.error('Unable to send contact message.', error);
            setSendStatus('error');
        }
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <SectionHeading eyebrow="Have an idea?" title="Let’s make it happen" subtitle="Have a project in mind or just want to say hello? I’d love to hear from you." />
                <div className="contact__container grid">
                    <div className="contact__content">
                        <h3 className="contact__title">Find me here</h3>
                        <div className="contact__info">
                            {contactMethods.map(({ title, value, href, icon }) => (
                                <div className="contact__card" key={title}>
                                    <i className={`bx ${icon} contact__card-icon`} aria-hidden="true"></i>
                                    <h4 className="contact__card-title">{title}</h4>
                                    <span className="contact__card-data">{value}</span>
                                    <a href={href} className="contact__button" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                                        {title === 'Email' ? 'Write me' : 'Connect'} <i className="bx bx-right-arrow-alt contact__button-icon" aria-hidden="true"></i>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="contact__content">
                        <h3 className="contact__title">Send a message</h3>
                        <form onSubmit={sendEmail} className="contact__form">
                            <div className="contact__form-div">
                                <label htmlFor="contact-name" className="contact__form-tag">Your name</label>
                                <input id="contact-name" type="text" name="name" className="contact__form-input" placeholder="Jane Smith" autoComplete="name" required />
                            </div>
                            <div className="contact__form-div">
                                <label htmlFor="contact-email" className="contact__form-tag">Email address</label>
                                <input id="contact-email" type="email" name="email" className="contact__form-input" placeholder="jane@example.com" autoComplete="email" required />
                            </div>
                            <div className="contact__form-div contact__form-area">
                                <label htmlFor="contact-project" className="contact__form-tag">How can I help?</label>
                                <textarea id="contact-project" name="project" className="contact__form-input" placeholder="Tell me a little about your project..." required></textarea>
                            </div>
                            <button type="submit" disabled={sendStatus === 'sending'} className="button">
                                {sendStatus === 'sending' ? 'Sending...' : 'Send message'}
                                <i className="uil uil-message" aria-hidden="true"></i>
                            </button>
                            {sendStatus === 'sent' && <p role="status" className="contact__form-status">Your message was sent. Thank you!</p>}
                            {sendStatus === 'error' && <p role="alert" className="contact__form-status">Your message could not be sent. Please try again or email me directly.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
