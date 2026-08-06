import Link from "next/link"
import { business, hours, nav } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="grain absolute inset-0" />
      <div className="edge-divider h-2 w-full" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-semibold tracking-tight">
            {business.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/65">
            {business.tagline}. Incredible food, freshest ingredients, and a
            friendly room — right on Flatbush Ave.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={business.orderUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-tomato px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ember"
            >
              Order Online
            </a>
            <a
              href={business.phoneHref}
              className="rounded-full border border-paper/30 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Call {business.phone}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest2 text-gold">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-paper/75 transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest2 text-gold">
            Find us
          </h3>
          <address className="mt-4 space-y-1 text-sm not-italic text-paper/75">
            <p>{business.address.street}</p>
            <p>{business.address.city}</p>
            <p className="pt-2 text-paper/55">{hours.label}</p>
            <p>{hours.range}</p>
          </address>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-medium text-gold underline-offset-4 hover:underline"
          >
            Get directions →
          </a>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-2 border-t border-paper/15 px-5 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
        <Link
          href="https://www.novusnyc.org/"
          target="_blank"
          rel="noreferrer"
          className="text-[#F6B78D] hover:text-[#F6B78D] transition-colors"
        >
          Made by Novus
        </Link>
      </div>
    </footer>
  )
}
