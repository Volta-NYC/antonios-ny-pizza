import type { Metadata } from "next"
import GalleryLightbox from "@/lib/components/gallery-lightbox"
import PageHeader from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import { business, gallery } from "@/lib/site"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at the pizza, the counter, and the food at Antonio's Pizza in Brooklyn, NY.",
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="The gallery"
        title="Hot, fresh, and photogenic."
        intro="No filters needed. A look at what comes across the counter at Antonio's — every pie made to order with the freshest ingredients."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <GalleryLightbox items={gallery} />
        </Reveal>
        <div className="mt-14 flex flex-col items-center gap-4">
          <p className="font-display text-2xl font-semibold tracking-tight">
            Hungry yet?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </section>
    </>
  )
}
