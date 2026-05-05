import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Hash,
  MapPinned,
  Route,
  ShieldCheck,
  Truck,
  UserCircle2,
} from "lucide-react";
import { demoOrder } from "@/lib/mock-data";
import { OrderTimeline } from "@/components/OrderTimeline";
import { StatusBadge } from "@/components/StatusBadge";

const routeSteps = [
  {
    id: "pickup",
    eyebrow: "01 / Pickup",
    title: "Construction site",
    description: "Rua Augusta, 1500 — São Paulo, SP",
    detail: "Container requested and prepared for collection.",
    accent: "orange",
    icon: MapPinned,
  },
  {
    id: "transit",
    eyebrow: "02 / Transit",
    title: "CAÇAMBAR route",
    description: "Simulated logistics corridor",
    detail: "Delivery and pickup lifecycle tracked by the app.",
    accent: "orange",
    icon: Truck,
  },
  {
    id: "destination",
    eyebrow: "03 / Destination",
    title: "Recovery facility",
    description: "Licensed receiving partner",
    detail: "Final destination receives and validates the waste.",
    accent: "orange",
    icon: Building2,
  },
  {
    id: "proof",
    eyebrow: "04 / Proof",
    title: "CYKLOS layer",
    description: "CTR hash + NFT-CTR reference",
    detail: "Lifecycle converted into public-proof readiness.",
    accent: "cyan",
    icon: ShieldCheck,
  },
];

function getStepClasses(accent: "orange" | "cyan") {
  if (accent === "cyan") {
    return {
      border: "border-cyklos-cyan/40",
      bg: "bg-cyklos-cyan/[0.055]",
      eyebrow: "text-cyklos-cyan",
      iconWrap: "border-cyklos-cyan/45 bg-cyklos-cyan/10 text-cyklos-cyan",
      dot: "bg-cyklos-cyan shadow-[0_0_18px_rgba(34,211,238,0.45)]",
    };
  }

  return {
    border: "border-cacambar-orange/40",
    bg: "bg-cacambar-orange/[0.055]",
    eyebrow: "text-cacambar-orange",
    iconWrap:
      "border-cacambar-orange/45 bg-cacambar-orange/10 text-cacambar-orange",
    dot: "bg-cacambar-orange shadow-[0_0_18px_rgba(249,115,22,0.45)]",
  };
}

