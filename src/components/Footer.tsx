export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-cyklos-navy py-8 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="mb-4 flex items-center justify-center">
          <p className="text-lg font-black tracking-tight text-white">
            CYKLOS
          </p>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} CYKLOS. All rights reserved.
        </p>

        <p className="mt-2 text-xs">Designed for the Solana proof layer.</p>
      </div>
    </footer>
  );
}
