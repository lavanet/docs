---
slug: /avalanche-dev
title: Getting Avalanche RPC
---

# Getting Avalanche RPC

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution 

There are currently [prerequisites](/sdk-prerequisites)  to using LavaSDK in its Alpha.
Please be sure to complete all prerequisites before using code snippets.

:::

### Input

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useAvalancheMainnet() {

  const avalancheMainnet = await new LavaSDK({
    privateKey: process.env.PRIVATE_KEY,
    chainID: 'AVAX',
  });

  const avalancheBlockResponse =  await avalancheMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(avalancheBlockResponse);
}

(async () => {
    await useAvalancheMainnet();
  })();
```
### Output

<iframe width="100%" src="/img/chains/avalanche_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](/sdk-getting-started)

<hr />

## [Gateway](https://gateway.lavanet.xyz)

To learn more about using the Lava Gateway visit the [Getting Started guide](/gateway-getting-started)

<hr />
<br />



