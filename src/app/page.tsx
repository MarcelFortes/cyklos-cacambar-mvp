import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cyklos-dark text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-cyklos-cyan">
          CYKLOS
        </p>

        <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
          Circular Economy Proof Infrastructure
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-300 md:text-xl">
          First application:{" "}
          <span className="font-bold text-cacambar-orange">CAÇAMBAR</span> — a
          construction waste logistics marketplace powered by CYKLOS.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-cyklos-cyan/40 bg-cyklos-cyan/10 p-6 shadow-lg backdrop-blur">
            <h2 className="mb-2 text-2xl font-bold text-cyklos-cyan">
              CYKLOS: The Infrastructure
            </h2>

            <p className="text-slate-200">
              A Web3 infrastructure providing a Solana-ready proof layer for
              verifiable compliance and traceability in the circular economy.
            </p>
          </div>

          <div className="rounded-xl border border-cacambar-orange/40 bg-cacambar-orange/10 p-6 shadow-lg backdrop-blur">
            <h2 className="mb-2 text-2xl font-bold text-cacambar-orange">
              CAÇAMBAR: The Application
            </h2>

            <p className="text-slate-200">
              The first operational application: a marketplace for construction
              waste container logistics, using CYKLOS for verifiable compliance
              certificates.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/marketplace"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cacambar-orange px-8 py-4 text-lg font-bold text-slate-950 transition hover:bg-orange-400"
          >
            Explore CAÇAMBAR Marketplace
            <ArrowRight size={22} />
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10"
          >
            View CYKLOS Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
