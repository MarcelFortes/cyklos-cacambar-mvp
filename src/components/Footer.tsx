import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-slate-700/60 bg-cyklos-dark/95">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-7 rounded-[24px] border border-slate-700/60 bg-white/[0.018] px-8 py-5 shadow-[0_0_24px_rgba(0,0,0,0.16)]">
            <BrandLogo type="cyklos" className="h-[54px] md:h-[58px]" />

            <span className="hidden h-12 w-px bg-slate-600/65 md:block" />

            <BrandLogo type="cacambar" className="h-[48px] md:h-[52px]" />
          </div>

          <p className="max-w-3xl text-base text-slate-300">
            Building the infrastructure for a transparent, auditable and
            efficient circular economy.
          </p>

          <p className="text-sm text-slate-500">
            © 2026 CYKLOS / CAÇAMBAR. Built for hackathon evaluation and
            early-stage product validation.
          </p>
        </div>
      </div>
    </footer>
  );
}