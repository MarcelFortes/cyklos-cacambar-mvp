import SHA256 from "crypto-js/sha256";
import { Order } from "./types";

const CRITICAL_CTR_EVENTS = [
  "CONTAINER_DELIVERED",
  "CONTAINER_PICKED_UP",
  "WASTE_DESTINED",
] as const;

export function generateCTRHash(order: Order): string {
  const payload = {
    orderId: order.id,
    customerAddress: order.customerAddress,
    supplierId: order.supplierId,
    supplierName: order.supplierName,
    wasteType: order.wasteType,
    containerSize: order.containerSize,
    price: order.price,
    trackingEvents: order.trackingEvents
      .filter((event) =>
        CRITICAL_CTR_EVENTS.includes(
          event.event as (typeof CRITICAL_CTR_EVENTS)[number]
        )
      )
      .map((event) => ({
        event: event.event,
        timestamp: event.timestamp,
        location: event.location,
        validatedBy: event.validatedBy,
      })),
  };

  return SHA256(JSON.stringify(payload)).toString();
}
