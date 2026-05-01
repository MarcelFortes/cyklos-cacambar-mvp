import { Connection, clusterApiUrl, Cluster } from "@solana/web3.js";

const DEFAULT_SOLANA_NETWORK: Cluster = "devnet";

function getSolanaNetwork(): Cluster {
  const network = process.env.NEXT_PUBLIC_SOLANA_NETWORK;

  if (
    network === "devnet" ||
    network === "testnet" ||
    network === "mainnet-beta"
  ) {
    return network;
  }

  return DEFAULT_SOLANA_NETWORK;
}

const SOLANA_NETWORK = getSolanaNetwork();

const SOLANA_RPC_URL =
  process.env.NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl(SOLANA_NETWORK);

export function getSolanaConnection(): Connection {
  return new Connection(SOLANA_RPC_URL, "confirmed");
}

export function generateMockSolanaProof(ctrHash: string) {
  const signatureSeed = ctrHash.slice(0, 32);
  const mockSignature = `mock-solana-signature-${signatureSeed}`;

  const explorerBaseUrl =
    SOLANA_NETWORK === "mainnet-beta"
      ? "https://solscan.io/tx/"
      : "https://explorer.solana.com/tx/";

  const explorerUrl =
    SOLANA_NETWORK === "mainnet-beta"
      ? `${explorerBaseUrl}${mockSignature}`
      : `${explorerBaseUrl}${mockSignature}?cluster=${SOLANA_NETWORK}`;

  return {
    network: SOLANA_NETWORK,
    signature: mockSignature,
    explorerUrl,
    isMock: true,
  };
}
