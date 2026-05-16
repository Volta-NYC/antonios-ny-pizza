import { marqueeWords } from "@/lib/site"

/** Infinite ticker strip — the row is duplicated so the loop is seamless. */
export default function Marquee() {
  const row = [...marqueeWords, ...marqueeWords]
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-gold py-3.5">
      <div className="flex w-max animate-marquee items-center">
        {row.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-display text-base font-semibold uppercase tracking-wide text-ink">
              {word}
            </span>
            <Star />
          </span>
        ))}
      </div>
    </div>
  )
}

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" className="shrink-0" aria-hidden>
      <path
        d="M12 2l2.6 6.6L21 11l-6.4 2.4L12 22l-2.6-8.6L3 11l6.4-2.4z"
        fill="#c4352b"
      />
    </svg>
  )
}
