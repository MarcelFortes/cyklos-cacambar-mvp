import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Database,
  FileCheck2,
  Globe,
  Hash,
  Package,
  Route,
} from "lucide-react";

const heroBadges = [
  "Web2 Marketplace",
  "CTR Hash",
  "Solana-ready Proof Layer",
  "NFT-CTR Certificate",
];

const cyklosBullets = [
  "Web3 infrastructure layer",
  "Public verification and audit-ready records",
  "NFT-CTR compliance certificates",
  "Solana-ready proof layer simulated for MVP",
];

const cacambarBullets = [
  "Construction waste marketplace",
  "Supplier availability and order lifecycle",
  "Pickup, transportation and destination validation",
  "Operational efficiency connected to compliance",
];

const demoSteps = [
  {
    number: "01",
    title: "Marketplace",
    label: "CAÇAMBAR operation",
    description:
      "Explore construction waste container suppliers and start the operational flow.",
    href: "/marketplace",
    cta: "Go to Marketplace",
    accent: "orange",
    icon: Package,
  },
  {
    number: "02",
    title: "Order Lifecycle",
    label: "Operational traceability",
    description:
      "Follow delivery, pickup, transport and destination events for a demo waste order.",
    href: "/order/ORD-0001",
    cta: "View Demo Order",
    accent: "orange",
    icon: Route,
  },
  {
    number: "03",
    title: "CTR Hash",
    label: "Data integrity",
    description:
      "Critical lifecycle data generates a SHA-256 Compliance Tracking Record hash.",
    href: null,
    cta: "Verifiable record",
    accent: "cyan",
    icon: Hash,
  },
  {
    number: "04",
    title: "Solana Proof",
    label: "Public verification layer",
    description:
      "The CTR hash connects to a simulated Solana-ready public verification layer for MVP demonstration.",
    href: null,
    cta: "Ready for Devnet",
    accent: "cyan",
    icon: Globe,
  },
  {
    number: "05",
    title: "NFT-CTR Certificate",
    label: "Compliance certificate",
    description:
      "The NFT-CTR becomes a verifiable waste transport compliance certificate, not a collectible NFT.",
    href: "/nft-ctr/NFT-CTR-0001",
    cta: "View NFT-CTR",
    accent: "purple",
    icon: Award,
  },
  {
    number: "06",
    title: "Dashboard",
    label: "CYKLOS intelligence",
    description:
      "Monitor CAÇAMBAR operational metrics and CYKLOS proof-layer records.",
    href: "/dashboard",
    cta: "Go to Dashboard",
    accent: "cyan",
    icon: Database,
  },
];

