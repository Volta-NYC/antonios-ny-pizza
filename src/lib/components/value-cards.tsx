import Reveal from "./reveal"
import { values } from "@/lib/site"

/**
 * The three "why Antonio's" promises, rendered as warm editorial
 * panels. Shared by the home page and the About page so the brand
 * voice stays consistent.
 */
export default function ValueCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3 md:gap-6">
      {values.map((v, i) => {
        const Icon = ICONS[i] ?? ICONS[0]
        return (
          <Reveal key={v.title} delay={i * 110}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-[#3b2917] ring-1 ring-paper/10 transition-all duration-300 hover:-translate-y-1.5 hover:ring-gold/60 md:[&:nth-child(2)]:mt-7">
              {/* Top accent bar — widens on hover */}
              <span className="block h-1.5 w-full bg-tomato transition-colors duration-300 group-hover:bg-gold" />

              {/* Oversized watermark numeral */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-3 -top-6 select-none font-display text-[8rem] font-semibold leading-none text-paper/[0.05]"
              >
                {i + 1}
              </span>

              <div className="relative flex flex-1 flex-col p-7 sm:p-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-gold ring-1 ring-gold/30 transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                  <Icon />
                </span>

                <p className="mt-6 font-display text-xs font-semibold uppercase tracking-widest2 text-tomato">
                  No. {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-paper">
                  {v.title}
                </h3>
                <p className="mt-3 leading-relaxed text-paper/65">{v.body}</p>
              </div>
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}

/* — line icons, sized to inherit currentColor — */

function LeafIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 20c0-8 6-14 16-14 0 10-6 16-14 16-1 0-2-1-2-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M6 18C9 14 13 11 17 9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function RoomIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.5" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3.5 19c.6-3.3 2.8-5 5.5-5s4.9 1.7 5.5 5M14.5 19c.4-2 1.5-3.3 3.2-3.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21c4.5-4.2 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 2.5 6.8 7 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

const ICONS = [LeafIcon, RoomIcon, PinIcon]
