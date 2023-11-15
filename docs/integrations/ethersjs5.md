---
slug: /ethersjs5
title: ethers.js (5.x)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ether.js (version 5.x)

## Use

![npm](/img/npm_favicon.ico) [npm](https://www.npmjs.com/package/@lavanet/lava-ethers-v5):

```
npm i @lavanet/lava-ethers-v5
```

<Tabs>
<TabItem value='ethers5-create' label='create()'>



```javascript

import { LavaEthersProvider } from "@lavanet/lava-ethers-v5";

//ethersProvider is initialized upon calling create()
const ethersProvider = await LavaEthersProvider.create({
  privateKey: privateKey,
  chainId: chainId,
  pairingListConfig: localConfigPath, // Optional
  networkId: networkId, // Optional
  geolocation: geolocation, //Optional
});


const blockNumber = await ethersProvider.getBlockNumber();

```

</TabItem>

<TabItem value='ethers5-init' label='new() ...init()'>

```javascript

import { LavaEthersProvider } from "@lavanet/lava-ethers-v5";

const ethersProvider = new LavaEthersProvider({
  privateKey: privateKey,
  chainId: chainId,
  pairingListConfig: localConfigPath, // Optional
  networkId: networkId, // Optional
  geolocation: geolocation, //Optional
});

//ethersProvider is initialized by calling init() after new()
await ethersProvider.init();

const blockNumber = await ethersProvider.getBlockNumber();

```

</TabItem>

<TabItem value='ethers5-lazy-init' label='new() ...relay'>

```javascript

import { LavaEthersProvider } from "@lavanet/lava-ethers-v5";

const ethersProvider = new LavaEthersProvider({
  privateKey: privateKey,
  chainId: chainId,
  pairingListConfig: localConfigPath, // Optional
  networkId: networkId, // Optional
  geolocation: geolocation, //Optional
});

//ethersProvider is initialized at the following call
const blockNumber = await ethersProvider.getBlockNumber();

```

</TabItem>

</Tabs>