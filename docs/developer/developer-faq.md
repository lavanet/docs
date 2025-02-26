---
slug: /daveloper-faq
title: Developer FAQ
---

### 🟡 What rate limits do public endpoints have? {#lava-rate-limits}
Public Lava endpoints have 3 requests/s. To access other limits go x, contact y.


### 🟡 Using Lava with Other RPC Clients {#using-lava-with-other-rpcs}

Lava easily integrates with other RPC clients. 

1. **Gateway** - Simply create an account on the gateway, and replace your client's RPC URL with the appopriate one. Get started [immediately](/gateway-getting-started)!
2. **SDK** - You can also use the SDK library integrations to integrate with [viem](/viem), [cosmjs](/cosmjs), [web3.js](/web3js), or [ethers.js](/ethersjs5).

### 🟡 I'm already using another SDK. {#using-lava-with-other-sdks}
No problem, Lava offers integrations to existing popular libraries [here](/sdk-integrations).

### 🟡 How to change the RPC url which Cosmjs uses? {#changing-cosmjs-url}

If you want a native integration to use seamlessly, please check out the new Lava integration for [CosmJS](/cosmjs)!
Alternatively, please check out the cosmolava-client created by one of our community members: [MELLIFERA-Labs/cosmolava-client](https://github.com/MELLIFERA-Labs/cosmolava-client)

If you just want to switch the RPC URL you can do so using the HttpEndpoint interface on [stargate](https://cosmos.github.io/cosmjs/latest/stargate/interfaces/HttpEndpoint.html#url) or [cosmwasm-stargate](https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/interfaces/HttpEndpoint.html#url). Be sure you've grabbed the TendermintRPC endpoint from Lava or you may encounter errors.