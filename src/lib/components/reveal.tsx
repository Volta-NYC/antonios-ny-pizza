"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  /** Stagger offset in ms — lets siblings cascade into view. */
  delay?: number
  className?: string
  as?: ElementType
}

/**
 * Fades + lifts its children into place the first time they scroll
 * into view.
 *
 * Anything already within (or above) the viewport on mount is shown
 * immediately — this avoids the failure mode where a tall block sits
 * just below the fold, never crosses a ratio threshold, and stays
 * invisible until the user happens to scroll. Honors
 * prefers-reduced-motion via the .reveal CSS rule.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Already on screen (or above it) when we mount → reveal now.
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92) {
      setVisible(true)
      return
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