function accentClasses(accent: string) {
  if (accent === "orange") {
    return {
      text: "text-cacambar-orange",
      border: "border-cacambar-orange/65",
      bg: "bg-cacambar-orange/15",
      glow: "cacambar-glow",
    };
  }

  if (accent === "purple") {
    return {
      text: "text-cyklos-purple",
      border: "border-cyklos-purple/65",
      bg: "bg-cyklos-purple/15",
      glow: "purple-glow",
    };
  }

  return {
    text: "text-cyklos-cyan",
    border: "border-cyklos-cyan/65",
    bg: "bg-cyklos-cyan/15",
    glow: "cyklos-glow",
  };
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-cyklos-dark text-white">
      <section className="relative border-b border-cyklos-cyan/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.24),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(139,92,246,0.22),_transparent_32%),radial-gradient(circle_at_50%_82%,_rgba(249,115,22,0.14),_transparent_36%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_rgba(2,6,23,0.35),_rgba(2,6,23,0.96))]" />

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 text-center md:pb-28 md:pt-32">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyklos-cyan/70 bg-cyklos-navy/95 px-4 py-2 text-sm font-bold text-cyklos-cyan shadow-lg shadow-cyklos-cyan/20">
            <span className="h-2.5 w-2.5 rounded-full bg-cacambar-orange shadow-[0_0_18px_rgba(249,115,22,0.85)]" />
            CYKLOS proof infrastructure · CAÇAMBAR operational app
          </div>

          <h1 className="mx-auto max-w-5xl text-5xl font-black leading-tight tracking-tight text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.55)] md:text-7xl">
            Turning construction waste logistics into verifiable circular
            economy infrastructure.
          </h1>

          <p className="mx-auto mt-7 max-w-4xl text-lg font-medium leading-8 text-slate-200 md:text-2xl md:leading-9">
            CYKLOS is the proof infrastructure. CAÇAMBAR is the first
            operational marketplace app. Solana is the public verification
            layer. NFT-CTR is the compliance certificate.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-3 rounded-xl bg-cacambar-orange px-7 py-4 text-base font-black text-slate-950 shadow-xl shadow-cacambar-orange/25 transition hover:bg-orange-400 hover:shadow-cacambar-orange/35"
            >
              Explore CAÇAMBAR Marketplace
              <ArrowRight size={22} />
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-3 rounded-xl border border-cyklos-cyan/80 bg-cyklos-cyan/20 px-7 py-4 text-base font-black text-cyklos-cyan shadow-xl shadow-cyklos-cyan/20 transition hover:bg-cyklos-cyan/25 hover:text-white"
            >
              View CYKLOS Dashboard
              <ArrowRight size={22} />
            </Link>

            <Link
              href="/nft-ctr/NFT-CTR-0001"
              className="inline-flex items-center gap-3 rounded-xl border border-cyklos-purple/80 bg-cyklos-purple/20 px-7 py-4 text-base font-black text-cyklos-purple shadow-xl shadow-cyklos-purple/20 transition hover:bg-cyklos-purple/25 hover:text-white"
            >
              View NFT-CTR Certificate
              <ArrowRight size={22} />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-cyklos-cyan/25 bg-cyklos-navy/95 px-4 py-2 text-sm font-bold text-slate-100 shadow-md shadow-black/20"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="cyklos-surface rounded-2xl p-8">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-cyklos-cyan">
              Infrastructure layer
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              CYKLOS: The Infrastructure
            </h2>
            <p className="mt-5 text-base font-medium leading-7 text-slate-200">
              CYKLOS is the Web3 infrastructure layer for circular economy
              proof and public verification. It transforms critical waste
              lifecycle events into verifiable, audit-ready records.
            </p>

            <ul className="mt-7 space-y-3">
              {cyklosBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-200"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-cyklos-cyan"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-cacambar-orange/35 bg-cacambar-dark p-8 shadow-2xl shadow-black/30 cacambar-glow">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-cacambar-orange">
              Operational application
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              CAÇAMBAR: The Application
            </h2>
            <p className="mt-5 text-base font-medium leading-7 text-slate-200">
              CAÇAMBAR is the first operational marketplace app powered by
              CYKLOS. It demonstrates how waste logistics can generate
              verifiable compliance records.
            </p>

            <ul className="mt-7 space-y-3">
              {cacambarBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-200"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-cacambar-orange"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyklos-cyan">
              Demo journey
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
              How the MVP Works
            </h2>
          </div>
          <p className="max-w-2xl text-base font-medium leading-7 text-slate-300">
            Follow the path a judge should review: operational marketplace,
            lifecycle traceability, cryptographic hash, simulated Solana proof,
            NFT-CTR certificate and proof dashboard.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {demoSteps.map((step) => {
            const Icon = step.icon;
            const colors = accentClasses(step.accent);

            const content = (
              <div
                className={`h-full rounded-2xl border bg-cyklos-navy p-6 shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:shadow-black/40 ${colors.border} ${colors.glow}`}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className={`text-sm font-black ${colors.text}`}>
                    {step.number}
                  </span>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${colors.border} ${colors.bg}`}
                  >
                    <Icon size={22} className={colors.text} />
                  </div>
                </div>

                <p className={`text-xs font-black uppercase tracking-[0.18em] ${colors.text}`}>
                  {step.label}
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  {step.title}
                </h3>
                <p className="mt-3 min-h-[72px] text-sm font-medium leading-6 text-slate-300">
                  {step.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-white">
                  {step.cta}
                  {step.href && <ArrowRight size={16} className={colors.text} />}
                </div>
              </div>
            );

            return step.href ? (
              <Link key={step.number} href={step.href}>
                {content}
              </Link>
            ) : (
              <div key={step.number}>{content}</div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="cyklos-surface-strong rounded-2xl p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyklos-purple">
                NFT-CTR compliance certificate
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
                Not a collectible NFT. A verifiable waste transport compliance
                certificate.
              </h2>
              <p className="mt-5 text-base font-medium leading-8 text-slate-300">
                NFT-CTR connects the operational lifecycle to a certificate
                view: CTR hash, audit trail, proof layer and public verification
                context. The MVP uses simulated Solana proof, while the
                architecture is ready for Devnet.
              </p>
            </div>

            <div className="rounded-2xl border border-cyklos-purple/45 bg-cyklos-slate p-6 purple-glow">
              <div className="mb-5 flex items-center gap-3">
                <FileCheck2 size={28} className="text-cyklos-purple" />
                <div>
                  <p className="text-sm font-black uppercase tracking-wide text-cyklos-purple">
                    Audit-ready asset
                  </p>
                  <p className="text-xl font-black text-white">NFT-CTR</p>
                </div>
              </div>

              <div className="space-y-3 text-sm font-medium text-slate-300">
                <p>• CTR hash generated from critical lifecycle events.</p>
                <p>• Simulated Solana proof for MVP demonstration.</p>
                <p>• Certificate view for compliance and verification.</p>
                <p>• Designed for public verification, not speculation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
