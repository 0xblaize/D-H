export function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export function Logo() {
  return (
    <span className="flex items-center" aria-label="D&H Physiotherapy LTD">
      <img src="/logo.png" alt="D&H Physiotherapy" className="h-12 w-28 object-contain sm:h-14 sm:w-32" />
    </span>
  );
}
