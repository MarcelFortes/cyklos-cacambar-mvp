import { demoNFTCTR } from "@/lib/mock-data";
import { ExternalLink, Hash, CheckCircle2, ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface NFTCTRPageProps {
  params: {
    id: string;
  };
}

export default function NFTCTRPage({ params }: NFTCTRPageProps) {
  const nft = demoNFTCTR;

  if (!nft || nft.id !== params.id) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cyklos-dark text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link
            href="/dashboard"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-cyklos-cyan/45 bg-cyklos-navy px-4 py-2 text-sm font-bold text-cyklos-cyan transition hover:border-cyklos-cyan hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>

          <Link
            href="/marketplace"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-cacambar-orange/45 bg-cacambar-orange/10 px-4 py-2 text-sm font-bold text-cacambar-orange transition hover:border-cacambar-orange hover:text-white"
          >
            View CAÇAMBAR Marketplace
          </Link>
        </div>

        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyklos-cyan/60 bg-cyklos-navy px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-cyklos-cyan">
            <ShieldCheck size={18} />
            CYKLOS PROOF LAYER
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            NFT-CTR Compliance Certificate
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg font-medium leading-8 text-slate-300">
            Verifiable waste transport record generated from the completed
            CAÇAMBAR lifecycle. MVP uses simulated Solana proof. Architecture is
            ready for Devnet.
          </p>
        </div>

        <div className="cyklos-surface-strong rounded-3xl p-8 md:p-10">
          <div className="mb-8 flex flex-col gap-6 border-b border-cyklos-cyan/20 pb-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-cyklos-purple">
                Verifiable compliance certificate
              </p>
              <h2 className="text-3xl font-black text-white">{nft.name}</h2>
              <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-slate-300">
                {nft.description}
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-4 text-left">
              <p className="text-xs font-black uppercase tracking-wide text-emerald-300">
                Certificate status
              </p>
              <p className="mt-1 flex items-center gap-2 text-lg font-black text-white">
                <CheckCircle2 size={20} className="text-emerald-300" />
                {nft.metadata.status}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-cyklos-slate bg-cyklos-dark p-5">
              <p className="text-sm font-bold text-slate-300">Order ID</p>
              <p className="mt-2 text-lg font-black text-white">{nft.orderId}</p>
            </div>

            <div className="rounded-2xl border border-cyklos-slate bg-cyklos-dark p-5">
              <p className="text-sm font-bold text-slate-300">Waste Type</p>
              <p className="mt-2 text-lg font-black text-white">
                {nft.metadata.wasteType.replace(/_/g, " ")}
              </p>
            </div>

            <div className="rounded-2xl border border-cacambar-orange/35 bg-cacambar-dark p-5">
              <p className="text-sm font-bold text-slate-300">Supplier Name</p>
              <p className="mt-2 text-lg font-black text-white">
                {nft.metadata.supplierName}
              </p>
            </div>

            <div className="rounded-2xl border border-cacambar-orange/35 bg-cacambar-dark p-5">
              <p className="text-sm font-bold text-slate-300">Destination</p>
              <p className="mt-2 text-lg font-black text-white">
                {nft.metadata.destination}
              </p>
            </div>

            <div className="rounded-2xl border border-cyklos-purple/40 bg-cyklos-slate p-5">
              <p className="text-sm font-bold text-slate-300">Minted At</p>
              <p className="mt-2 text-lg font-black text-white">
                {new Date(nft.mintedAt).toLocaleString()}
              </p>
            </div>

            <div className="rounded-2xl border border-cyklos-purple/40 bg-cyklos-slate p-5">
              <p className="text-sm font-bold text-slate-300">Proof Mode</p>
              <p className="mt-2 text-lg font-black text-white">
                Simulated Solana Proof
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-cyklos-cyan">
                <Hash size={16} />
                CTR Hash (SHA-256)
              </p>
              <div className="rounded-2xl border border-cyklos-cyan/35 bg-cyklos-dark p-4 text-left font-mono text-sm font-bold leading-6 text-cyklos-cyan shadow-inner shadow-black/40 break-all">
                {nft.ctrHash}
              </div>
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-cyklos-purple">
                <ExternalLink size={16} />
                Solana Proof Signature (Mock)
              </p>
              <div className="rounded-2xl border border-cyklos-purple/35 bg-cyklos-dark p-4 text-left font-mono text-sm font-bold leading-6 text-cyklos-purple shadow-inner shadow-black/40 break-all">
                <a
                  href={nft.explorerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  {nft.solanaSignature}
                </a>
              </div>
              <p className="mt-3 text-sm font-medium text-slate-300">
                This is a simulated Solana proof for MVP demonstration. The
                architecture is ready to be connected to a real Devnet proof.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
