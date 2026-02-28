import type { Metadata } from "next";
import { Playfair_Display, Sora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    style: ["normal", "italic"],
    display: "swap",
});

const sora = Sora({
    variable: "--font-sora",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ifeinspires.com"),
    title: {
        default: "Ife Inspires — Inspiration Meets Execution",
        template: "%s | Ife Inspires",
    },
    description:
        "Ife Oyelade is a digital transformation leader, speaker, leadership coach, and community mentor. Empowering changemakers to turn inspiration into action.",
    keywords: [
        "Ife Oyelade",
        "Ife Inspires",
        "Speaker",
        "Leadership Coach",
        "Digital Transformation",
        "Keynote Speaker",
        "INSPIRE Framework",
        "Affrism",
        "Strategy Consultant",
        "Women in Leadership",
        "Black Women Leaders",
    ],
    authors: [{ name: "Ife Oyelade", url: "https://www.ifeinspires.com" }],
    creator: "Ife Oyelade",
    publisher: "Ife Oyelade",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "Ife Inspires — Inspiration Meets Execution",
        description:
            "Empowering changemakers to turn inspiration into action through keynotes, workshops, strategy sessions, and mentorship.",
        url: "https://www.ifeinspires.com",
        siteName: "Ife Inspires",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://www.ifeinspires.com/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Ife Inspires — Inspiration Meets Execution",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ife Inspires — Inspiration Meets Execution",
        description:
            "Empowering changemakers to turn inspiration into action through keynotes, workshops, strategy sessions, and mentorship.",
        creator: "@ifeinspires",
        images: ["https://www.ifeinspires.com/opengraph-image.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
    },
    alternates: {
        canonical: "/",
    },
    verification: {
        google: "verification_token",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ife Oyelade",
    url: "https://www.ifeinspires.com",
    image: "https://www.ifeinspires.com/opengraph-image.jpg",
    sameAs: [
        "https://www.instagram.com/ifeinspiresco",
        "https://www.linkedin.com/in/ifeoyelade",
        "https://www.ifeinspires.com",
    ],
    jobTitle: ["Digital Transformation Leader", "Speaker", "Strategist"],
    worksFor: {
        "@type": "Organization",
        name: "Affrism",
    },
    description:
        "Ife Oyelade is a digital transformation leader, speaker, leadership coach, and community mentor.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${playfair.variable} ${sora.variable}`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}
