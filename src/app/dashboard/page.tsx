import Link from "next/link";
import {
  BadgeCheck,
  BarChart3,
  ClipboardCheck,
  ExternalLink,
  FileText,
  Leaf,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { demoDashboardData, demoNFTCTR, demoOrder } from "@/lib/mock-data";

const metricCards = [
  {
    label: "Total Orders Tracked",
    value: demoDashboardData.totalOrdersTracked,
    detail: "CAÇAMBAR operational flow",
    icon: Truck,
    color: "text-cacambar-orange",
  },
  {
    label: "Verified Lifecycle Events",
    value: demoDashboardData.verifiedLifecycleEvents,
    detail: "Delivery, pickup and destination events",
    icon: ClipboardCheck,
    color: "text-cyklos-cyan",
  },
  {
    label: "CTR Hashes Generated",
    value: demoDashboardData.ctrHashesGenerated,
    detail: "Critical lifecycle fingerprints",
    icon: ShieldCheck,
    color: "text-cyklos-cyan",
  },
  {
    label: "NFT-CTR Certificates Issued",
    value: demoDashboardData.nftCtrCertificatesIssued,
    detail: "Compliance certificates",
    icon: BadgeCheck,
    color: "text-cyklos-purple",
  },
  {
    label: "Simulated Solana Proofs",
    value: demoDashboardData.simulatedSolanaProofs,
    detail: "Ready for Devnet milestone",
    icon: FileText,
    color: "text-cyklos-purple",
  },
  {
    label: "Circular Economy Metric",
    value: "5m³",
    detail: "Construction debris routed to licensed destination",
    icon: Leaf,
    color: "text-emerald-300",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.35em] text-cyklos-cyan">
              CYKLOS PROOF DASHBOARD
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-5xl">
              Operational logistics and compliance records
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Demo insights into operational logistics, compliance records and
              verifiable circular economy proofs.
            </p>
          </div>

          <Link
            href={`/nft-ctr/${demoNFTCTR.id}`}
            className="inline-flex items-center gap-2 rounded-xl bg-cyklos-purple px-5 py-3 font-bold text-slate-950 transition hover:bg-purple-400"
          >
            View Latest NFT-CTR
            <ExternalLink size={18} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {metricCards.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="cyklos-surface rounded-2xl p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <Icon size={26} className={metric.color} />
                  <BarChart3 size={18} className="text-slate-500" />
                </div>
                <p className="text-sm text-slate-400">{metric.label}</p>
                <p className="mt-2 text-3xl font-black text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {metric.detail}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl border border-cacambar-orange/30 bg-cacambar-dark/75 p-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-cacambar-orange">
              Supplier Performance
            </p>
            <h2 className="text-2xl font-bold text-white">
              {demoOrder.supplierName}
            </h2>
            <p className="mt-3 text-slate-300">
              {demoDashboardData.supplierPerformance}. The supplier completed
              service assignment, delivery, collection and destination handoff
              in the demo lifecycle.
            </p>

            <div className="mt-6 grid gap-4 text-sm md:grid-cols-3">
              <div>
                <p className="text-slate-400">Order</p>
                <p className="font-semibold text-white">{demoOrder.id}</p>
              </div>
              <div>
                <p className="text-slate-400">Status</p>
                <StatusBadge status={demoOrder.status} />
              </div>
              <div>
                <p className="text-slate-400">Destination</p>
                <p className="font-semibold text-white">
                  {demoOrder.destinationFacility}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyklos-cyan/30 bg-cyklos-cyan/10 p-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-cyklos-cyan">
              Compliance Status
            </p>
            <h2 className="text-2xl font-bold text-white">
              {demoDashboardData.complianceStatus}
            </h2>
            <p className="mt-3 text-slate-300">
              The MVP shows an audit-ready record from off-chain operational
              data to an on-chain-ready public proof structure.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <p className="font-semibold text-white">Proof Mode</p>
              <p className="mt-1">Simulated Solana proof, ready for Devnet.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
