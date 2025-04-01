---
slug: /daveloper-faq
title: Developer FAQ
---

### 🟡 What rate limits do public endpoints have? {#lava-rate-limits}
Public Lava endpoints have average access rate of 3 req/s. Developers can upgrade update their access rates and customize the API access by purchasing subscriptions.


### 🟡 Using Lava with Other RPC Clients {#using-lava-with-other-rpcs}

Lava easily integrates with other RPC clients. 

1. **Gateway** - a simplified [web interface](/gateway-endpoints) that gives developers instant access to blockchain data.

2. **SDK** - You can also use the SDK library integrations to integrate with [viem](/viem), [cosmjs](/cosmjs), [web3.js](/web3js), or [ethers.js](/ethersjs5).

### 🟡 I'm already using another SDK. {#using-lava-with-other-sdks}
Lava offers integrations to existing popular libraries [here](/sdk-integrations).

### 🟡 How to change the RPC url which Cosmjs uses? {#changing-cosmjs-url}

If you want a native integration to use seamlessly, please check out the new Lava integration for [CosmJS](/cosmjs)!
Alternatively, please check out the [cosmolava-client](https://github.com/MELLIFERA-Labs/cosmolava-client) created by one of our community members.

If you just want to switch the RPC URL you can do so using the `HttpEndpoint` interface on [stargate](https://cosmos.github.io/cosmjs/latest/stargate/interfaces/HttpEndpoint.html#url) or [cosmwasm-stargate](https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/interfaces/HttpEndpoint.html#url). Be sure you've grabbed the TendermintRPC endpoint from Lava or you may encounter errors.