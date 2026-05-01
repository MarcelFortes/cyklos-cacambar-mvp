import { SupplierCard } from "@/components/SupplierCard";
import {
  demoServiceRequest,
  serviceAreas,
  suppliers,
} from "@/lib/mock-data";

interface MarketplacePageProps {
  searchParams?: {
    serviceAreaId?: string;
  };
}

export default function MarketplacePage({ searchParams }: MarketplacePageProps) {
  const serviceAreaId = searchParams?.serviceAreaId || demoServiceRequest.serviceAreaId;
  const selectedServiceArea =
    serviceAreas.find((area) => area.id === serviceAreaId) || serviceAreas[0];
  const availableSuppliers = suppliers.filter((supplier) =>
    supplier.serviceAreaIds.includes(selectedServiceArea.id)
  );

  return (
    <main className="min-h-screen text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 max-w-4xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.35em] text-cacambar-orange">
            CAÇAMBAR MARKETPLACE
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            Available suppliers for your service area
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Suppliers available near {demoServiceRequest.address},{" "}
            {demoServiceRequest.city}. Select a provider to continue to the demo
            order confirmation.
          </p>
        </div>

        <div className="mb-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 md:grid-cols-4">
          <div>
            <p className="text-slate-400">Service area</p>
            <p className="font-semibold text-white">{selectedServiceArea.name}</p>
          </div>
          <div>
            <p className="text-slate-400">Waste type</p>
            <p className="font-semibold text-white">
              {demoServiceRequest.wasteType.replace(/_/g, " ")}
            </p>
          </div>
          <div>
            <p className="text-slate-400">Container size</p>
            <p className="font-semibold text-white">
              {demoServiceRequest.containerSize}
            </p>
          </div>
          <div>
            <p className="text-slate-400">Requested delivery</p>
            <p className="font-semibold text-white">
              {demoServiceRequest.requestedDelivery}
            </p>
          </div>
        </div>

        {availableSuppliers.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {availableSuppliers.map((supplier) => (
              <SupplierCard key={supplier.id} supplier={supplier} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-cyklos-navy/80 p-8 text-slate-300">
            No suppliers are currently available for this service area in the
            demo data.
          </div>
        )}
      </section>
    </main>
  );
}
