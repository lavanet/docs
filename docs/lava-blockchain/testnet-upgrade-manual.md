---
sidebar_position: 2
slug: /testnet-upgrade-manual   
title: Upgrades
---

import RoadmapItem from '@site/src/components/RoadmapItem';

# Testnet upgrades
Lava blockchain upgrades requires you to update `lavad`. This guide covers the manual steps for doing so, assuming you do not use Cosmovisor.

:::caution Already using Cosmovisor?
If you are [using Cosmovisor](testnet-manual#cosmovisor), no need to run the steps below ✅
:::

### How to know there's an upgrade?

Once you have joined the Lava testnet, and your node has started syncing, you may have noticed an error message such as:

```bash
panic: UPGRADE "XYZ" NEEDED at height: 12345
```

This message specifies that it was agreed to upgrade to a new version at a certain height of the network. Note: When using a cosmovisor setup, the upgrade is being taken care of automatically for you.

This situation requires a different binary (`lavad`) to work with, the process is as specified below:

1. You have joined the network using the genesis binary
2. The node has started to sync
3. **An error of a needed upgrade** 👈 You are here
4. Manually upgrade the node to work with the new binary
5. Node continues to sync with the new binary

### Upgrades list history

Below, you can find tracking of the required upgrade for block height

| Upgrade name | Block height |
| --- | --- |
| v2 | 31293 |
| v3 | TBD |

### Steps for upgrading your node

1. Set up the configurations required for the process

```bash
# Upgrade configurations
temp_folder=$(mktemp -d)
required_upgrade_name="v2" # e.g. "v2"
upgrade_binary_url="https://github.com/K433QLtr6RA9ExEq/GHFkqmTzpdNLDd6T/raw/main/production/cosmovisor-upgrades/upgrades/$required_upgrade_name/bin/lavad"

# Lavad configurations
lavad_home_folder="$HOME/.lava"
lavad_log_path="/var/log/lava-logs/lavad.log"
seed_node="4ad8e40126f5d645786e56b1ce3b69a3bcd09811@prod-pnet-seed-node.lavanet.xyz:26656"
```

2. Kill all current lavad processes

```bash
source ~/.profile
# Make sure that all lava processes are stopped
killall lavad
# If using lavad as a service, run
sudo service lavad stop
```

3. Download the binary and replace the current `lavad`

```bash
# Download the binary and replace it with the current one
wget "$upgrade_binary_url" -q -O $temp_folder/lavad

# Replace the current lava binary with the upgraded binary
sudo cp $temp_folder/lavad $(which lavad)
```

4. Run the lava node

```bash
# Run the lava binary as a background process
lavad start \
--home=$lavad_home_folder \
--p2p.seeds $seed_node >> $lavad_log_path 2>&1 &

# If running Lava as a service, run
sudo service lavad start
```

5. Verify the node continues to sync from the latest block height

```bash
# Check if the node is currently in the process of catching up
lavad status | jq .SyncInfo.catching_up
# Check the lavad process logs
tail -f $lavad_log_path
```

## Welcome to Lava Testnet 🌋

:::tip Joined Testnet? Be a validator!
You are now running a Node in the Lava network 🎉🥳! 

Congrats, happy to have you here 😻 Celebrate it with us on Discord.

When you're ready, start putting the node to use **as a validator**:
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Validator" description="Validate blocks, secure the network, earn rewards"/>](validator#account)

:::