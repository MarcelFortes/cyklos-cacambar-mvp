export function Footer() {
  return (
    <footer className="border-t border-cyklos-slate/80 bg-cyklos-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xl font-black tracking-tight text-white">
              CYKLOS
            </span>
            <span className="rounded-full border border-cacambar-orange/50 bg-cacambar-orange/15 px-2.5 py-1 text-xs font-black uppercase tracking-wide text-cacambar-orange">
              CAÇAMBAR APP
            </span>
          </div>

          <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-slate-300">
            Verifiable circular economy infrastructure for construction waste
            logistics, compliance records and public verification layers.
          </p>
        </div>

        <div className="grid gap-3 text-sm font-medium text-slate-300 md:text-right">
          <p>
            <span className="font-black text-cyklos-cyan">CYKLOS</span>{" "}
            infrastructure layer
          </p>
          <p>
            <span className="font-black text-cacambar-orange">CAÇAMBAR</span>{" "}
            operational marketplace
          </p>
          <p>
            <span className="font-black text-cyklos-purple">NFT-CTR</span>{" "}
            compliance certificate
          </p>
        </div>
      </div>

      <div className="border-t border-cyklos-slate/70 bg-cyklos-navy px-6 py-4 text-center text-xs font-medium text-slate-300">
        © {new Date().getFullYear()} CYKLOS / CAÇAMBAR. Built for hackathon
        evaluation and early-stage product validation.
      </div>
    </footer>
  );
}
