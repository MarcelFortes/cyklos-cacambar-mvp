import { Supplier } from "@/lib/types";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Package, Star } from "lucide-react";

interface SupplierCardProps {
  supplier: Supplier;
}

export function SupplierCard({ supplier }: SupplierCardProps) {
  return (
    <div className="rounded-2xl border border-cacambar-orange/40 bg-cacambar-dark/85 p-6 shadow-xl shadow-black/20 backdrop-blur">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{supplier.name}</h2>
          <p className="mt-1 flex items-center gap-1 text-sm text-slate-300">
            <MapPin size={14} className="text-cacambar-orange" />
            {supplier.region}
          </p>
        </div>

        {supplier.verified && (
          <span className="inline-flex items-center gap-1 rounded-full bg-cyklos-cyan/10 px-3 py-1 text-xs font-semibold text-cyklos-cyan">
            <CheckCircle2 size={14} />
            Verified
          </span>
        )}
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-slate-400">Service price</p>
          <p className="font-semibold text-white">R$ {supplier.price.toFixed(2)}</p>
        </div>

        <div>
          <p className="text-slate-400">Available</p>
          <p className="font-semibold text-white">
            {supplier.availableContainers} containers
          </p>
        </div>

        <div>
          <p className="text-slate-400">Rating</p>
          <p className="flex items-center gap-1 font-semibold text-white">
            <Star size={14} fill="currentColor" className="text-yellow-400" />
            {supplier.rating.toFixed(1)}
          </p>
        </div>

        <div>
          <p className="text-slate-400">Distance</p>
          <p className="font-semibold text-white">{supplier.distance || "N/A"}</p>
        </div>

        <div>
          <p className="text-slate-400">Delivery</p>
          <p className="flex items-center gap-1 font-semibold text-white">
            <Clock size={14} className="text-cacambar-orange" />
            {supplier.deliveryTimeEstimate}
          </p>
        </div>

        <div>
          <p className="text-slate-400">Compliance</p>
          <p className="font-semibold text-cyklos-cyan">
            {supplier.complianceScore}% score
          </p>
        </div>
      </div>

      <div className="mb-5 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-300">
        <p className="font-semibold text-white">License</p>
        <p>{supplier.licenseNumber}</p>
      </div>

      <Link
        href={`/order/ORD-0001/confirm?supplierId=${supplier.id}`}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cacambar-orange px-4 py-3 text-center font-bold text-slate-950 transition hover:bg-orange-400"
      >
        <Package size={16} />
        Select Supplier
      </Link>
    </div>
  );
}
