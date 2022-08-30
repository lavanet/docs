---
sidebar_position: 2
slug: /testnet-auto
title: Setup - Automatic
---

# Join testnet - Automatic setup

### 1. Install node (`lavad`) & Join network

**Prepare**
```bash
sudo apt update
``` 

```bash
sudo apt install curl unzip coreutils -y
```

**Install and join the network**

Running the script will:

1. Install `lavad`
2. Join the testnet
3. Sync to latest block

```bash
curl -s --location --request GET 'https://get.lavanet.xyz/pnet_join_network' --header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 00_join_network.sh && \
    chmod +x 00_join_network.sh && \
    ./00_join_network.sh production
```

🛟 Problems? Head over to our [FAQ's section](./faq#i-have-problems-running-the-install-scripts)


## Done 🌋

:::tip Joined Testnet? Be a validator!
You are now running a Node in the Lava network 🎉🥳! 

Congrats, happy to have you here 😻 Celebrate it with us on Discord.

When you're ready, start putting the node to use **as a validator**:
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Validator" description="Validate blocks, secure the network, earn rewards"/>](validator#account)

:::