import { ApproachSection } from "./approach-section";
import { BookingSection } from "./booking-section";
import { GallerySection } from "./gallery-section";
import { HeroSection } from "./hero-section";
import { ReviewsSection } from "./reviews-section";
import { ServicesSection } from "./services-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function LandingPage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f5]">
      <header className="bg-white">
        <SiteHeader />
      </header>
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <GallerySection />
      <ReviewsSection />
      <BookingSection />
      <SiteFooter />
    </main>
  );
}
