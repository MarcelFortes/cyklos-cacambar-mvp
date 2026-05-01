import { demoNFTCTR } from "@/lib/mock-data";
import { ExternalLink, Hash, CheckCircle2 } from "lucide-react";

interface NFTCTRPageProps {
  params: {
    id: string;
  };
}

export default function NFTCTRPage({ params }: NFTCTRPageProps) {
  void params;

  const nft = demoNFTCTR;

  return (
    <main className="min-h-screen bg-cyklos-dark text-white">
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="mb-2 inline-flex items-center gap-2">
          <CheckCircle2 size={22} className="text-cyklos-cyan" />
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyklos-cyan">
            CYKLOS PROOF LAYER
          </p>
        </div>

        <h1 className="text-4xl font-black leading-tight md:text-5xl">
          NFT-CTR: Verifiable Waste Certificate
        </h1>

        <p className="mt-4 text-lg text-slate-300">
          This Non-Fungible Token - Waste Transport Certificate (NFT-CTR) is
          designed to provide a verifiable and tamper-resistant record of the
          waste disposal process through a Solana proof layer.
        </p>

        <div className="mt-10 rounded-2xl border border-cyklos-cyan/40 bg-cyklos-cyan/10 p-8 shadow-xl backdrop-blur">
          <div className="mb-6 flex items-center justify-center gap-4">
            <CheckCircle2 size={48} className="text-cyklos-cyan" />
            <h2 className="text-3xl font-bold text-white">{nft.name}</h2>
          </div>

          <p className="mb-8 text-slate-200">{nft.description}</p>

          <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-2">
            <div>
              <p className="text-slate-400">Order ID</p>
              <p className="font-semibold text-white">{nft.orderId}</p>
            </div>

            <div>
              <p className="text-slate-400">Waste Type</p>
              <p className="font-semibold text-white">
                {nft.metadata.wasteType.replaceAll("_", " ")}
              </p>
            </div>

            <div>
              <p className="text-slate-400">Supplier Name</p>
              <p className="font-semibold text-white">
                {nft.metadata.supplierName}
              </p>
            </div>

            <div>
              <p className="text-slate-400">Destination</p>
              <p className="font-semibold text-white">
                {nft.metadata.destination}
              </p>
            </div>

            <div>
              <p className="text-slate-400">Status</p>
              <p className="font-semibold text-white">{nft.metadata.status}</p>
            </div>

            <div>
              <p className="text-slate-400">Minted At</p>
              <p className="font-semibold text-white">
                {new Date(nft.mintedAt).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-slate-400">CTR Hash (SHA-256)</p>
            <div className="flex items-center justify-center gap-2 break-all rounded-md bg-cyklos-slate p-3 text-sm font-mono text-cyklos-cyan">
              <Hash size={16} />
              <span>{nft.ctrHash}</span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-slate-400">Solana Proof (Mock)</p>
            <div className="flex items-center justify-center gap-2 break-all rounded-md bg-cyklos-slate p-3 text-sm font-mono text-cyklos-cyan">
              <ExternalLink size={16} />
              <a
                href={nft.explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {nft.solanaSignature}
              </a>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              This is a simulated Solana proof for MVP demonstration.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
