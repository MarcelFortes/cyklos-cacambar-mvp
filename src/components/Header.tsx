"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";

const navItems = [
  { label: "Request Service", href: "/request" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "NFT-CTR", href: "/nft-ctr/NFT-CTR-0001" },
];

function isCacambarAppRoute(pathname: string) {
  return (
    pathname.startsWith("/request") ||
    pathname.startsWith("/marketplace") ||
    pathname.startsWith("/order")
  );
}

export function Header() {
  const pathname = usePathname();
  const isCacambarApp = isCacambarAppRoute(pathname);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        isCacambarApp
          ? "border-cacambar-orange/35 bg-[#120b05]/92"
          : "border-slate-700/60 bg-cyklos-dark/88"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="block" aria-label="Go to homepage">
          {isCacambarApp ? (
            <div className="flex items-center gap-5 rounded-[24px] border border-cacambar-orange/45 bg-cacambar-orange/[0.055] px-6 py-4 shadow-[0_0_28px_rgba(249,115,22,0.16)]">
              <BrandLogo type="cacambar" className="h-[48px] md:h-[56px]" />

              <div className="hidden flex-col leading-none sm:flex">
                <span className="text-xs font-black uppercase tracking-[0.28em] text-cacambar-orange">
                  Operational App
                </span>
                <span className="mt-1 text-sm font-semibold text-slate-300">
                  Container marketplace and logistics flow
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-5 rounded-[22px] border border-slate-700/60 bg-white/[0.018] px-5 py-3 shadow-[0_0_24px_rgba(0,0,0,0.16)]">
              <BrandLogo type="cyklos" className="h-[42px] md:h-[46px]" />

              <span className="h-11 w-px bg-slate-600/65" />

              <BrandLogo type="cacambar" className="h-[38px] md:h-[42px]" />
            </div>
          )}
        </Link>

        <nav className="flex flex-wrap items-center gap-3">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            const activeClass = isCacambarApp
              ? "border-cacambar-orange/80 bg-cacambar-orange/[0.10] text-cacambar-orange shadow-[0_0_18px_rgba(249,115,22,0.18)]"
              : item.label === "NFT-CTR"
                ? "border-cyklos-purple/70 bg-cyklos-purple/10 text-cyklos-purple shadow-[0_0_18px_rgba(139,92,246,0.15)]"
                : "border-white/30 bg-white/[0.04] text-white";

            const inactiveClass = isCacambarApp
              ? "border-cacambar-orange/30 bg-cacambar-orange/[0.025] text-slate-200 hover:border-cacambar-orange/70 hover:bg-cacambar-orange/[0.08] hover:text-cacambar-orange"
              : "border-slate-600/70 bg-white/[0.018] text-slate-200 hover:border-cyklos-cyan/50 hover:bg-white/[0.035] hover:text-white";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl border px-5 py-3 text-sm font-bold transition-all duration-200 ${
                  isActive ? activeClass : inactiveClass
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}