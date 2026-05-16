import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import ValueCards from "@/lib/components/value-cards"
import { business, gallery, story } from "@/lib/site"

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Antonio's Pizza — an electrifying pizza place in Brooklyn, NY, serving incredible food made with the freshest ingredients in a friendly atmosphere.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Pizza with a Brooklyn pulse."
        intro={story.intro}
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="font-display text-[clamp(1.5rem,2.6vw,2rem)] font-medium leading-snug text-ink">
              {story.body}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              There's no secret to it — just a commitment to doing the simple
              things properly. Good dough, good toppings, a hot oven, and a
              friendly face behind the counter. {story.invite}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/visit"
                className="rounded-full bg-tomato px-7 py-3.5 font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-ember"
              >
                Plan your visit
              </Link>
              <Link
                href="/gallery"
                className="rounded-full border border-ink/25 px-7 py-3.5 font-semibold transition-colors hover:bg-ink hover:text-paper"
              >
                See the food
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={gallery[2].src}
                alt={gallery[2].caption}
                width={520}
                height={520}
                className="mt-8 aspect-[4/5] w-full rounded-2xl object-cover"
              />
              <Image
                src={gallery[4].src}
                alt={gallery[4].caption}
                width={520}
                height={520}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 18% 0%, rgba(227,167,47,0.16), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(196,53,43,0.22), transparent 65%)",
          }}
        />
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest2 text-gold">
              <span className="h-px w-10 bg-gold" />
              The promise
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-tight tracking-tight">
              What you can count on.
            </h2>
          </Reveal>
          <div className="mt-14">
            <ValueCards />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-tomato">
            An open invitation
          </p>
          <p className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-medium italic leading-snug text-ink">
            &ldquo;{story.invite}&rdquo;
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
              className="rounded-full border border-ink/25 px-7 py-3.5 font-semibold transition-colors hover:bg-ink hover:text-paper"
            >
              Call {business.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
