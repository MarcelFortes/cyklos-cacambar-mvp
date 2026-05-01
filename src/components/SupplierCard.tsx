import { Supplier } from "@/lib/types";
import Link from "next/link";
import { Star, CheckCircle2 } from "lucide-react";

interface SupplierCardProps {
  supplier: Supplier;
}

export function SupplierCard({ supplier }: SupplierCardProps) {
  return (
    <div className="rounded-xl border border-cacambar-orange/40 bg-cacambar-dark p-6 shadow-lg backdrop-blur">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{supplier.name}</h2>
          <p className="text-sm text-slate-300">{supplier.region}</p>
        </div>

        {supplier.verified && (
          <span className="inline-flex items-center gap-1 rounded-full bg-cyklos-cyan/10 px-3 py-1 text-xs font-semibold text-cyklos-cyan">
            <CheckCircle2 size={14} />
            Verified by CYKLOS
          </span>
        )}
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-slate-400">Price</p>
          <p className="font-semibold text-white">
            R$ {supplier.price.toFixed(2)}
          </p>
        </div>

        <div>
          <p className="text-slate-400">Available</p>
          <p className="font-semibold text-white">
            {supplier.availableContainers} containers
          </p>
        </div>

        <div>
          <p className="text-slate-400">Rating</p>
          <p className="flex items-center gap-1 text-sm font-semibold text-white">
            <Star size={14} fill="currentColor" className="text-yellow-400" />
            {supplier.rating.toFixed(1)}
          </p>
        </div>

        <div>
          <p className="text-slate-400">License</p>
          <p className="text-sm font-semibold text-white">
            {supplier.licenseNumber}
          </p>
        </div>
      </div>

      <Link
        href="/order/ORD-0001"
        className="block rounded-xl bg-cacambar-orange px-4 py-3 text-center font-bold text-slate-950 transition hover:bg-orange-400"
      >
        Select Supplier
      </Link>
    </div>
  );
}
