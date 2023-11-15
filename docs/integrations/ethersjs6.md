---
slug: /ethersjs6
title: ethers.js (6.x)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## ethers.js


![npm](/img/npm_favicon.ico) [npm](https://www.npmjs.com/package/@lavanet/lava-ethers-v6):

```
npm i @lavanet/lava-ethers-v6
```


<Tabs>
<TabItem value='ethers5' label='Version 5.x'>

```javascript

import { LavaEthersProvider } from "@lavanet/lava-ethers-v5";

const ethersProvider = new LavaEthersProvider({
  privateKey: privateKey,
  chainId: chainId,
  pairingListConfig: localConfigPath, // Optional
  networkId: networkId, // Optional
  geolocation: geolocation, //Optional
});

await ethersProvider.init();

const blockNumber = await ethersProvider.getBlockNumber();

```

</TabItem>

<TabItem value='ethers6' label='Version 6.x'>


```javascript

import { LavaEthersProvider } from "@lavanet/lava-ethers-v6";

const ethersProvider = new LavaEthersProvider({
  privateKey: privateKey,
  chainId: chainId,
  pairingListConfig: localConfigPath, // Optional
  networkId: networkId, // Optional
  geolocation: geolocation, //Optional
});

await ethersProvider.init();

const blockNumber = await ethersProvider.getBlockNumber();

```

</TabItem>
</Tabs>