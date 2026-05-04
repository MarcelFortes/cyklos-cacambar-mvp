import { notFound } from "next/navigation";
import Link from "next/link";
import { demoNFTCTR, demoOrder } from "@/lib/mock-data";
import { OrderTimeline } from "@/components/OrderTimeline";
import {
  MapPin,
  Package,
  User,
  DollarSign,
  Hash,
  ArrowRight,
  LayoutDashboard,
  ShoppingCart,
  Truck,
  ShieldCheck,
} from "lucide-react";

interface OrderPageProps {
  params: {
    id: string;
  };
}

export default function OrderPage({ params }: OrderPageProps) {
  if (params.id !== demoOrder.id) {
    notFound();
  }

  const order = demoOrder;

  return (
    <main className="min-h-screen overflow-hidden bg-[#120b05] px-4 py-12 text-white">
      <section className="relative mx-auto w-full max-w-6xl">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-160px] top-0 h-[480px] w-[480px] rounded-full bg-cacambar-orange/18 blur-[150px]" />
          <div className="absolute right-[-180px] top-72 h-[460px] w-[460px] rounded-full bg-orange-500/8 blur-[150px]" />
          <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-cyklos-cyan/8 blur-[150px]" />
        </div>

        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-2xl border-2 border-cacambar-orange/60 bg-cacambar-orange/[0.09] px-4 py-2 shadow-lg shadow-cacambar-orange/15">
            <Truck size={16} className="text-cacambar-orange" />
            <p className="text-xs font-black uppercase tracking-[0.32em] text-cacambar-orange">
              CAÇAMBAR Operational Tracking
            </p>
          </div>

          <h1 className="text-4xl font-black text-white">Order Tracking</h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-orange-50/80">
            Follow the lifecycle from container delivery to destination
            validation, then transition into CYKLOS proof and NFT-CTR issuance.
          </p>
        </div>

        <div className="mb-10 rounded-3xl border-2 border-cacambar-orange/50 bg-[#1a0f08]/88 p-6 text-left shadow-2xl shadow-black/35 backdrop-blur-xl">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-black text-white">
            <Package className="text-cacambar-orange" size={24} />
            Order Summary
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-cacambar-orange/30 bg-[#120b05]/65 p-4">
              <p className="mb-1 flex items-center gap-2 text-sm font-bold text-orange-50/75">
                <User size={16} className="text-cacambar-orange" />
                Customer
              </p>
              <p className="text-base font-semibold text-white">
                {order.customerName}
              </p>
            </div>

            <div className="rounded-xl border border-cacambar-orange/30 bg-[#120b05]/65 p-4">
              <p className="mb-1 flex items-center gap-2 text-sm font-bold text-orange-50/75">
                <MapPin size={16} className="text-cacambar-orange" />
                Service Address
              </p>
              <p className="text-base font-semibold text-white">
                {order.customerAddress}
              </p>
            </div>

            <div className="rounded-xl border border-cacambar-orange/30 bg-[#120b05]/65 p-4">
              <p className="mb-1 flex items-center gap-2 text-sm font-bold text-orange-50/75">
                <User size={16} className="text-cacambar-orange" />
                Supplier
              </p>
              <p className="text-base font-semibold text-white">
                {order.supplierName}
              </p>
            </div>

            <div className="rounded-xl border border-cacambar-orange/30 bg-[#120b05]/65 p-4">
              <p className="mb-1 flex items-center gap-2 text-sm font-bold text-orange-50/75">
                <Package size={16} className="text-cacambar-orange" />
                Waste Type
              </p>
              <p className="text-base font-semibold text-white">
                {order.wasteType.replace(/_/g, " ")}
              </p>
            </div>

            <div className="rounded-xl border border-cacambar-orange/30 bg-[#120b05]/65 p-4">
              <p className="mb-1 flex items-center gap-2 text-sm font-bold text-orange-50/75">
                <Package size={16} className="text-cacambar-orange" />
                Container Size
              </p>
              <p className="text-base font-semibold text-white">
                {order.containerSize}
              </p>
            </div>

            <div className="rounded-xl border border-cyklos-cyan/35 bg-cyklos-cyan/[0.045] p-4">
              <p className="mb-1 flex items-center gap-2 text-sm font-bold text-slate-300">
                <MapPin size={16} className="text-cyklos-cyan" />
                Destination Facility
              </p>
              <p className="text-base font-semibold text-white">
                {order.destinationFacility}
              </p>
            </div>

            <div className="rounded-xl border border-cacambar-orange/30 bg-[#120b05]/65 p-4">
              <p className="mb-1 flex items-center gap-2 text-sm font-bold text-orange-50/75">
                <DollarSign size={16} className="text-cacambar-orange" />
                Service Price
              </p>
              <p className="text-base font-black text-cacambar-orange">
                R$ {order.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 rounded-3xl border-2 border-cacambar-orange/50 bg-[#1a0f08]/88 p-6 text-left shadow-2xl shadow-black/35 backdrop-blur-xl">
          <h2 className="mb-2 flex items-center gap-2 text-2xl font-black text-white">
            <Truck className="text-cacambar-orange" size={24} />
            Operational & Proof Timeline
          </h2>

          <p className="mb-6 text-sm leading-6 text-orange-50/70">
            Orange events represent the CAÇAMBAR operational lifecycle. Cyan and
            purple events represent the CYKLOS proof and certification layer.
          </p>

          <OrderTimeline
            events={order.trackingEvents}
            currentStatus={order.status}
          />
        </div>

        {order.status === "NFT_CTR_ISSUED" && (
          <div className="mb-10 rounded-3xl border-2 border-cyklos-purple/55 bg-cyklos-purple/[0.08] p-6 text-left shadow-2xl shadow-cyklos-purple/10 backdrop-blur-xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyklos-purple/45 bg-cyklos-purple/[0.08] px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyklos-purple">
                  <ShieldCheck size={14} />
                  CYKLOS proof layer
                </div>

                <h2 className="text-2xl font-black text-white">
                  Verifiable Compliance Certificate Issued
                </h2>

                <p className="mt-2 text-lg text-slate-300">
                  Your NFT-CTR is ready. View the full audit-ready record.
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <Hash size={18} className="text-cyklos-cyan" />
                  <p className="break-all font-mono text-sm text-cyklos-cyan">
                    {demoNFTCTR.ctrHash}
                  </p>
                </div>
              </div>

              <Link
                href={`/nft-ctr/${demoNFTCTR.id}`}
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-cyklos-purple bg-cyklos-purple px-6 py-3 font-black text-white shadow-lg shadow-cyklos-purple/20 transition hover:-translate-y-0.5 hover:opacity-90"
              >
                View NFT-CTR Certificate
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-cyklos-cyan/60 px-6 py-3 font-bold text-cyklos-cyan transition hover:bg-cyklos-cyan/[0.08]"
          >
            <LayoutDashboard size={18} />
            Go to Dashboard
          </Link>

          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-cacambar-orange/70 px-6 py-3 font-bold text-cacambar-orange transition hover:bg-cacambar-orange/[0.08]"
          >
            <ShoppingCart size={18} />
            Explore Marketplace
          </Link>
        </div>
      </section>
    </main>
  );
}