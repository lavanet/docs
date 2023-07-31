---
slug: /juno-dev
title: Getting Juno RPC
---

# Getting Juno RPC

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution 

There are currently [prerequisites](https://docs.lavanet.xyz/sdk-prerequisites?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=sdk-alpha-launch) to using LavaSDK on the backend in its Alpha.
Please be sure to complete all prerequisites before using code snippets in backend use.

:::

### Input

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useJunoTestnet() {

    const junoTestnet = await new LavaSDK({
      privateKey: process.env.PRIVATE_KEY,
      chainID: 'JUNT1',
    });

    const junoBlockResponse =  await junoTestnet.sendRelay({
    method: "block",
    params: ["82500"],
      });

    console.log(junoBlockResponse);
}

(async () => {
    await useJunoTestnet();
  })();
```
### Output

<iframe width="100%" src="/img/chains/juno_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=juno-pre-grant)

<hr />

## [Gateway](https://gateway.lavanet.xyz)

<video width="100%" height="100%" controls><source src="/img/chains/junovideodemo.mp4" type="video/mp4"></source></video>

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=juno-pre-grant)

<hr />
<br />