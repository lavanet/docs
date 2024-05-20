---
slug: /celestia-node
title: Running a celestia RPC Node
---

# Running a celestia RPC Node

## Requirements 📄

### Recommended Specifications

    CPU: 4+ cores
    RAM: 8 GB+
    Disk 1 TB
    Connection Speed: 25+ mbps/sec


##  Setup celestia consensus and DA node

Follow celestia docs for instructions on how to setup and run the nodes:
Data availabillity light node https://docs.celestia.org/nodes/light-node
Consensus node https://docs.celestia.org/nodes/full-consensus-node

Important note:
When running the light DA node we need to make sure to do one of the following:
* disable authentication with the flag --rpc.skip-auth to let provider use the node without authentication
example:
```bash
celestia light start --core.ip public-celestia-mocha4-consensus.numia.xyz --p2p.network celestia --rpc.skip-auth 
```
* configure the provider process to use the authentication token
```bash
export CELESTIA_NODE_AUTH_TOKEN=$(celestia light auth admin --p2p.network celestia)
```

## Setup your Provider on Lava Network 🌋

To set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-starknet-rpc-node&utm_medium=docs&utm_campaign=celestia-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node.

Celestia providers must supply endpoint for both consensus and DA node:
- consensus node: rest, tendermint, grpc (this is the same as every other cosmos node)
- DA node: jsonrpc (when running the light DA node the defualt port will be 26658)


example for provider configuration file
(use the "auth-config:" configuration only if you choose to configure the token)
```yaml
endpoints:
  - api-interface: jsonrpc
    chain-id: CELESTIA
    network-address: 
      address: 0.0.0.0:2221
    node-urls:
      - url: http://127.0.0.1:26658
        auth-config:
            auth-headers:
                Authorization: Bearer {CELESTIA_NODE_AUTH_TOKEN}
  - api-interface: tendermintrpc
    chain-id: CELESTIA
    network-address: 
      address: 0.0.0.0:2221
    node-urls:
      - url: ws://127.0.0.1:26657/websocket
      - url: http://127.0.0.1:26657
  - api-interface: grpc
    chain-id: CELESTIA
    network-address: 
      address: 0.0.0.0:2221
    node-urls: 
      - url: 127.0.0.1:9090
  - api-interface: rest
    chain-id: CELESTIA
    network-address: 
      address: 0.0.0.0:2221
    node-urls: 
      - url: http://127.0.0.1:1317
```