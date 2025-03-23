---
slug: /base-node
title: Running a Base RPC Node 
---

# Running a Base RPC Node

## Requirements 📄 

Before you start, be sure to install [Docker](https://www.docker.com/get-started). Once you have docker installed, you can continue onto the next step.

    >16 GB RAM
    SSD, 2 TB free space


## Setup Your Base Node Image 📥

### 💿 Setup a L1 Full Node RPC 

You need an Ethereum L1 Full Node running before you can use Base. Set `OP_NODE_L1_ETH_RPC` if you're using docker-compose.

### ✨ Clone the Repo 

```bash
git clone https://github.com/base-org/node.git
```

Uncomment the line(s) relevant to your network in the`docker-compose.yml`


### 🚀 Start your node 

```bash
docker compose up --build
```

You're now ready to serve RPC!

## Apply to our Provider Incubation Program 📋

In our current state of Testnet, there is an additional stage to pass through before you can become a provider on the Lava Network. Please fill out the [application form](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-base&utm_medium=docs&utm_campaign=base-pre-grant) for our Provider Incubation Program. Feel free to drop a line in our [Discord](https://discord.gg/UxujNZbW) once you’ve completed this step!

## Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-base-rpc-node&utm_medium=docs&utm_campaign=base-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node.
