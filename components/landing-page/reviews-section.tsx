import { googleReviewsLink, reviews } from "./content";

export function ReviewsSection() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[.24em] text-[#374151]">Patient voices</p>
          <h2 className="text-4xl font-black tracking-[-.05em] sm:text-6xl">Real progress feels good.</h2>
        </div>
        <a href={googleReviewsLink} target="_blank" rel="noreferrer" className="font-bold text-[#111827] underline decoration-[#374151] decoration-2 underline-offset-4">Read our Google reviews →</a>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {reviews.map(([stars, excerpt, fullQuote, author]) => (
          <article key={author} className="rounded-4xl border border-[#111827]/10 bg-white p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#e5e7eb] text-lg font-black text-[#111827]">{author.charAt(0)}</span>
              <div>
                <p className="text-lg tracking-[.18em] text-[#374151]" aria-label="5 out of 5 stars">{stars}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[.14em] text-[#111827]/40">Google review</p>
              </div>
            </div>
            <blockquote className="mt-8 text-xl font-bold leading-8 tracking-[-.02em]">“{excerpt}”</blockquote>
            <details className="mt-5 group">
              <summary className="cursor-pointer list-none text-sm font-black text-[#111827] underline decoration-[#374151] decoration-2 underline-offset-4">Read more <span className="ml-1 transition group-open:inline-block group-open:rotate-90">→</span></summary>
              <p className="mt-4 text-sm leading-7 text-[#111827]/60">{fullQuote}</p>
            </details>
            <p className="mt-8 text-sm font-bold text-[#111827]/45">{author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
