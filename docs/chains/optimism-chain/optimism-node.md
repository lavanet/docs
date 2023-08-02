---
slug: /optimism-node
title: Running an Optimism RPC Node
---

## Requirements 📄 

Before beginning, verify that your computer meets the following [system requirements](https://github.com/smartcontracts/simple-optimism-node#recommended-hardware):

```
    docker installed
    16GB+ RAM
    2TB SSD
    10mb/s+ download

```

## Install Through Docker 🚀

Running a node on Optimism is best accomplished through Docker, however, if you want to take the steps to build manually, you can consult the guide available [here](https://community.optimism.io/docs/developers/build/run-a-node/#non-docker-configuration).

### Clone the Repository

```bash
git clone https://github.com/smartcontracts/simple-optimism-node.git
cd simple-optimism-node
cp .env.example .env
```

### Configure the Node

You'll need to open `.env` file and change the environmental variables of the file to your liking. Note that you may need to spin up a legacy node for full historical blocks. Make sure to fill in all variables in the `REQUIRED` section.


### Start the node

```bash
docker compose --profile current up -d
```

That's it! You're good to go.

## Apply to our Provider Incubation Program 📋

In our current state of Testnet, there is an additional stage to pass through before you can become a provider on the Lava Network. Please fill out the [application form](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-optimism&utm_medium=docs&utm_campaign=optimism-pre-grant) for our Provider Incubation Program. Feel free to drop a line in our [Discord](https://discord.gg/UxujNZbW) once you’ve completed this step!

## Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-optimism-rpc-node&utm_medium=docs&utm_campaign=optimism-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node.