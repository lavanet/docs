---
slug: /avalanche-node
title: Running an Avalanche RPC Node
---

# Running a Avalanche RPC Node

## Install AvalancheGo 🚀

AvalancheGo can be installed automatically on a local machine using a shell bash script or manually with some commands.
There are detailed guides for both [automatic installation](https://docs.avax.network/nodes/build/set-up-node-with-installer) and [manual installation](https://docs.avax.network/nodes/build/run-avalanche-node-manually) are available in the Avalanche docs.
This software is necessary to run a Avalanche RPC node. Before you start, ensure that your machine meets the [minimum requirements](https://docs.avax.network/nodes/build/set-up-node-with-installer#before-you-start).

### Automated Script Install w/ Prompts

To do automated install, using the AvalancheGo install script, input the following into a terminal:

```bash
wget -nd -m https://raw.githubusercontent.com/ava-labs/avalanche-docs/master/scripts/avalanchego-installer.sh;\
chmod 755 avalanchego-installer.sh;\

# For Mainnet Installation, run the following command:
./avalanchego-installer.sh

# For Testnet Installation, run the following command:
./avalanchego-installer.sh --fuji
```

When you're asked whether the RPC port should be private or public- be sure to select `public` !
The node will start once the script completes.

### Manual Binary Build

To manually build and install AvalancheGo, input the following into a terminal:


```bash
git clone https://github.com/ava-labs/avalanchego.git
cd avalanchego
./scripts/build.sh

# Run your Node on the Mainnet, run the following command:
./build/avalanchego

# Run your Node on the Testnet, run the following command:
./build/avalanchego --network-id=fuji
```

Your node will take time to sync after it has been started. Please allow it time to sync to the latest block.

## Apply to our Provider Incubation Program 📋

In our current state of Testnet, there is an additional stage to pass through before you can become a provider on the Lava Network. Please fill out the [application form](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-avalanche&utm_medium=docs&utm_campaign=avalanche-pre-grant) for our Provider Incubation Program. Feel free to drop a line in our [Discord](https://discord.gg/UxujNZbW) once you’ve completed this step!

## Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-avalanche-rpc-node&utm_medium=docs&utm_campaign=avalanche-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node.