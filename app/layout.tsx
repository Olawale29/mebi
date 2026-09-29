import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { company, socialLinks } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${company.name} | Custom Software, Cloud & Digital Transformation`,
    description:
      "MEBI Technology builds custom software, cloud, and digital transformation solutions for growing organizations across Africa and beyond. Where innovation meets possibilities.",
    path: "/",
  }),
  metadataBase: new URL(company.url),
  icons: { icon: "/favicon.ico" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.url,
  sameAs: socialLinks.map((s) => s.href),
  description: company.positioning,
  email: company.email,
  telephone: company.phones[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 Zone 1 Road C, Ajoda New Town, Egbeda",
    addressLocality: "Ibadan",
    addressRegion: "Oyo State",
    addressCountry: "NG",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
