import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ifeinspires.com"),
  title: {
    default: "Ife Inspires — Strategist. Speaker. Builder.",
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
  authors: [{ name: "Ife Oyelade", url: "https://ifeinspires.com" }],
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
    title: "Ife Inspires — Strategist. Speaker. Builder.",
    description:
      "Empowering changemakers to turn inspiration into action through keynotes, workshops, strategy sessions, and mentorship.",
    url: "https://ifeinspires.com",
    siteName: "Ife Inspires",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ife Inspires — Strategist. Speaker. Builder.",
    description:
      "Empowering changemakers to turn inspiration into action through keynotes, workshops, strategy sessions, and mentorship.",
    creator: "@ifeinspires",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "verification_token", // Placeholder, user needs to add this
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ife Oyelade",
  url: "https://ifeinspires.com",
  image: "https://ifeinspires.com/opengraph-image.jpg",
  sameAs: [
    "https://www.instagram.com/ifeinspiresco",
    "https://www.linkedin.com/in/ifeoyelade",
    "https://ifeinspires.com",
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
