"use client";

import { useEffect, useRef } from "react";

const topics = [
    {
        title: "The Art of Persuasion",
        subtitle: "Negotiation as a Superpower",
        description:
            "Whether you're asking for a raise, closing a deal, or navigating tough conversations, this session teaches you how to negotiate with confidence, clarity, and emotional intelligence.",
        tags: ["Keynote", "Workshop"],
    },
    {
        title: "Brand You",
        subtitle: "Build a Bold, Authentic Personal Brand",
        description:
            "Your brand is more than a logo, it's the legacy you leave in every room. Learn how to craft a magnetic personal brand that reflects your values, amplifies your voice, and positions you as a leader.",
        tags: ["Workshop", "Coaching"],
    },
    {
        title: "Storytelling that Sticks",
        subtitle: "Communicate with Confidence & Purpose",
        description:
            "People don't just remember facts, they remember feelings. Master the art of storytelling to pitch your ideas, share your journey, and inspire action with authenticity and power.",
        tags: ["Keynote", "Workshop"],
    },
    {
        title: "Network with Intention",
        subtitle: "Build Relationships That Work for You",
        description:
            "Forget transactional networking. This session dives into intentional relationship-building, how to navigate rooms with confidence and turn connections into collaborations, even if you're introverted.",
        tags: ["Workshop"],
    },
    {
        title: "INSPIRE",
        subtitle: "Turning Vision into Action for Modern Changemakers",
        description:
            "An empowering keynote introducing the INSPIRE Framework™, a powerful model to help individuals lead with purpose, act with strategy, and create impact that lasts.",
        tags: ["Keynote", "Signature"],
    },
    {
        title: "Lift As You Climb",
        subtitle: "Creating Empowerment Ecosystems in Business & Life",
        description:
            "A call to action for leaders to embrace mentorship, inclusion, and collective growth. Perfect for DEI-focused events, women in leadership, and community-driven spaces.",
        tags: ["Keynote", "Panel"],
    },
];

export default function Topics() {
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
            { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
        );

        const elements = sectionRef.current?.querySelectorAll(".reveal");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="topics" id="topics" ref={sectionRef}>
            <div className="topics-header reveal">
                <p className="topics-label">Signature Topics</p>
                <h2 className="topics-title">
                    Talks that spark <span>real change</span>
                </h2>
                <p className="topics-subtitle">
                    Each topic is tailored to your audience and can be delivered as a
                    keynote, workshop, or interactive session.
                </p>
            </div>

            <div className="topics-grid">
                {topics.map((topic, index) => (
                    <article
                        key={topic.title}
                        className="topics-card reveal"
                        style={{ "--card-delay": `${index * 0.07}s` } as React.CSSProperties}
                    >
                        <div className="topics-card-accent" aria-hidden="true" />

                        <div className="topics-card-tags">
                            {topic.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`topics-card-tag ${tag === "Signature" ? "topics-card-tag--gold" : ""}`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h3 className="topics-card-title">{topic.title}</h3>
                        <p className="topics-card-subtitle">{topic.subtitle}</p>

                        <div className="topics-card-divider" aria-hidden="true" />

                        <p className="topics-card-desc">{topic.description}</p>

                        <a href="#book" className="topics-card-link">
                            Book this topic
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}