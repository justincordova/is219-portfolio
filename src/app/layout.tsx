import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Justin Cordova — Full-Stack Engineer",
  description:
    "I build thoughtful full-stack software — where the code, the UX, and the decisions all hang together.",
  metadataBase: new URL("https://justincordova.dev"),
  openGraph: {
    title: "Justin Cordova — Full-Stack Engineer",
    description:
      "I build thoughtful full-stack software — where the code, the UX, and the decisions all hang together.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

// Each page is responsible for its own <Nav />, <main id="main">, and <Footer />
// so that Nav and Footer sit outside <main> (correct landmark semantics) and
// the skip-to-content link lands on actual content.
