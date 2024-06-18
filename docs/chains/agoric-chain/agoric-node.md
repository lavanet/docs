---
slug: /agoric-node
title: Running an Agoric RPC Node
---

# Running an Agoric RPC Node

## Requirements 📄 

:::caution
Users may experience issues when attempting to run instructions using versions >= 18.19.0 of `Node.js`. Node versions >=18.19 introduce a breaking change to AgoricSDK, and are not currently supported.
:::

There are notable minimum hardware requirements in order to run Agoric RPC Nodes:

    16 GB RAM
    4-Cores x86_64 CPU
    High Performance/NVMe SSD (w/ ~6 GB+/month for Full Node or ~12 GB+/month for Archive)
    1 GBPS up/down

To get started with your node, be sure that you have Go 1.20.2 or higher installed.

## Install & Run AgoricSDK 📥

After you've gotten your requirements together you can proceed to installing!

### 📦 Get Required Packages

```bash
sudo apt -qy install curl git jq lz4 build-essential nodejs=16.* yarn
```


### 💾 Get the Agoric software

Run the following install script:

```bash
# clone the repo
git clone https://github.com/Agoric/agoric-sdk -b <GIT-BRANCH>
cd agoric-sdk

# Install and build Agoric Javascript packages
yarn install
yarn build

# Install and build Agoric Cosmos SDK support
(cd packages/cosmic-swingset && make)
```

You'll need to select a `<GIT_BRANCH>` to use. You can see the latest branch [here](https://github.com/Agoric/agoric-sdk/releases).

### 🛠️ Configure your node

Configuration involves a few steps:

```bash
# First, get the network config for the current network.
curl https://main.agoric.net/network-config > chain.json
# Set chain name to the correct value
chainName=`jq -r .chainName < chain.json`
# Confirm value: should be something like agoricdev-N.
echo $chainName
# Replace <your_moniker> with the public name of your node.
# NOTE: The `--home` flag (or `AG_CHAIN_COSMOS_HOME` environment variable) determines where the chain state is stored.
# By default, this is `$HOME/.agoric`.
agd init --chain-id $chainName <your_moniker>
```

### 🔧 Adjust your Config
```bash
# Set peers variable to the correct value
peers=$(jq '.peers | join(",")' < chain.json)
# Set seeds variable to the correct value.
seeds=$(jq '.seeds | join(",")' < chain.json)
# Confirm values, each should be something like "077c58e4b207d02bbbb1b68d6e7e1df08ce18a8a@178.62.245.23:26656,..."
echo $peers
echo $seeds
# Fix `Error: failed to parse log level`
sed -i.bak 's/^log_level/# log_level/' $HOME/.agoric/config/config.toml
# Replace the seeds and persistent_peers values
sed -i.bak -e "s/^seeds *=.*/seeds = $seeds/; s/^persistent_peers *=.*/persistent_peers = $peers/" $HOME/.agoric/config/config.toml
```

### ⏳ Sync Your Node

```bash
agd start --log_level=warn
```

If you want or need to use a genesis file - be aware that this includes [additional steps](https://github.com/Agoric/agoric-sdk/wiki/Validator-Guide-for-Devnet#apply-network-parameters). The official Agoric mainnet genesis file is available here: https://main.agoric.net/genesis.json

### 🔬 Check the Status of your Sync

```bash
agd status | jq .SyncInfo
```

Once you have fully synced, you're good to go.

## Setup your Provider on Lava Network 🌋

To set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-solana-rpc-node&utm_medium=docs&utm_campaign=solana-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node.
