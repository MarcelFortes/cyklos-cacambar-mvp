import { Order, NFTCTR } from "./types";
import { generateCTRHash } from "./hash";
import { generateMockSolanaProof } from "./solana";

export function generateNFTCTR(order: Order): NFTCTR {
  const ctrHash = generateCTRHash(order);
  const solanaProof = generateMockSolanaProof(ctrHash);
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "CYKLOS / CAÇAMBAR";

  return {
    id: `NFT-CTR-${order.id}`,
    orderId: order.id,
    name: `NFT-CTR for Order ${order.id}`,
    description: `Issued by ${appName}, this Non-Fungible Token - Waste Transport Certificate (NFT-CTR) is designed to provide a verifiable and tamper-resistant record of the waste disposal process through a Solana proof layer.`,
    ctrHash,
    solanaSignature: solanaProof.signature,
    explorerUrl: solanaProof.explorerUrl,
    mintedAt: new Date().toISOString(),
    metadata: {
      orderId: order.id,
      wasteType: order.wasteType,
      supplierName: order.supplierName,
      destination: "Licensed Recycling Facility",
      status: "Verified",
    },
  };
}
