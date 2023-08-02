---
slug: /filecoin-node
title: Running a Filecoin RPC Node
---

# Running a Filecoin RPC Node

## Requirements 📄 

Before getting started, Filecoin node setup requires many dependencies to setup correctly. These dependencies are commonly already installed on most modern linux machines, but include the following:

```
mesa-opencl-icd ocl-icd-opencl-dev gcc git bzr jq pkg-config curl clang build-essential hwloc libhwloc-dev wget
```

The list above is specific to Debian/Ubuntu-based OSes. For a different configuration, check out [Lotus docs](https://lotus.filecoin.io/lotus/install/linux/#system-specific).

:::info

 Note that you will also need [Go v1.19.7](https://go.dev/dl/) or higher for a successful install.

:::

## Install Lotus Filecoin Node 🚀

Filecoin is a divers ecosystem with different node implementations. Each node implementation has different ways to generate and manage authentication tokens. This guide uses [Lotus Filecoin](https://lotus.filecoin.io/lotus/get-started/what-is-lotus/), which is the reference node implementation for the Filecoin network.

### Get Lotus
To get started, input the following into the terminal:

```bash

git clone https://github.com/filecoin-project/lotus.git
cd lotus/
git checkout releases

```

### Decide Mainnet or Testnet

```bash
# join mainnet
make clean all

# Or to join a testnet or devnet:
make clean calibnet # Calibration with min 32GiB sectors
```

### Compile Lotus
Finalize the install by inputting `sudo make install` in the terminal.
You can run `lotus --version` to ensure that this process completed successfully.

:::tip

Specific CPU architectures may require additional configuration. Consult the [Lotus Filecoin documentation](https://lotus.filecoin.io/lotus/install/linux/#build-and-install-lotus) for additional details if you encounter any errors.

:::

## Start your RPC Server 🖥️ 

### Configure your RPC node
1. Download & Import a Snapshot:
```bash
aria2c -x5 https://snapshots.mainnet.filops.net/minimal/latest.zst
# Replace the <snapshot-filename> based on the snapshot you downloaded.
lotus daemon --import-snapshot <snapshot-filename> --halt-after-import

```



2. Edit the configuration file `./.lotus/config.toml` to run RPC. 
You can do this by finding `EnableEthRPC` and ensuring it's set to `true`:

```bash
  # EnableEthRPC enables eth_ rpc, and enables storing a mapping of eth transaction hashes to filecoin message Cids.
  # This will also enable the RealTimeFilterAPI and HistoricFilterAPI by default, but they can be disabled by config options above.
  #
  # type: bool
  # env var: LOTUS_FEVM_ENABLEETHRPC
    EnableEthRPC = true

```
### Launch

Run the following command:

```bash
nohup lotus daemon > ~/lotus.log 2>&1 &
```

Log messages can be found at `~/lotus.log` - it will take a moment for your node to get the latest blocks!
After that, you should be ready to serve RPC!


## Apply to our Provider Incubation Program 📋

In our current state of Testnet, there is an additional stage to pass through before you can become a provider on the Lava Network. Please fill out the [application form](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-filecoin&utm_medium=docs&utm_campaign=filecoin-pre-grant) for our Provider Incubation Program. Feel free to drop a line in our [Discord](https://discord.gg/UxujNZbW) once you’ve completed this step!

## Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-filecoin-rpc-node&utm_medium=docs&utm_campaign=filecoin-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node.