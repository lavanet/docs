---
slug: /infra-manager
title: Infra Manager
---
# Infra Manager


The **Infra Manager** is an open source smart router that supports any RPC (Lava, Alchemy, self-hosted etc.) and chooses the best nodes for you with automatic failover, error recovery, smart caching, fast TXs and more.

### Features

1. Routes requests to the best nodes based on reliability, speed, and sync
2. Automatically retries and fallbacks when providers face errors or downtime
3. Delivers faster transaction propagation by broadcasting to all providers at once
4. Has two layers of smart caching
5. Samples and checks data accuracy

### Get Started
Follow the steps to get started with Infra Manager:
1. Clone the repository:
```bash 
git clone https://github.com/lavanet/lava.git
```
2. Navigate to the Infra Manager directory:
```bash
cd lava/protocol/rpcconsumer
```
3. Install all dependencies:
```bash
make install-all
```
4. Create a configuration file with the following format:
```bash
endpoints:
  - network-address: <network-address>
    chain-id: <chain-id>
    api-interface: <api-interface>
  - network-address: <network-address>
    chain-id: <chain-id>
    api-interface: <api-interface>
```
The `network-address` specifies the IP address and port number of the node, `chain-id` specifies the unique identifier of the blockchain, and `api-interface` specifies the API interface used by the node.

5. Start the consumer using the command:
```bash
rpcconsumer --config <path/to/config/file>
```