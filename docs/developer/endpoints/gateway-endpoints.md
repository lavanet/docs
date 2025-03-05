---
slug: /gateway-endpoints
title: Gateway Endpoints
---

# Lava Gateway

The **Lava Gateway**, developed and managed by Magma team, is a simplified web interface that gives developers instant access to blockchain data. The Gateway uses Lava Server Kit to provide a hosted point of access for developers looking for RPC through the Lava Network. This allows users to manage and configure Web3 APIs through an intuitive controls directly from the browser and find example calls for the supported cahins.

## Create your Gateway account

To access endpoints through Gateway first create an account using the following [link](https://gateway.lavanet.xyz/login?utm_source=gateway-access-page&utm_medium=docs&utm_campaign=docs-to-gateway). Once registered you will see the following UI which displays the chains currently supported on the gateway.
![Gateway Chains](/img/supportedchains.png)







### Pull your Endpoint

Each network has a different number of interfaces that can be queried. As seen below, the Ethereum RPC can accept calls from both JSONRPC through HTTP and JSONRPC through WebSockets, whereas Lava accepts REST, URI, Tendermint and Tendermint using Websockets. 

![EthereumAccessScreenshot](/img/tutorial/gateway/eth_access_screenshot.png)

![LavaAccessScreenshot](/img/tutorial/gateway/lava_access_screenshot.png)


All of these endpoint addresses are plug-and-play. You can take any address, plug it into Web3.js, Ether.js, Gaia or any other [Web3 API](../integrations/sdk-integrations.md) and use it seamlessly.