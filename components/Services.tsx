"use client";

import { useEffect, useRef } from "react";

const services = [
    {
        number: "01",
        title: "Speaking Engagements, MC & Keynotes",
        description:
            "Inspire, educate, and ignite transformation at events of all sizes. Ife delivers high-energy keynotes and emcees with warmth, authority, and purpose.",
        topics: [
            "Leadership & Empowerment",
            "The INSPIRE Framework™",
            "Negotiation & Personal Branding",
            "Women in Leadership",
            "Storytelling & Communication",
        ],
        format: "Virtual, In-Person, or Hybrid",
    },
    {
        number: "02",
        title: "Workshops & Trainings",
        description:
            "Interactive, hands-on sessions designed to spark action and build skills. Each workshop is tailored to your audience's needs and delivers immediately applicable tools.",
        topics: [
            "Strategic Networking That Converts",
            "The Art of Storytelling",
            "Brand Identity",
            "Confidence & Communication for Emerging Leaders",
            "Vision-to-Execution Planning (INSPIRE™)",
        ],
        format: "30 min sessions",
    },
    {
        number: "03",
        title: "Coaching & Mentorship Programs",
        description:
            "Personalized guidance for individuals or small groups ready to level up. Deep, transformative work that builds clarity, confidence, and strategic direction.",
        topics: [
            "1:1 Leadership or Career Coaching",
            "Emerging Changemaker Mentorship",
        ],
        format: "Ongoing or project-based",
    },
    {
        number: "04",
        title: "Consulting & Strategy",
        description:
            "Custom support for organizations, universities, colleges, non-profits, and brands looking to amplify their impact through structured strategy and innovation.",
        topics: [
            "Program & Curriculum Design",
            "Speaker & Thought Leader Development",
            "Program, Project & Portfolio Management",
        ],
        format: "Tailored engagements",
    },
];

export default function Services() {
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
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        const elements = sectionRef.current?.querySelectorAll(".reveal");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="services" id="services" ref={sectionRef}>
            <div className="services-header reveal">
                <p className="services-label">What Ife Offers</p>
                <h2 className="services-title">
                    Services <span>designed to move you forward</span>
                </h2>
                <p className="services-subtitle">
                    Available virtually, in-person, or hybrid, every engagement is customized to meet the unique needs of your audience or organization.
                </p>
            </div>

            <div className="services-list">
                {services.map((service) => (
                    <article
                        key={service.number}
                        className="services-item reveal"
                    >
                        <div className="services-item-header">
                            <span className="services-item-number">{service.number}</span>
                            <div className="services-item-header-text">
                                <h3 className="services-item-title">{service.title}</h3>
                                <span className="services-item-format">{service.format}</span>
                            </div>
                            <span className="services-item-arrow" aria-hidden="true">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M7 10l5 5 5-5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>

                        <div className="services-item-body">
                            <p className="services-item-desc">{service.description}</p>
                            <div className="services-item-topics">
                                {service.topics.map((topic) => (
                                    <span key={topic} className="services-item-topic">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="services-item-line" aria-hidden="true" />
                    </article>
                ))}
            </div>
            <div className="services-cta-band reveal">
                <p className="services-cta-text">
                    Not sure which service is right for you?
                </p>
                <a href="#book" className="services-cta-btn">
                    <span>Let&apos;s Talk</span>
                </a>
            </div>
        </section>
    );
}