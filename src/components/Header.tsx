import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-cyklos-dark/80 py-4 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-base font-black tracking-tight text-white md:text-xl">
            CYKLOS
          </span>

          <span className="text-xs font-bold uppercase tracking-wide text-cacambar-orange md:text-sm">
            CAÇAMBAR APP
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/marketplace"
                className="text-sm font-medium text-slate-300 transition hover:text-cacambar-orange"
              >
                Marketplace
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-slate-300 transition hover:text-cyklos-cyan"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
