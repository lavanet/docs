---
slug: /sdk-getting-started
title: Getting Started with Lava SDK 
---

# Getting Started 🔥

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

### 4. Initialize an instance of the SDK! 

:::info

When developing on the [backend](/sdk-backend), it is currently best practice to hide the privatekey in an environmental variable instead of putting it in plain text in your code. For now, we’ll use `privKey` as a stand-in!

When developing on the [frontend](/sdk-frontend), you don't need to use privatekeys at all. Simply input a badge!

:::

<Tabs>
<TabItem value ="frontend" label="Badges">

```jsx
//Our Main Program Function
async function useSDK() {
    // For CosmosHub Testnet, Juno Testnet, & Polygon Testnet Access
    const lavaNetwork = await LavaSDK.create({
      badge: {
        badgeServerAddress: "https://badges.lavanet.xyz" //or your own URL
        projectId: ""
      },
      chainIds: ['COS5T','JUNT1','POLYGON1']
    });
  
```

</TabItem>
<TabItem value ="backend" label="Private Key">

```jsx
//Our Main Program Function
async function useSDK() {
    // For CosmosHub Testnet, Juno Testnet, & Polygon Testnet Access
    const lavaNetwork = await LavaSDK.create({
      privateKey: privKey,
      chainIds: ['COS5T','JUNT1','POLYGON1']
    });

```

</TabItem>
</Tabs>


There is no limit to the amount of chains you can handle simultaneously! In addition to those shown in the example above, there are a number of [optional parameters](/sdk-integrations#-all-options) that you can view.

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
const junoBlockResponse =  await lavaNetwork.sendRelay({
    method: "block",
    params: ["82500"],
    chainId: "JUNT1",
    apiInterface: "tendermintrpc"
});

console.log("Juno Block: ", junoBlockResponse);

//Example Cosmos Query - Get the latest block from CosmosHub!
const cosmosBlockResponse = await lavaNetwork.sendRelay({
    method: "GET",
    url: "/cosmos/base/tendermint/v1beta1/blocks/latest",
    chainId: "COS5T",
    apiInterface: "rest"
});

console.log("Cosmos Block: ",cosmosBlockResponse)

//Example Polygon Query - Get the most recent block from Polygon!
const polygonBlockResponse = await lavaNetwork.sendRelay({
    method: "eth_blockNumber",
    params: [],
    chainId: "POLYGON1",
    apiInterface: "jsonrpc"
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