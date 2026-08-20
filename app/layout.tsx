import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D&H Physiotherapy | Move with more freedom",
  description: "Personalised physiotherapy for recovery, strength, and everyday independence across Ibadan, Oyo, and Osun.",
  keywords: ["physiotherapy Ibadan", "physiotherapist Oyo", "home physiotherapy Osun", "stroke rehabilitation", "pain management"],
  openGraph: {
    title: "D&H Physiotherapy | Move with more freedom",
    description: "Personalised physiotherapy across Ibadan, Oyo, and Osun.",
    type: "website",
  },
  icons: {
    icon: "/logo-monochrome.svg",
    apple: "/logo-monochrome.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
