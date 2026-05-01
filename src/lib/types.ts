export type UserRole =
  | "CUSTOMER"
  | "SUPPLIER"
  | "DESTINATION_PARTNER"
  | "ADMIN"
  | "AUDITOR"
  | "MUNICIPALITY";

export type OrderStatus =
  | "ORDER_CREATED"
  | "SUPPLIER_CONFIRMED"
  | "CONTAINER_DELIVERED"
  | "CONTAINER_PICKED_UP"
  | "IN_TRANSIT"
  | "WASTE_DESTINED"
  | "CTR_GENERATED"
  | "NFT_CTR_MINTED"
  | "ORDER_COMPLETED"
  | "ORDER_CANCELLED_EXCEPTION";

export type WasteType =
  | "CONSTRUCTION_WASTE"
  | "WOOD"
  | "CONCRETE"
  | "MIXED_DEBRIS"
  | "RECYCLABLE_MATERIAL";

export type TrackingEventType =
  | "ORDER_CREATED"
  | "SUPPLIER_CONFIRMED"
  | "CONTAINER_DELIVERED"
  | "CONTAINER_PICKED_UP"
  | "IN_TRANSIT"
  | "WASTE_DESTINED"
  | "CTR_GENERATED"
  | "NFT_CTR_MINTED";

export interface Supplier {
  id: string;
  name: string;
  region: string;
  price: number;
  availableContainers: number;
  rating: number;
  verified: boolean;
  licenseNumber: string;
}

export interface TrackingEvent {
  id: string;
  orderId: string;
  event: TrackingEventType;
  title: string;
  description: string;
  timestamp: string;
  location?: string;
  validatedBy: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerAddress: string;
  supplierId: string;
  supplierName: string;
  wasteType: WasteType;
  containerSize: string;
  price: number;
  status: OrderStatus;
  createdAt: string;
  trackingEvents: TrackingEvent[];
}

export interface NFTCTR {
  id: string;
  orderId: string;
  name: string;
  description: string;
  ctrHash: string;
  solanaSignature: string;
  explorerUrl: string;
  mintedAt: string;
  metadata: {
    orderId: string;
    wasteType: WasteType;
    supplierName: string;
    destination: string;
    status: string;
  };
}
