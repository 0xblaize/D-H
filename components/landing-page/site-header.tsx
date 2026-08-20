import { whatsappLink } from "./content";
import { Logo } from "./ui";

export function SiteHeader() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-2 bg-white px-4 py-2.5 text-[#0b2239] sm:px-6 sm:py-3 lg:px-10">
      <a href="#top" className="flex items-center gap-3">
        <Logo />
      </a>
      <div className="hidden items-center gap-6 text-xs text-[#0b2239]/70 md:flex lg:gap-8 lg:text-sm">
        <a className="transition hover:text-[#a9f4e2]" href="#services">Services</a>
        <a className="transition hover:text-[#a9f4e2]" href="#story">Our approach</a>
        <a className="transition hover:text-[#a9f4e2]" href="#reviews">Reviews</a>
        <a className="transition hover:text-[#a9f4e2]" href="#contact">Contact</a>
      </div>
      <a href={whatsappLink} className="whitespace-nowrap rounded-full bg-[#ff725e] px-2.5 py-2 text-[10px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ff806e] sm:px-4 sm:py-2.5 sm:text-xs">Book now <span aria-hidden="true">→</span></a>
    </nav>
  );
}
