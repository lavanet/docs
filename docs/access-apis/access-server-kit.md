---
slug: /access-server-kit
title: Server Kit
---
# Lava Server Kit

:::note 
🧪
The Lava Server Kit is currently in an experimental phase. There may be major and breaking changes during this phase. If you are looking for simple RPC access, consider using the Gateway or SDK instead. If you're looking to tinker, source code is available on our [Github repository](https://github.com/lavanet/lava/tree/main/protocol/rpcconsumer)). 
:::

🌋 **Backends devs? Enterprises? Self-hosted and secure gateway access to Web3 APIs, the Lava way 😉**

The **Lava Server Kit** is a GO language reference implementation that provides self-hosted gateway access to blockchain APIs, designed as a solution for running as a backend server. It is capable of accepting raw RPC queries, wrapping them up with the protocol layer, and sending them directly to providers on our network in a decentralized manner. The Lava Server Kit is more concurrent and performant than our SDK and is used in enterprise-grade applications which require high throughput and effeciency in scaling. 



### Features

1. Serve multiple blockchain RPC endpoints
2. High throughput with multiple sessions
3. Easy setup process