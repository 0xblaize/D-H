export function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export function Logo() {
  return (
    <span className="flex flex-col items-center gap-1" aria-label="D&H Physiotherapy LTD">
      <img src="/icon.svg" alt="D&H" className="h-8 w-8 sm:h-9 sm:w-9" />
      <span className="text-[6px] font-black uppercase tracking-[.12em] text-[#2c7898] sm:text-[7px]">Physiotherapy LTD</span>
    </span>
  );
}
