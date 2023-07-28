---
slug: /evmos-node
title: Running an Evmos RPC Node
---

# Running an Evmos RPC Node

## Requirements

- 8 core CPU 
- 64gb of RAM
- go 1.20+
- jq 1.6+
- ports 8545/8546 open & exposed

## Install Evmos CLI

This software is necessary to run a Juno RPC node.


```bash
git clone https://github.com/evmos/evmos.git
cd evmos
git fetch
git checkout <tag>
make install
```

It is necessary to replace `<tag>` with the name of the latest release which is visible [here](https://github.com/evmos/evmos/tags).

```bash
evmosd start --json-rpc.enable
```
You can edit your `app.toml` file to change settings on your node. Within `app.toml` you can find gas cap, CORS, Pruning, and how to configure a WebSocket Server. For further information, consult the [Evmos documentation](https://docs.evmos.org/protocol/evmos-cli/configuration#running-the-json-rpc-server)

## Apply to our Provider Incubation Program 📋

In our current state of Testnet, there is an additional stage to pass through before you can become a provider on the Lava Network. Please fill out the [application form](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-evmos&utm_medium=docs&utm_campaign=evmos-pre-grant) for our Provider Incubation Program. Feel free to drop a line in our [Discord](https://discord.gg/UxujNZbW) once you’ve completed this step!

## Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-evmos-rpc-node&utm_medium=docs&utm_campaign=evmos-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node.