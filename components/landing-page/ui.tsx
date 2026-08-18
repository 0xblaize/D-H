export function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export function Logo() {
  return (
    <span className="flex flex-col items-center gap-1" aria-label="D&H Physiotherapy LTD">
      <img src="/icon.svg" alt="D&H" className="h-10 w-10 sm:h-11 sm:w-11" />
      <span className="text-[7px] font-black uppercase tracking-[.14em] text-[#2c7898] sm:text-[8px]">Physiotherapy LTD</span>
    </span>
  );
}
