import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  DatabaseZap,
  Route,
  ShieldCheck,
} from "lucide-react";

const demoSteps = [
  "Request Service",
  "Marketplace",
  "Confirmation",
  "Tracking",
  "Destination Validation",
  "NFT-CTR",
  "Dashboard",
];

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyklos-cyan/40 bg-cyklos-cyan/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-cyklos-cyan">
            CYKLOS Infrastructure / CAÇAMBAR App
          </div>

          <h1 className="text-4xl font-black leading-tight md:text-7xl">
            Turning construction waste logistics into verifiable circular
            economy infrastructure.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            CYKLOS is the public verification infrastructure. CAÇAMBAR is the
            operational marketplace app. Together, they turn container rental,
            delivery, pickup and destination validation into an audit-ready
            compliance certificate.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/request"
              className="inline-flex items-center gap-2 rounded-xl bg-cacambar-orange px-6 py-4 font-bold text-slate-950 transition hover:bg-orange-400"
            >
              Start CAÇAMBAR Demo
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl border border-cyklos-cyan/40 px-6 py-4 font-bold text-cyklos-cyan transition hover:bg-cyklos-cyan/10"
            >
              View CYKLOS Dashboard
            </Link>

            <Link
              href="/nft-ctr/NFT-CTR-0001"
              className="inline-flex items-center gap-2 rounded-xl border border-cyklos-purple/40 px-6 py-4 font-bold text-cyklos-purple transition hover:bg-cyklos-purple/10"
            >
              View NFT-CTR Certificate
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="cyklos-surface rounded-2xl p-6">
            <ShieldCheck className="mb-4 text-cyklos-cyan" size={28} />
            <h2 className="text-xl font-bold">CYKLOS proof infrastructure</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Public verification layer for CTR hashes, simulated Solana proof
              and audit-ready circular economy records.
            </p>
          </div>

          <div className="rounded-2xl border border-cacambar-orange/35 bg-cacambar-dark/80 p-6 cacambar-glow">
            <Route className="mb-4 text-cacambar-orange" size={28} />
            <h2 className="text-xl font-bold">CAÇAMBAR operational app</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Demo marketplace for service requests, supplier selection,
              container delivery, pickup and destination tracking.
            </p>
          </div>

          <div className="rounded-2xl border border-cyklos-purple/35 bg-cyklos-purple/10 p-6 purple-glow">
            <BadgeCheck className="mb-4 text-cyklos-purple" size={28} />
            <h2 className="text-xl font-bold">NFT-CTR certificate</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              A verifiable waste transport compliance certificate for audit-ready
              circular economy proof.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="cyklos-surface-strong rounded-3xl p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyklos-cyan">
                Demo Journey
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                How the MVP works
              </h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Follow the exact path a judge should use to evaluate the demo:
                from service request to compliance certificate and dashboard.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
              Off-chain operations + on-chain-ready public proof
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-7">
            {demoSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-cyklos-slate/70 p-4"
              >
                <p className="text-xs font-bold text-cyklos-cyan">
                  0{index + 1}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <DatabaseZap className="mb-4 text-cyklos-cyan" size={26} />
          <h3 className="text-lg font-bold">Solana is not the database</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Operational data stays off-chain. Critical lifecycle hashes are
            prepared for public verification through a Solana-ready proof layer.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ClipboardCheck className="mb-4 text-cacambar-orange" size={26} />
          <h3 className="text-lg font-bold">Operational flow first</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            The demo shows address capture, supplier selection, simulated
            payment, delivery, pickup, transport and destination validation.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <BadgeCheck className="mb-4 text-cyklos-purple" size={26} />
          <h3 className="text-lg font-bold">Compliance certificate</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            NFT-CTR represents a verifiable waste transport certificate created
            after the full lifecycle is validated.
          </p>
        </div>
      </section>
    </main>
  );
}
