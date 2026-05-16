"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

type Item = { src: string; caption: string }

/** Masonry-style gallery grid with a keyboard-navigable lightbox. */
export default function GalleryLightbox({ items }: { items: readonly Item[] }) {
  const [index, setIndex] = useState<number | null>(null)
  const open = index !== null

  const close = useCallback(() => setIndex(null), [])
  const step = useCallback(
    (dir: number) =>
      setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, close, step])

  return (
    <>
      <div className="columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
        {items.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setIndex(i)}
            className="group relative block w-full overflow-hidden rounded-2xl"
            aria-label={`View ${item.caption}`}
          >
            <Image
              src={item.src}
              alt={item.caption}
              width={680}
              height={520}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
            <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/90 to-transparent p-4 text-left text-sm font-medium text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      {open && index !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={close}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-paper/30 text-2xl text-paper transition-colors hover:bg-paper hover:text-ink"
            aria-label="Close"
          >
            ×
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-ink sm:left-8"
            aria-label="Previous"
          >
            ‹
          </button>
          <figure
            className="max-h-[85vh] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[index].src}
              alt={items[index].caption}
              width={1100}
              height={840}
              className="max-h-[78vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center font-display text-lg text-paper">
              {items[index].caption}
              <span className="ml-3 text-sm text-paper/50">
                {index + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-ink sm:right-8"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
