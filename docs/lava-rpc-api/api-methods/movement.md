---
id: movement
slug: /api-methods/movement
title: Movement APIs (Mainnet & Testnet)
---

# Movement API Methods

**Supported Networks**:
- Movement Mainnet (`MOVEMENT`)
- Movement Testnet (`MOVEMENTT`)

**Supported Interfaces**:
- **REST**

---

## REST

### Chain & Node Info
- `/`
- `/-/healthy`
- `/spec`

### Accounts & State
- `/accounts/{address}`
- `/accounts/{address}/resources`
- `/accounts/{address}/resource/{resource_type}`
- `/accounts/{address}/modules`
- `/accounts/{address}/module/{module_name}`

### Events
- `/accounts/{address}/events/{creation_number}`
- `/accounts/{address}/events/{event_handle}/{field_name}`
- `/events/{event_key}`

### Blocks
- `/blocks/by_height/{block_height}`
- `/blocks/by_version/{version}`

### Transactions — Read
- `/transactions/by_hash/{txn_hash}`
- `/transactions/by_version/{txn_version}`
- `/transactions/wait_by_hash/{txn_hash}`

### Transactions — Write & Submission
- `/transactions`  _(submit)_
- `/transactions/encode_submission`
- `/transactions/batch`

### Simulation & View
- `/transactions/simulate`
- `/view`

### Tables (on-chain storage)
- `/tables/{table_handle}/item`
- `/tables/table_handle/raw_item`

### Gas & Fees
- `/estimate_gas_price`
