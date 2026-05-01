import { TrackingEvent } from "@/lib/types";
import { CheckCircle2 } from "lucide-react";

interface OrderTimelineProps {
  events: TrackingEvent[];
}

const proofEvents = new Set(["CTR_GENERATED", "NFT_CTR_MINTED"]);

export function OrderTimeline({ events }: OrderTimelineProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-white/10" />

      {events.map((event) => {
        const isProofEvent = proofEvents.has(event.event);

        return (
          <div key={event.id} className="mb-8 flex items-start">
            <div
              className={`absolute left-0 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-cyklos-dark ${
                isProofEvent ? "bg-cyklos-cyan" : "bg-cacambar-orange"
              }`}
            >
              <CheckCircle2 size={10} className="text-slate-950" />
            </div>

            <div className="ml-6">
              <p
                className={`text-xs font-bold uppercase tracking-wide ${
                  isProofEvent ? "text-cyklos-cyan" : "text-cacambar-orange"
                }`}
              >
                {event.event.replaceAll("_", " ")}
              </p>

              <h3 className="text-lg font-semibold text-white">
                {event.title}
              </h3>

              <p className="text-sm text-slate-300">{event.description}</p>

              <p className="mt-1 text-xs text-slate-500">
                {new Date(event.timestamp).toLocaleString()}
                {event.location ? ` - ${event.location}` : ""}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
