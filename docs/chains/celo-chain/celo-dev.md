---
slug: /celo-dev
title: Getting Celo RPC
---

# Getting Celo RPC

## [SDK](https://github.com/lavanet/lava-sdk)


```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useCeloMainnet() {

  const celoMainnet = await new LavaSDK({
    privateKey: privKey,
    chainID: 'CELO',
  });

  const celoBlockResponse =  await celoMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(celoBlockResponse);
}

(async () => {
    await useCeloMainnet();
  })();
```

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=juno-pre-grant)

<hr />

## [Gateway](https://gateway.lavanet.xyz)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=juno-pre-grant)

<hr />
<br />




