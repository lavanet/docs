---
slug: /filecoin-dev
title: Getting Filecoin RPC
---

# Getting Filecoin RPC

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution 

There are currently [prerequisites](https://docs.lavanet.xyz/sdk-prerequisites?utm_source=getting-filecoin-rpc&utm_medium=docs&utm_campaign=sdk-alpha-launch) to using LavaSDK in its Alpha.
Please be sure to complete all prerequisites before using code snippets.

:::

### Input

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useFilecoinMainnet() {

  const filecoinMainnet = await new LavaSDK({
    privateKey: process.env.PRIVATE_KEY,
    chainID: 'FVM',
  });

  const filecoinBlockResponse =  await filecoinMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(filecoinBlockResponse);
}

(async () => {
    await useFilecoinMainnet();
  })();
```

### Output

<iframe width="100%" src="/img/chains/filecoin_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-filecoin-rpc&utm_medium=docs&utm_campaign=sdk-alpha-launch)

<hr />

## [Gateway](https://gateway.lavanet.xyz)

To learn more about using the Lava Gateway visit the [Getting Started guide](/gateway-getting-started)

<hr />
<br />
