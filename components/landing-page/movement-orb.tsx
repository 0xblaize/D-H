export function MovementOrb() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[390px] w-[390px] sm:h-[480px] sm:w-[480px] lg:h-[560px] lg:w-[560px]">
      <div className="absolute inset-[12%] rounded-full bg-[#a9f4e2]/15 blur-3xl" />
      <div className="orbit absolute inset-[6%] rounded-full border border-[#a9f4e2]/40" />
      <div className="orbit absolute inset-[16%] rounded-full border border-dashed border-[#ff725e]/60 [animation-duration:18s] [animation-direction:reverse]" />
      <div className="absolute left-1/2 top-1/2 h-[54%] w-[42%] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-[48%] bg-gradient-to-br from-[#c9fff2] via-[#65dbc4] to-[#ff725e] shadow-[18px_28px_70px_rgba(0,0,0,.35)] drift" />
      <div className="absolute left-[25%] top-[27%] h-20 w-20 rounded-full border border-white/60 bg-white/20 backdrop-blur-md" />
      <div className="absolute bottom-[21%] right-[19%] h-16 w-16 rounded-full bg-[#ff725e] shadow-[0_0_0_14px_rgba(255,114,94,.14)]" />
      <div className="absolute left-[3%] top-[30%] rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.24em] text-[#a9f4e2] backdrop-blur-md">Recover</div>
      <div className="absolute bottom-[17%] right-[1%] rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.24em] text-white backdrop-blur-md">Move</div>
      <div className="absolute bottom-[5%] left-[23%] h-2 w-2 rounded-full bg-[#a9f4e2] shadow-[0_0_0_10px_rgba(169,244,226,.12)]" />
    </div>
  );
}
