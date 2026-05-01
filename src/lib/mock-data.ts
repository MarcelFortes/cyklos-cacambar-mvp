import { Order, Supplier, NFTCTR } from "./types";
import { generateCTRHash } from "./hash";
import { generateMockSolanaProof } from "./solana";

export const suppliers: Supplier[] = [
  {
    id: "SUP-001",
    name: "EcoWaste Solutions",
    region: "São Paulo/SP",
    price: 750,
    availableContainers: 8,
    rating: 4.8,
    verified: true,
    licenseNumber: "LIC-EW-2024-001",
  },
  {
    id: "SUP-002",
    name: "GreenBuild Logistics",
    region: "Guarulhos/SP",
    price: 690,
    availableContainers: 5,
    rating: 4.5,
    verified: true,
    licenseNumber: "LIC-GB-2024-002",
  },
  {
    id: "SUP-003",
    name: "Urban Recycle Co.",
    region: "Osasco/SP",
    price: 820,
    availableContainers: 3,
    rating: 4.7,
    verified: false,
    licenseNumber: "LIC-UR-2024-003",
  },
];

export const demoOrder: Order = {
  id: "ORD-0001",
  customerName: "BuildRight Construction",
  customerAddress: "Rua Exemplo, 100 - São Paulo/SP",
  supplierId: "SUP-001",
  supplierName: "EcoWaste Solutions",
  wasteType: "CONSTRUCTION_WASTE",
  containerSize: "5m³",
  price: 750,
  status: "NFT_CTR_MINTED",
  createdAt: "2026-04-25T10:00:00Z",
  trackingEvents: [
    {
      id: "EVT-001",
      orderId: "ORD-0001",
      event: "ORDER_CREATED",
      title: "Order Created",
      description: "Customer selected supplier, price and container size.",
      timestamp: "2026-04-25T10:00:00Z",
      location: "Online Platform",
      validatedBy: "customer",
    },
    {
      id: "EVT-002",
      orderId: "ORD-0001",
      event: "SUPPLIER_CONFIRMED",
      title: "Supplier Confirmed",
      description: "Supplier confirmed container availability and fulfillment.",
      timestamp: "2026-04-25T10:30:00Z",
      location: "Supplier Dashboard",
      validatedBy: "supplier",
    },
    {
      id: "EVT-003",
      orderId: "ORD-0001",
      event: "CONTAINER_DELIVERED",
      title: "Empty Container Delivered",
      description: "Empty waste container delivered to the customer site.",
      timestamp: "2026-04-26T13:30:00Z",
      location: "Customer Address",
      validatedBy: "supplier",
    },
    {
      id: "EVT-004",
      orderId: "ORD-0001",
      event: "CONTAINER_PICKED_UP",
      title: "Full Container Picked Up",
      description: "Full container picked up for transportation.",
      timestamp: "2026-04-29T09:20:00Z",
      location: "Customer Address",
      validatedBy: "supplier",
    },
    {
      id: "EVT-005",
      orderId: "ORD-0001",
      event: "IN_TRANSIT",
      title: "Waste In Transit",
      description: "Container transported to licensed destination partner.",
      timestamp: "2026-04-29T10:00:00Z",
      location: "São Paulo/SP",
      validatedBy: "tracking_system",
    },
    {
      id: "EVT-006",
      orderId: "ORD-0001",
      event: "WASTE_DESTINED",
      title: "Waste Destination Confirmed",
      description: "Construction waste received by a licensed recycling facility.",
      timestamp: "2026-04-29T11:15:00Z",
      location: "Licensed Recycling Facility",
      validatedBy: "destination_partner",
    },
    {
      id: "EVT-007",
      orderId: "ORD-0001",
      event: "CTR_GENERATED",
      title: "Digital CTR Generated",
      description: "A digital waste transport certificate was generated.",
      timestamp: "2026-04-29T11:20:00Z",
      location: "CYKLOS Infrastructure",
      validatedBy: "system",
    },
    {
      id: "EVT-008",
      orderId: "ORD-0001",
      event: "NFT_CTR_MINTED",
      title: "NFT-CTR Minted (Simulated)",
      description:
        "The CTR hash was processed for a public Solana proof layer in mock mode.",
      timestamp: "2026-04-29T11:25:00Z",
      location: "Solana Devnet (Mock)",
      validatedBy: "solana_proof_layer",
    },
  ],
};

const ctrHash = generateCTRHash(demoOrder);
const solanaProof = generateMockSolanaProof(ctrHash);

export const demoNFTCTR: NFTCTR = {
  id: "NFT-CTR-0001",
  orderId: demoOrder.id,
  name: `NFT-CTR for ${demoOrder.id}`,
  description:
    "This Non-Fungible Token - Waste Transport Certificate (NFT-CTR) is designed to provide a verifiable and tamper-resistant compliance record through a Solana proof layer.",
  ctrHash,
  solanaSignature: solanaProof.signature,
  explorerUrl: solanaProof.explorerUrl,
  mintedAt: "2026-04-29T11:25:00Z",
  metadata: {
    orderId: demoOrder.id,
    wasteType: demoOrder.wasteType,
    supplierName: demoOrder.supplierName,
    destination: "Licensed Recycling Facility",
    status: "Verified",
  },
};
