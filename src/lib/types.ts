export type UserRole =
  | "CUSTOMER"
  | "SUPPLIER"
  | "DESTINATION_PARTNER"
  | "ADMIN"
  | "AUDITOR"
  | "MUNICIPALITY";

export type OrderStatus =
  | "ORDER_CREATED"
  | "SUPPLIER_ASSIGNED"
  | "CONTAINER_IN_TRANSIT"
  | "CONTAINER_DELIVERED"
  | "PICKUP_REQUESTED"
  | "CONTAINER_COLLECTED"
  | "TRANSPORT_TO_DESTINATION"
  | "DESTINATION_RECEIVED_WASTE"
  | "FINAL_DESTINATION_VALIDATED"
  | "CTR_HASH_GENERATED"
  | "SOLANA_PROOF_CREATED"
  | "NFT_CTR_ISSUED"
  | "ORDER_COMPLETED"
  | "ORDER_CANCELLED"
  | "ORDER_CANCELLED_EXCEPTION";

export type WasteType =
  | "CONSTRUCTION_DEBRIS"
  | "CONCRETE"
  | "WOOD"
  | "MIXED_DEBRIS"
  | "RECYCLABLE_MATERIAL";

export type TrackingEventType = OrderStatus;

export interface ServiceArea {
  id: string;
  name: string;
  city: string;
  state: string;
  neighborhoods: string[];
  coverageLabel: string;
}

export interface ServiceRequest {
  id: string;
  address: string;
  city: string;
  state: string;
  neighborhood: string;
  wasteType: WasteType;
  containerSize: string;
  requestedDelivery: string;
  serviceAreaId: string;
}

export interface Supplier {
  id: string;
  name: string;
  region: string;
  price: number;
  availableContainers: number;
  rating: number;
  verified: boolean;
  licenseNumber: string;
  complianceScore: number;
  deliveryTimeEstimate: string;
  distance?: string;
  serviceAreaIds: string[];
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
  layer: "CAÇAMBAR" | "CYKLOS";
}

export interface Order {
  id: string;
  customerName: string;
  customerAddress: string;
  serviceAreaId: string;
  supplierId: string;
  supplierName: string;
  wasteType: WasteType;
  containerSize: string;
  price: number;
  platformFee: number;
  status: OrderStatus;
  createdAt: string;
  destinationFacility: string;
  destinationAddress?: string;
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
    serviceAddress?: string;
    containerSize?: string;
    destination: string;
    status: string;
  };
}

export interface DashboardData {
  totalOrdersTracked: number;
  verifiedLifecycleEvents: number;
  ctrHashesGenerated: number;
  nftCtrCertificatesIssued: number;
  simulatedSolanaProofs: number;
  complianceStatus: string;
  supplierPerformance: string;
  circularEconomyMetric: string;
}
