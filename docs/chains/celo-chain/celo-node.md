---
slug: /celo-node
title: Running a Celo RPC Node
---

# Running a Celo RPC Node

## Requirements 📄 

Before you start, be sure to install [Docker](https://www.docker.com/get-started). Once you have docker installed, you can continue to the next step.


## Install Celo Docker Image 📥

Celo's node is built from a Docker image pulled using Docker CLI. This software is necessary to run a Celo RPC node. To get started, input the following in the terminal:

```bash
export CELO_IMAGE=us.gcr.io/celo-org/geth:mainnet
docker pull $CELO_IMAGE
mkdir celo-data
cd celo-data
```

### Place your public address in an environmental variable 🪧
```bash
export CELO_ACCOUNT_ADDRESS=<YOUR-ACCOUNT-ADDRESS>
```

If you don't already have a Celo account address, create one using the following command:
```bash
docker run -v $PWD:/root/.celo --rm -it $CELO_IMAGE account new
```

### Start your node 🚀

```bash
docker run --name celo-fullnode -d --restart unless-stopped --stop-timeout 300 -p 127.0.0.1:8545:8545 -p 127.0.0.1:8546:8546 -p 30303:30303 -p 30303:30303/udp -v $PWD:/root/.celo $CELO_IMAGE --verbosity 3 --syncmode full --http --http.addr 0.0.0.0 --http.api eth,net,web3,debug,admin,personal --light.serve 90 --light.maxpeers 1000 --maxpeers 1100 --etherbase $CELO_ACCOUNT_ADDRESS --datadir /root/.celo
```

You're now ready to serve RPC!

## Apply to our Provider Incubation Program 📋

In our current state of Testnet, there is an additional stage to pass through before you can become a provider on the Lava Network. Please fill out the [application form](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-celo&utm_medium=docs&utm_campaign=celo-pre-grant) for our Provider Incubation Program. Feel free to drop a line in our [Discord](https://discord.gg/UxujNZbW) once you’ve completed this step!

## Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-celo-rpc-node&utm_medium=docs&utm_campaign=celo-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node.
