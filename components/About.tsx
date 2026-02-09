"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import ifeAbout from "@/assets/images/ife-about.jpg";

export default function About() {
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
            { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
        );

        const elements = sectionRef.current?.querySelectorAll(".reveal");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="about-top-line" aria-hidden="true" />

            <div className="about-quote-block reveal">
                <blockquote className="about-quote">
                    <span className="about-quote-mark" aria-hidden="true">"</span>
                    I don&apos;t just talk about innovation, I make it tangible because when we
                    match intention with execution, we don&apos;t just shift
                    conversations — we shift outcomes.
                </blockquote>
                <cite className="about-quote-cite">— Ife Oyelade</cite>
            </div>

            <div className="about-grid">
                <div className="about-image-col reveal">
                    <div className="about-image-frame">
                        <Image
                            src={ifeAbout}
                            alt="Ife Oyelade speaking at a workshop"
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="about-img"
                        />
                    </div>
                    <div className="about-image-accent" aria-hidden="true" />
                </div>

                <div className="about-text-col">
                    <p className="about-label reveal">About Ife</p>

                    <h2 className="about-heading reveal">
                        Strategist. Community builder.
                        <span className="about-heading-em"> Transformational leader.</span>
                    </h2>

                    <div className="about-body reveal">
                        <p>
                            Ife Oyelade&apos;s work lives at the intersection of tech,
                            consulting, entrepreneurship, and inclusive leadership. With over a
                            decade of experience leading digital transformation, coaching
                            emerging leaders, and building scalable programs, Ife brings a rare
                            blend of clarity, authenticity, and execution to every room she
                            enters.
                        </p>
                        <p>
                            Her speaking brand, <em>Ife Inspires</em>, is powered by her
                            consulting firm, <strong>Affrism</strong>, a Black-owned strategy
                            and innovation consultancy that exists to help people and
                            organizations see challenges through new lenses. Affrism (a fusion
                            of &ldquo;Africa&rdquo; and &ldquo;prism&rdquo;) reflects
                            Ife&apos;s deep commitment to purpose, identity, and possibility.
                        </p>
                        <p>
                            With a background in law, an Executive MBA, and hands-on experience
                            delivering multimillion-dollar transformation projects, Ife blends
                            executive-level strategy with grassroots empathy.
                        </p>
                    </div>

                    <div className="about-credentials reveal">
                        <span className="about-credential">Law Background</span>
                        <span className="about-credential">Executive MBA</span>
                        <span className="about-credential">10+ Years in Digital Transformation</span>
                        <span className="about-credential">INSPIRE Framework™ Creator</span>
                    </div>

                    <a href="#framework" className="about-cta reveal">
                        <span>Explore the INSPIRE Framework™</span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M4 10h12M12 6l4 4-4 4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="about-partners reveal">
                <p className="about-partners-label">Trusted by & collaborated with</p>
                <div className="about-partners-list">
                    <span className="about-partner">Toronto Metropolitan University</span>
                    <span className="about-partner-dot" aria-hidden="true" />
                    <span className="about-partner">Casa Foundation</span>
                    <span className="about-partner-dot" aria-hidden="true" />
                    <span className="about-partner">Diversity Institute</span>
                </div>
            </div>
        </section>
    );
}