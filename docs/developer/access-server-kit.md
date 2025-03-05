---
slug: /access-server-kit
title: Server Kit
---
# Lava Server Kit

:::note 
🧪
The Lava Server Kit (referenced in code as `RPCConsumer`) is currently in an experimental phase. There may be major and breaking changes during this phase. If you are looking for simple RPC access, consider using the Gateway. If you're looking to tinker, source code is available on our [Github repository](https://github.com/lavanet/lava/tree/main/protocol/rpcconsumer)). 
:::

The **Lava Server Kit** is a GO language reference implementation that provides self-hosted gateway access to blockchain APIs, designed as a solution for running as a backend server. It is capable of accepting raw RPC queries, wrapping them up with the protocol layer, and sending them directly to providers on our network in a decentralized manner. The Lava Server Kit is highly concurrent and performant and is used in enterprise-grade applications which require high throughput and efficiency in scaling. 



### Features

1. Serve multiple blockchain RPC endpoints
2. High throughput with multiple sessions
3. Easy setup process

### Guides
- A [guide](https://services.mellifera.network/testnets/lava-network/RPC_Consumer) for creating a custom gateway. Created by Lava community member, MELLIFERA.