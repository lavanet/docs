---
sidebar_position: 1
slug: /provider
---

import RoadmapItem from '@site/src/components/RoadmapItem';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Become a Provider

Welcome to the Lava network's provider introduction. In this page, you'll learn about the role of providers in the Lava network, as well as the necessary steps to get started as one.


## Providers in Lava's Protocol

Providers are the backbone of the Lava network, servicing relay requests by staking on the network and operating RPC nodes on Relay Chains queried by Consumers (e.g., Cosmos, Ethereum, Osmosis, Polygon, etc.). In return, they earn fees in the form of LAVA tokens from the Consumers for servicing these requests.

```mermaid
graph LR
  A[Consumers] --> |Public Listen Address, gRPC| B[RPC Provider]
  B --> |Private Address| C[Relayed Nodes]
```

### Becoming a Provider

To join the Lava network as a provider, you'll need to follow two key steps:

1. Run the relay chain RPC nodes and ensure they are operational and meet the required specifications.
2. Stake LAVA and run Lava’s lightweight Provider process, as detailed in our **[Provider Setup](docs/provider/provider-setup.md)** guide.



### Querying a list of supported Chains {#chains}

Lava supports a number of blockchains on Lava testnet and Lava mainnet. You cah see a full list of supported chains using the API URL or a CLI function `lavap`:


**Chains supported on Lava Mainnet:**

<Tabs>
  <TabItem value="URL" label="URL">

  https://lava.lava.build/lavanet/lava/spec/show_all_chains       

  </TabItem>

  <TabItem value="lavap" label="lavap">

  ```bash
   lavap q spec list-spec --node https://lava.tendermintrpc.lava.build:443 
   ```          

  </TabItem>
</Tabs>

**Chains supported on Lava Testnet:**

<Tabs>
  <TabItem value="URL" label="URL">

 

  https://lav1.lava.build/lavanet/lava/spec/show_all_chains       

  </TabItem>

  <TabItem value="lavap" label="lavap">

  ```bash
   lavap q spec list-spec --node https://lav1.tendermintrpc.lava.build:443 
   ```          

  </TabItem>
</Tabs>



### Querying Chain Specifications

Lava's protocol expands its support to new RPCs by adding Specifications ("specs") via governance. Each spec describes the schema needed for the RPC and aligns the different actors on the provided interface.

To obtain information on a specific chain, run the following command, replacing `SPEC-ID`:

```bash
curl -X 'GET' \
  'https://lav1.rest.lava.build/lavanet/lava/spec/show_chain_info/SPEC-ID' \
  -H 'accept: application/json'
```







### Provider Parameters

When staking as a provider, there are four main parameters used in the transaction:

1. **Stake**: The amount of LAVA to stake for the service.
2. **Geolocation**: The location of the provider's nodes. (Note that `0` is *only* assigned via policy/gov proposal)

```javascript
    GLS = 0; // Global-strict
    USC = 1; // US-Center
    EU = 2; // Europe
    USE = 4; // US-East
    USW = 8; // US-West
    AF = 16; // Africa
    AS = 32; // Asia
    AU = 64;  // (Australia, includes NZ)
    GL = 65535; // Global
```

3. **ChainID**: The identifier of the target blockchain network, such as Cosmos Mainnet, Ethereum Ropsten, etc.
4. **Endpoints**: A list of endpoints, each defining an address and geolocation.
5. **Vault address**: An additional address that can be used as a secure location for holding funds.

Providers need to stake separately for each supported chain (specification). For example, if you support both Cosmos and Ethereum, you will need two separate stakes. Once your request is verified and included in the chain state, you'll be included in the Pairing List starting from the next Epoch and can begin servicing consumer requests through your nodes.

### Vault Address

Usually, the provider entity has a single lava address. This address is utilized for operating the provider process, such as participating in the pairing mechanism, and for aggregating rewards from relay payments or IPRPC.

For enhanced security, users can optionally create a vault address. This address holds the provider's funds and rewards, while a separate address operates the provider. The rationale behind this is to allow users to use two private keys: one for provider operation and another for rewards aggregation and funds holdings. This setup enables users to store their vault private key on a machine separate from the one running the provider process. Consequently, if the machine operating the provider, which publicly shares its endpoints, were to be compromised, the users' wallet would remain secure.

A vault address can be specified while staking a provider. When staking, use the `--provider` flag to define the provider's operational ("normal") address. The `--from` flag address is then used as the vault address.

Since the vault address holds the provider's funds, it is the only one that can perform stake-related transactions. In simpler terms, the vault address can execute all transactions, while the operational address can carry out all transactions except for the following: `stake-provider`, `unstake-provider`, `claim-rewards`, and `modify-provider`. The latter cannot change certain provider traits, such as `stake`, `delegation-commission`, and `delegate-limit`.

