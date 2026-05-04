import { Supplier } from "@/lib/types";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Package, Star } from "lucide-react";

interface SupplierCardProps {
  supplier: Supplier;
}

export function SupplierCard({ supplier }: SupplierCardProps) {
  return (
    <div className="group rounded-2xl border-2 border-cacambar-orange/45 bg-[#1a0f08]/90 p-6 shadow-xl shadow-black/25 backdrop-blur transition hover:-translate-y-1 hover:border-cacambar-orange hover:shadow-cacambar-orange/15">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white">{supplier.name}</h2>

          <p className="mt-1 flex items-center gap-1 text-sm text-orange-50/70">
            <MapPin size={14} className="text-cacambar-orange" />
            {supplier.region}
          </p>
        </div>

        {supplier.verified && (
          <span className="inline-flex items-center gap-1 rounded-full border border-cacambar-orange/45 bg-cacambar-orange/[0.08] px-3 py-1 text-xs font-bold text-cacambar-orange">
            <CheckCircle2 size={14} />
            Verified
          </span>
        )}
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
        <div className="rounded-xl border border-cacambar-orange/25 bg-[#120b05]/65 p-3">
          <p className="text-orange-50/60">Service price</p>
          <p className="font-black text-cacambar-orange">
            R$ {supplier.price.toFixed(2)}
          </p>
        </div>

        <div className="rounded-xl border border-cacambar-orange/25 bg-[#120b05]/65 p-3">
          <p className="text-orange-50/60">Available</p>
          <p className="font-semibold text-white">
            {supplier.availableContainers} containers
          </p>
        </div>

        <div className="rounded-xl border border-cacambar-orange/25 bg-[#120b05]/65 p-3">
          <p className="text-orange-50/60">Rating</p>
          <p className="flex items-center gap-1 font-semibold text-white">
            <Star size={14} fill="currentColor" className="text-yellow-400" />
            {supplier.rating.toFixed(1)}
          </p>
        </div>

        <div className="rounded-xl border border-cacambar-orange/25 bg-[#120b05]/65 p-3">
          <p className="text-orange-50/60">Distance</p>
          <p className="font-semibold text-white">
            {supplier.distance || "N/A"}
          </p>
        </div>

        <div className="rounded-xl border border-cacambar-orange/25 bg-[#120b05]/65 p-3">
          <p className="text-orange-50/60">Delivery</p>
          <p className="flex items-center gap-1 font-semibold text-white">
            <Clock size={14} className="text-cacambar-orange" />
            {supplier.deliveryTimeEstimate}
          </p>
        </div>

        <div className="rounded-xl border border-cacambar-orange/25 bg-[#120b05]/65 p-3">
          <p className="text-orange-50/60">Compliance</p>
          <p className="font-semibold text-cacambar-orange">
            {supplier.complianceScore}% score
          </p>
        </div>
      </div>

      <div className="mb-5 rounded-xl border border-cacambar-orange/35 bg-cacambar-orange/[0.045] p-3 text-xs text-orange-50/75">
        <p className="font-semibold text-white">License</p>
        <p>{supplier.licenseNumber}</p>
      </div>

      <Link
        href={`/order/ORD-0001/confirm?supplierId=${supplier.id}`}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-cacambar-orange bg-cacambar-orange px-4 py-3 text-center font-black text-slate-950 shadow-lg shadow-cacambar-orange/15 transition hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-cacambar-orange/25"
      >
        <Package size={16} />
        Select Supplier
      </Link>
    </div>
  );
}