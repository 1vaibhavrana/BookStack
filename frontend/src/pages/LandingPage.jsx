import React from "react";

// Drop this file anywhere in your React app (e.g., src/pages/Landing.jsx)
// and render <LandingPage />. Tailwind CSS must be configured in your project.
// No third‑party UI libs required.

const features = [
  {
    title: "Smart Search",
    desc: "Lightning‑fast search across title, author, genre and tags.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m1.1-4.4a7.75 7.75 0 11-15.5 0 7.75 7.75 0 0115.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Download & Upload",
    desc: "Download and Upload your most favourite book at one place",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7h12M3 12h18M3 17h12"
        />
      </svg>
    ),
  },
  {
    title: "Self Admin",
    desc: "Admin, Librarian, and Member you have the power of all the three",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 20a7 7 0 1116 0v1H4v-1z"
        />
      </svg>
    ),
  },
  {
    title: "Read Friendly UI",
    desc: "Fully responsive UI with PWA‑ready layout patterns.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
  },
  {
    title: "Analytics",
    desc: "Track popular books, active users, and daily circulation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 19V5m5 14V9m5 10V7m5 12V3"
        />
      </svg>
    ),
  },
  {
    title: "Connect ",
    desc: "Connect with people of similar reads",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 6H6a2 2 0 00-2 2v8a2 2 0 002 2h4M14 6h4a2 2 0 012 2v8a2 2 0 01-2 2h-4"
        />
      </svg>
    ),
  },
];

const categories = [
  { name: "Fiction", href: "/category/fiction", count: 1240 },
  { name: "Non‑Fiction", href: "/category/non-fiction", count: 980 },
  { name: "Sci‑Fi", href: "/category/scifi", count: 410 },
  { name: "Biography", href: "/category/biography", count: 320 },
  { name: "Self‑Help", href: "/category/self-help", count: 560 },
  { name: "Academics", href: "/category/academics", count: 1520 },
];

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-950/70 border-b border-neutral-200/60 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 text-white">
              📚
            </span>
            <span>BookStack</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">
              Features
            </a>
            <a href="#categories" className="hover:opacity-80">
              Categories
            </a>
            <a href="#faq" className="hover:opacity-80">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-sm"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="px-3 py-1.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 text-sm"
            >
              Sign up
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl/tight md:text-5xl/tight font-extrabold tracking-tight">
                Your full‑stack{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500">
                  Library
                </span>{" "}
                experience.
              </h1>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Discover, download, upload and manage e-books from one place.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/app"
                  className="px-5 py-3 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium hover:opacity-90"
                >
                  Find your Niche
                </a>
                <a
                  href="#features"
                  className="px-5 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 font-medium"
                >
                  Upload
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                <span className="inline-flex items-center gap-1">
                  ✅ Reader's Hood
                </span>
                <span className="inline-flex items-center gap-1">
                  ⚡Self-taught 
                </span>
                <span className="inline-flex items-center gap-1">
                  🧩 Future Builder's
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-rose-500/20 blur-2xl" />

              <div className="aspect-[16/10] w-full rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 shadow-xl overflow-hidden">
                <img
                  src="/hero.jpg"
                  alt="Hero Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Everything you need for a modern library
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:shadow-lg transition-shadow bg-white/70 dark:bg-neutral-900/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
                    {f.icon}
                  </span>
                  <h3 className="font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        id="categories"
        className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950/60 border-y border-neutral-200/60 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Browse by category
              </h2>
              
            </div>
            <a
              href="/catalog"
              className="hidden md:inline-flex px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-sm"
            >
              View full catalog →
            </a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <a
                key={c.name}
                href={c.href}
                className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/70 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold group-hover:underline underline-offset-4 decoration-neutral-400">
                    {c.name}
                  </h3>
                  <span className="text-xs text-neutral-500">
                    {c.count} books
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  Curated picks, trending titles, and staff favorites.
                </p>
              </a>
            ))}
          </div>
          <div className="mt-6 md:hidden">
            <a
              href="/catalog"
              className="inline-flex px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-sm"
            >
              View full catalog →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">
            FAQ
          </h2>
          <div className="mt-8 divide-y divide-neutral-200 dark:divide-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
            {[
              {
                q: "Is this page free to use?",
                a: "Yes. Copy, modify, and ship. Keep the footer credit if you like.",
              },
              {
                q: "How do I connect to my MERN API?",
                a: "Wire the buttons and links to your existing routes. Replace placeholder counts with live data fetched via your endpoints.",
              },
              {
                q: "Does it support dark mode?",
                a: "Yes. It adapts automatically with the 'dark' class on <html> or your framework's theme toggler.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group open:bg-neutral-50/60 dark:open:bg-neutral-900/60"
              >
                <summary className="flex w-full items-center justify-between p-4 cursor-pointer select-none">
                  <span className="font-medium">{item.q}</span>
                  <span className="text-neutral-400 group-open:rotate-180 transition-transform">
                    ⌄
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-neutral-600 dark:text-neutral-300">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 md:p-12 text-center bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to go live?
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Deploy your Library app on Render, Railway, Vercel, or Netlify in
              minutes.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/signup"
                className="px-5 py-3 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium hover:opacity-90"
              >
                Create an account
              </a>
              <a
                href="/docs"
                className="px-5 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 font-medium"
              >
                Read docs
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* FOOTER */}
      <footer className="py-10 border-t border-neutral-200/60 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-neutral-500">
            © {new Date().getFullYear()} BookStack.
          </p>
          <div className="flex items-center gap-4 text-neutral-500">
            <a href="/privacy" className="hover:opacity-80">
              Privacy
            </a>
            <a href="/terms" className="hover:opacity-80">
              Terms
            </a>
            <a href="https://github.com/your-repo" className="hover:opacity-80">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
