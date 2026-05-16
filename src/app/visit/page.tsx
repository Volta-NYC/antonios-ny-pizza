import type { Metadata } from "next"
import Image from "next/image"
import PageHeader from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import { business, gallery, hours } from "@/lib/site"

export const metadata: Metadata = {
  title: "Visit",
  description: `Visit Antonio's Pizza at ${business.address.full}. Open ${hours.label}, ${hours.range}. Call ${business.phone}.`,
}

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

export default function VisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Visit us"
        title="Find your slice on Flatbush."
        intro={`${business.address.full}. Open every day of the week — swing by for a slice or call ahead.`}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-ink/15 bg-cream p-7">
              <ContactBlock label="Address">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-tomato"
                >
                  {business.address.street}
                  <br />
                  {business.address.city}
                </a>
              </ContactBlock>
              <ContactBlock label="Phone">
                <a href={business.phoneHref} className="hover:text-tomato">
                  {business.phone}
                </a>
              </ContactBlock>
              <ContactBlock label="Neighborhood">
                {business.neighborhood}, {business.city}
              </ContactBlock>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-auto rounded-full bg-tomato px-6 py-3 text-center font-semibold text-paper transition-colors hover:bg-ember"
              >
                Get directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <div className="rounded-3xl border border-ink/15 bg-charcoal p-7 text-paper sm:p-9">
              <h2 className="font-display text-2xl font-semibold text-gold">
                Opening hours
              </h2>
              <p className="mt-1 text-sm text-paper/60">{hours.note}</p>
              <ul className="mt-6 divide-y divide-paper/15">
                {days.map((day) => (
                  <li
                    key={day}
                    className="flex items-center justify-between py-3"
                  >
                    <span className="font-display text-lg">{day}</span>
                    <span className="text-paper/75">{hours.range}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-ink/15">
            <iframe
              title={`Map to ${business.name}`}
              src="https://www.google.com/maps?q=318+Flatbush+Ave,+Brooklyn,+NY+11238&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      <section className="relative isolate overflow-hidden">
        <Image
          src={gallery[7].src}
          alt={gallery[7].caption}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center text-paper sm:px-8">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-tight tracking-tight">
              We'll keep the oven hot.
            </h2>
            <p className="mt-4 text-lg text-paper/75">
              Don't hesitate to give us a try — there's a slice with your name
              on it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={business.orderUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-tomato px-8 py-4 font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-ember"
              >
                Order Online
              </a>
              <a
                href={business.phoneHref}
                className="rounded-full border border-paper/40 px-8 py-4 font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                Call {business.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function ContactBlock({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest2 text-tomato">{label}</p>
      <p className="mt-1.5 font-display text-xl leading-snug text-ink">
        {children}
      </p>
    </div>
  )
}
