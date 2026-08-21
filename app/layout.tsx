import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dnhphysiotherapy.com.ng";
const siteName = "D&H Physiotherapy LTD";
const siteDescription = "D&H Physiotherapy provides personalised physiotherapy, rehabilitation, pain management, and home-based care in Ibadan, Oyo, Osun, and across Nigeria.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "D&H Physiotherapy | Physiotherapist in Ibadan, Nigeria",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "D&H Physiotherapy",
    "D&H Physiotherapy LTD",
    "physiotherapist in Nigeria",
    "physiotherapy in Ibadan",
    "physiotherapy in Oyo State",
    "physiotherapy in Osun State",
    "home physiotherapy Nigeria",
    "stroke rehabilitation Nigeria",
    "pain management Ibadan",
    "post-surgical rehabilitation",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "D&H Physiotherapy | Physiotherapist in Ibadan, Nigeria",
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_NG",
    type: "website",
    images: [{ url: "/images/landing/black-physiotherapist-black-patient.jpg", width: 1200, height: 630, alt: "D&H Physiotherapy providing hands-on patient care" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "D&H Physiotherapy | Physiotherapist in Ibadan, Nigeria",
    description: siteDescription,
    images: ["/images/landing/black-physiotherapist-black-patient.jpg"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PhysicalTherapy",
              "@id": `${siteUrl}/#business`,
              name: siteName,
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              image: `${siteUrl}/images/landing/black-physiotherapist-black-patient.jpg`,
              description: siteDescription,
              telephone: "+2349165701473",
              priceRange: "$$",
              areaServed: ["Ibadan", "Oyo State", "Osun State", "Nigeria"],
              sameAs: [
                "https://www.instagram.com/dnhphysiotherapyltd/",
                "https://www.google.com/maps/place/D%26H+Physiotherapy+LTD/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2349165701473",
                contactType: "customer service",
                contactOption: "TollFree",
                availableLanguage: ["English"],
              },
              makesOffer: [
                "Musculoskeletal rehabilitation",
                "Stroke and neurological rehabilitation",
                "Elderly care physiotherapy",
                "Post-surgical rehabilitation",
                "Pain management",
                "Home-based physiotherapy",
              ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
            }),
          }}
        />
      </body>
    </html>
  );
}
