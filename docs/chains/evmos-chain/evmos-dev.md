---
slug: /evmos-dev
title: Getting Evmos RPC
---

# Getting Evmos RPC

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution 

There are currently [prerequisites](https://docs.lavanet.xyz/sdk-prerequisites?utm_source=getting-evmos-rpc&utm_medium=docs&utm_campaign=sdk-alpha-launch)  to using LavaSDK on the backend in its Alpha.
Please be sure to complete all prerequisites before using code snippets in backend use.

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

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-evmos-rpc&utm_medium=docs&utm_campaign=sdk-alpha-launch)

<hr />

## [Gateway](https://gateway.lavanet.xyz)

To learn more about using the Lava Gateway visit the [Getting Started guide](/gateway-getting-started)

<hr />
<br />


