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
    <main className="flex min-h-screen flex-col items-center bg-cyklos-dark px-4 py-12">
      <div className="mx-auto w-full max-w-6xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Order Tracking</h1>

        <p className="mb-8 text-lg text-slate-300">
          Follow the complete lifecycle from container delivery to destination
          validation and NFT-CTR issuance.
        </p>

        <div className="cyklos-surface mb-10 rounded-xl p-6 text-left">
          <h2 className="mb-4 text-2xl font-bold text-white">Order Summary</h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <User size={16} className="text-cyklos-cyan" />
                Customer
              </p>
              <p className="text-base text-white">{order.customerName}</p>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <MapPin size={16} className="text-cacambar-orange" />
                Service Address
              </p>
              <p className="text-base text-white">{order.customerAddress}</p>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <User size={16} className="text-cacambar-orange" />
                Supplier
              </p>
              <p className="text-base text-white">{order.supplierName}</p>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <Package size={16} className="text-cacambar-orange" />
                Waste Type
              </p>
              <p className="text-base text-white">
                {order.wasteType.replace(/_/g, " ")}
              </p>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <Package size={16} className="text-cacambar-orange" />
                Container Size
              </p>
              <p className="text-base text-white">{order.containerSize}</p>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <MapPin size={16} className="text-cyklos-cyan" />
                Destination Facility
              </p>
              <p className="text-base text-white">
                {order.destinationFacility}
              </p>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <DollarSign size={16} className="text-cacambar-orange" />
                Service Price
              </p>
              <p className="text-base font-semibold text-cacambar-orange">
                R$ {order.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="cyklos-surface mb-10 rounded-xl p-6 text-left">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Operational & Proof Timeline
          </h2>

          <OrderTimeline
            events={order.trackingEvents}
            currentStatus={order.status}
          />
        </div>

        {order.status === "NFT_CTR_ISSUED" && (
          <div className="cyklos-surface mb-10 flex flex-col justify-between gap-6 rounded-xl p-6 text-left md:flex-row md:items-center">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-white">
                Verifiable Compliance Certificate Issued
              </h2>

              <p className="text-lg text-slate-300">
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
              className="purple-glow inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-cyklos-purple px-6 py-3 font-bold text-white transition hover:opacity-90"
            >
              View NFT-CTR Certificate
              <ArrowRight size={18} />
            </Link>
          </div>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border border-cyklos-cyan/40 px-6 py-3 font-bold text-cyklos-cyan transition hover:bg-[rgba(34,211,238,0.1)]"
          >
            <LayoutDashboard size={18} />
            Go to Dashboard
          </Link>

          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 rounded-xl border border-cacambar-orange/40 px-6 py-3 font-bold text-cacambar-orange transition hover:bg-[rgba(249,115,22,0.1)]"
          >
            <ShoppingCart size={18} />
            Explore Marketplace
          </Link>
        </div>
      </div>
    </main>
  );
}