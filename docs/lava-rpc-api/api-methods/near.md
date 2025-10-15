---
id: near
slug: /api-methods/near
title: Near JSON-RPC (Mainnet & Testnet)
---

# Near API Methods

**Supported Networks**:
- **Mainnet** (`NEAR`)
- **Testnet** (`NEART`)

**Supported Interfaces**:
- **JSON-RPC/HTTP**
- **JSON-RPC/WEBSOCKET**

---

## JSON-RPC

### Chain and Node Info
- `status`
- `network_info`

### Blocks and Chunks
- `block`
- `chunk`

### Accounts and State
- `query`

### State Changes
- `EXPERIMENTAL_changes`
- `EXPERIMENTAL_changes_in_block`

### Transactions and Receipts
- `broadcast_tx_async`
- `send_tx`
- `broadcast_tx_commit`
- `tx`
- `EXPERIMENTAL_tx_status`
- `EXPERIMENTAL_receipt`

### Protocol and Configuration
- `EXPERIMENTAL_genesis_config`
- `EXPERIMENTAL_protocol_config`
- `validators`

### Gas and Pricing
- `gas_price`

### Light Client
- `next_light_client_block`
