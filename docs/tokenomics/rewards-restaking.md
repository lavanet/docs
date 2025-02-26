---
slug: /rewards-restaking
title: 🛒 Rewards and Restaking
---

# 🪙 Rewards and Restaking
## 🌐 Role of `LAVA`

The `LAVA` token serves various purposes on the Lava Network:
- `LAVA` is the asset denomination needed for paying the gas fees required to execute transactions or other operations on the Lava Network
- Validators stake `LAVA` to secure the network and participate in governance 
- Providers stake `LAVA`, affecting the frequency of their pairing to Consumers
- Token holders delegate and can restake in `LAVA` to Validators and Providers
- Initial bootstrapping rewards (“Provider Drops”) for Providers are distributed in `LAVA`
- Consumers buy subscriptions in `LAVA`
- Providers are rewarded in `LAVA` monthly, in direct proportion to `LAVA` used to buy subscriptions the previous month

## 🏆 Reward Types
There are **5 types of rewards** on Lava and each is distributed across different actors. All % are determined by and can be changed by DAO governance.

![chart1](/img/tokenomics/chart1.png)


:::info

A few flows are missing from this diagram: (i) data accuracy slashing / rewards (ii) cosmos validator slashing for misbehavior (iii) Referral / affiliate fees (iv) staking, (iv) Incentivized RPC Pools, (v) validators rewards from subscription rewards.

:::


### Subscription Rewards 💼
 
Consumers purchase subscriptions with `LAVA`. The majority of this `LAVA` is distributed monthly to Providers, relative to factors such as total compute served. More details are available in the whitepaper. The rewards distribution is as follows:
- **95%** to Providers and their Delegators, of which Champions will take a % commission determined by the DAO
- **4.9%** to Validators and their Delegators 
- **0.1%** to Community Pool 

### Incentivized RPC Pools 🛠️

Chains create Incentivized RPC Pools on Lava by depositing their native token. This pool is used to incentivize Providers to serve and scale the chain’s RPC infrastructure. The rewards distribution is as follows:
- **95%** to Providers and their Delegators, of which Champions will take a % commission determined by the DAO
- **4.9%** to Validators and their Delegators 
- **0.1%** to Community Pool 

### Block Rewards 🥇
    
Block rewards are a fixed 3.4% of total `LAVA` supply, monthly over 4 years, with variable burn. The rewards distribution is as follows:

- **98%** to Validators and their Delegators 
- **2%** to Community Pool


### Provider drops 💧

Provider Drops are a fixed 6.6% of total `LAVA` supply, monthly over 4 years, with variable burn. 

Provider Drops are a rewards reserve dedicated to attracting Providers to join the network and offer service in the early growth stages. The payouts from this reserve are scheduled to be distributed across 4 years and are variable based on paid demand: 
- **0-100%** to Providers
- **0-100%** burn

The higher the paid demand for Lava subscriptions, the higher the payouts of Provider Drops (up to a limit per month).


### Provider and Validator Commissions 💰

Delegators earn rewards minus a commission % Set by Providers and Validators. 

The *default commission *for Providers is **50%**.

Commission is expected to be higher for Providers because they run a more operationally intensive business than Validators.




## 👤 Economic Actors & Rewards

### Chains 🔗
Chains pay gas fees to deploy an Incentivized RPC Pool in `LAVA` tokens. These Incentivized RPC Pools consist of the native tokens of that chain. Tokens are used to attract Providers to serve RPC. 

Each month, Pool rewards are distributed to Providers based on the amount of compute units served and the quality of that service. 

<br />

### Staking and Restaking 🔄

Lava can be delegated to validators, who earn block rewards for securing the network. This delegation can then be restaked to Providers, who serve subscriptions defined by their spec. Restaking is to a chosen spec and Provider. 

The following shows the different scenarios for delegating to Validators and Providers:

| Scenario                      | Flow                                                    | Rationale                                                                              |
|-------------------------------|---------------------------------------------------------|----------------------------------------------------------------------------------------|
| I want to delegate to a Validator | Delegate to a Validator. Optionally restake to a chosen Provider and spec | Improves Quality of Service by allowing Validator delegators to contribute towards Provider selection. |
| I want to delegate to a Provider | Delegate a Validator and then restake to a chosen Provider and spec. | Improves capital efficiency by requiring Provider delegators to contribute towards security |
| I want to stake as a Validator | Stake as a Validator. Optionally restake to a chosen Provider and spec | Improves Quality of Service by allowing Validators to contribute towards Provider selection. |
| I want to stake as a Provider | The tx to create a Provider first delegates to a Validator then restakes as a Provider | Improves capital efficiency by requiring Providers to contribute towards security |


<details>
<summary> Example </summary>

Staking to a Validator Scenario #1: Validator has staked a minimum of 100 `LAVA` and a user wants to delegate. The Delegator can stake `LAVA` solely to the Validator, without obligation to restake to a Provider. 

Staking to a spec Scenario #2: Provider has staked a minimum of 100 `LAVA` and a user wants to delegate to the Provider’s Dymension RPC spec to earn a share of their rewards for serving Dymension RPC. Delegator is required to first delegate to a Validator. No additional capital is required but the delegation can be restaked to a spec, meaning greater risk but higher rewards (Provider rewards to Delegators). 
</details>

