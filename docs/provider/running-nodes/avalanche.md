---
slug: /avalanche-node
title: Running an Avalanche RPC Node
---

# Running an Avalanche RPC Node

## Requirements 📄 

Before you start, ensure that your machine meets the following [minimum requirements](https://docs.avax.network/nodes/build/set-up-node-with-installer#before-you-start):

    CPU: Equivalent of 8 AWS vCPU
    RAM: 16 GiB
    Storage: 1 TiB
    OS: Ubuntu 20.04 or MacOS >= 12
    Network: sustained 5Mbps up/down bandwidth
    Go version >= 1.19.6

## Install AvalancheGo 🚀

AvalancheGo is a go implementation of an Avalanche node. This software is necessary to run a Avalanche RPC node. 
AvalancheGo can be installed automatically on a local machine using a shell bash script or manually with some commands.There are detailed guides for both [automatic installation](https://docs.avax.network/nodes/build/set-up-node-with-installer) and [manual installation](https://docs.avax.network/nodes/build/run-avalanche-node-manually) available in the Avalanche docs.



### Automated Script

To do automated install using the AvalancheGo install script, input the following into a terminal:

```bash
wget -nd -m https://raw.githubusercontent.com/ava-labs/avalanche-docs/master/scripts/avalanchego-installer.sh;\
chmod 755 avalanchego-installer.sh;\

# For Mainnet Installation, run the following command:
./avalanchego-installer.sh

# For Testnet Installation, run the following command:
./avalanchego-installer.sh --fuji
```

This will begin an automated script install with prompts that allow you to configure your node. When you're asked whether the RPC port should be private or public- be sure to select `public` !
The node will start once the script completes.

### Manual Binary Build

To manually build and install AvalancheGo, input the following into a terminal:


```bash
git clone https://github.com/ava-labs/avalanchego.git
cd avalanchego
./scripts/build.sh

# To run your Node on the Mainnet, run the following command:
./build/avalanchego

# To run your Node on the Testnet, run the following command:
./build/avalanchego --network-id=fuji
```

Your node will take time to sync after it has been started. Please allow it time to sync to the latest block.