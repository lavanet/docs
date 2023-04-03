---
sidebar_position: 2
slug: /provider-features
title: Features
---

# Provider Features

This page details the various features available to providers in the Lava network, along with instructions on how to operate them.

## Freeze and Unfreeze{#freeze}

The **`freeze`** command allows a provider to freeze its service, effective next epoch. This enables providers to pause their services without the impact of a bad QoS rating. While frozen, the provider won't be paired with consumers. To unfreeze, the provider must use the **`unfreeze`** transaction, effective next epoch. This feature can be useful in cases like a provider needing to halt its services during maintenance.

### Usage

**Freeze:**

```bash
# required flags: --from alice. optional flags: --reason
lavad tx pairing freeze [chain-ids] --from <provider_address>
lavad tx pairing freeze [chain-ids] --from <provider_address> --reason <freeze_reason>
lavad tx pairing freeze ETH1,COS3 --from alice --reason "maintenance"
```

**Unfreeze:**

```bash
# required flags: --from alice
lavad tx pairing unfreeze [chain-ids] --from <provider_address>
lavad tx pairing unfreeze ETH1,COS3 --from alice
```

The **`freeze`** command requires the **`--from`** flag to specify the provider address. Optionally, you can provide a **`--reason`** flag to give a reason for the freeze.

The **`unfreeze`** command also requires the **`--from`** flag to specify the provider address.
