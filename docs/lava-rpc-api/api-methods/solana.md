---
id: solana
slug: /api-methods/solana
title: Solana JSON-RPC (Mainnet & Testnet)
---

# Solana API Methods

**Supported Networks:**
- **Solana Mainnet** (`SOLANA`)
- **Solana Testnet** (`SOLANAT`)

**Supported Interfaces**:
- **JSON-RPC over HTTPS**: `POST` requests to your Solana endpoint.
- **JSON-RPC over WebSocket**: PubSub subscriptions (availability depends on provider WS support).

---

## JSON-RPC over HTTPS

### Chain, Cluster & Node Info
- `getVersion`
- `getGenesisHash`
- `getClusterNodes`
- `getHealth`

### Blocks, Slots & Time
- `getBlockHeight`
- `getSlot`
- `getSlotLeader`
- `getSlotLeaders`
- `getBlock`
- `getBlocks`
- `getBlocksWithLimit`
- `getBlockTime`
- `getFirstAvailableBlock`
- `minimumLedgerSlot`
- `isBlockhashValid`
- `getLatestBlockhash`
- `getBlockCommitment`
- `getBlockProduction`

### Accounts & Programs
- `getAccountInfo`
- `getMultipleAccounts`
- `getProgramAccounts`
- `getMinimumBalanceForRentExemption`
- `getIdentity`

### Balances, Tokens & Supply
- `getBalance`
- `getTokenAccountBalance`
- `getTokenAccountsByDelegate`
- `getTokenAccountsByOwner`
- `getTokenLargestAccounts`
- `getTokenSupply`
- `getSupply`
- `getStakeMinimumDelegation`

### Transactions & Signatures
- `getTransaction`
- `getSignaturesForAddress`
- `getSignatureStatuses`
- `sendTransaction`
- `requestAirdrop`

### Fees, Simulation & Prioritization
- `getFeeForMessage`
- `simulateTransaction`
- `getRecentPrioritizationFees`

### Epochs, Performance & Misc
- `getEpochInfo`
- `getEpochSchedule`
- `getRecentPerformanceSamples`
- `getTransactionCount`
- `getLeaderSchedule`
- `getMaxRetransmitSlot`
- `getMaxShredInsertSlot`
- `getHighestSnapshotSlot`
- `getInflationGovernor`
- `getInflationRate`
- `getInflationReward`
- `getVoteAccounts`

---

## WebSocket PubSub (if enabled)
- `accountSubscribe` / `accountUnsubscribe`
- `blockSubscribe` / `blockUnsubscribe`
- `logsSubscribe` / `logsUnsubscribe`
- `programSubscribe` / `programUnsubscribe`
- `rootSubscribe` / `rootUnsubscribe`
- `signatureSubscribe` / `signatureUnsubscribe`
- `slotSubscribe` / `slotUnsubscribe`
- `slotsUpdatesSubscribe` / `slotsUpdatesUnsubscribe`
- `voteSubscribe` / `voteUnsubscribe`
