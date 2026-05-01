"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { demoOrder, suppliers } from "@/lib/mock-data";
import {
  Package,
  MapPin,
  DollarSign,
  Calendar,
  User,
  Info,
  ArrowLeft,
  CheckCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function OrderConfirmPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supplierId = searchParams.get("supplierId");

  const selectedSupplier =
    suppliers.find((supplier) => supplier.id === supplierId) ??
    suppliers.find((supplier) => supplier.id === demoOrder.supplierId) ??
    suppliers[0];

  const servicePrice = selectedSupplier?.price ?? demoOrder.price;

  const handleConfirmOrder = () => {
    router.push(`/order/${demoOrder.id}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-cyklos-dark px-4 py-12">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-cyklos-slate/80 bg-cyklos-navy p-8 text-left shadow-xl">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Confirm Your Order
        </h1>

        <p className="mb-8 text-lg text-slate-300">
          Review your service details before confirming the demo order.
        </p>

        <div className="cyklos-surface mb-6 rounded-xl p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Order Summary
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            <div>
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <Package size={16} className="text-cacambar-orange" />
                Waste Type
              </p>
              <p className="text-base text-white">
                {demoOrder.wasteType.replace(/_/g, " ")}
              </p>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <Package size={16} className="text-cacambar-orange" />
                Container Size
              </p>
              <p className="text-base text-white">{demoOrder.containerSize}</p>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <MapPin size={16} className="text-cacambar-orange" />
                Delivery Address
              </p>
              <p className="text-base text-white">
                {demoOrder.customerAddress}
              </p>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <Calendar size={16} className="text-cyklos-cyan" />
                Requested Delivery
              </p>
              <p className="text-base text-white">
                {new Date(demoOrder.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="cyklos-surface mb-6 rounded-xl p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Selected Supplier
          </h2>

          <div className="mb-4 flex items-center gap-4">
            <User size={24} className="text-cacambar-orange" />
            <p className="text-xl font-semibold text-white">
              {selectedSupplier.name}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            <div>
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <MapPin size={16} className="text-cacambar-orange" />
                Region
              </p>
              <p className="text-base text-white">{selectedSupplier.region}</p>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-300">
                <Clock size={16} className="text-cyklos-cyan" />
                Estimated Delivery
              </p>
              <p className="text-base text-white">
                {selectedSupplier.deliveryTimeEstimate}
              </p>
            </div>
          </div>
        </div>

        <div className="cyklos-surface mb-6 rounded-xl p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Pricing</h2>

          <div className="flex items-center justify-between border-b border-cyklos-slate/70 pb-4">
            <p className="text-slate-300">
              Service Price ({demoOrder.containerSize})
            </p>
            <p className="font-semibold text-white">
              R$ {servicePrice.toFixed(2)}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="text-xl font-bold text-white">Customer Price</p>
            <p className="text-2xl font-bold text-cacambar-orange">
              R$ {servicePrice.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4 rounded-xl border border-cyklos-slate/70 bg-cyklos-dark p-6 text-slate-300">
          <Info size={24} className="text-cyklos-cyan" />
          <p className="text-sm">
            Payment simulated for MVP — no real transaction is processed.
          </p>
        </div>

        <button
          onClick={handleConfirmOrder}
          className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-cacambar-orange px-8 py-4 text-lg font-bold text-slate-950 shadow-lg transition hover:bg-orange-400"
        >
          Confirm Demo Order
          <CheckCircle size={24} />
        </button>

        <div className="mt-6 text-center">
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 font-semibold text-slate-300 hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Marketplace
          </Link>
        </div>
      </div>
    </main>
  );
}