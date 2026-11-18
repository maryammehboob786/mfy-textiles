export function Seal({ size = 120, light = false, className = "" }: { size?: number; light?: boolean; className?: string }) {
  const c = light ? "#d9d6cc" : "#061030";
  const accent = light ? "#6b8cff" : "#0030e8";
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={`seal-spin ${className}`} aria-hidden>
      <defs><path id="sealpath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke={c} strokeWidth=".8" />
      <circle cx="60" cy="60" r="33" fill="none" stroke={c} strokeWidth=".8" />
      <text fontFamily="var(--font-plex-mono), monospace" fontSize="9.2" letterSpacing="2.6" fill={c}>
        <textPath href="#sealpath">MFY TEXTILES · PAKISTAN · EXPORT MILLS · QUALITY ASSURED ·</textPath>
      </text>
      <path d="M60 44 l5 11 11 1-8.5 7.5 2.5 11.5L60 69l-10 6 2.5-11.5L44 56l11-1z" fill={accent} />
    </svg>
  );
}
