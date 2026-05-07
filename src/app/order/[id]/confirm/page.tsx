"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { demoOrder, suppliers } from "@/lib/mock-data";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  Info,
  MapPin,
  Package,
  ShieldCheck,
  User,
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
    <main className="min-h-screen overflow-hidden bg-[#120b05] px-4 py-8 text-white">
      <section className="relative mx-auto w-full max-w-5xl">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-160px] top-0 h-[420px] w-[420px] rounded-full bg-cacambar-orange/16 blur-[150px]" />
          <div className="absolute right-[-160px] top-52 h-[380px] w-[380px] rounded-full bg-orange-500/8 blur-[140px]" />
          <div className="absolute bottom-[-80px] left-1/3 h-[320px] w-[320px] rounded-full bg-cyklos-cyan/6 blur-[140px]" />
        </div>

        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-2xl border border-cacambar-orange/55 bg-cacambar-orange/[0.08] px-4 py-2 shadow-lg shadow-cacambar-orange/10">
            <CreditCard size={15} className="text-cacambar-orange" />
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-cacambar-orange">
              CAÇAMBAR Order Confirmation
            </p>
          </div>

          <h1 className="text-[2rem] font-black leading-tight tracking-tight text-white md:text-[2.45rem]">
            Confirm your container order
          </h1>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-orange-50/78 md:text-base">
            Review the selected supplier, service details and simulated customer
            price before starting the operational tracking flow.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-3xl border-2 border-cacambar-orange/45 bg-[#1a0f08]/88 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-5 rounded-2xl border border-cacambar-orange/35 bg-[#120b05]/65 p-4">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-white">
                <Package className="text-cacambar-orange" size={21} />
                Order Summary
              </h2>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-cacambar-orange/28 bg-cacambar-orange/[0.035] p-3">
                  <p className="mb-1 flex items-center gap-2 text-xs font-bold text-orange-50/70">
                    <Package size={14} className="text-cacambar-orange" />
                    Waste Type
                  </p>
                  <p className="text-sm font-black text-white">
                    {demoOrder.wasteType.replace(/_/g, " ")}
                  </p>
                </div>

                <div className="rounded-xl border border-cacambar-orange/28 bg-cacambar-orange/[0.035] p-3">
                  <p className="mb-1 flex items-center gap-2 text-xs font-bold text-orange-50/70">
                    <Package size={14} className="text-cacambar-orange" />
                    Container Size
                  </p>
                  <p className="text-sm font-black text-white">
                    {demoOrder.containerSize}
                  </p>
                </div>

                <div className="rounded-xl border border-cacambar-orange/28 bg-cacambar-orange/[0.035] p-3">
                  <p className="mb-1 flex items-center gap-2 text-xs font-bold text-orange-50/70">
                    <MapPin size={14} className="text-cacambar-orange" />
                    Delivery Address
                  </p>
                  <p className="text-sm font-black leading-5 text-white">
                    {demoOrder.customerAddress}
                  </p>
                </div>

                <div className="rounded-xl border border-cacambar-orange/28 bg-cacambar-orange/[0.035] p-3">
                  <p className="mb-1 flex items-center gap-2 text-xs font-bold text-orange-50/70">
                    <Calendar size={14} className="text-cacambar-orange" />
                    Requested Delivery
                  </p>
                  <p className="text-sm font-black text-white">
                    {new Date(demoOrder.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-cacambar-orange/35 bg-[#120b05]/65 p-4">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-white">
                <User className="text-cacambar-orange" size={21} />
                Selected Supplier
              </h2>

              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-cacambar-orange/32 bg-cacambar-orange/[0.045] p-3">
                <div>
                  <p className="text-lg font-black leading-tight text-white">
                    {selectedSupplier.name}
                  </p>
                  <p className="mt-1 text-xs text-orange-50/65">
                    License {selectedSupplier.licenseNumber}
                  </p>
                </div>

                <div className="rounded-full border border-cacambar-orange/45 bg-cacambar-orange/[0.08] px-3 py-1 text-[11px] font-bold text-cacambar-orange">
                  {selectedSupplier.complianceScore}% compliance
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-cacambar-orange/28 bg-cacambar-orange/[0.035] p-3">
                  <p className="mb-1 flex items-center gap-2 text-xs font-bold text-orange-50/70">
                    <MapPin size={14} className="text-cacambar-orange" />
                    Region
                  </p>
                  <p className="text-sm font-black text-white">
                    {selectedSupplier.region}
                  </p>
                </div>

                <div className="rounded-xl border border-cacambar-orange/28 bg-cacambar-orange/[0.035] p-3">
                  <p className="mb-1 flex items-center gap-2 text-xs font-bold text-orange-50/70">
                    <Clock size={14} className="text-cacambar-orange" />
                    Estimated Delivery
                  </p>
                  <p className="text-sm font-black text-white">
                    {selectedSupplier.deliveryTimeEstimate}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border-2 border-cacambar-orange/45 bg-[#1a0f08]/88 p-5 shadow-2xl shadow-black/25 backdrop-blur-xl">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-white">
                <CreditCard className="text-cacambar-orange" size={21} />
                Pricing
              </h2>

              <div className="rounded-2xl border border-cacambar-orange/30 bg-[#120b05]/65 p-4">
                <div className="flex items-center justify-between gap-4 border-b border-cacambar-orange/25 pb-3">
                  <p className="text-sm text-orange-50/72">Service price</p>
                  <p className="text-sm font-black text-white">
                    R$ {servicePrice.toFixed(2)}
                  </p>
                </div>

                <div className="pt-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-50/50">
                    Customer price
                  </p>
                  <p className="mt-1 text-[2rem] font-black leading-none text-cacambar-orange">
                    R$ {servicePrice.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-cacambar-orange/35 bg-cacambar-orange/[0.055] p-4">
                <div className="flex items-start gap-3 text-orange-50/78">
                  <Info
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-cacambar-orange"
                  />
                  <p className="text-xs leading-5">
                    Payment simulated for MVP. No real transaction is processed.
                    Platform fee is paid by the supplier and is not charged to
                    the customer.
                  </p>
                </div>
              </div>

              <button
                onClick={handleConfirmOrder}
                className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-cacambar-orange bg-cacambar-orange px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-cacambar-orange/20 transition hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-cacambar-orange/30"
              >
                Confirm Demo Order
                <CheckCircle size={20} />
              </button>

              <Link
                href="/marketplace"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cacambar-orange/35 px-5 py-2.5 text-sm font-bold text-cacambar-orange transition hover:bg-cacambar-orange/[0.08]"
              >
                <ArrowLeft size={16} />
                Back to Marketplace
              </Link>
            </div>

            <div className="rounded-2xl border border-cyklos-cyan/30 bg-cyklos-cyan/[0.045] p-4 text-sm text-slate-300">
              <div className="flex items-center gap-2 font-bold text-cyklos-cyan">
                <ShieldCheck size={16} />
                Next: CYKLOS proof layer
              </div>

              <p className="mt-2 text-xs leading-5">
                After the CAÇAMBAR operational flow is completed, lifecycle
                events are transformed into a verifiable NFT-CTR compliance
                certificate.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}