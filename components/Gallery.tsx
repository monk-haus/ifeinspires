"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useMountEffect } from "@/hooks/useMountEffect";

const images = [
    { src: "/assets/gallery/098855d2-262c-4b69-bb03-b9a81a8cb1a1.JPG", alt: "Ife Inspires — Gallery 1" },
    { src: "/assets/gallery/554219af-e585-4842-893c-24af29e7883b.JPG", alt: "Ife Inspires — Gallery 2" },
    { src: "/assets/gallery/8fd304fa-c537-41c0-85ce-c43c55e0c225.JPG", alt: "Ife Inspires — Gallery 3" },
    { src: "/assets/gallery/d3f98e51-1b2a-46f2-b03b-36fa27ad5a52.JPG", alt: "Ife Inspires — Gallery 4" },
];

export default function Gallery() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useMountEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("in-view");
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        const elements = sectionRef.current?.querySelectorAll(".reveal");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    });

    const active = images[activeIndex];

    return (
        <section className="gallery" id="gallery" ref={sectionRef}>
            <div className="gallery-top-line" aria-hidden="true" />

            <div className="gallery-header reveal">
                <p className="gallery-label">In the Room</p>
                <h2 className="gallery-title">
                    Moments That <span>Move</span>
                </h2>
            </div>

            <div className="gallery-viewer reveal">
                <div className="gallery-main">
                    <Image
                        key={active.src}
                        src={active.src}
                        alt={active.alt}
                        fill
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 80vw"
                        className="gallery-main-img"
                    />
                </div>

                <div className="gallery-thumbs">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            className={`gallery-thumb${i === activeIndex ? " gallery-thumb--active" : ""}`}
                            onClick={() => setActiveIndex(i)}
                            aria-label={img.alt}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 640px) 25vw, 15vw"
                                className="gallery-thumb-img"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
