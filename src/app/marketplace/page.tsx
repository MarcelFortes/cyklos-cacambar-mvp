import { SupplierCard } from "@/components/SupplierCard";
import {
  demoServiceRequest,
  serviceAreas,
  suppliers,
} from "@/lib/mock-data";
import { MapPin, Package, Truck, Clock, Store } from "lucide-react";

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
      <section className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-140px] top-8 h-[460px] w-[460px] rounded-full bg-cacambar-orange/18 blur-[150px]" />
          <div className="absolute right-[-180px] top-52 h-[500px] w-[500px] rounded-full bg-orange-500/8 blur-[160px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.12),transparent_28%),radial-gradient(circle_at_80%_40%,rgba(249,115,22,0.08),transparent_30%)]" />
        </div>

        <div className="mb-10 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-2xl border-2 border-cacambar-orange/60 bg-cacambar-orange/[0.09] px-4 py-2 shadow-lg shadow-cacambar-orange/15">
            <Store size={16} className="text-cacambar-orange" />
            <p className="text-xs font-black uppercase tracking-[0.32em] text-cacambar-orange">
              CAÇAMBAR Marketplace
            </p>
          </div>

          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            Available suppliers for your service area
          </h1>

          <p className="mt-4 text-lg leading-8 text-orange-50/80">
            Compare verified suppliers near {demoServiceRequest.address},{" "}
            {demoServiceRequest.city}. Choose by price, availability,
            compliance score and delivery estimate.
          </p>
        </div>

        <div className="mb-8 grid gap-4 rounded-2xl border-2 border-cacambar-orange/45 bg-[#1a0f08]/88 p-5 text-sm text-orange-50/75 shadow-xl shadow-black/25 backdrop-blur-xl md:grid-cols-4">
          <div className="rounded-xl border border-cacambar-orange/35 bg-[#120b05]/65 p-4">
            <p className="mb-1 flex items-center gap-2 text-orange-50/65">
              <MapPin size={15} className="text-cacambar-orange" />
              Service area
            </p>
            <p className="font-semibold text-white">{selectedServiceArea.name}</p>
          </div>

          <div className="rounded-xl border border-cacambar-orange/35 bg-[#120b05]/65 p-4">
            <p className="mb-1 flex items-center gap-2 text-orange-50/65">
              <Package size={15} className="text-cacambar-orange" />
              Waste type
            </p>
            <p className="font-semibold text-white">
              {demoServiceRequest.wasteType.replace(/_/g, " ")}
            </p>
          </div>

          <div className="rounded-xl border border-cacambar-orange/35 bg-[#120b05]/65 p-4">
            <p className="mb-1 flex items-center gap-2 text-orange-50/65">
              <Truck size={15} className="text-cacambar-orange" />
              Container size
            </p>
            <p className="font-semibold text-white">
              {demoServiceRequest.containerSize}
            </p>
          </div>

          <div className="rounded-xl border border-cacambar-orange/35 bg-[#120b05]/65 p-4">
            <p className="mb-1 flex items-center gap-2 text-orange-50/65">
              <Clock size={15} className="text-cacambar-orange" />
              Requested delivery
            </p>
            <p className="font-semibold text-white">
              {demoServiceRequest.requestedDelivery}
            </p>
          </div>
        </div>

        {availableSuppliers.length > 0 ? (
          <>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-cacambar-orange/35 bg-cacambar-orange/[0.045] px-5 py-4">
              <p className="text-sm font-semibold text-orange-50/80">
                Showing{" "}
                <span className="font-black text-cacambar-orange">
                  {availableSuppliers.length}
                </span>{" "}
                verified suppliers for this area
              </p>

              <p className="rounded-full border border-cacambar-orange/45 bg-[#120b05]/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cacambar-orange">
                Customer chooses the supplier
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {availableSuppliers.map((supplier) => (
                <SupplierCard key={supplier.id} supplier={supplier} />
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-2xl border-2 border-cacambar-orange/45 bg-[#1a0f08]/88 p-8 text-orange-50/80">
            No suppliers are currently available for this service area in the
            demo data.
          </div>
        )}
      </section>
    </main>
  );
}