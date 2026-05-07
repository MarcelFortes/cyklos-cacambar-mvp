import { Supplier } from "@/lib/types";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Package, Star } from "lucide-react";

interface SupplierCardProps {
  supplier: Supplier;
}

export function SupplierCard({ supplier }: SupplierCardProps) {
  return (
    <div className="group rounded-2xl border-2 border-cacambar-orange/38 bg-[#1a0f08]/90 p-4 shadow-xl shadow-black/18 backdrop-blur transition hover:-translate-y-1 hover:border-cacambar-orange hover:shadow-cacambar-orange/15">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-[1.18rem] font-black leading-tight text-white">
            {supplier.name}
          </h2>

          <p className="mt-1 flex items-center gap-1 text-xs font-medium text-orange-50/68">
            <MapPin size={12} className="text-cacambar-orange" />
            {supplier.region}
          </p>
        </div>

        {supplier.verified && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-cacambar-orange/45 bg-cacambar-orange/[0.08] px-2.5 py-1 text-[10px] font-bold text-cacambar-orange">
            <CheckCircle2 size={11} />
            Verified
          </span>
        )}
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2.5 text-xs">
        <div className="rounded-xl border border-cacambar-orange/24 bg-[#120b05]/65 p-2.5">
          <p className="text-orange-50/52">Service price</p>
          <p className="mt-0.5 text-sm font-black text-cacambar-orange">
            R$ {supplier.price.toFixed(2)}
          </p>
        </div>

        <div className="rounded-xl border border-cacambar-orange/24 bg-[#120b05]/65 p-2.5">
          <p className="text-orange-50/52">Available</p>
          <p className="mt-0.5 text-sm font-semibold text-white">
            {supplier.availableContainers} containers
          </p>
        </div>

        <div className="rounded-xl border border-cacambar-orange/24 bg-[#120b05]/65 p-2.5">
          <p className="text-orange-50/52">Rating</p>
          <p className="mt-0.5 flex items-center gap-1 text-sm font-semibold text-white">
            <Star size={12} fill="currentColor" className="text-yellow-400" />
            {supplier.rating.toFixed(1)}
          </p>
        </div>

        <div className="rounded-xl border border-cacambar-orange/24 bg-[#120b05]/65 p-2.5">
          <p className="text-orange-50/52">Distance</p>
          <p className="mt-0.5 text-sm font-semibold text-white">
            {supplier.distance || "N/A"}
          </p>
        </div>

        <div className="rounded-xl border border-cacambar-orange/24 bg-[#120b05]/65 p-2.5">
          <p className="text-orange-50/52">Delivery</p>
          <p className="mt-0.5 flex items-center gap-1 text-sm font-semibold text-white">
            <Clock size={12} className="text-cacambar-orange" />
            {supplier.deliveryTimeEstimate}
          </p>
        </div>

        <div className="rounded-xl border border-cacambar-orange/24 bg-[#120b05]/65 p-2.5">
          <p className="text-orange-50/52">Compliance</p>
          <p className="mt-0.5 text-sm font-black text-cacambar-orange">
            {supplier.complianceScore}% score
          </p>
        </div>
      </div>

      <div className="mb-3 rounded-xl border border-cacambar-orange/30 bg-cacambar-orange/[0.04] px-3 py-2 text-xs text-orange-50/70">
        <div className="flex items-center justify-between gap-3">
          <p className="font-bold text-white">License</p>
          <p className="font-medium">{supplier.licenseNumber}</p>
        </div>
      </div>

      <Link
        href={`/order/ORD-0001/confirm?supplierId=${supplier.id}`}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-cacambar-orange bg-cacambar-orange px-4 py-2.5 text-center text-sm font-black text-slate-950 shadow-lg shadow-cacambar-orange/15 transition hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-cacambar-orange/25"
      >
        <Package size={14} />
        Select Supplier
      </Link>
    </div>
  );
}