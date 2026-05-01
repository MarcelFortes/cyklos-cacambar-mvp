import { demoOrder, demoNFTCTR } from "@/lib/mock-data";
import { OrderTimeline } from "@/components/OrderTimeline";
import { StatusBadge } from "@/components/StatusBadge";
import Link from "next/link";
import { CheckCircle2, ExternalLink, Truck } from "lucide-react";

interface OrderPageProps {
  params: {
    id: string;
  };
}

export default function OrderPage({ params }: OrderPageProps) {
  void params;

  const order = demoOrder;

  return (
    <main className="min-h-screen bg-cyklos-dark text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <div className="mb-2 inline-flex items-center gap-2">
            <Truck size={22} className="text-cacambar-orange" />
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-cacambar-orange">
              CAÇAMBAR OPERATIONS
            </p>
          </div>

          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            Order Details: {order.id}
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            Track the lifecycle of your construction waste disposal order.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-cacambar-orange/40 bg-cacambar-orange/10 p-6 shadow-lg backdrop-blur">
              <h2 className="mb-4 text-2xl font-bold text-cacambar-orange">
                Order Summary
              </h2>

              <div className="space-y-3 text-slate-200">
                <p>
                  <span className="font-semibold">Supplier:</span>{" "}
                  {order.supplierName}
                </p>

                <p>
                  <span className="font-semibold">Waste Type:</span>{" "}
                  {order.wasteType.replaceAll("_", " ")}
                </p>

                <p>
                  <span className="font-semibold">Container Size:</span>{" "}
                  {order.containerSize}
                </p>

                <p>
                  <span className="font-semibold">Price:</span> R${" "}
                  {order.price.toFixed(2)}
                </p>

                <p>
                  <span className="font-semibold">Order Date:</span>{" "}
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>

                <div className="flex items-center gap-2">
                  <span className="font-semibold">Status:</span>
                  <StatusBadge status={order.status} />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border border-cacambar-orange/40 bg-cacambar-orange/10 p-6 shadow-lg backdrop-blur">
              <h2 className="mb-6 text-2xl font-bold text-cacambar-orange">
                Order Timeline
              </h2>

              <OrderTimeline events={order.trackingEvents} />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-cyklos-cyan/40 bg-cyklos-cyan/10 p-8 text-center shadow-lg backdrop-blur">
          <div className="mb-4 inline-flex items-center gap-2">
            <CheckCircle2 size={22} className="text-cyklos-cyan" />
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyklos-cyan">
              CYKLOS PROOF LAYER
            </p>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white">
            Verifiable Waste Certificate (NFT-CTR)
          </h2>

          <p className="text-lg text-slate-200">
            A cryptographic fingerprint of this order&apos;s critical data is
            prepared for a public Solana proof layer, enabling a verifiable and
            tamper-resistant compliance record.
          </p>

          <Link
            href={`/nft-ctr/${demoNFTCTR.id}`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyklos-purple px-6 py-3 text-lg font-bold text-slate-950 transition hover:bg-purple-400"
          >
            View NFT-CTR Details
            <ExternalLink size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
