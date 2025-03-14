---
slug: /gateway-endpoints
title: Gateway Endpoints
---

# Lava Gateway

The **Lava Gateway**, developed and managed by the Magma team, is a simplified web interface that gives developers instant access to blockchain data. The Gateway uses the Lava Server Kit to provide a hosted point of access for developers looking for RPC through the Lava Network. This allows users to manage and configure Web3 APIs through intuitive controls directly from the browser and find example calls for the supported chains.

## Create your Gateway account

To access endpoints through Gateway first create an account using the following [link](https://gateway.lavanet.xyz/login?utm_source=gateway-access-page&utm_medium=docs&utm_campaign=docs-to-gateway). Once registered, you will see the following UI, which displays the chains currently supported on the Gateway.
![Gateway Chains](/img/supportedchains.png)







### Pull your Endpoint

Each network has a different number of interfaces that can be queried. As seen below, the Ethereum RPC can accept calls from both JSON-RPC through HTTP and JSON-RPC through WebSockets, whereas Lava accepts REST, URI, Tendermint, and Tendermint using WebSockets.

![EthereumAccessScreenshot](/img/tutorial/gateway/eth_access_screenshot.png)

![LavaAccessScreenshot](/img/tutorial/gateway/lava_access_screenshot.png)


All of the Gateway endpoint addresses are plug-and-play. You can take any address, plug it into Web3.js, Ether.js, Gaia or any other [Web3 API](../integrations/sdk-integrations.md) and use it seamlessly.