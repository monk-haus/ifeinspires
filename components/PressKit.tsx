"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function PressKit() {
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
            { threshold: 0.15 }
        );

        const elements = sectionRef.current?.querySelectorAll(".reveal");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="press" id="press" ref={sectionRef}>
            <div className="press-inner">
                <div className="press-image-col reveal">
                    <div className="press-image-frame">
                        <Image
                            src="/assets/images/ife-press.jpg"
                            alt="Ife Oyelade — press and media"
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                        <div className="press-image-overlay" aria-hidden="true" />
                    </div>
                </div>

                <div className="press-content">
                    <p className="press-label reveal">Media & Collaborations</p>

                    <h2 className="press-heading reveal">
                        For bookings, interviews
                        <span className="press-heading-em"> & media features</span>
                    </h2>

                    <p className="press-desc reveal">
                        Want to learn more about Ife, the INSPIRE™ Framework, and available
                        speaking or consulting services? Download the official press kit for
                        bios, signature topics, and brand assets, all in one place.
                    </p>

                    <div className="press-actions reveal">
                        <a
                            href="/assets/Ife_Oyelade_Press_Kit.pdf"
                            className="press-cta-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                <path d="M9 2v10M5 8l4 4 4-4M3 14h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Download Press Kit</span>
                        </a>
                        <a href="mailto:info@affrism.com" className="press-cta-secondary">
                            Contact for inquiries →
                        </a>
                    </div>

                    <div className="press-social reveal">
                        <a
                            href="https://www.instagram.com/ifeinspiresco"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="press-social-link"
                        >
                            Instagram
                        </a>
                        <span className="press-social-sep" aria-hidden="true">/</span>
                        <a
                            href="https://www.linkedin.com/in/ifeoyelade"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="press-social-link"
                        >
                            LinkedIn
                        </a>
                        <span className="press-social-sep" aria-hidden="true">/</span>
                        <a
                            href="mailto:info@affrism.com"
                            className="press-social-link"
                        >
                            info@affrism.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}