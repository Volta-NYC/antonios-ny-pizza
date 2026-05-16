import Image from "next/image"
import Link from "next/link"
import Marquee from "@/lib/components/marquee"
import Reveal from "@/lib/components/reveal"
import ValueCards from "@/lib/components/value-cards"
import { business, gallery, hours, story } from "@/lib/site"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <StorySection />
      <ValuesSection />
      <GalleryPreview />
      <VisitSection />
    </>
  )
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden">
      <Image
        src="/images/hero.webp"
        alt="Antonio's Pizza"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest2 text-gold">
          <span className="h-px w-10 bg-gold" />
          Brooklyn, New York · Est. on Flatbush Ave
        </p>

        <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.9rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-tight text-paper">
          The slice that
          <br />
          <span className="italic text-gold">electrifies</span> the block.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
          {story.intro} Incredible food, the freshest ingredients, and a room
          that always feels like home.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={business.orderUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-tomato px-7 py-3.5 font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-ember"
          >
            Order Online
          </a>
          <a
            href={business.phoneHref}
            className="rounded-full border border-paper/40 px-7 py-3.5 font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Call {business.phone}
          </a>
          <Link
            href="/visit"
            className="font-semibold text-paper/80 underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            Visit the shop →
          </Link>
        </div>

        <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/15 bg-paper/10 sm:grid-cols-3">
          <HeroFact label="Find us" value={business.address.street} sub={business.address.city} />
          <HeroFact label="Open daily" value={hours.range} sub={hours.label} />
          <HeroFact label="Made with" value="Fresh, daily" sub="No shortcuts" />
        </dl>
      </div>
    </section>
  )
}

function HeroFact({
  label,
  value,
  sub,
}: {
  label: string
  value: string
  sub: string
}) {
  return (
    <div className="bg-ink/40 px-5 py-4 backdrop-blur-sm">
      <dt className="text-[10px] uppercase tracking-widest2 text-gold">
        {label}
      </dt>
      <dd className="mt-1 font-display text-lg leading-tight text-paper">
        {value}
      </dd>
      <dd className="text-xs text-paper/55">{sub}</dd>
    </div>
  )
}

function StorySection() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-widest2 text-tomato">
            Our Story
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-tight tracking-tight">
            A neighborhood pizzeria with a little extra spark.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">{story.body}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            {story.invite}
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-tomato underline-offset-4 hover:underline"
          >
            Read the full story
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 -z-0 h-full w-full rounded-3xl border-2 border-ink/20" />
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={gallery[1].src}
                alt={gallery[1].caption}
                width={760}
                height={760}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 rotate-3 rounded-2xl bg-tomato px-6 py-4 text-paper shadow-xl sm:-right-6">
              <p className="font-display text-3xl font-semibold leading-none">
                100%
              </p>
              <p className="text-xs uppercase tracking-widest2">
                Fresh ingredients
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {/* warm depth so the panel isn't a flat brown rectangle */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 18% 0%, rgba(227,167,47,0.16), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(196,53,43,0.22), transparent 65%)",
        }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest2 text-gold">
              <span className="h-px w-10 bg-gold" />
              Why Antonio's
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.3rem)] font-semibold leading-[1.04] tracking-tight">
              Three things we never{" "}
              <span className="italic text-gold">cut corners</span> on.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-paper/55 md:text-right">
              Simple promises, kept every single day on Flatbush Ave.
            </p>
          </Reveal>
        </div>

        <div className="mt-14">
          <ValueCards />
        </div>
      </div>
    </section>
  )
}

function GalleryPreview() {
  const picks = gallery.slice(0, 6)
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-tomato">
            From the counter
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-tight tracking-tight">
            Straight out of the oven.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <Link
            href="/gallery"
            className="rounded-full border border-ink/25 px-6 py-3 font-semibold transition-colors hover:bg-ink hover:text-paper"
          >
            See the full gallery
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {picks.map((item, i) => (
          <Reveal
            key={item.src}
            delay={(i % 3) * 100}
            className={i === 0 ? "col-span-2 row-span-2 lg:col-span-1" : ""}
          >
            <figure className="group relative h-full overflow-hidden rounded-2xl">
              <Image
                src={item.src}
                alt={item.caption}
                width={680}
                height={680}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/85 to-transparent p-4 text-sm font-medium text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function VisitSection() {
  return (
    <section className="relative overflow-hidden bg-tomato text-paper">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-paper/70">
            Come hungry
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight">
            Pull up a stool on Flatbush Ave.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/85">
            Whether you're around Kings County for a slice on the run or a full
            table on a Friday night, the door is open every single day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={business.orderUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              Order Online
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-paper/50 px-7 py-3.5 font-semibold transition-colors hover:bg-paper hover:text-tomato"
            >
              Get directions
            </a>
            <a
              href={business.phoneHref}
              className="rounded-full border border-paper/50 px-7 py-3.5 font-semibold transition-colors hover:bg-paper hover:text-tomato"
            >
              Call {business.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-paper/25 bg-ink/30 p-8 backdrop-blur-sm">
            <dl className="divide-y divide-paper/20">
              <VisitRow label="Address">
                {business.address.street}
                <br />
                {business.address.city}
              </VisitRow>
              <VisitRow label="Hours">
                {hours.label}
                <br />
                {hours.range}
              </VisitRow>
              <VisitRow label="Phone">
                <a href={business.phoneHref} className="hover:underline">
                  {business.phone}
                </a>
              </VisitRow>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function VisitRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start justify-between gap-6 py-4 first:pt-0 last:pb-0">
      <dt className="text-xs uppercase tracking-widest2 text-paper/60">
        {label}
      </dt>
      <dd className="text-right font-display text-lg leading-snug">
        {children}
      </dd>
    </div>
  )
}
