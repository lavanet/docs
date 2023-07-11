---
slug: /avalanche-dev
title: Getting Avalanche RPC
---

# Getting Avalanche RPC

## [SDK](https://github.com/lavanet/lava-sdk)


```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useAvalancheMainnet() {

  const avalancheMainnet = await new LavaSDK({
    privateKey: privKey,
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

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=juno-pre-grant)

<hr />

## [Gateway](https://gateway.lavanet.xyz)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=juno-pre-grant)

<hr />
<br />



