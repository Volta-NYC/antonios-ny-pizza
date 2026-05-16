"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { business, nav } from "@/lib/site"

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label={business.name}>
          <span className="block h-11 w-11 transition-transform duration-300 group-hover:rotate-12">
            <Image
              src="/images/icon.png"
              alt=""
              width={44}
              height={44}
              priority
              className="h-11 w-11 object-contain"
            />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold tracking-tight text-ink">
              {business.name}
            </span>
            <span className="block text-[10px] uppercase tracking-widest2 text-tomato">
              Brooklyn · NY
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-tomato" : "text-ink/70 hover:text-ink"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-tomato" />
                )}
              </Link>
            )
          })}
          <a
            href={business.phoneHref}
            className="ml-1 rounded-full px-3 py-2 text-sm font-semibold text-ink/70 transition-colors hover:text-tomato"
          >
            {business.phone}
          </a>
          <a
            href={business.orderUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-tomato px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ember"
          >
            Order Online
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-ink/10 bg-paper md:hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b border-ink/10 py-3 font-display text-lg ${
                pathname === item.href ? "text-tomato" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={business.orderUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 rounded-full bg-tomato px-5 py-3 text-center font-semibold text-paper"
          >
            Order Online
          </a>
          <a
            href={business.phoneHref}
            className="mt-2 rounded-full border border-ink/25 px-5 py-3 text-center font-semibold text-ink"
          >
            Call {business.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}

