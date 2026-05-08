import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  CreditCard,
  Database,
  FileCheck2,
  Layers,
  MapPin,
  Recycle,
  Route,
  ShieldCheck,
  Truck,
} from "lucide-react";

const solutionCards = [
  {
    title: "CYKLOS verification infrastructure",
    description:
      "Public verification layer for CTR hashes, Solana-ready proofs and auditable circular economy records.",
    icon: ShieldCheck,
    accent: "cyklos",
    href: "/dashboard",
  },
  {
    title: "CAÇAMBAR operational application",
    description:
      "End-to-end application for service requests, supplier selection, entrega, retirada e rastreio da destinação.",
    icon: Route,
    accent: "cacambar",
    href: "/request",
    featured: true,
  },
  {
    title: "NFT-CTR certificate",
    description:
      "Verifiable waste transport compliance certificate issued after the operational cycle is validated.",
    icon: BadgeCheck,
    accent: "purple",
    href: "/nft-ctr/NFT-CTR-0001",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Solicitar",
    detail: "Criar pedido",
    icon: ClipboardCheck,
    accent: "text-cacambar-orange",
  },
  {
    number: "02",
    title: "Selecionar",
    detail: "Escolher fornecedor",
    icon: Boxes,
    accent: "text-cyklos-cyan",
  },
  {
    number: "03",
    title: "Rastrear",
    detail: "Acompanhar ciclo",
    icon: MapPin,
    accent: "text-cyklos-purple",
  },
  {
    number: "04",
    title: "Verificar",
    detail: "Emitir NFT-CTR",
    icon: ShieldCheck,
    accent: "text-cyklos-cyan",
  },
];

const technicalCards = [
  {
    title: "Solana não é o banco de dados",
    description:
      "Os dados operacionais permanecem off-chain. Os hashes críticos do ciclo são preparados para verificação pública em uma camada pronta para Solana.",
    icon: Database,
    accent: "cyklos",
    href: "/dashboard",
    cta: "Saiba mais",
  },
  {
    title: "Fluxo operacional primeiro",
    description:
      "A logística real acontece off-chain: solicitações, matches, rotas e entregas. A CYKLOS verifica. A CAÇAMBAR opera.",
    icon: ClipboardCheck,
    accent: "cacambar",
    href: "/request",
    cta: "Explorar fluxo",
  },
  {
    title: "Certificado de compliance",
    description:
      "O NFT-CTR transforma cada ciclo concluído em um certificado verificável para ESG, licitações públicas e auditorias.",
    icon: FileCheck2,
    accent: "purple",
    href: "/nft-ctr/NFT-CTR-0001",
    cta: "View certificate",
  },
];

function getAccentClasses(accent: string) {
  if (accent === "cacambar") {
    return {
      border: "border-cacambar-orange/40",
      text: "text-cacambar-orange",
      shadow: "shadow-cacambar-orange/10",
      hover: "hover:border-cacambar-orange/70",
      glow: "from-cacambar-orange/12",
      bg: "bg-cacambar-orange/[0.05]",
    };
  }

  if (accent === "purple") {
    return {
      border: "border-cyklos-purple/40",
      text: "text-cyklos-purple",
      shadow: "shadow-cyklos-purple/10",
      hover: "hover:border-cyklos-purple/70",
      glow: "from-cyklos-purple/12",
      bg: "bg-cyklos-purple/[0.05]",
    };
  }

  return {
    border: "border-cyklos-cyan/40",
    text: "text-cyklos-cyan",
    shadow: "shadow-cyklos-cyan/10",
    hover: "hover:border-cyklos-cyan/70",
    glow: "from-cyklos-cyan/12",
    bg: "bg-cyklos-cyan/[0.05]",
  };
}

