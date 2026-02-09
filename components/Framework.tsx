"use client";

import { useState, useEffect, useRef } from "react";

const frameworkSteps = [
    {
        letter: "I",
        word: "Innovation",
        tagline: "Think forward",
        description:
            "Challenge the status quo and embrace forward-thinking ideas. Innovation isn't just about technology, it's about seeing problems through new lenses and creating solutions that didn't exist before.",
    },
    {
        letter: "N",
        word: "Navigation",
        tagline: "Design your path, don't just follow one",
        description:
            "Charting your own course requires clarity and courage. Navigation means making intentional decisions about where you're going and having the strategic awareness to adjust when the landscape shifts.",
    },
    {
        letter: "S",
        word: "Strategy",
        tagline: "Big ideas need structure",
        description:
            "Vision without a plan is just a wish. Strategy turns bold ambitions into actionable roadmaps, breaking down the impossible into clear, executable steps that drive real progress.",
    },
    {
        letter: "P",
        word: "Purpose",
        tagline: "Lead from the why",
        description:
            "Purpose is the compass that keeps you grounded when things get complex. When you lead from your why, every decision carries weight, every action has meaning, and your impact becomes undeniable.",
    },
    {
        letter: "I",
        word: "Impact",
        tagline: "Make moves that matter",
        description:
            "Impact isn't measured by how busy you are, it's measured by the change you create. Focus your energy on the moves that matter most, and let your work speak louder than your intentions.",
    },
    {
        letter: "R",
        word: "Resilience",
        tagline: "Bounce back, then build better",
        description:
            "Setbacks are inevitable. Resilience isn't just about surviving them, it's about using them as fuel. Every challenge is an invitation to rebuild stronger, wiser, and more aligned with your purpose.",
    },
    {
        letter: "E",
        word: "Empowerment",
        tagline: "Inspire others as you rise",
        description:
            "True leadership multiplies. As you grow, lift others with you. Empowerment means creating ecosystems where emerging leaders can thrive, because your legacy is measured by who you helped become.",
    },
];

export default function Framework() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [sectionVisible, setSectionVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const stepsRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSectionVisible(true);
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className={`framework ${sectionVisible ? "framework--visible" : ""}`}
            id="framework"
            ref={sectionRef}
        >
            <div className="framework-bg-letter" aria-hidden="true">
                {frameworkSteps[activeIndex].letter}
            </div>

            <div className="framework-inner">
                <div className="framework-header">
                    <p className="framework-label">Signature Framework</p>
                    <h2 className="framework-title">
                        The <span>INSPIRE</span> Framework™
                    </h2>
                    <p className="framework-subtitle">
                        A 7-part model that bridges the gap between motivation and
                        execution, transforming raw potential into real-world progress.
                    </p>
                </div>

                <div className="framework-content">
                    <div className="framework-nav" role="tablist" aria-label="INSPIRE Framework steps">
                        {frameworkSteps.map((step, index) => (
                            <button
                                key={`${step.letter}-${step.word}`}
                                ref={(el) => { stepsRef.current[index] = el; }}
                                className={`framework-nav-item ${activeIndex === index ? "active" : ""}`}
                                onClick={() => setActiveIndex(index)}
                                role="tab"
                                aria-selected={activeIndex === index}
                                aria-controls={`framework-panel-${index}`}
                                id={`framework-tab-${index}`}
                            >
                                <span className="framework-nav-letter">{step.letter}</span>
                                <span className="framework-nav-word">{step.word}</span>
                                <span className="framework-nav-bar" aria-hidden="true" />
                            </button>
                        ))}
                    </div>

                    <div className="framework-detail">
                        {frameworkSteps.map((step, index) => (
                            <div
                                key={`${step.letter}-${step.word}-panel`}
                                className={`framework-panel ${activeIndex === index ? "active" : ""}`}
                                role="tabpanel"
                                id={`framework-panel-${index}`}
                                aria-labelledby={`framework-tab-${index}`}
                                hidden={activeIndex !== index}
                            >
                                <div className="framework-panel-letter" aria-hidden="true">
                                    {step.letter}
                                </div>
                                <h3 className="framework-panel-word">{step.word}</h3>
                                <p className="framework-panel-tagline">{step.tagline}</p>
                                <div className="framework-panel-divider" aria-hidden="true" />
                                <p className="framework-panel-desc">{step.description}</p>
                            </div>
                        ))}

                        <div className="framework-counter" aria-hidden="true">
                            <span className="framework-counter-current">
                                {String(activeIndex + 1).padStart(2, "0")}
                            </span>
                            <span className="framework-counter-sep">/</span>
                            <span className="framework-counter-total">
                                {String(frameworkSteps.length).padStart(2, "0")}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="framework-cards">
                    {frameworkSteps.map((step, index) => (
                        <div
                            key={`${step.letter}-${step.word}-card`}
                            className="framework-card"
                            style={{ "--card-index": index } as React.CSSProperties}
                        >
                            <div className="framework-card-top">
                                <span className="framework-card-letter">{step.letter}</span>
                                <div>
                                    <h3 className="framework-card-word">{step.word}</h3>
                                    <p className="framework-card-tagline">{step.tagline}</p>
                                </div>
                            </div>
                            <p className="framework-card-desc">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="framework-footer">
                    <p className="framework-footer-text">
                        Ready to put the INSPIRE Framework™ into action?
                    </p>
                    <a href="#book" className="framework-footer-cta">
                        <span>Book a Session with Ife</span>
                    </a>
                </div>
            </div>
        </section>
    );
}