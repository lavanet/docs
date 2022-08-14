---
sidebar_position: 1
slug: /node-use-installer
---

import RoadmapItem from '@site/src/components/RoadmapItem';

# Use installer

We made installing a Lava node fully automatic 🚀

:::info
Make sure you went over [the Node's requirements](../lava-node-intro.md#requirements).
:::

SSH into your node, and run the following:

### Prepare 
```bash
sudo apt update
```

```bash
sudo apt install curl unzip coreutils -y
```

## Install
Running the script will:

1. Install `lavad`
2. Find Lava's testnet 
3. Sync to latest block

```bash
curl -s --location --request GET 'https://get.lavanet.xyz/pnet_join_network' --header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 00_join_network.sh && \
    chmod +x 00_join_network.sh && \
    ./00_join_network.sh production
```

🛟 Problems? Head over to our [FAQ's section](../faq.md#i-have-problems-running-the-install-scripts)

:::tip SETUP COMPLETE?
You are now running a Node in the Lava network 🎉🥳! 

Congrats, happy to have you here 😻 Celebrate it with us on Discord.

When you're ready, start putting the node to use **as a validator**:
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Validator" description="Validate blocks, secure the network, earn rewards"/>](/validator-intro.md)

:::

