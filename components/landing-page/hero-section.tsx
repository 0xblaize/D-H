import { whatsappLink } from "./content";
import { Arrow } from "./ui";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#f8f5ef] text-[#0b2239]">
      <div className="mx-auto grid max-w-7xl items-stretch lg:min-h-[720px] lg:grid-cols-[.88fr_1.12fr] lg:px-10">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:py-20 lg:px-0 lg:py-24 lg:pr-16">
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[.24em] text-[#ff725e]"><span className="h-2 w-2 rounded-full bg-[#0b2239]" /> Physiotherapy that moves with you</p>
          <h1 className="max-w-2xl text-5xl font-black leading-[.94] tracking-[-.06em] sm:text-7xl lg:text-[5.7rem]">Better movement starts with <span className="text-[#ff725e]">better care.</span></h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#0b2239]/65">Hands-on, personalised physiotherapy for recovery, strength, confidence, and everyday independence across Ibadan, Oyo, and Osun.</p>
          <div className="mt-10 flex flex-wrap gap-4"><a href={whatsappLink} className="rounded-full bg-[#ff725e] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(255,114,94,.3)]">Book your first session <Arrow /></a><a href="#services" className="rounded-full border border-[#0b2239]/20 px-7 py-4 font-bold transition hover:border-[#0b2239]">See how we help</a></div>
          <div className="mt-14 grid max-w-md grid-cols-2 gap-5 border-t border-[#0b2239]/15 pt-6 text-sm text-[#0b2239]/55"><span><strong className="text-[#0b2239]">Clinic + home</strong><br />care options</span><span><strong className="text-[#0b2239]">Ibadan · Oyo</strong><br />· Osun coverage</span></div>
        </div>
        <div className="relative min-h-[390px] overflow-hidden bg-[#0b2239] sm:min-h-[500px] lg:min-h-0">
          <img src="/images/landing/hero-physiotherapy.jpg" alt="Black physiotherapist guiding a patient through a leg movement exercise" className="absolute inset-0 h-full w-full object-cover object-center transition duration-1000 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2239]/65 via-transparent to-[#0b2239]/10" />
          <div className="absolute bottom-6 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-10 sm:left-10 sm:right-10"><div className="rounded-2xl border border-white/25 bg-[#0b2239]/55 px-5 py-4 text-white backdrop-blur-md"><p className="text-xs font-black uppercase tracking-[.18em] text-[#a9f4e2]">The D&H approach</p><p className="mt-2 font-bold">We put care in the details.</p></div><div className="hidden h-36 w-28 overflow-hidden rounded-2xl border-4 border-[#f8f5ef] shadow-2xl sm:block"><img src="/images/landing/service-post-surgical.jpg" alt="Black physiotherapist supporting a patient's knee" className="h-full w-full object-cover" /></div></div>
          <span className="absolute right-4 top-4 rounded-full bg-[#a9f4e2] px-3 py-2 text-[10px] font-black uppercase tracking-[.14em] text-[#0b2239] sm:right-10 sm:top-10 sm:px-4 sm:text-xs">Hands-on recovery</span>
        </div>
      </div>
      <div className="bg-[#0b2239] px-6 py-5 text-white lg:px-10"><div className="mx-auto grid max-w-7xl gap-4 text-sm font-bold sm:grid-cols-2 lg:grid-cols-4"><span>✦ Personalised care</span><span>✦ Recovery-focused plans</span><span>✦ Home-based support</span><span>✦ Human, practical guidance</span></div></div>
    </section>
  );
}
