import { whatsappLink } from "./content";
import { Logo } from "./ui";

export function SiteHeader() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-3 bg-white px-4 py-4 text-[#0b2239] sm:px-6 sm:py-5 lg:px-10">
      <a href="#top" className="flex items-center gap-3">
        <Logo />
      </a>
      <div className="hidden items-center gap-8 text-sm text-[#0b2239]/70 md:flex">
        <a className="transition hover:text-[#a9f4e2]" href="#services">Services</a>
        <a className="transition hover:text-[#a9f4e2]" href="#story">Our approach</a>
        <a className="transition hover:text-[#a9f4e2]" href="#reviews">Reviews</a>
        <a className="transition hover:text-[#a9f4e2]" href="#contact">Contact</a>
      </div>
      <div className="flex items-center gap-3">
        <details className="relative md:hidden">
          <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full border border-[#0b2239]/20 text-xl">☰</summary>
          <div className="absolute right-0 top-14 z-20 grid min-w-44 gap-1 rounded-2xl border border-white/10 bg-[#102e49] p-2 text-sm text-white shadow-2xl">
            <a className="rounded-xl px-4 py-3 hover:bg-white/10" href="#services">Services</a>
            <a className="rounded-xl px-4 py-3 hover:bg-white/10" href="#story">Our approach</a>
            <a className="rounded-xl px-4 py-3 hover:bg-white/10" href="#reviews">Reviews</a>
            <a className="rounded-xl px-4 py-3 hover:bg-white/10" href="#contact">Contact</a>
          </div>
        </details>
        <a href={whatsappLink} className="whitespace-nowrap rounded-full bg-[#ff725e] px-3 py-2.5 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ff806e] sm:px-5 sm:py-3 sm:text-sm">Book now <span aria-hidden="true">→</span></a>
      </div>
    </nav>
  );
}
