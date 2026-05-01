import { OrderStatus } from "@/lib/types";

interface StatusBadgeProps {
  status: OrderStatus | string;
}

const operationalStatuses: OrderStatus[] = [
  "ORDER_CREATED",
  "SUPPLIER_ASSIGNED",
  "CONTAINER_IN_TRANSIT",
  "CONTAINER_DELIVERED",
  "PICKUP_REQUESTED",
  "CONTAINER_COLLECTED",
  "TRANSPORT_TO_DESTINATION",
  "DESTINATION_RECEIVED_WASTE",
];

const proofStatuses: OrderStatus[] = [
  "FINAL_DESTINATION_VALIDATED",
  "CTR_HASH_GENERATED",
  "SOLANA_PROOF_CREATED",
  "NFT_CTR_ISSUED",
];

export function StatusBadge({ status }: StatusBadgeProps) {
  const label = status.replace(/_/g, " ");

  let badgeClasses = "border-cyklos-cyan/40 bg-cyklos-cyan/10 text-cyklos-cyan";

  if (operationalStatuses.includes(status as OrderStatus)) {
    badgeClasses =
      "border-cacambar-orange/40 bg-cacambar-orange/10 text-cacambar-orange";
  } else if (proofStatuses.includes(status as OrderStatus)) {
    badgeClasses =
      "border-cyklos-purple/40 bg-cyklos-purple/10 text-cyklos-purple";
  } else if (status === "ORDER_COMPLETED") {
    badgeClasses = "border-emerald-400/40 bg-emerald-400/10 text-emerald-300";
  } else if (status === "ORDER_CANCELLED" || status === "ORDER_CANCELLED_EXCEPTION") {
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
