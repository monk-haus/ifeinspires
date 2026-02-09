import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-content">
                <p className="hero-name-pre">
                    Strategist · Speaker · Builder
                </p>

                <h1 className="hero-name">
                    <span className="hero-name-line">
                        <span className="hero-name-line-inner">Ife</span>
                    </span>
                    <span className="hero-name-line">
                        <span className="hero-name-line-inner">Oyelade</span>
                    </span>
                </h1>

                <div className="hero-name-underline" aria-hidden="true" />

                <p className="hero-tagline">
                    I help leaders, entrepreneurs, and organizations turn{" "}
                    <strong>bold ideas into clear strategy</strong> and meaningful impact
                    through keynotes, workshops, and executive coaching.
                </p>

                <div className="hero-ctas">
                    <a href="#book" className="hero-cta-primary">
                        <span>Book Ife</span>
                    </a>
                    <a href="#framework" className="hero-cta-secondary">
                        Explore the INSPIRE Framework™ ↓
                    </a>
                </div>
            </div>

            <div className="hero-image-wrapper">
                <div className="hero-image-bg" aria-hidden="true" />
                <div className="hero-image-container">
                    <Image
                        src="/assets/images/ife-hero.jpg"
                        alt="Ife Oyelade — Digital Transformation Leader and Speaker"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                </div>
            </div>

            <div className="hero-scroll" aria-hidden="true">
                <div className="hero-scroll-line" />
                <span className="hero-scroll-text">Scroll</span>
            </div>
        </section>
    );
}