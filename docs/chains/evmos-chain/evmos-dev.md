---
slug: /evmos-dev
title: Getting Evmos RPC
---

# Getting Evmos RPC

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution 

There are currently [prerequisites](/sdk-prerequisites)  to using LavaSDK in its Alpha.
Please be sure to complete all prerequisites before using code snippets.

:::

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useEvmosMainnet() {

  const evmosMainnet = await new LavaSDK({
    privateKey: privKey,
    chainID: 'EVMOS',
  });

  const evmosBlockResponse =  await evmosTestnet.sendRelay({
    method: "GET",
    url: "/node_info",
  });

  });

  console.log(evmosBlockResponse);
}

(async () => {
    await useEvmosMainnet();
  })();
```

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=juno-pre-grant)

<hr />

## [Gateway](https://gateway.lavanet.xyz)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=juno-pre-grant)

<hr />
<br />


