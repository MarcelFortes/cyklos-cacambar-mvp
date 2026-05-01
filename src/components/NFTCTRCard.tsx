// Reusable CYKLOS NFT-CTR compliance certificate card component.

import { NFTCTR } from "@/lib/types";
import { ExternalLink, Hash, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface NFTCTRCardProps {
  nftCtr: NFTCTR;
}

export function NFTCTRCard({ nftCtr }: NFTCTRCardProps) {
  const nft = nftCtr;

  return (
    <div className="cyklos-surface-strong rounded-2xl p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyklos-cyan/45 bg-cyklos-dark text-cyklos-cyan">
            <ShieldCheck size={24} />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-cyklos-cyan">
              NFT-CTR
            </p>
            <h3 className="text-xl font-black text-white">{nft.name}</h3>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-300">
          <CheckCircle2 size={14} />
          {nft.metadata.status}
        </span>
      </div>

      <p className="mb-5 text-sm font-medium leading-6 text-slate-300">
        This NFT-CTR is a verifiable waste transport compliance certificate,
        generated from the CAÇAMBAR lifecycle and connected to a simulated
        Solana proof layer.
      </p>

      <div className="space-y-4 text-sm">
        <div className="rounded-xl border border-cyklos-slate bg-cyklos-dark p-4">
          <p className="text-xs font-black uppercase tracking-wide text-slate-300">
            Order ID
          </p>
          <p className="mt-1 font-black text-white">{nft.orderId}</p>
        </div>

        <div className="rounded-xl border border-cyklos-cyan/35 bg-cyklos-dark p-4">
          <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wide text-cyklos-cyan">
            <Hash size={14} />
            CTR Hash
          </p>
          <p className="break-all font-mono text-xs font-bold leading-5 text-cyklos-cyan">
            {nft.ctrHash}
          </p>
        </div>

        <div className="rounded-xl border border-cyklos-purple/35 bg-cyklos-dark p-4">
          <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wide text-cyklos-purple">
            <ExternalLink size={14} />
            Simulated Solana Proof
          </p>
          <Link
            href={nft.explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all font-mono text-xs font-bold leading-5 text-cyklos-purple hover:text-white hover:underline"
          >
            {nft.solanaSignature}
          </Link>
          <p className="mt-2 text-xs font-medium text-slate-300">
            MVP uses simulated proof. Architecture is ready for Devnet.
          </p>
        </div>

        <div className="rounded-xl border border-cyklos-slate bg-cyklos-dark p-4">
          <p className="text-xs font-black uppercase tracking-wide text-slate-300">
            Minted At
          </p>
          <p className="mt-1 font-black text-white">
            {new Date(nft.mintedAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
