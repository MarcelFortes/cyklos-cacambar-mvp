"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { demoOrder, suppliers } from "@/lib/mock-data";
import {
  Package,
  MapPin,
  Calendar,
  User,
  Info,
  ArrowLeft,
  CheckCircle,
  Clock,
  ShieldCheck,
  CreditCard,
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
    <main className="min-h-screen overflow-hidden bg-[#120b05] px-4 py-12 text-white">
      <section className="relative mx-auto w-full max-w-3xl">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-160px] top-0 h-[460px] w-[460px] rounded-full bg-cacambar-orange/18 blur-[150px]" />
          <div className="absolute right-[-160px] top-64 h-[420px] w-[420px] rounded-full bg-orange-500/8 blur-[150px]" />
        </div>

        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-2xl border-2 border-cacambar-orange/60 bg-cacambar-orange/[0.09] px-4 py-2 shadow-lg shadow-cacambar-orange/15">
            <CreditCard size={16} className="text-cacambar-orange" />
            <p className="text-xs font-black uppercase tracking-[0.32em] text-cacambar-orange">
              CAÇAMBAR Order Confirmation
            </p>
          </div>

          <h1 className="text-4xl font-black text-white">
            Confirm your container order
          </h1>

          <p className="mt-4 text-lg leading-8 text-orange-50/80">
            Review the selected supplier, service details and simulated customer
            price before starting the operational tracking flow.
          </p>
        </div>

        <div className="rounded-3xl border-2 border-cacambar-orange/55 bg-[#1a0f08]/88 p-8 text-left shadow-2xl shadow-black/35 backdrop-blur-xl">
          <div className="mb-6 rounded-2xl border-2 border-cacambar-orange/45 bg-[#120b05]/65 p-6">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-black text-white">
              <Package className="text-cacambar-orange" size={24} />
              Order Summary
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
              <div className="rounded-xl border border-cacambar-orange/30 bg-cacambar-orange/[0.035] p-4">
                <p className="mb-1 flex items-center gap-2 text-sm font-bold text-orange-50/75">
                  <Package size={16} className="text-cacambar-orange" />
                  Waste Type
                </p>
                <p className="text-base font-semibold text-white">
                  {demoOrder.wasteType.replace(/_/g, " ")}
                </p>
              </div>

              <div className="rounded-xl border border-cacambar-orange/30 bg-cacambar-orange/[0.035] p-4">
                <p className="mb-1 flex items-center gap-2 text-sm font-bold text-orange-50/75">
                  <Package size={16} className="text-cacambar-orange" />
                  Container Size
                </p>
                <p className="text-base font-semibold text-white">
                  {demoOrder.containerSize}
                </p>
              </div>

              <div className="rounded-xl border border-cacambar-orange/30 bg-cacambar-orange/[0.035] p-4">
                <p className="mb-1 flex items-center gap-2 text-sm font-bold text-orange-50/75">
                  <MapPin size={16} className="text-cacambar-orange" />
                  Delivery Address
                </p>
                <p className="text-base font-semibold text-white">
                  {demoOrder.customerAddress}
                </p>
              </div>

              <div className="rounded-xl border border-cacambar-orange/30 bg-cacambar-orange/[0.035] p-4">
                <p className="mb-1 flex items-center gap-2 text-sm font-bold text-orange-50/75">
                  <Calendar size={16} className="text-cacambar-orange" />
                  Requested Delivery
                </p>
                <p className="text-base font-semibold text-white">
                  {new Date(demoOrder.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-2xl border-2 border-cacambar-orange/45 bg-[#120b05]/65 p-6">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-black text-white">
              <User className="text-cacambar-orange" size={24} />
              Selected Supplier
            </h2>

            <div className="mb-4 flex items-center justify-between gap-4 rounded-xl border border-cacambar-orange/35 bg-cacambar-orange/[0.045] p-4">
              <div>
                <p className="text-xl font-black text-white">
                  {selectedSupplier.name}
                </p>
                <p className="mt-1 text-sm text-orange-50/70">
                  License {selectedSupplier.licenseNumber}
                </p>
              </div>

              <div className="rounded-full border border-cacambar-orange/45 bg-cacambar-orange/[0.08] px-3 py-1 text-xs font-bold text-cacambar-orange">
                {selectedSupplier.complianceScore}% compliance
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
              <div className="rounded-xl border border-cacambar-orange/30 bg-cacambar-orange/[0.035] p-4">
                <p className="mb-1 flex items-center gap-2 text-sm font-bold text-orange-50/75">
                  <MapPin size={16} className="text-cacambar-orange" />
                  Region
                </p>
                <p className="text-base font-semibold text-white">
                  {selectedSupplier.region}
                </p>
              </div>

              <div className="rounded-xl border border-cacambar-orange/30 bg-cacambar-orange/[0.035] p-4">
                <p className="mb-1 flex items-center gap-2 text-sm font-bold text-orange-50/75">
                  <Clock size={16} className="text-cacambar-orange" />
                  Estimated Delivery
                </p>
                <p className="text-base font-semibold text-white">
                  {selectedSupplier.deliveryTimeEstimate}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-2xl border-2 border-cacambar-orange/45 bg-[#120b05]/65 p-6">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-black text-white">
              <CreditCard className="text-cacambar-orange" size={24} />
              Pricing
            </h2>

            <div className="flex items-center justify-between border-b border-cacambar-orange/30 pb-4">
              <p className="text-orange-50/75">
                Service Price ({demoOrder.containerSize})
              </p>
              <p className="font-semibold text-white">
                R$ {servicePrice.toFixed(2)}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4">
              <p className="text-xl font-black text-white">Customer Price</p>
              <p className="text-3xl font-black text-cacambar-orange">
                R$ {servicePrice.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-xl border-2 border-cacambar-orange/40 bg-cacambar-orange/[0.055] p-5 text-orange-50/80">
            <Info size={24} className="text-cacambar-orange" />
            <p className="text-sm">
              Payment simulated for MVP — no real transaction is processed.
              Platform fee is paid by the supplier and is not charged to the
              customer.
            </p>
          </div>

          <button
            onClick={handleConfirmOrder}
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-cacambar-orange bg-cacambar-orange px-8 py-4 text-lg font-black text-slate-950 shadow-lg shadow-cacambar-orange/20 transition hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-cacambar-orange/30"
          >
            Confirm Demo Order
            <CheckCircle size={24} />
          </button>

          <div className="mt-6 text-center">
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 font-semibold text-orange-50/75 transition hover:text-cacambar-orange hover:underline"
            >
              <ArrowLeft size={18} />
              Back to Marketplace
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-cyklos-cyan/30 bg-cyklos-cyan/[0.04] p-4 text-sm text-slate-300">
          <div className="flex items-center gap-2 font-bold text-cyklos-cyan">
            <ShieldCheck size={16} />
            Next step: CYKLOS verification layer
          </div>
          <p className="mt-2">
            After the CAÇAMBAR operational flow is completed, lifecycle events
            are transformed into a verifiable NFT-CTR compliance certificate.
          </p>
        </div>
      </section>
    </main>
  );
}