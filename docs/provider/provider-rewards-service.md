---
slug: /provider-rewards-service
title: Rewards / Service
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Provider Rewards
## 💰 Provider Rewards Overview
Providers earn rewards from subscriptions, commission on restaked LAVA, Incentivized RPC Pools and variable Provider Drops.

- Provider Subscription rewards: Providers and their restakers earn 95% of subscription rewards. A subscription is not to an individual Provider, and this 95% is shared between all Providers who have served the relays under that subscription
- Commission on restaked LAVA: Providers set a commission on delegator rewards
- Incentivized RPC Pool rewards: Providers and their delegators earn 95% of the Pool rewards. Pools consist of the native token of a chain deployed on Lava
- Provider drops: Lava has a rewards reserve designed to incentivize node runners to join in the initial phases of Mainnet


## 💰 Earning Rewards

 After staking on chain, providers serve consumers and get cryptographic proofs of relay service. These proofs are submitted on chain to accumulate CUs that lead to token rewards. The calculation for provider rewards is complex and contingent on the validity of submitted proofs. However, given valid proofs, rewards are mostly affected by 3 factors:
 - ☑️ **Passable Quality of Service** - The individual score of a relay session. Passable QoS directly alters rewards in a given session.
 - ⭐ **Reputation Score** - The reputational score of a provider. Reputation Score affects provider selection both within a pairing and in the pairing probabilities.
 - 🚨 **Jail** - The disabling mechanism for inferior/defunct providers. Jailing prevents a provider from giving service for a period of time.

<br/>

## 💰 Rewards Tracking

Once a provider is up and running, consumers will request relay services from the provider. Once the provider provides the service, they will be eligible to get rewards from the consumer they served. The provider can receive rewards when a consumer's monthly plan expires.

Providers can query the estimated amount they will receive with the query:

```bash
lavad q pairing provider-monthly-payout <lava-provider-address> 
```

Claimable rewards can be queried with:

```bash
lavad q dualstaking delegator-rewards <lava-provider-address>
```

and can be claimed to the provider balance with:

```bash
lavad tx dualstaking claim-rewards --from <provider-key>
```