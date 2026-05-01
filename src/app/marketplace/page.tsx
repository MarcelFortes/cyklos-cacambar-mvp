import { SupplierCard } from "@/components/SupplierCard";
import { suppliers } from "@/lib/mock-data";

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-cyklos-dark text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.35em] text-cacambar-orange">
            CAÇAMBAR APP
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            Construction Waste Container Marketplace
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            The first CYKLOS-powered application for construction waste
            logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {suppliers.map((supplier) => (
            <SupplierCard key={supplier.id} supplier={supplier} />
          ))}
        </div>
      </section>
    </main>
  );
}
