import { whatsappLink } from "./content";
import { Arrow } from "./ui";

export function BookingSection() {
  return (
    <section id="contact" className="px-4 pb-8 sm:px-6 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] bg-[#ff725e] p-7 text-[#0b2239] sm:gap-10 sm:rounded-[2.5rem] sm:p-12 lg:flex-row lg:items-end lg:justify-between lg:p-16"><div className="max-w-2xl lg:pr-8"><p className="mb-4 text-xs font-black uppercase tracking-[.2em] sm:mb-5 sm:tracking-[.24em]">Your next step starts here</p><h2 className="text-[2.35rem] font-black leading-[.98] tracking-[-.05em] sm:text-6xl">Ready to feel more like yourself?</h2></div><div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto"><a href={whatsappLink} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0b2239] px-6 py-4 text-center font-bold text-white transition hover:-translate-y-1 sm:w-auto">WhatsApp us <Arrow /></a><a href="tel:+2349165701473" className="inline-flex w-full items-center justify-center rounded-full border border-[#0b2239]/25 px-6 py-4 text-center font-bold transition hover:bg-white/20 sm:w-auto">Call 09165701473</a></div></div></section>
  );
}