<br />

### Validators ⚖️

Validators earn block rewards, fees from subscriptions, and incentives from RPC pools.

- **Block rewards**: for every successfully signed block, Validators and their delegators/restakers earn rewards from a reserve worth 3.4% of total supply 
- **Commission on delegations**: Validators can set a commission on delegator rewards
- **Provider subscription rewards**: 4.9% of subscription rewards go to Validators and their delegators
- **Incentivized RPC Pool rewards**: 4.9% of the Pool rewards go to Validators and their delegators earn. Pools consist of the native token of a chain deployed on Lava


<details>
<summary> Example </summary>

Validator has staked a minimum of 100 `LAVA`. A user delegates 50 `LAVA` to the Validator i.e. Validator has 66.6% of stake and delegator has 33.3%. 
Consider a scenario where the block reward is 1000 `LAVA` and commission is 5%. 

98% (980 `LAVA`) of Block rewards go to Validators and delegators. 2% goes to the Community Pool (20 `LAVA`). 

Of the 980 `LAVA`, the Validator gets (980*0.66) + (980*0.33*0.05) in rewards i.e. 668.85 `LAVA`. Delegators would get 311.15 `LAVA`. 

Additionally, if there is an Incentivized RPC Pool of 1000 TOKEN or a Subscription pool of 1000 `LAVA`, Providers and their delegators would get 95%, Validators and their delegators would get 4.9% and the Community Pool would get 0.1%. 

Of the 4.9% (49 TOKEN or `LAVA`), assuming the same 2:1 ratio in Validator:Delegator stake and a 5% commission, the Validator gets (49*0.66) + (49*0.33*0.05) in rewards i.e. 33.1485 TOKEN or `LAVA`. Delegators would get 15.8515 TOKEN or `LAVA`. 
</details>

<br />

### Data Providers 📊
Providers earn rewards from subscriptions, commission on restaked `LAVA`, Incentivized RPC Pools and variable Provider Drops. 

- **Provider Subscription rewards**: Providers and their restakers earn 95% of subscription rewards. A subscription is not to an individual Provider, and this 95% is shared between all Providers who have served the relays under that subscription
- **Commission on restaked `LAVA`**: Providers set a commission on delegator rewards
- **Incentivized RPC Pool rewards**: Providers and their delegators earn 95% of the Pool rewards. Pools consist of the native token of a chain deployed on Lava
- **Provider drops**: Lava has a rewards reserve designed to incentivize node runners to join in the initial phases of Mainnet

<details>
<summary> Example </summary>

Provider has staked a minimum of 100 `LAVA`. A user delegates 50 `LAVA` to the Provider (which has also restaked to a Validator of their choice) i.e. Provider has 66.6% of stake and delegator has 33.3%. The Delegator would also restake the same 50 `LAVA` to a Validator, taking on extra risk but earning additional yield, as calculated in the previous section on Validator rewards.

Consider a scenario where the monthly Subscriptions total to 1000 `LAVA` and Provider commission is 5%. This example assumes that there is 1 Provider and Champion commission is 0% - learn more in the next section.

The Provider and their delegators would get 95%, Validators and their delegators would get 4.9% and the Community Pool would get 0.1%. 
Of the 95% (950 `LAVA`), given that Provider stake is 2:1 of delegations and there is a 5% commission, the Provider gets (950*0.66) + (950*0.33*0.05) in rewards i.e. 642.675 `LAVA`. Delegators would get 307.325 `LAVA`. 

If there are multiple Providers on the network, individual Subscription rewards are determined by factors including Quality of Service and compute served. More details are available in the whitepaper. 

Providers also receive Drops, a variable reward boost distributed monthly in direct proportion to paid demand for Lava. In cases where there are a few Providers or quality is low, Drop rewards may not be distributed. This is to prevent collusion between Consumers and Providers to earn rewards.
</details>
<br/>

### Spec Champions 🏅
Champions create and maintain specs on Lava, adding new chains and APIs for Providers to serve. Champions earn a % of Subscription rewards after Validator and Community Pool commission has been subtracted, but before Providers and Delegators. This % commission is decided by DAO governance. 



<details>
<summary> Example </summary>

Provider has staked a minimum of 100 `LAVA`. A user delegates 50 `LAVA` to the Provider (which has also restaked to a Validator of their choice) i.e. Provider has 66.6% of stake and delegator has 33.3%.

Consider a scenario where the monthly Subscriptions total to 1000 `LAVA` and Provider commission is 5%. This example assumes that the Champion commission is 1%. 
Providers and their Delegators receive 95% (950 `LAVA`) of the Subscription rewards, after Validator and Community Pool rewards have been distributed (the remaining 5%). Champion commission is taken from this 95%.

Of the 950 `LAVA`, assuming a Champion commission of 1%, Champions would receive 9.5 `LAVA` and the remaining 940.5 would be shared between Providers and their Delegators, as described in the Provider rewards section above. The 9.5 `LAVA` rewards are recalculated monthly, based on the amount of `LAVA` used to purchase subscriptions
</details>
