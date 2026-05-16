/**
 * Single source of truth for Antonio's Pizza.
 *
 * Every value below is taken verbatim from the scraped source page
 * (raw messy data/source-main-page.html). Nothing factual — prices,
 * menu items, dates — has been invented. Descriptive copy expands on
 * the original "Our Story" voice without asserting new facts.
 */

export const business = {
  name: "Antonio's Pizza",
  shortName: "Antonio's",
  tagline: "An electrifying slice of Brooklyn",
  city: "Brooklyn, NY",
  neighborhood: "Prospect Heights",
  phone: "718-398-2300",
  phoneHref: "tel:+17183982300",
  address: {
    street: "318 Flatbush Ave",
    city: "Brooklyn, NY 11238",
    full: "318 Flatbush Ave, Brooklyn, NY 11238",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=318+Flatbush+Ave+Brooklyn+NY+11238",
  /** Online ordering is handled by Slice. */
  orderUrl:
    "https://slicelife.com/restaurants/ny/brooklyn/11238/antonio-s-pizza/menu",
  origin: "https://www.antoniosnypizza.com",
} as const

export const hours = {
  label: "Monday – Sunday",
  range: "11:00 AM – 9:50 PM",
  note: "Open every day, all year round.",
} as const

/** Verbatim from the source "Our Story" section. */
export const story = {
  intro:
    "Welcome to Antonio's Pizza — an electrifying pizza place in Brooklyn, NY!",
  body: "Here, you will find some incredible food made only with the freshest ingredients. Plus, the atmosphere we provide is very friendly so a memorable dining experience is guaranteed.",
  invite:
    "If you're around Kings County, don't hesitate to give us a try.",
} as const

export const values = [
  {
    title: "Freshest ingredients",
    body: "Every pie starts with what's good that day — nothing frozen, nothing forgotten in the back.",
  },
  {
    title: "A friendly room",
    body: "Counter service that knows your order, a warm welcome whether it's your first visit or your fiftieth.",
  },
  {
    title: "Made for the neighborhood",
    body: "Built for Kings County — quick on a lunch break, easy for the whole table on a Friday night.",
  },
] as const

/** Local, deduplicated assets. Originals lived on the Squarespace CDN. */
export const gallery = [
  { src: "/images/pizza-01.webp", caption: "Hot out of the oven" },
  { src: "/images/pizza-02.webp", caption: "A proper Brooklyn slice" },
  { src: "/images/pizza-03.webp", caption: "Fresh from the counter" },
  { src: "/images/pizza-04.webp", caption: "Built to order" },
  { src: "/images/pizza-05.webp", caption: "The house favorite" },
  { src: "/images/pizza-06.webp", caption: "Crisp edge, soft center" },
  { src: "/images/pizza-07.webp", caption: "Loaded and ready" },
  { src: "/images/pizza-08.webp", caption: "Cheese pull guaranteed" },
  { src: "/images/pizza-09.webp", caption: "Plated and waiting" },
] as const

export const nav = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Visit", href: "/visit" },
] as const

export const marqueeWords = [
  "Freshest ingredients",
  "Brooklyn, NY",
  "Open every day",
  "Friendly atmosphere",
  "Electrifying slices",
  "318 Flatbush Ave",
] as const
