"use client";

import { useState, useEffect } from "react";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Framework", href: "#framework" },
    { label: "Services", href: "#services" },
    { label: "Topics", href: "#topics" },
    { label: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMobile = () => setMenuOpen(false);

    return (
        <>
            <nav className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
                <div className="nav-inner">
                    <a href="#" className="nav-logo">
                        Ife <span>Inspires</span>
                    </a>

                    <ul className="nav-links">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="nav-link">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#book"
                                className="nav-cta"
                            >
                                Book Ife
                            </a>
                        </li>
                    </ul>

                    <button
                        className={`menu-toggle ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>

            <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
                {navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="mobile-nav-link"
                        onClick={closeMobile}
                    >
                        {item.label}
                    </a>
                ))}
                <a href="#book" className="mobile-nav-cta" onClick={closeMobile}>
                    Book Ife
                </a>
            </div>
        </>
    );
}