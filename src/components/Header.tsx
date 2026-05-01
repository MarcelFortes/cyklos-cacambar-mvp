"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/marketplace", label: "Marketplace", accent: "cacambar" },
  { href: "/dashboard", label: "Dashboard", accent: "cyklos" },
  { href: "/nft-ctr/NFT-CTR-0001", label: "NFT-CTR", accent: "cyklos" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-cyklos-slate/80 bg-cyklos-dark/95 shadow-xl shadow-black/30 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyklos-cyan/60 bg-cyklos-navy text-sm font-black text-cyklos-cyan shadow-lg shadow-cyklos-cyan/20">
            C
          </div>

          <div className="leading-none">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black tracking-tight text-white transition group-hover:text-cyklos-cyan">
                CYKLOS
              </span>
              <span className="rounded-full border border-cacambar-orange/50 bg-cacambar-orange/15 px-2 py-1 text-xs font-black uppercase tracking-wide text-cacambar-orange shadow-sm shadow-cacambar-orange/10">
                CAÇAMBAR APP
              </span>
            </div>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-slate-300">
              Circular economy proof layer
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href.startsWith("/nft-ctr") &&
                pathname.startsWith("/nft-ctr"));

            const activeClass =
              item.accent === "cacambar"
                ? "border-cacambar-orange/60 bg-cacambar-orange/15 text-cacambar-orange shadow-lg shadow-cacambar-orange/10"
                : "border-cyklos-cyan/60 bg-cyklos-cyan/15 text-cyklos-cyan shadow-lg shadow-cyklos-cyan/10";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                  isActive
                    ? activeClass
                    : "border-cyklos-slate/50 bg-cyklos-navy/80 text-slate-200 hover:border-cyklos-cyan/50 hover:bg-cyklos-navy hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
