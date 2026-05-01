import { OrderStatus } from "@/lib/types";

interface StatusBadgeProps {
  status: OrderStatus | string;
}

const operationalStatuses: OrderStatus[] = [
  "ORDER_CREATED",
  "SUPPLIER_CONFIRMED",
  "CONTAINER_DELIVERED",
  "CONTAINER_PICKED_UP",
  "IN_TRANSIT",
  "WASTE_DESTINED",
];

export function StatusBadge({ status }: StatusBadgeProps) {
  const label = status.replaceAll("_", " ");

  let badgeClasses = "border-cyklos-cyan/40 bg-cyklos-cyan/10 text-cyklos-cyan";

  if (operationalStatuses.includes(status as OrderStatus)) {
    badgeClasses =
      "border-cacambar-orange/40 bg-cacambar-orange/10 text-cacambar-orange";
  } else if (status === "CTR_GENERATED") {
    badgeClasses =
      "border-cyklos-purple/40 bg-cyklos-purple/10 text-cyklos-purple";
  } else if (status === "NFT_CTR_MINTED" || status === "ORDER_COMPLETED") {
    badgeClasses =
      "border-emerald-400/40 bg-emerald-400/10 text-emerald-300";
  } else if (status === "ORDER_CANCELLED_EXCEPTION") {
    badgeClasses = "border-red-400/40 bg-red-400/10 text-red-300";
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${badgeClasses}`}
    >
      {label}
    </span>
  );
}