export default function OrderTrackingPage({
  params,
}: {
  params: { id: string };
}) {
  if (params.id !== demoOrder.id) {
    notFound();
  }

  const orderId = params.id;
  const currentStatus = demoOrder.status;

  return (
    <main className="min-h-screen bg-[#060816] text-white">
      <section className="border-b border-cacambar-orange/15 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.12),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(34,211,238,0.08),_transparent_28%),linear-gradient(180deg,rgba(18,8,2,0.9),rgba(6,8,22,1))]">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 rounded-full border border-cacambar-orange/35 bg-cacambar-orange/10 px-4 py-2 text-sm font-semibold text-cacambar-orange transition hover:border-cacambar-orange/60 hover:bg-cacambar-orange/15"
            >
              <ArrowLeft size={16} />
              Back to marketplace
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex rounded-full border border-cacambar-orange/35 bg-cacambar-orange/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-cacambar-orange">
                Simulated route checkpoints
              </span>

              <span className="inline-flex rounded-full border border-cyklos-cyan/35 bg-cyklos-cyan/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-cyklos-cyan">
                No live GPS
              </span>

              <StatusBadge status={currentStatus} />
            </div>
          </div>

          <div className="rounded-3xl border border-cacambar-orange/30 bg-[#0d0a09]/86 p-5 shadow-[0_0_0_1px_rgba(249,115,22,0.05),0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-cacambar-orange">
                  CAÇAMBAR operational tracking
                </p>

                <h1 className="mt-3 max-w-[16ch] text-[2rem] font-black leading-[1.02] tracking-tight text-white md:text-[2.55rem] xl:text-[2.9rem]">
                  Route simulation for{" "}
                  <span className="text-cacambar-orange">
                    operational tracking
                  </span>{" "}
                  and{" "}
                  <span className="text-cyklos-cyan">proof readiness</span>
                </h1>

                <p className="mt-4 max-w-[58ch] text-sm leading-6 text-slate-300 md:text-base">
                  This MVP simulates route checkpoints from pickup to licensed
                  destination. It does not use live GPS. After destination
                  validation, CYKLOS prepares the CTR hash and NFT-CTR proof
                  reference.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                <div className="relative">
                  <div className="absolute left-[8%] right-[8%] top-[35px] hidden h-px bg-gradient-to-r from-cacambar-orange/70 via-cacambar-orange/55 to-cyklos-cyan/70 md:block" />

                  <div className="grid gap-3 md:grid-cols-4">
                    {routeSteps.map((step) => {
                      const Icon = step.icon;
                      const styles = getStepClasses(
                        step.accent as "orange" | "cyan"
                      );

                      return (
                        <div
                          key={step.id}
                          className={`relative rounded-2xl border ${styles.border} ${styles.bg} p-3.5`}
                        >
                          <div className="mb-3 flex items-center justify-between gap-2">
                            <div
                              className={`relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${styles.iconWrap}`}
                            >
                              <Icon size={20} />
                            </div>

                            <div
                              className={`h-2.5 w-2.5 rounded-full ${styles.dot}`}
                            />
                          </div>

                          <p
                            className={`text-[10px] font-black uppercase tracking-[0.16em] ${styles.eyebrow}`}
                          >
                            {step.eyebrow}
                          </p>

                          <h3 className="mt-1 text-[1.05rem] font-black leading-tight text-white">
                            {step.title}
                          </h3>

                          <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-300">
                            {step.description}
                          </p>

                          <p className="mt-1.5 text-xs leading-5 text-slate-400">
                            {step.detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr_1fr]">
              <div className="rounded-2xl border border-cacambar-orange/25 bg-cacambar-orange/[0.045] p-4">
                <div className="mb-3 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cacambar-orange/35 bg-cacambar-orange/10 text-cacambar-orange">
                    <UserCircle2 size={20} />
                  </div>

                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.16em] text-cacambar-orange">
                      Operator view
                    </p>
                    <h2 className="text-base font-black text-white">
                      CAÇAMBAR app
                    </h2>
                  </div>
                </div>

                <div className="grid gap-2 text-sm">
                  <div className="rounded-xl border border-cacambar-orange/20 bg-black/20 p-3">
                    <p className="text-slate-400">Operator</p>
                    <p className="mt-1 font-semibold text-white">
                      ops@cacambar.app
                    </p>
                  </div>

                  <div className="rounded-xl border border-cacambar-orange/20 bg-black/20 p-3">
                    <p className="text-slate-400">Order reference</p>
                    <p className="mt-1 font-semibold text-white">{orderId}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-cyklos-cyan/25 bg-cyklos-cyan/[0.055] p-4">
                <div className="mb-3 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyklos-cyan/35 bg-cyklos-cyan/10 text-cyklos-cyan">
                    <Hash size={20} />
                  </div>

                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.16em] text-cyklos-cyan">
                      Proof note
                    </p>
                    <h3 className="text-base font-black text-white">
                      Devnet-ready flow
                    </h3>
                  </div>
                </div>

                <p className="text-xs leading-6 text-slate-300">
                  Operational data stays off-chain. Critical proof references
                  are prepared after destination validation to show how CAÇAMBAR
                  feeds the CYKLOS proof layer.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyklos-cyan/35 bg-cyklos-cyan/10 px-3 py-1.5 text-[11px] font-semibold text-cyklos-cyan">
                    <ShieldCheck size={13} />
                    Solana mock proof
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-cyklos-purple/35 bg-cyklos-purple/10 px-3 py-1.5 text-[11px] font-semibold text-cyklos-purple">
                    <BadgeCheck size={13} />
                    NFT-CTR ready
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">
                  Flow summary
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  <span className="font-bold text-cacambar-orange">
                    CAÇAMBAR
                  </span>{" "}
                  simulates the operational route from pickup to licensed
                  destination.{" "}
                  <span className="font-bold text-cyklos-cyan">CYKLOS</span>{" "}
                  converts the validated lifecycle into a CTR hash and NFT-CTR
                  proof reference.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/nft-ctr/NFT-CTR-0001"
                    className="inline-flex items-center gap-2 rounded-xl border border-cyklos-purple/35 bg-cyklos-purple/10 px-4 py-2.5 text-sm font-bold text-cyklos-purple transition hover:border-cyklos-purple/60 hover:bg-cyklos-purple/15"
                  >
                    <BadgeCheck size={16} />
                    View NFT-CTR
                  </Link>

                  <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 rounded-xl border border-cyklos-cyan/35 bg-cyklos-cyan/10 px-4 py-2.5 text-sm font-bold text-cyklos-cyan transition hover:border-cyklos-cyan/60 hover:bg-cyklos-cyan/15"
                  >
                    <ClipboardCheck size={16} />
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cacambar-orange">
              Order lifecycle
            </p>

            <h2 className="mt-1 text-2xl font-black text-white md:text-[1.9rem]">
              Operational and proof timeline
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            <Route size={15} className="text-cacambar-orange" />
            Simulated route + proof events
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur">
          <OrderTimeline
            events={demoOrder.trackingEvents}
            currentStatus={currentStatus}
          />
        </div>
      </section>
    </main>
  );
}