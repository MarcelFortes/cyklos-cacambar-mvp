import { NFTCTR } from "@/lib/types";
import { BadgeCheck, CalendarClock, ExternalLink, Hash, ShieldCheck } from "lucide-react";

interface NFTCTRCardProps {
  nftCtr: NFTCTR;
}

function formatValue(value?: string) {
  return value ? value.replace(/_/g, " ") : "Not provided";
}

export function NFTCTRCard({ nftCtr }: NFTCTRCardProps) {
  return (
    <div className="cyklos-surface-strong rounded-3xl p-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.28em] text-cyklos-cyan">
            CYKLOS Compliance Certificate
          </p>
          <h2 className="text-3xl font-black text-white">{nftCtr.name}</h2>
          <p className="mt-3 max-w-2xl text-slate-300">{nftCtr.description}</p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
          <BadgeCheck size={16} />
          {nftCtr.metadata.status}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Order ID</p>
          <p className="mt-1 font-semibold text-white">{nftCtr.orderId}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Waste Type</p>
          <p className="mt-1 font-semibold text-white">
            {formatValue(nftCtr.metadata.wasteType)}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Supplier</p>
          <p className="mt-1 font-semibold text-white">
            {nftCtr.metadata.supplierName}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Container Size</p>
          <p className="mt-1 font-semibold text-white">
            {formatValue(nftCtr.metadata.containerSize)}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:col-span-2">
          <p className="text-sm text-slate-400">Service Address</p>
          <p className="mt-1 font-semibold text-white">
            {formatValue(nftCtr.metadata.serviceAddress)}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:col-span-2">
          <p className="text-sm text-slate-400">Destination Facility</p>
          <p className="mt-1 font-semibold text-white">
            {nftCtr.metadata.destination}
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-5">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-cyklos-cyan">
            <Hash size={16} />
            CTR Hash
          </div>
          <div className="break-all rounded-2xl border border-cyklos-cyan/25 bg-cyklos-slate p-4 font-mono text-xs text-cyklos-cyan">
            {nftCtr.ctrHash}
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-cyklos-purple">
            <ShieldCheck size={16} />
            Solana Proof Signature (Simulated)
          </div>
          <div className="break-all rounded-2xl border border-cyklos-purple/25 bg-cyklos-slate p-4 font-mono text-xs text-cyklos-purple">
            {nftCtr.solanaSignature}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <CalendarClock size={16} className="text-cyklos-cyan" />
          Issued at {new Date(nftCtr.mintedAt).toLocaleString()}
        </div>

        <a
          href={nftCtr.explorerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyklos-cyan/35 px-4 py-3 text-sm font-bold text-cyklos-cyan transition hover:bg-cyklos-cyan/10"
        >
          View simulated proof
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
