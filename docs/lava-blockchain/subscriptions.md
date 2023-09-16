---
slug: /subscriptions
title: Subscription Plans
---

# Subscription Plans

:::info
❗ Lava network offers various subscription plans for consumers to access its services. While the network remains in testnet, subscriptions should be used primarily for testing purposes.
:::

## Overview 🔍

A subscription in Lava allows consumers to access services for a specified time period based on the chosen plan (e.g., 1, 3, 6, or 12 months). Plans advertise per-month cost and per-month Compute Unit (CU) allowance. Subscriptions enable consumers to select a plan and duration in months, creating a seamless, predictable experience. If a subscription for the same plan already exists, the subscription is extended by the designated period, allowing for flexibility in extending service access. The maximum duration for a subscription is 12 months, with a total maximum duration of 13 months.

Subscriptions have several advantages over pay-as-you-go systems, including familiarity, sustainability, and simplicity. They foster a healthier Lava ecosystem by encouraging long-term relationships between consumers and providers while ensuring predictable revenue for providers and stable access to services for consumers.

Lava network offers optional yearly discount rates for plans, which are applied to the cost of subscription transactions for 12 months. This encourages long-term commitment and benefits both consumers and providers.

Consumers can create projects under their subscriptions, which can have different policies and usage keys. Lava network uses a flexible system for its plans via governance, allowing the network to react to market dynamics and maintain a competitive edge.

<hr />

## Preparing an account 👛
Consumers need to have an address on-chain to manage their subscription and consume p2p relays.
To create an account, please refer to [accounts & wallets](/docs/lava-blockchain/account-wallet.mdx)

<hr />

## Interacting with your subscription 💱

:::tip
📖 Using the CLI? Add this flag to access a remote node:
```
--node https://public-rpc-testnet2.lavanet.xyz:443/
```
:::

Interaction with a subscription is currently done through the use of `lavad` binary.

<br />

### 📊 List Available Plans

To view the list of available plans using the CLI:

```bash
lavad q plan list
```

To view a specific plan in detail: 
```bash
lavad q plan info <plan_index>
```

<br />

### 💸 Buy a Subscription Plan

The **`subscription buy`** command allows users to purchase a subscription to a service plan, either for themselves or another user. The duration is specified in months (default: 1 month).

```bash
lavad tx subscription buy <plan-index> [<consumer_beneficiary_address>] [<months>] \
	--from <paying_address>
	--chain-id lava-testnet-2
```

Example:

```bash
# Buy 3 month long subscription for a beneficiary
lavad tx subscription buy explorer lava@1lr6...v4wu 3 \
	--from my_wallet \
	--chain-id lava-testnet-2
```

<br />

### 👓 Check a Subscription Plan

The **`current`** command queries the current subscription of a consumer to a service plan:

```bash
lavad query subscription current <consumer>
```

You'll receive a summary of the consumer's current subscription. Here's a simplified explanation of the key details:

- **consumer** and **creator**: These represent the addresses of the consumer benefiting from the subscription and the user who created (paid for) the subscription, respectively.
- **duration_left** and **duration_total**: These values indicate the number of months remaining in the subscription and the total number of months the subscription was purchased for, respectively.
- **month_cu_left** and **month_cu_total**: These values show the number of Compute Units (CU) remaining for the current month and the total number of Compute Units allocated for each month in the subscription plan, respectively.

Other information provided in the output, such as block numbers and expiry times, can be helpful for tracking the subscription's history and understanding when resources expire or refresh. By understanding these essential details, consumers can effectively manage their subscription and make informed decisions about future plans or resource consumption.

<br />

## Managing Projects 📈

### ➕ Adding a Project to Your Subscription

Once a consumer has purchased a subscription, it is reasonable to add a project on the subscription. Projects can be used to limit consumption of compute units (CUs), specify permitted APIs (including addons and extensions), limit provider pairings, and designate specific providers to interact with. To create a project:

```bash
lavad tx subscription add-project [project-name] --from <subscription_consumer>
```

#### Options:
- **Policy** - To specify a policy, add a policy-file using the `--policy-file <path-to-file>` flag. For an example policy-file please see the Lava Cookbook:
	- [simple policy](https://github.com/lavanet/lava/blob/main/cookbook/projects/example_policy.yml)
	- [policy with addons](https://github.com/lavanet/lava/blob/main/cookbook/projects/policy_all_chains_with_addon.yml)
	- [policy with extensions](https://github.com/lavanet/lava/blob/main/cookbook/projects/policy_all_chains_with_extension.yml)
- **Keys** - If a project specifies authorized users' keys, specify them while adding a project with `--project-keys <project-keys-file-path>`. For an example project-key file, see the Lava Cookbook:
	- [example project key YAML](https://github.com/lavanet/lava/blob/main/cookbook/projects/example_project_keys.yml)
- **Disable** - Ultimately, a consumer may want to add a project but have it disabled by default. Do so with the `--disable` flag.

### ➖ Deleting a Project from a Subscription

Deleting a project is simple and irrevocable. Once a project is deleted, it can only be added back using the `add-project` command. To delete a project:

```bash
lavad tx subscription del-project <project-name> --from <subscription_consumer>
```