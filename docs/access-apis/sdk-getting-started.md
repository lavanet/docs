---
slug: /sdk-getting-started
title: Getting Started with Lava SDK 🔥
---
:::caution

During our Testnet, there are a few prerequisites necessary to use the SDK. Before Getting Started be sure you have completed the [Prerequisites!](/sdk-prerequisites)

:::



## 🎥 Video Demonstration (~9m)

<video width="100%" height="100%" controls><source src="/img/tutorial/sdk/sdk_getting_startedv2.mp4" type="video/mp4"></source></video>

<br /> <br />
<hr />
<br />

## 📝 Written Guide (~5m)

### 1. Set up a new Node.JS project using Node Package Manager 
To get started, we’ll want to create a backend application. Currently, LavaSDK is not safe to use in the browser in production grade applications. Doing so may expose a user’s private keys. So we'll opt for a simple node application.

```bash
mkdir sdk-project/
cd sdk-project
npm init -y
```

### 2. Install the SDK using yarn or NPM

```bash
npm i @lavanet/lava-sdk
```

or

```bash
yarn add @lavanet/lava-sdk
```

### 3. Create a new `index.js` file and import the Lava SDK

```jsx
import { LavaSDK } from "@lavanet/lava-sdk";
```

OR

```jsx
const { LavaSDK } = require("@lavanet/lava-sdk")
```

### 4. Initialize an instance of the SDK for each blockchain you want to access! 

:::info

It is currently best practice to hide the privatekey in an environmental variable instead of putting it in plain text in your code. For now, we’ll use `privKey` as a stand-in!

:::

```jsx
//Our Main Program Function
async function useSDK() {
    // For CosmosHub Testnet Access
    const cosmosHubTestnet = await new LavaSDK({
      privateKey: privKey,
      chainID: 'COS5T',
      rpcInterface: 'rest'
    });
  
    // For Juno Testnet Access
    const junoTestnet = await new LavaSDK({
      privateKey: privKey,
      chainID: 'JUNT1',
    });
  
    // For Polygon Testnet Access
    const polygonTestnet = await new LavaSDK({
      privateKey: privKey,
      chainID: 'POLYGON1',
    });
```

You can specify geolocation and rpcInterface per instance. There is no limit to the amount of instances you run simultaneously!

A full list of supported chains, their respective IDs, and supported interfaces can be found using `lavad`

```bash
lavad q spec show-all-chains
```

For a short list of just chainIDs run it as follows:

```bash
lavad q spec show-all-chains | grep chainID
```

### 5. Make your queries or requests
We'll do so by sending relays within our `useSDK()` function!

```jsx
//Example Juno Query - Grab an arbitrary block from Juno!
const junoBlockResponse =  await junoTestnet.sendRelay({
    method: "block",
    params: ["82500"],
      });

console.log("Juno Block: ", junoBlockResponse);

//Example Cosmos Query - Get the latest block from CosmosHub!
const cosmosBlockResponse = await cosmosHubTestnet.sendRelay({
    method: "GET",
    url: "/cosmos/base/tendermint/v1beta1/blocks/latest",
  });

console.log("Cosmos Block: ",cosmosBlockResponse)

//Example Polygon Query - Get the most recent block from Polygon!
const polygonBlockResponse = await polygonTestnet.sendRelay({
	method: "eth_blockNumber",
	params: [],
});

console.log("Polygon Block: ", polygonBlockResponse)
```

### 6. Now let’s implement the program logic! 

We want to call `useSDK()` to run asynchronously.

```jsx
(async () => {
    await useSDK();
  })();
```

### 7. Let’s run it!

```jsx
node index.js
```

You should get 3 responses like so:

![Success1](/img/tutorial/sdk/SucccesfulSDKCall1.png)
![Success2](/img/tutorial/sdk/SucccesfulSDKCall2.png)
![Success3](/img/tutorial/sdk/SucccesfulSDKCall3.png)


### **That’s it! You’ve successfully used LavaSDK.**

For more information look around the rest of our documentation!

Having trouble? Head to our [Discord!](https://discord.gg/Tbk5NxTCdA)