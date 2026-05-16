/** Compact hero band used at the top of interior pages. */
export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <header className="relative overflow-hidden bg-ink text-paper">
      <div className="grain absolute inset-0" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #f7ecd6 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest2 text-gold">
          <span className="h-px w-10 bg-gold" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.98] tracking-tight">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">
            {intro}
          </p>
        )}
      </div>
      <div className="edge-divider h-2 w-full" />
    </header>
  )
}
