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
  title: "IfeInspires — Inspiration Meets Execution.",
  description:
    "Ife Oyelade is a digital transformation leader, speaker, leadership coach, and community mentor. Empowering changemakers to turn inspiration into action.",
  keywords: [
    "Ife Oyelade",
    "Ife Inspires",
    "speaker",
    "leadership coach",
    "digital transformation",
    "keynote speaker",
    "INSPIRE Framework",
    "Affrism",
  ],
  openGraph: {
    title: "IfeInspires — Inspiration Meets Execution.",
    description:
      "Empowering changemakers to turn inspiration into action through keynotes, workshops, strategy sessions, and mentorship.",
    url: "https://ifeinspires.com",
    siteName: "Ife Inspires",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sora.variable}`}>
        {children}
      </body>
    </html>
  );
}
