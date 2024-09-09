---
title: Provider Delegation
slug: /provider-delegation
---

# Provider Delegation

The Lava Foundation will hold a Provider Delegation program to bootstrap RPC providers on Lava Network and improve overall quality of service across the network. Providers offer RPC services, but in the future, the network will serve many other types of infrastructure such as indexing and oracles.

Any community provider can apply to be delegated. A submission form will be available soon. 

### Guidelines

- Delegations on incentivized chains ([learn more](https://www.lavanet.xyz/blog/helping-rollups-and-blockchains-scale-with-incentivized-public-rpc)) are capped to 1/2 of the Provider organic stake (total stake not delegated by the Foundation)
- Delegations on bootstrapped chains do not require any self stake (only the minimum stake amount)
- Commission set at 70% or lower
- Delegation limit must not be reached (meaning it is higher than the delegation amount + any organic delegation - it is recommended to take a big buffer)

### Criteria

- Providing previous RPC services for [chains supported on Lava](https://docs.lavanet.xyz/chains), including Lava itself
    - Number of bootstrapped chains (no incentives or pools)
    - Number of relays & number of chains
    - Days active
    - Average QoS score
    - Jail times
    - Geolocations
    - number of nodes
- Providing addons & extensions
- Spec champion i.e. [wrote a spec for a new chain](https://github.com/lavanet/lava/tree/main/cookbook/specs)
- Provided technical support for other Providers
- Create Provider guides, bots, dashboards and tools
- Referrals from dapps - recommended/requested by consumers
- Narrative alignment/contribution
    - Modular projects/research
    - Participated and supported relevant modular communities
- Experience running services, nodes/ validators for the spec ecosystem

### Concepts

#### Delegation

Provider delegations allow users to delegate their tokens to a specific provider, similar to validators, in order to contribute to their success and claim a portion of the rewards awarded to the provider.
When a provider stakes tokens, they create a self-delegation entry. Whenever a provider receives rewards, all delegators are eligible for a portion of the rewards based on their delegation amount and the commission rate set by the provider.

#### Dualstaking

The dualstaking mechanism dictates that whenever a provider stakes tokens, an equal amount is also staked to a validator.
Dualstaking achieves this by implementing provider delegators (similar to validator delegators) and using hooks from the staking module. For every validator delegation, there exists a parallel provider delegation and vice versa. For this reason, all 
the delegations and stakes queries and commands work with validator addresses.

#### Transactions

To delegate to a provider, use the following transaction:

```bash
lavap tx pairing stake-provider {PROVIDER_LAVA_ADDRESS} \ 
    "ETH1" \
    {VALIDATOR_LAVA_ADDRESS} \
    "50000000000ulava" \
    --from "my_account_name" \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC} \
```

To unbond, use the following transaction:

```bash
lavad tx dualstaking unbond {VALIDATOR_LAVA_ADDRESS} \
    {PROVIDER_LAVA_ADDRESS} \ 
    "ETH1" \
    "50000000000ulava" \
    --from "my_account_name" \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC} \
```

To redelegate to another provider, use the following transaction:

```bash
lavad tx dualstaking redelegate {FROM_PROVIDER_LAVA_ADDRESS} \
    {FROM_LAVA_SPEC_ID} \ 
    {TO_PROVIDER_LAVA_ADDRESS} \
    {TO_LAVA_SPEC_ID} \ 
    "50000000000ulava" \
    --from "my_account_name" \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC} \
```

To claim delegator rewards, use the following transaction:

```bash
lavad tx dualstaking claim-rewards \
    --from "my_account_name" \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC} \
```

#### Queries

To show a delegator's claimable rewards, use the following query:

```bash
lavad q dualstaking delegator-rewards \ 
    {DELEGATOR_LAVA_ADDRESS} \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC} \
```

To show a provider's delegators, use the following query:

```bash
lavad q dualstaking provider-delegators \ 
    {PROVIDER_LAVA_ADDRESS} \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC} \
```

To show a delegator's provider delegations, use the following query:

```bash
lavad q dualstaking delegator-providers \ 
    {DELEGATOR_LAVA_ADDRESS} \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC} \
```