import { OrderStatus, TrackingEvent } from "@/lib/types";
import {
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Hash,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

interface OrderTimelineProps {
  events: TrackingEvent[];
  currentStatus?: OrderStatus;
}

const proofEvents = new Set([
  "FINAL_DESTINATION_VALIDATED",
  "CTR_HASH_GENERATED",
  "SOLANA_PROOF_CREATED",
  "NFT_CTR_ISSUED",
]);

function getIcon(event: TrackingEvent) {
  if (event.event === "CTR_HASH_GENERATED") return Hash;
  if (event.event === "SOLANA_PROOF_CREATED") return ShieldCheck;
  if (event.event === "NFT_CTR_ISSUED") return BadgeCheck;
  if (event.event === "FINAL_DESTINATION_VALIDATED") return ClipboardCheck;
  if (event.event.includes("CONTAINER")) return PackageCheck;
  if (event.event.includes("TRANSPORT") || event.event.includes("IN_TRANSIT")) {
    return Truck;
  }
  return CheckCircle2;
}

export function OrderTimeline({ events, currentStatus }: OrderTimelineProps) {
  return (
    <div className="space-y-5">
      {events.map((event, index) => {
        const isProofEvent = proofEvents.has(event.event);
        const isCurrent = currentStatus === event.event;
        const Icon = getIcon(event);

        return (
          <div key={event.id} className="relative grid gap-4 md:grid-cols-[40px_1fr]">
            {index < events.length - 1 && (
              <div className="absolute left-5 top-12 hidden h-full w-px bg-white/10 md:block" />
            )}

            <div
              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border ${
                isProofEvent
                  ? "border-cyklos-cyan/50 bg-cyklos-cyan/15 text-cyklos-cyan"
                  : "border-cacambar-orange/50 bg-cacambar-orange/15 text-cacambar-orange"
              }`}
            >
              <Icon size={18} />
            </div>

            <div
              className={`rounded-2xl border p-5 ${
                isCurrent
                  ? "border-cyklos-cyan/45 bg-cyklos-cyan/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p
                    className={`text-xs font-bold uppercase tracking-wide ${
                      isProofEvent ? "text-cyklos-cyan" : "text-cacambar-orange"
                    }`}
                  >
                    {isProofEvent ? "CYKLOS proof layer" : "CAÇAMBAR operational layer"}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {event.title}
                  </h3>
                </div>
                {isCurrent && <StatusBadge status={event.event} />}
              </div>

              <p className="text-sm leading-6 text-slate-300">{event.description}</p>

              <div className="mt-4 grid gap-2 text-xs text-slate-300 md:grid-cols-3">
                <p>
                  <span className="text-slate-400">Timestamp:</span>{" "}
                  {new Date(event.timestamp).toLocaleString()}
                </p>
                <p>
                  <span className="text-slate-400">Location:</span>{" "}
                  {event.location || "Not specified"}
                </p>
                <p>
                  <span className="text-slate-400">Validated by:</span>{" "}
                  {event.validatedBy}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
