import { SupplierCard } from "@/components/SupplierCard";
import {
  demoServiceRequest,
  serviceAreas,
  suppliers,
} from "@/lib/mock-data";
import { Clock, MapPin, Package, Store, Truck } from "lucide-react";

interface MarketplacePageProps {
  searchParams?: {
    serviceAreaId?: string;
  };
}

export default function MarketplacePage({ searchParams }: MarketplacePageProps) {
  const serviceAreaId =
    searchParams?.serviceAreaId || demoServiceRequest.serviceAreaId;

  const selectedServiceArea =
    serviceAreas.find((area) => area.id === serviceAreaId) || serviceAreas[0];

  const availableSuppliers = suppliers.filter((supplier) =>
    supplier.serviceAreaIds.includes(selectedServiceArea.id)
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#120b05] text-white">
      <section className="relative mx-auto max-w-6xl px-6 py-9">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-120px] top-8 h-[380px] w-[380px] rounded-full bg-cacambar-orange/16 blur-[140px]" />
          <div className="absolute right-[-140px] top-52 h-[420px] w-[420px] rounded-full bg-orange-500/8 blur-[150px]" />
        </div>

        <div className="mb-7 max-w-4xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-2xl border border-cacambar-orange/55 bg-cacambar-orange/[0.08] px-4 py-2 shadow-lg shadow-cacambar-orange/10">
            <Store size={15} className="text-cacambar-orange" />
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-cacambar-orange">
              CAÇAMBAR Marketplace
            </p>
          </div>

          <h1 className="max-w-4xl text-[2.25rem] font-black leading-[1.02] tracking-tight text-white md:text-[2.8rem]">
            Available suppliers for your service area
          </h1>

          <p className="mt-3 max-w-4xl text-base leading-7 text-orange-50/78">
            Compare verified suppliers near {demoServiceRequest.address},{" "}
            {demoServiceRequest.city}. Choose by price, availability, compliance
            score and delivery estimate.
          </p>
        </div>

        <div className="mb-6 grid gap-3 rounded-2xl border-2 border-cacambar-orange/40 bg-[#1a0f08]/88 p-4 text-sm text-orange-50/75 shadow-xl shadow-black/25 backdrop-blur-xl md:grid-cols-4">
          <div className="rounded-xl border border-cacambar-orange/30 bg-[#120b05]/65 p-3">
            <p className="mb-1 flex items-center gap-2 text-xs text-orange-50/60">
              <MapPin size={14} className="text-cacambar-orange" />
              Service area
            </p>
            <p className="text-sm font-bold text-white">
              {selectedServiceArea.name}
            </p>
          </div>

          <div className="rounded-xl border border-cacambar-orange/30 bg-[#120b05]/65 p-3">
            <p className="mb-1 flex items-center gap-2 text-xs text-orange-50/60">
              <Package size={14} className="text-cacambar-orange" />
              Waste type
            </p>
            <p className="text-sm font-bold text-white">
              {demoServiceRequest.wasteType.replace(/_/g, " ")}
            </p>
          </div>

          <div className="rounded-xl border border-cacambar-orange/30 bg-[#120b05]/65 p-3">
            <p className="mb-1 flex items-center gap-2 text-xs text-orange-50/60">
              <Truck size={14} className="text-cacambar-orange" />
              Container size
            </p>
            <p className="text-sm font-bold text-white">
              {demoServiceRequest.containerSize}
            </p>
          </div>

          <div className="rounded-xl border border-cacambar-orange/30 bg-[#120b05]/65 p-3">
            <p className="mb-1 flex items-center gap-2 text-xs text-orange-50/60">
              <Clock size={14} className="text-cacambar-orange" />
              Requested delivery
            </p>
            <p className="text-sm font-bold text-white">
              {demoServiceRequest.requestedDelivery}
            </p>
          </div>
        </div>

        {availableSuppliers.length > 0 ? (
          <>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-cacambar-orange/35 bg-cacambar-orange/[0.045] px-4 py-3">
              <p className="text-sm font-semibold text-orange-50/80">
                Showing{" "}
                <span className="font-black text-cacambar-orange">
                  {availableSuppliers.length}
                </span>{" "}
                verified suppliers for this area
              </p>

              <p className="rounded-full border border-cacambar-orange/45 bg-[#120b05]/60 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-cacambar-orange">
                Customer chooses the supplier
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {availableSuppliers.map((supplier) => (
                <SupplierCard key={supplier.id} supplier={supplier} />
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-2xl border-2 border-cacambar-orange/45 bg-[#1a0f08]/88 p-6 text-orange-50/80">
            No suppliers are currently available for this service area in the
            demo data.
          </div>
        )}
      </section>
    </main>
  );
}