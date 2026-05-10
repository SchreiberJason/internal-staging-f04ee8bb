import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { SiteNav } from "./components/site-nav";
import { SiteFooter } from "./components/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MENTOR — Wir aktivieren Potenziale.",
    template: "%s · MENTOR",
  },
  description:
    "Bildungs- und Beratungsinstitut für Lehrlinge und Unternehmen. 25+ Jahre Erfahrung in Wien, NÖ, OÖ, Salzburg, Steiermark und Burgenland. ÖCERT- und EFQM-zertifiziert.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: "MENTOR — Wir aktivieren Potenziale.",
    description:
      "Bildung und Beratung für Lehrlinge und Unternehmen in ganz Österreich.",
    locale: "de_AT",
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
      lang="de-AT"
      className={`${inter.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
