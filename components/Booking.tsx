"use client";

import { useEffect, useRef } from "react";

export default function Booking() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll(".reveal");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="booking" id="book" ref={sectionRef}>
            <div className="booking-accent-left" aria-hidden="true" />
            <div className="booking-accent-right" aria-hidden="true" />

            <div className="booking-inner">
                <div className="booking-message">
                    <p className="booking-label reveal">Let&apos;s Work Together</p>

                    <h2 className="booking-heading reveal">
                        Let&apos;s build something
                        <span className="booking-heading-em"> that matters.</span>
                    </h2>

                    <blockquote className="booking-quote reveal">
                        I&apos;d love to hear about your event, your vision, and how I can
                        support it. Whether it&apos;s a keynote, workshop, coaching
                        engagement, or a strategic collaboration, let&apos;s start the
                        conversation.
                    </blockquote>

                    <div className="booking-signature reveal" aria-hidden="true">
                        <span className="booking-sig-dash" />
                        <span className="booking-sig-name">Ife</span>
                    </div>

                    <div className="booking-contact reveal">
                        <a href="mailto:info@affrism.com" className="booking-contact-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                                <path d="M1.5 4.5L8 9l6.5-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            info@affrism.com
                        </a>
                        <a href="https://www.instagram.com/ifeinspiresco" target="_blank" rel="noopener noreferrer" className="booking-contact-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.2" />
                                <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" />
                                <circle cx="11.75" cy="4.25" r="0.75" fill="currentColor" />
                            </svg>
                            @ifeinspiresco
                        </a>
                        <a href="https://www.linkedin.com/in/ifeoyelade" target="_blank" rel="noopener noreferrer" className="booking-contact-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                <rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.2" />
                                <path d="M5 7v4M5 5v.01M8 11V8.5a1.5 1.5 0 1 1 3 0V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            /ifeoyelade
                        </a>
                    </div>
                </div>

                <div className="booking-calendly reveal">
                    <div className="booking-calendly-header">
                        <span className="booking-calendly-dot" />
                        <span className="booking-calendly-title">Schedule a Call</span>
                    </div>
                    <div className="booking-calendly-embed">
                        <iframe
                            src="https://calendly.com/ifeinspires"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Book a call with Ife Oyelade"
                            loading="lazy"
                        />
                        <noscript>
                            <p style={{ padding: "2rem", textAlign: "center", color: "rgba(255,255,255,0.5)" }}>
                                Please enable JavaScript to view the booking calendar, or email{" "}
                                <a href="mailto:info@affrism.com" style={{ color: "#cba349" }}>info@affrism.com</a> directly.
                            </p>
                        </noscript>
                    </div>
                    <p className="booking-calendly-fallback">
                        Prefer email?{" "}
                        <a href="mailto:info@affrism.com">info@affrism.com</a>
                    </p>
                </div>
            </div>
        </section>
    );
}