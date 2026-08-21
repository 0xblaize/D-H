import { ApproachSection } from "./approach-section";
import { BookingSection } from "./booking-section";
import { GallerySection } from "./gallery-section";
import { HeroSection } from "./hero-section";
import { ReviewsSection } from "./reviews-section";
import { Reveal } from "./reveal";
import { ServicesSection } from "./services-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function LandingPage() {
  return (
    <main className="overflow-hidden bg-[#f8f5ef]">
      <header className="bg-white">
        <SiteHeader />
      </header>
      <HeroSection />
      <Reveal><ServicesSection /></Reveal>
      <Reveal className="reveal-delay-1"><ApproachSection /></Reveal>
      <Reveal className="reveal-delay-2"><GallerySection /></Reveal>
      <Reveal className="reveal-delay-1"><ReviewsSection /></Reveal>
      <Reveal className="reveal-delay-2"><BookingSection /></Reveal>
      <Reveal><SiteFooter /></Reveal>
    </main>
  );
}
