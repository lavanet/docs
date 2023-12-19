---
slug: /starknet-node
title: Running a Starknet RPC Node
---

# Running a Starknet RPC Node

## Requirements 📄

### Minimum Requirements

    CPU: 2+ cores
    RAM: 4 GB
    Disk: 600 GB
    Connection Speed: 8 mbps/sec

### Recommended Specifications

    CPU: 4+ cores
    RAM: 16 GB+
    Disk 2 TB
    Connection Speed: 25+ mbps/sec


##  Install the Starknet L1 Package 📦 

Docker abstracts the ETH L1 Node needs, but behind the scenes Starknet requires Lighthouse and Besu. Lighthouse handles consensus and Besu handles execution. Both of them can be installed with the following command:

```bash
git clone git@github.com:starknet-edu/starknet-stack.git
cd starknet-stack
docker compose -f dc-l1.yaml up -d
```

To verify success, check to see the ports in the following command outputs:

```bash
sudo netstat -lpnut | grep -E '30303|8551|854
sudo netstat -lpnut | grep -E '5054|9000'
```

After you've seen success, your L1 client will take a moment to sync. You can check its status like so:

```bash
# check goerli etherscan to make sure you have the latest block

curl --location --request POST 'http://localhost:8545' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc":"2.0",
    "method":"eth_blockNumber",
    "params":[],
    "id":83
}'
```

Compare your numbers with Starknet's Testnet_1 before proceeding.

## Install the Starknet L2 Package 📦

> There are three posible nodes avaliable for [Starknet](https://www.starknet.io/en/ecosystem/fullnodes-and-rpc-services)

### Pathfinder node
`Cd` into the starknet-stack project root and start the L2 execution client with this command:

```bash
docker compose -f dc-l2.yaml up -d
```

It will take a while to sync, but you can always check it like so:

```bash

curl --location --request POST 'http://localhost:9545' \
--header 'Content-Type: application/json' \
--data-raw '{
 "jsonrpc":"2.0",
 "method":"starknet_syncing",
 "params":[],
 "id":1
}'
```

Inspect your output! Once `current_block_num` and `highest_block_num` are the same, you've accomplished sync.

### Juno node
Juno is a golang Starknet node implementation by Nethermind with the aim of decentralising Starknet.

#### Run with Docker
To run Juno with Docker, use the following command. Make sure to create the $HOME/juno directory on your local machine before running the command.

```bash
docker run -d \
  --name juno \
  -p 6060:6060 \
  -v $HOME/juno:/var/lib/juno \
  nethermind/juno:latest \
  --http \
  --http-port 6060 \
  --http-host 0.0.0.0 \
  --db-path /var/lib/juno \
  --eth-node <YOUR-ETH-NODE> \
  --pending-poll-interval=3s
```

You should replace ```<YOUR-ETH-NODE>``` with your actual Ethereum node address.

The ```--pending-poll-interval``` parameter sets how frequently pending block will be updated.

❗ _It is disabled by default, but should be enabled since lava version v0.27.0._

To view logs from the Docker container, use the following command:

```docker logs -f juno```

For more details, please visit [official docs](https://github.com/NethermindEth/juno)

## Run the Indexer  🏃

```bash
/indexer/indexer.sh
```

## Do a Test Transaction 💸 

As part of the Starknet documentation, it is recommended that you perform a test transaction to verify all the levels of Starknet are working and valid.

```bash
https://book.starknet.io/chapter_4/node.html#layer_4_transport_layer
```

That's it ! You're ready to serve RPC!

## Apply to our Provider Incubation Program 📋

In our current state of Testnet, there is an additional stage to pass through before you can become a provider on the Lava Network. Please fill out the [application form](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-starknet&utm_medium=docs&utm_campaign=starknet-pre-grant) for our Provider Incubation Program. Feel free to drop a line in our [Discord](https://discord.gg/UxujNZbW) once you’ve completed this step!

## Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-starknet-rpc-node&utm_medium=docs&utm_campaign=starknet-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node.