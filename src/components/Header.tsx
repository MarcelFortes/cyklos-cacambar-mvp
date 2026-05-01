"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";

const navItems = [
  { href: "/request", label: "Request Service" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/nft-ctr/NFT-CTR-0001", label: "NFT-CTR" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/marketplace") {
    return pathname.startsWith("/marketplace") || pathname.startsWith("/order");
  }

  if (href.startsWith("/nft-ctr")) {
    return pathname.startsWith("/nft-ctr");
  }

  return pathname === href;
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-cyklos-dark/85 py-4 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <BrandLogo type="cyklos" />
          <BrandLogo type="cacambar" />
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-2 md:gap-4">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                      active
                        ? "bg-white/10 text-white ring-1 ring-cyklos-cyan/40"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
