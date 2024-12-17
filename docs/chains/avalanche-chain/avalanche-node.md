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

AvalancheGo is a go implementation of an Avalanche node. This software is necessary to run an Avalanche RPC node. 
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

# Configure your Provider

:::tip
Avalanche has a specific use case for adding websockets to their Provider Endpoints. This is because only C chains support websocket endpoints whereas X/P chains do not. To read about the differences between different Avalanche chain types, inspect their [documentation](https://docs.avax.network/learn/avalanche/avalanche-platform#c-chain)/
:::

An example yaml is provided below. You can also find it in the Lava Monorepo [here](https://github.com/lavanet/lava/blob/main/config/provider_examples/avalanch_internal_paths_example.yml).

```yaml
endpoints:
    - api-interface: jsonrpc
      chain-id: AVAX
      network-address: 127.0.0.1:2221
      node-urls:
        - url: ws://127.0.0.1:3333/C/rpc/ws
          internal-path: "/C/rpc" # c chain like specified in the spec
        - url: https://127.0.0.1:3334/C/avax
          internal-path: "/C/avax" # c/avax like specified in the spec
        - url: https://127.0.0.1:3335/X
          internal-path: "/X" # x chain like specified in the spec
        - url: https://127.0.0.1:3336/P
          internal-path: "/P" # p chain like specified in the spec
```

## Apply to our Provider Incubation Program 📋

In our current state of Testnet, there is an additional stage to pass through before you can become a provider on the Lava Network. Please fill out the [application form](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-avalanche&utm_medium=docs&utm_campaign=avalanche-pre-grant) for our Provider Incubation Program. Feel free to drop a line in our [Discord](https://discord.gg/UxujNZbW) once you’ve completed this step!

## Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-avalanche-rpc-node&utm_medium=docs&utm_campaign=avalanche-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node on the Lava Network.
