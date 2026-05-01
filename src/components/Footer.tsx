import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-cyklos-navy py-10 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <BrandLogo type="cyklos" />
            <BrandLogo type="cacambar" />
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-300">
            CYKLOS is the infrastructure layer. CAÇAMBAR is the operational
            marketplace. NFT-CTR is the verifiable compliance certificate for
            circular economy proof.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-cyklos-cyan">
            Demo Route
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/request" className="hover:text-white">
              Request Service
            </Link>
            <Link href="/marketplace" className="hover:text-white">
              Marketplace
            </Link>
            <Link href="/dashboard" className="hover:text-white">
              Dashboard
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-cyklos-purple">
            Proof Layer
          </p>
          <p className="text-sm leading-6 text-slate-300">
            Designed for a public verification layer. This MVP uses simulated
            Solana proof and remains ready for a Devnet milestone.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-6 text-xs text-slate-500">
        &copy; {new Date().getFullYear()} CYKLOS. All rights reserved.
      </div>
    </footer>
  );
}
