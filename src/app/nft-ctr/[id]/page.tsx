import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, LayoutDashboard, Package } from "lucide-react";
import { NFTCTRCard } from "@/components/NFTCTRCard";
import { demoNFTCTR } from "@/lib/mock-data";

interface NFTCTRPageProps {
  params: {
    id: string;
  };
}

export default function NFTCTRPage({ params }: NFTCTRPageProps) {
  if (params.id !== demoNFTCTR.id) {
    notFound();
  }

  return (
    <main className="min-h-screen text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/dashboard"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.35em] text-cyklos-cyan">
            CYKLOS PROOF LAYER
          </p>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            NFT-CTR Compliance Certificate
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Verifiable waste transport record generated from the completed
            CAÇAMBAR lifecycle.
          </p>
        </div>

        <NFTCTRCard nftCtr={demoNFTCTR} />

        <div className="mt-8 rounded-2xl border border-cyklos-cyan/30 bg-cyklos-cyan/10 p-5 text-center text-sm text-slate-300">
          MVP uses simulated Solana proof. Architecture is ready for Devnet.
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-cyklos-cyan px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            <LayoutDashboard size={18} />
            Go to Dashboard
          </Link>
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 rounded-xl border border-cacambar-orange/40 px-5 py-3 font-bold text-cacambar-orange transition hover:bg-cacambar-orange/10"
          >
            <Package size={18} />
            Explore Marketplace
          </Link>
        </div>
      </section>
    </main>
  );
}
