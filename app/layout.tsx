import type { Metadata } from "next";
import { Bricolage_Grotesque, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sabiha Abid | Creative Engineer's Scrapbook",
  description:
    "Portfolio of Sabiha Abid — Computer Science student at FAST NUCES building AI & full-stack products.",
  keywords: ["Sabiha Abid", "portfolio", "computer science", "AI", "full stack", "FAST NUCES"],
  authors: [{ name: "Sabiha Abid" }],
  openGraph: {
    title: "Sabiha Abid | Creative Engineer's Scrapbook",
    description:
      "CS student at FAST NUCES building AI & full-stack products with a sprinkle of creative magic.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${workSans.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <head>
        {/* Gochi Hand (handwriting) — not in next/font subset */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap"
        />
        {/* Material Symbols Outlined icon font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
