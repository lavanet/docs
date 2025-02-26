---
slug: /lava-node
title: Running a Lava RPC Node
---

# Running a Lava RPC Node

## Requirements 📄 

The current recommended [hardware prerequisites](/reqs) for running a Lava RPC node are the following: 

```
16 GB RAM
512 GB SSD
x64 2.0 GHz 4v CPU 
```

## Install Lava 🌋

Using the [installation guide](../../validator/lava-nodes/mainnet/jain-mainnet-manual-cosmivisor) , install all binaries, especially `lavad`:

```bash
git clone https://github.com/lavanet/lava.git
cd lava
make install-all
```

## Launch Your Node 🚀

Set up and configure your node according to the [guides](/testnet) available.
You may use `Cosmovisor` (Recommended) or setup the node manually.