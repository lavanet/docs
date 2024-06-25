---
sidebar_position: 2
slug: /mainnet-auto
title: Option A - Automatic (Cosmovisor)
---

import RoadmapItem from '@site/src/components/RoadmapItem';

# Join mainnet - Automatic setup with Cosmovisor

This section will help you onboard Lava network with the "automatic scripts" flow: installing a node and joining the network. 
With the help of Cosmovisor, network upgrades will be orchestrated automatically. 

Before starting, verify [hardware requirements](reqs) are met.

### 1. Install node (`lavad`) & Join network

**Prepare**
```bash
sudo apt update
``` 

```bash
sudo apt install curl jq unzip coreutils -y
```

**Install and join the network**

Running the script will:

1. Install `lavad` (using Cosmovisor)
2. Join the testnet
3. Sync to latest block

```bash
curl -s --location \
--request GET 'https://get.lavanet.xyz/pnet_join_network_cosmovisor' \
--header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 00_join_network.sh && \
chmod +x 00_join_network.sh && \
./00_join_network.sh
```

### 2. Verify

#### Verify `cosmovisor` setup

Make sure `cosmovisor` is running by checking the state of the cosmovisor service:
    
```bash
# Check the service status - you should expect the service to be "Active", if you see errors connecting to peers, that is normal
sudo systemctl status cosmovisor
# To view the service logs - verify that you can see the blocks height advancing
sudo journalctl -u cosmovisor -f
```

#### Verify node status

Note the location of `lavad` now exists under cosmovisor path:

```bash
# Check if the node is currently in the process of catching up
$HOME/.lava/cosmovisor/current/bin/lavad status | jq
```

🛟 Problems? Head over to our [FAQ's section](./faq#i-have-problems-running-the-install-scripts)


## Welcome to Lava Mainnet 🌋

:::tip Joined Mainnet? Be a validator!
You are now running a Node in the Lava network 🎉🥳! 

Congrats, happy to have you here 😻 Celebrate it with us on Discord.

When you're ready, start putting the node to use **as a validator**:
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Validator" description="Validate blocks, secure the network, earn rewards"/>](/validator-auto#account)

:::
