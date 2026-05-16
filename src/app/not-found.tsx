import Link from "next/link"

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 py-32 text-center">
      <p className="font-display text-[7rem] font-semibold leading-none text-tomato">
        404
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">
        This slice slipped off the tray.
      </h1>
      <p className="mt-3 text-ink/65">
        The page you're after isn't on the menu. Let's get you back to
        something hot.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition-colors hover:bg-tomato"
      >
        Back to home
      </Link>
    </section>
  )
}
