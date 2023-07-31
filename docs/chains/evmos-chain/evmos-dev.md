---
slug: /evmos-dev
title: Getting Evmos RPC
---

# Getting Evmos RPC

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution 

Lava SDK is currently in Alpha. Please observe the documentation on both [frontend](https://docs.lavanet.xyz/sdk-frontend?utm_source=getting-evmos-rpc&utm_medium=docs&utm_campaign=sdk-alpha) and [backend](https://docs.lavanet.xyz/sdk-backend?utm_source=getting-evmos-rpc&utm_medium=docs&utm_campaign=sdk-alpha) use before getting started.

:::

### Input

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useEvmosTestnet() {

  const evmosTestnet = await new LavaSDK({
    privateKey: process.env.PRIVATE_KEY,
    chainID: 'EVMOST',
  });

  const evmosBlockResponse =  await evmosTestnet.sendRelay({
    method: "block",
    params: ["15500000"],
  });

  console.log(evmosBlockResponse);
}

(async () => {
    await useEvmosTestnet();
  })();
```

### Output

<iframe width="100%" src="/img/chains/evmos_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-evmos-rpc&utm_medium=docs&utm_campaign=sdk-alpha)

<hr />

## [Gateway](https://gateway.lavanet.xyz)

To learn more about using the Lava Gateway visit the [Getting Started guide](/gateway-getting-started)

<hr />
<br />