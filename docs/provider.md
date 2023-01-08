---
sidebar_position: 1
slug: provider
---

import RoadmapItem from '@site/src/components/RoadmapItem';

# Be a Provider

This page covers what is a provider and the steps for starting as one.

## Providers role in Lava's protocol

### Provider role in the network
Providers service relay requests by staking on the network and running RPC nodes on the Relay Chains queried by Consumers (e.g. Cosmos, Ethereum, Osmosis, Polygon, etc). They earn fees in the form of LAVA from the Consumers for servicing requests.

### Provider concepts (stake, geolocation, chain id, endpoints)
Providers permissionlessly join and participate in the Lava Network. After ensuring your Relay Chain RPC Nodes are operational and meet required specifications, you will install and configure Lava’s lightweight Provider process as detailed below. Providers must stake LAVA via the `ProviderStaking(stake, geolocation, chainID, Endpoints[], apiInterfaces)` transaction, which defines the spec they support under this stake. There are four parameters used in the transaction:

1. **Stake**: Amount of LAVA to stake for the service
2. **Geolocation**: Location of the Providers Nodes
3. **ChainID**: Identifier of the target blockchain network such as Cosmos Mainnet, Ethereum Ropsten, etc
4. **Endpoints**: List of endpoints each defining an address geolocation and an API interface such as REST, JSON-RPC, etc

Provider stakes are per spec. If Cosmos and Ethereum are supported then two separate stakes are needed. Right after the request is verified and included in the chain state, they will be included in the Pairing List from the next Epoch and will begin servicing Consumer requests through their nodes.

#### Example (using friendly naming for brevity):
| Chain Spec            |      Geolocation      |  LAVA stake    |
| -------------         | :-----------:         | ----:             |
| Ethereum Mainnet      | USA West              | 1,600             |
| Ethereum Mainnet      | Germany               | 2,000             |
| Ethereum Rinkby       | Germany               | 100               |

:::info Want to learn more?
Learn more by reading our [litepaper](https://lavanet.xyz)
:::

## Available APIs
The Protocol scales support to new RPCs by adding Specifications ("specs") via governance. Each spec describes the schema needed for the RPC and aligns the different actors on the provided interface.

### How to query available APIs/Chains? {#chains}

Get them directly from a lava node using the CLI (If you don't have the CLI yet, you'll be able to install it in the next section).

If you are running a node and connected to the testnet:
```
lavad q spec list-spec
```
or if connecting to external node:
```
lavad q spec list-spec --node http://public-rpc.lavanet.xyz:80/rpc/
```

## Next step: Setup a Provider

When you're ready, join **as a provider**:
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Provider" description="Provide node data, earn rewards"/>](/provider-setup)
