import { whatsappLink } from "./content";
import { Arrow } from "./ui";

export function BookingSection() {
  return (
    <section id="contact" className="px-6 pb-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 rounded-[2.5rem] bg-[#374151] p-8 text-white sm:p-12 lg:flex-row lg:items-end lg:p-16"><div><p className="mb-5 text-xs font-black uppercase tracking-[.24em]">Your next step starts here</p><h2 className="max-w-2xl text-4xl font-black tracking-[-.05em] sm:text-6xl">Ready to feel more like yourself?</h2></div><div className="flex flex-wrap gap-3"><a href={whatsappLink} className="rounded-full bg-[#111827] px-6 py-4 font-bold text-white transition hover:-translate-y-1">WhatsApp us <Arrow /></a><a href="tel:+2349165701473" className="rounded-full border border-[#111827]/25 px-6 py-4 font-bold transition hover:bg-white/20">Call 09165701473</a></div></div></section>
  );
}
