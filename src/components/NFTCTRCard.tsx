// Reusable CYKLOS NFT-CTR certificate card component.

import { NFTCTR } from "@/lib/types";
import { ExternalLink, Hash, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface NFTCTRCardProps {
  nft: NFTCTR;
}

export function NFTCTRCard({ nft }: NFTCTRCardProps) {
  return (
    <div className="rounded-xl border border-cyklos-cyan/40 bg-cyklos-cyan/10 p-6 shadow-lg backdrop-blur">
      <div className="mb-4 flex items-center gap-3">
        <CheckCircle2 size={24} className="text-cyklos-cyan" />
        <h3 className="text-xl font-bold text-white">{nft.name}</h3>
      </div>

      <p className="mb-4 text-slate-200">{nft.description}</p>

      <div className="space-y-2 text-sm">
        <div>
          <p className="text-slate-400">Order ID</p>
          <p className="font-semibold text-white">{nft.orderId}</p>
        </div>

        <div>
          <p className="text-slate-400">CTR Hash (SHA-256)</p>
          <div className="flex items-center gap-2 break-all rounded-md bg-cyklos-slate p-2 text-xs font-mono text-cyklos-cyan">
            <Hash size={14} />
            <span>{nft.ctrHash}</span>
          </div>
        </div>

        <div>
          <p className="text-slate-400">Solana Proof (Mock)</p>
          <div className="flex items-center gap-2 break-all rounded-md bg-cyklos-slate p-2 text-xs font-mono text-cyklos-cyan">
            <ExternalLink size={14} />
            <Link
              href={nft.explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {nft.solanaSignature}
            </Link>
          </div>

          <p className="mt-1 text-xs text-slate-500">
            This is a simulated Solana proof for MVP demonstration.
          </p>
        </div>

        <div>
          <p className="text-slate-400">Minted At</p>
          <p className="font-semibold text-white">
            {new Date(nft.mintedAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
