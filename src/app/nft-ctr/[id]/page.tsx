import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Database,
  ExternalLink,
  FileCheck2,
  Hash,
  MapPin,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";

const certificateData = {
  nftId: "NFT-CTR-0001",
  orderId: "ORD-0001",
  wasteType: "CONSTRUCTION_DEBRIS",
  supplier: "EcoResíduos Solutions",
  containerSize: "5m³",
  address: "Rua Augusta, 1500 — São Paulo, SP",
  destination: "Recovery Facility — São Paulo, SP",
  issuedAt: "2026-05-04",
  hash: "0xCYKLOS-CTR-8F29A1C4D77B",
  proof: "Solana mock proof",
  status: "Certificate verified",
};

const infoCards = [
  {
    label: "Order ID",
    value: certificateData.orderId,
    icon: ClipboardCheck,
    accent: "text-cyklos-cyan",
  },
  {
    label: "Waste type",
    value: certificateData.wasteType.replace(/_/g, " "),
    icon: Package,
    accent: "text-cacambar-orange",
  },
  {
    label: "Supplier",
    value: certificateData.supplier,
    icon: Building2,
    accent: "text-cyklos-purple",
  },
  {
    label: "Container size",
    value: certificateData.containerSize,
    icon: Truck,
    accent: "text-cacambar-orange",
  },
  {
    label: "Address",
    value: certificateData.address,
    icon: MapPin,
    accent: "text-cyklos-cyan",
  },
  {
    label: "Issued at",
    value: certificateData.issuedAt,
    icon: Calendar,
    accent: "text-cyklos-purple",
  },
];

const proofSteps = [
  {
    title: "Operational lifecycle validated",
    description: "Order, supplier, pickup and final destination registered.",
    icon: CheckCircle2,
    accent: "text-cacambar-orange",
  },
  {
    title: "CTR hash prepared",
    description: "Critical data converted into a verifiable reference.",
    icon: Hash,
    accent: "text-cyklos-cyan",
  },
  {
    title: "NFT-CTR issued",
    description: "Digital certificate generated for audit and compliance.",
    icon: BadgeCheck,
    accent: "text-cyklos-purple",
  },
];

export default function NFTCTRPage({ params }: { params: { id: string } }) {
  const certificateId = params.id || certificateData.nftId;

  return (
    <main className="min-h-screen bg-[#060816] text-white">
      <section className="relative overflow-hidden border-b border-cyklos-cyan/15 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(139,92,246,0.12),_transparent_28%),linear-gradient(180deg,rgba(4,8,28,0.96),rgba(6,8,22,1))]">
        <div className="pointer-events-none absolute left-1/2 top-12 -z-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-cyklos-cyan/[0.05] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-7 lg:px-8 lg:py-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-cyklos-cyan"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </Link>

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-300">
              <CheckCircle2 size={14} />
              {certificateData.status}
            </span>
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-cyklos-cyan">
              CYKLOS proof layer
            </p>

            <h1 className="mt-3 text-[2rem] font-black leading-tight tracking-tight text-white md:text-[2.65rem] lg:text-[3rem]">
              NFT-CTR Compliance Certificate
            </h1>

            <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-300">
              Verifiable waste transport record generated from the completed
              CAÇAMBAR operational lifecycle.
            </p>
          </div>

          <div className="mt-7 rounded-3xl border border-cyklos-cyan/35 bg-cyklos-dark/70 p-5 shadow-2xl shadow-cyklos-cyan/10 backdrop-blur-xl">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-cyklos-cyan">
                  CYKLOS compliance certificate
                </p>

                <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
                  NFT-CTR for {certificateData.orderId}
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                  Verifiable certificate prepared for audit, ESG reporting,
                  public tenders and destination traceability.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-400/35 bg-emerald-400/10 px-4 py-3 text-sm font-bold text-emerald-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={17} />
                  Verified
                </div>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {infoCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <Icon size={15} className={card.accent} />
                      <p className="text-xs text-slate-400">{card.label}</p>
                    </div>

                    <p className="text-sm font-black leading-5 text-white">
                      {card.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-2xl border border-cyklos-cyan/25 bg-cyklos-cyan/[0.045] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Hash size={18} className="text-cyklos-cyan" />
                  <h3 className="text-base font-black text-white">
                    Public proof prepared
                  </h3>
                </div>

                <div className="rounded-xl border border-cyklos-cyan/20 bg-black/20 p-3">
                  <p className="text-xs text-slate-400">CTR Hash Reference</p>
                  <p className="mt-1 break-all text-sm font-bold text-cyklos-cyan">
                    {certificateData.hash}
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyklos-cyan/35 bg-cyklos-cyan/10 px-3 py-1.5 text-xs font-bold text-cyklos-cyan">
                    <Database size={13} />
                    Off-chain operational data
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-cyklos-purple/35 bg-cyklos-purple/10 px-3 py-1.5 text-xs font-bold text-cyklos-purple">
                    <FileCheck2 size={13} />
                    NFT-CTR ready
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-cyklos-purple/25 bg-cyklos-purple/[0.045] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <ExternalLink size={18} className="text-cyklos-purple" />
                  <h3 className="text-base font-black text-white">
                    Solana proof
                  </h3>
                </div>

                <p className="text-sm leading-6 text-slate-300">
                  This MVP demonstrates a Devnet-ready proof flow. The current
                  proof is simulated and prepared for future real Solana
                  transaction anchoring.
                </p>

                <div className="mt-3 rounded-xl border border-cyklos-purple/20 bg-black/20 p-3">
                  <p className="text-xs text-slate-400">Proof mode</p>
                  <p className="mt-1 text-sm font-bold text-cyklos-purple">
                    {certificateData.proof}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {proofSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <Icon size={20} className={step.accent} />
                    <h3 className="mt-3 text-sm font-black text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-300">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/order/ORD-0001"
                className="inline-flex items-center gap-2 rounded-xl border border-cacambar-orange/35 bg-cacambar-orange/10 px-5 py-3 text-sm font-bold text-cacambar-orange transition hover:bg-cacambar-orange/15"
              >
                <Truck size={16} />
                View tracking
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl border border-cyklos-cyan/35 bg-cyklos-cyan/10 px-5 py-3 text-sm font-bold text-cyklos-cyan transition hover:bg-cyklos-cyan/15"
              >
                <ShieldCheck size={16} />
                Open CYKLOS dashboard
              </Link>

              <span className="inline-flex items-center gap-2 rounded-xl border border-cyklos-purple/35 bg-cyklos-purple/10 px-5 py-3 text-sm font-bold text-cyklos-purple">
                <BadgeCheck size={16} />
                {certificateId}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}