import { services, whatsappLink } from "./content";

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="mb-4 text-xs font-black uppercase tracking-[.24em] text-[#374151]">What we help with</p><h2 className="max-w-2xl text-4xl font-black tracking-[-.05em] sm:text-6xl">Care that gets you back to your life.</h2></div><p className="max-w-sm text-lg leading-8 text-[#111827]/60">Every body has a different story. Your treatment should feel like it was made for yours.</p></div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([number, title, description, image]) => <article key={number} className="group overflow-hidden rounded-4xl border border-[#111827]/10 bg-white transition duration-300 hover:-translate-y-2 hover:border-[#e5e7eb] hover:shadow-2xl"><div className="relative h-56 overflow-hidden"><img src={image} alt={title} className="h-full w-full object-cover grayscale contrast-105 transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 to-transparent" /><span className="absolute bottom-5 left-6 text-sm font-black text-white">/{number}</span></div><div className="p-7"><h3 className="text-2xl font-black tracking-[-.04em]">{title}</h3><p className="mt-4 leading-7 text-[#111827]/60">{description}</p><a href={whatsappLink} className="mt-7 inline-block text-sm font-black text-[#111827] underline decoration-[#374151] decoration-2 underline-offset-4">Ask about this →</a></div></article>)}</div>
    </section>
  );
}
