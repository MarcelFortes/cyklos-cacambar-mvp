import { demoOrder, demoNFTCTR } from "@/lib/mock-data";
import { StatusBadge } from "@/components/StatusBadge";
import Link from "next/link";
import {
  CheckCircle2,
  ExternalLink,
  FileText,
  Package,
  Truck,
} from "lucide-react";

export default function DashboardPage() {
  const totalOrders = 1;
  const completedOrders = demoOrder.status === "NFT_CTR_MINTED" ? 1 : 0;
  const pendingOrders = totalOrders - completedOrders;

  return (
    <main className="min-h-screen bg-cyklos-dark text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.35em] text-cyklos-cyan">
            CYKLOS INFRASTRUCTURE
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            CYKLOS Proof Dashboard
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            Overview of CAÇAMBAR operations and CYKLOS verifiable compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-cacambar-orange/40 bg-cacambar-orange/10 p-6 shadow-lg backdrop-blur">
            <div className="mb-4 inline-flex items-center gap-2">
              <Truck size={24} className="text-cacambar-orange" />
              <h2 className="text-xl font-bold text-cacambar-orange">
                CAÇAMBAR Operations
              </h2>
            </div>

            <div className="space-y-3 text-slate-200">
              <p>
                <span className="font-semibold">Total Orders:</span>{" "}
                {totalOrders}
              </p>

              <p>
                <span className="font-semibold">Completed Orders:</span>{" "}
                {completedOrders}
              </p>

              <p>
                <span className="font-semibold">Pending Orders:</span>{" "}
                {pendingOrders}
              </p>

              <Link
                href={`/order/${demoOrder.id}`}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-cacambar-orange px-4 py-2 font-bold text-slate-950 transition hover:bg-orange-400"
              >
                View Latest Order
                <Package size={16} />
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-cyklos-cyan/40 bg-cyklos-cyan/10 p-6 shadow-lg backdrop-blur">
            <div className="mb-4 inline-flex items-center gap-2">
              <CheckCircle2 size={24} className="text-cyklos-cyan" />
              <h2 className="text-xl font-bold text-cyklos-cyan">
                CYKLOS Proof & Compliance
              </h2>
            </div>

            <div className="space-y-3 text-slate-200">
              <p>
                <span className="font-semibold">NFT-CTRs Issued:</span> 1
              </p>

              <p>
                <span className="font-semibold">Latest NFT-CTR:</span>{" "}
                {demoNFTCTR.id}
              </p>

              <p>
                <span className="font-semibold">Proof Mode:</span> Mock /
                Simulated
              </p>

              <Link
                href={`/nft-ctr/${demoNFTCTR.id}`}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-cyklos-purple px-4 py-2 font-bold text-slate-950 transition hover:bg-purple-400"
              >
                View Latest NFT-CTR
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-cyklos-purple/40 bg-cyklos-purple/10 p-6 shadow-lg backdrop-blur">
            <div className="mb-4 inline-flex items-center gap-2">
              <FileText size={24} className="text-cyklos-purple" />
              <h2 className="text-xl font-bold text-cyklos-purple">
                ESG Reporting
              </h2>
            </div>

            <div className="space-y-3 text-slate-200">
              <p>
                <span className="font-semibold">Waste Destination:</span>{" "}
                Verified
              </p>

              <p>
                <span className="font-semibold">Recycling Status:</span>{" "}
                Demo data
              </p>

              <p>
                <span className="font-semibold">Report Mode:</span> Coming soon
              </p>

              <button
                className="mt-4 inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-cyklos-purple/50 px-4 py-2 font-bold text-slate-300 opacity-70"
                disabled
              >
                Generate Report
                <FileText size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
          <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Latest Tracked Order
              </h2>
              <p className="text-sm text-slate-400">
                Operational flow powered by CAÇAMBAR and verified through the
                CYKLOS proof layer.
              </p>
            </div>

            <StatusBadge status={demoOrder.status} />
          </div>

          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
            <div>
              <p className="text-slate-400">Order ID</p>
              <p className="font-semibold text-white">{demoOrder.id}</p>
            </div>

            <div>
              <p className="text-slate-400">Supplier</p>
              <p className="font-semibold text-white">
                {demoOrder.supplierName}
              </p>
            </div>

            <div>
              <p className="text-slate-400">NFT-CTR</p>
              <p className="font-semibold text-white">{demoNFTCTR.id}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
