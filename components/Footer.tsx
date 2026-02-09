export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="contact">
            <div className="footer-top-line" aria-hidden="true" />

            <div className="footer-inner">
                <div className="footer-brand">
                    <a href="#" className="footer-logo">
                        Ife <span>Inspires</span>
                    </a>
                    <p className="footer-powered">
                        Powered by <strong>Affrism</strong> — inspiration meets execution.
                    </p>
                </div>

                <nav className="footer-nav" aria-label="Footer navigation">
                    <a href="#about" className="footer-nav-link">About</a>
                    <a href="#framework" className="footer-nav-link">Framework</a>
                    <a href="#services" className="footer-nav-link">Services</a>
                    <a href="#topics" className="footer-nav-link">Topics</a>
                    <a href="#book" className="footer-nav-link">Book Ife</a>
                </nav>

                <div className="footer-contact">
                    <a href="mailto:info@affrism.com" className="footer-contact-link">
                        info@affrism.com
                    </a>
                    <div className="footer-socials">
                        <a
                            href="https://www.instagram.com/ifeinspiresco"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social"
                            aria-label="Instagram"
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                <rect x="1.5" y="1.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.2" />
                                <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.2" />
                                <circle cx="13.25" cy="4.75" r="0.85" fill="currentColor" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ifeoyelade"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social"
                            aria-label="LinkedIn"
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                <rect x="1.5" y="1.5" width="15" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.2" />
                                <path d="M6 8v4M6 6v.01M9.5 12V9.5a1.75 1.75 0 1 1 3.5 0V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">
                    &copy; {currentYear} Ife Inspires. All rights reserved.
                </p>
                <p className="footer-site-credit">
                    <a href="https://www.ifeinspires.com">ifeinspires.com</a>
                </p>
            </div>
        </footer>
    );
}