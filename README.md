# CYKLOS / CAÇAMBAR MVP

Circular economy proof infrastructure with a Solana-ready verification layer and CAÇAMBAR as the first operational application.

## Live Demo

https://cyklos-cacambar-mvp.vercel.app

## Project Overview

**CYKLOS** is a Web3 infrastructure layer for circular economy proof, compliance and public verification.

**CAÇAMBAR** is the first operational application powered by CYKLOS: a construction waste container marketplace designed to connect customers, suppliers and destination partners through a traceable waste logistics workflow.

This MVP demonstrates how a real-world Web2 logistics flow can be connected to a Web3 public verification layer, using cryptographic hashes, simulated Solana proofs and NFT-CTR compliance certificates.

## Core Thesis

Construction waste logistics is fragmented, informal and difficult to audit.

Customers often cannot verify whether construction waste was properly collected, transported and sent to a licensed destination. Suppliers lack a trusted digital infrastructure to prove compliance. Municipalities and auditors lack transparent, verifiable records.

CYKLOS addresses this problem by transforming critical waste lifecycle events into verifiable circular economy records.

CAÇAMBAR demonstrates this infrastructure in a practical vertical: construction waste container logistics.

## Brand Architecture

### CYKLOS

CYKLOS is the main brand and infrastructure layer.

It represents:

- Web3 infrastructure
- Solana proof layer
- compliance
- NFT-CTR
- public verification
- circular economy proof
- institutional trust layer

### CAÇAMBAR

CAÇAMBAR is the first application powered by CYKLOS.

It represents:

- construction waste marketplace
- suppliers
- container availability
- order flow
- delivery
- pickup
- transportation
- final destination
- operational logistics

## What the MVP Demonstrates

The MVP demonstrates the following flow:

1. A customer enters the CAÇAMBAR marketplace.
2. The customer selects a verified supplier.
3. A waste container order is created.
4. The delivery of the empty container is tracked.
5. The pickup of the full container is tracked.
6. The transportation event is recorded.
7. The final destination is validated.
8. A Digital CTR record is generated.
9. A SHA-256 hash is created from critical lifecycle data.
10. A simulated Solana proof is generated for MVP demonstration.
11. An NFT-CTR compliance certificate is displayed.
12. The CYKLOS dashboard shows operational and proof-layer metrics.

## Architecture

### Web2 Operational Layer

The Web2 layer handles the operational workflow:

- supplier marketplace
- order management
- customer and supplier information
- container size and price
- tracking events
- destination validation
- administrative dashboard

### Web3 Public Verification Layer

The Web3 layer is designed to provide public verification:

- cryptographic CTR hash
- simulated Solana proof
- public proof URL
- NFT-CTR compliance certificate
- audit-ready record structure

CYKLOS does not use Solana as a database.

Operational data remains off-chain. Solana is used conceptually as a public verification layer for critical hashes, certificates and proof records.

## Current MVP Mode

This MVP uses a simulated proof layer.

The current implementation does not submit real transactions to Solana Devnet. Instead, it generates a mock Solana signature and mock explorer URL to demonstrate the intended verification flow.

The architecture is designed so that the mock proof can later be replaced by real Solana Devnet transactions.

## NFT-CTR

NFT-CTR means:

**Non-Fungible Token — Waste Transport Certificate**

In this MVP, the NFT-CTR is represented as a verifiable digital compliance certificate.

It includes:

- order ID
- waste type
- supplier
- destination
- CTR hash
- mock Solana proof signature
- mint timestamp
- status

The NFT-CTR is not presented as a collectible NFT. It is presented as a compliance certificate for circular economy proof.

## Why Solana?

Solana is used as a public verification layer, not as an operational database.

CYKLOS uses the idea of a Solana proof layer because it enables:

- public verification
- high-performance proof anchoring
- low-cost transaction potential
- auditability
- transparency
- scalable certificate issuance
- future NFT-CTR minting

In the current MVP, Solana integration is simulated. The next technical milestone is to replace the mock proof with at least one real Solana Devnet transaction.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Solana Web3.js
- CryptoJS SHA-256
- Lucide React

## Project Structure

```txt
cyklos-cacambar-mvp/
├── package.json
├── README.md
├── .env.example
├── next.config.js
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── marketplace/page.tsx
    │   ├── order/[id]/page.tsx
    │   ├── dashboard/page.tsx
    │   └── nft-ctr/[id]/page.tsx
    ├── components/
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── SupplierCard.tsx
    │   ├── OrderTimeline.tsx
    │   ├── StatusBadge.tsx
    │   └── NFTCTRCard.tsx
    ├── lib/
    │   ├── mock-data.ts
    │   ├── types.ts
    │   ├── hash.ts
    │   ├── solana.ts
    │   └── nft-ctr.ts
    └── styles/
        └── globals.css
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create environment file

Create a `.env.local` file in the project root.

Use `.env.example` as reference.

### 3. Run the development server

```bash
npm run dev
```

### 4. Open the application

```txt
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Demo Flow

Recommended demo route:

1. Open the homepage.
2. Click **Explore CAÇAMBAR Marketplace**.
3. Select a supplier.
4. Review the order lifecycle.
5. Open the NFT-CTR certificate.
6. Open the CYKLOS dashboard.

This route demonstrates:

- marketplace operation
- supplier selection
- order tracking
- waste lifecycle events
- CTR hash generation
- simulated Solana proof
- NFT-CTR compliance certificate
- CYKLOS proof dashboard

## Current Limitations

This MVP is intentionally focused on demonstrating the product thesis and technical architecture.

Current limitations:

- Data is mocked.
- There is no persistent database yet.
- There is no user authentication yet.
- There is no real wallet connection yet.
- Solana proof registration is simulated.
- NFT-CTR minting is represented as a structured certificate object.
- The proof URL represents the intended verification flow.
- Supplier, customer, destination partner and municipality workflows are simplified for demo purposes.

## Next Technical Milestone

The next technical milestone is to replace the mock Solana proof with at least one real Solana Devnet transaction.

Recommended path:

1. Generate the CTR hash from critical lifecycle events.
2. Connect to Solana Devnet.
3. Submit a transaction or proof record containing the CTR hash or a reference to it.
4. Confirm the transaction.
5. Store the real transaction signature.
6. Generate a real Solana Explorer link.
7. Connect the real proof to the NFT-CTR certificate view.

## Future Roadmap

- Persistent database integration
- User authentication
- Supplier onboarding
- Customer onboarding
- Destination partner validation
- Municipality dashboard
- ESG reporting module
- QR code verification
- Wallet connection
- Real Solana Devnet transactions
- Metaplex-compatible NFT-CTR minting
- API for waste compliance records
- Expansion to other regulated waste streams
- Circular economy data infrastructure

## Submission Notes

This MVP was built for hackathon evaluation and early product validation.

The goal is to demonstrate how a real-world Web2 logistics workflow can become more transparent, auditable and valuable when connected to a Web3 public verification layer.

CYKLOS is the infrastructure.

CAÇAMBAR is the first operational application.

Solana is the public verification layer.

NFT-CTR is the compliance certificate.

## License

This project is currently published for hackathon evaluation and early-stage product validation.