function ButtonIcon({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "cacambar" | "cyklos" | "purple";
}) {
  const styles = {
    cacambar:
      "border-[#ff7a00] bg-[#ff7a00]/10 text-[#ff7a00] shadow-[0_0_18px_rgba(255,122,0,0.24)]",
    cyklos:
      "border-[#22d3ee] bg-[#22d3ee]/10 text-[#22d3ee] shadow-[0_0_18px_rgba(34,211,238,0.24)]",
    purple:
      "border-[#8b5cf6] bg-[#8b5cf6]/10 text-[#8b5cf6] shadow-[0_0_18px_rgba(139,92,246,0.24)]",
  };

  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

function ActionButton({
  href,
  variant,
  icon,
  title,
}: {
  href: string;
  variant: "cacambar" | "cyklos" | "purple";
  icon: ReactNode;
  title: string;
}) {
  const styles = {
    cacambar:
      "border-[#ff7a00] bg-[#ff7a00]/[0.06] text-[#ff7a00] shadow-[0_0_24px_rgba(255,122,0,0.15)] hover:bg-[#ff7a00]/[0.12] hover:shadow-[0_0_38px_rgba(255,122,0,0.30)]",
    cyklos:
      "border-[#22d3ee] bg-[#22d3ee]/[0.06] text-[#22d3ee] shadow-[0_0_24px_rgba(34,211,238,0.15)] hover:bg-[#22d3ee]/[0.12] hover:shadow-[0_0_38px_rgba(34,211,238,0.30)]",
    purple:
      "border-[#8b5cf6] bg-[#8b5cf6]/[0.06] text-[#8b5cf6] shadow-[0_0_24px_rgba(139,92,246,0.15)] hover:bg-[#8b5cf6]/[0.12] hover:shadow-[0_0_38px_rgba(139,92,246,0.30)]",
  };

  return (
    <Link
      href={href}
      className={`group flex h-16 min-w-0 items-center justify-center gap-3 rounded-2xl border-2 px-4 text-sm font-black transition-all duration-200 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {icon}
      <span className="min-w-0 truncate whitespace-nowrap">{title}</span>
      <ArrowRight
        size={17}
        className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-cyklos-dark text-white">
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-cyklos-dark" />
          <div className="absolute left-[-120px] top-[-80px] h-[520px] w-[520px] rounded-full bg-cyklos-cyan/12 blur-[150px]" />
          <div className="absolute right-[-100px] top-[120px] h-[560px] w-[560px] rounded-full bg-cyklos-purple/14 blur-[160px]" />
          <div className="absolute bottom-[-100px] left-1/3 h-[420px] w-[420px] rounded-full bg-cacambar-orange/8 blur-[150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.12),transparent_23%),radial-gradient(circle_at_72%_30%,rgba(139,92,246,0.11),transparent_25%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-cyklos-dark/10 via-cyklos-dark/0 to-cyklos-dark" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 lg:pb-14 lg:pt-12">
          <div className="relative mx-auto max-w-5xl text-center">
            <div className="pointer-events-none absolute left-1/2 top-[28px] -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyklos-cyan/[0.10] blur-[125px]" />

            <img
              src="/brand/cyklos-icon.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[88px] -z-10 h-[320px] w-[320px] -translate-x-1/2 select-none object-contain opacity-[0.05]"
              draggable={false}
            />

            <div className="mb-4 inline-flex rounded-full border border-cyklos-cyan/40 bg-cyklos-dark/40 px-4 py-2 backdrop-blur-md">
              <p className="text-[11px] font-black uppercase tracking-[0.30em] text-cyklos-cyan">
                Infraestrutura CYKLOS / Aplicação CAÇAMBAR
              </p>
            </div>

            <div className="mb-5">
              <img
                src="/brand/cyklos-logo.png"
                alt="CYKLOS"
                className="mx-auto h-36 w-auto scale-[1.15] object-contain drop-shadow-[0_0_38px_rgba(34,211,238,0.42)] md:h-40 lg:h-44"
                draggable={false}
              />
            </div>

            <h1 className="mx-auto max-w-5xl text-[2rem] font-black leading-[1.04] tracking-tight text-white md:text-[2.75rem] lg:text-[3.15rem]">
              Turning construction waste logistics into{" "}
              <span className="bg-gradient-to-r from-cyklos-cyan via-blue-400 to-cyklos-purple bg-clip-text text-transparent">
                verifiable circular economy
              </span>{" "}
              infrastructure.
            </h1>

            <div className="mt-5 space-y-2 text-base leading-7 text-slate-300 md:text-lg">
              <p>
                <span className="font-bold text-cyklos-cyan">CYKLOS</span>{" "}
                provides the public verification layer.
              </p>
              <p>
                <span className="font-bold text-cacambar-orange">CAÇAMBAR</span>{" "}
                operates the logistics ecosystem.
              </p>
            </div>

            <div className="mx-auto mt-7 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
              <ActionButton
                href="/request"
                variant="cacambar"
                title="Start demo"
                icon={
                  <ButtonIcon variant="cacambar">
                    <img
                      src="/brand/cacambar-icon.png"
                      alt="CAÇAMBAR icon"
                      className="h-7 w-7 object-contain"
                      draggable={false}
                    />
                  </ButtonIcon>
                }
              />

              <ActionButton
                href="/dashboard"
                variant="cyklos"
                title="View dashboard"
                icon={
                  <ButtonIcon variant="cyklos">
                    <img
                      src="/brand/cyklos-icon.png"
                      alt="CYKLOS icon"
                      className="h-7 w-7 object-contain"
                      draggable={false}
                    />
                  </ButtonIcon>
                }
              />

              <ActionButton
                href="/nft-ctr/NFT-CTR-0001"
                variant="purple"
                title="View certificate"
                icon={
                  <ButtonIcon variant="purple">
                    <CreditCard size={21} />
                  </ButtonIcon>
                }
              />
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {solutionCards.map((card) => {
              const Icon = card.icon;
              const accent = getAccentClasses(card.accent);

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className={`group relative overflow-hidden rounded-2xl border ${accent.border} ${accent.bg} p-5 shadow-2xl ${accent.shadow} backdrop-blur-xl transition hover:-translate-y-1 ${accent.hover} hover:bg-cyklos-navy/70 ${
                    card.featured
                      ? "shadow-[0_0_40px_rgba(249,115,22,0.10)] ring-1 ring-cacambar-orange/25"
                      : "bg-cyklos-dark/58"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glow} via-transparent to-transparent opacity-70`}
                  />

                  {card.featured && (
                    <div className="relative mb-4 inline-flex rounded-full border border-cacambar-orange/35 bg-cacambar-orange/10 px-3 py-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.28em] text-cacambar-orange">
                        Camada de aplicação viva
                      </span>
                    </div>
                  )}

                  <div className="relative flex items-start gap-5">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border ${accent.border} bg-cyklos-navy/70 ${accent.text}`}
                    >
                      <Icon size={34} />
                    </div>

                    <div>
                      <h2 className="text-lg font-black text-white">
                        {card.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {card.description}
                      </p>
                      <ArrowRight
                        className={`mt-4 transition group-hover:translate-x-1 ${accent.text}`}
                        size={20}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-4 rounded-2xl border border-slate-700/70 bg-cyklos-dark/58 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-slate-400">
                Demo Journey
              </p>
              <p className="text-xs font-semibold text-slate-400">
                Request → Match → Track → Verify
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-4">
              {journeySteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="rounded-xl border border-slate-700/70 bg-cyklos-navy/40 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full border border-current text-xs font-black ${step.accent}`}
                      >
                        {step.number}
                      </span>
                      <Icon className={step.accent} size={22} />
                    </div>

                    <h3 className="mt-4 text-base font-black text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-300">
                      {step.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {technicalCards.map((card) => {
              const Icon = card.icon;
              const accent = getAccentClasses(card.accent);

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className={`group relative overflow-hidden rounded-2xl border ${accent.border} bg-cyklos-dark/55 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 ${accent.hover} hover:bg-cyklos-navy/70`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glow} via-transparent to-transparent opacity-60`}
                  />

                  <div className="relative">
                    <Icon className={accent.text} size={30} />

                    <h3 className="mt-4 text-lg font-black text-white">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {card.description}
                    </p>

                    <p
                      className={`mt-4 inline-flex items-center gap-2 text-sm font-black ${accent.text}`}
                    >
                      {card.cta}
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-6 border-t border-slate-700/60 pt-5">
            <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={18} /> Public verification layer
              </span>
              <span className="inline-flex items-center gap-2">
                <Layers size={18} /> Immutable on Solana
              </span>
              <span className="inline-flex items-center gap-2">
                <Truck size={18} /> End-to-end logistics
              </span>
              <span className="inline-flex items-center gap-2">
                <Recycle size={18} /> Circular economy verified
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck size={18} /> Built for transparency
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}