---
slug: /ethersjs5
title: ethers.js (5.x) ✨
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import EthersLogo from '/static/img/tutorial/integrations/ethersjsbanner.png';


# 

<center>
<img src={EthersLogo} width="300"/>
</center>


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
  badge: {
    badgeServerAddress: "https://badges.lavanet.xyz",
    projectId: "//" //login to gateway.lavanet.xyz to get a projectId!
  },  
  chainIds: "ETH1",
  geolocation: "1" //optional
});


const blockNumber = await ethersProvider.getBlockNumber();

```

</TabItem>

<TabItem value='ethers5-init' label='new() ...init()'>

```javascript

import { LavaEthersProvider } from "@lavanet/lava-ethers-v5";

//ethersProvider is initialized by calling init() after new()
const ethersProvider = new LavaEthersProvider({
  badge: {
    badgeServerAddress: "https://badges.lavanet.xyz",
    projectId: "//" //login to gateway.lavanet.xyz to get a projectId!
  },  
  chainIds: "ETH1",
  geolocation: "1" //optional
});

//client is initialized after the following call
await ethersProvider.init();

const blockNumber = await ethersProvider.getBlockNumber();

```

</TabItem>

<TabItem value='ethers5-lazy-init' label='new() ...relay'>

```javascript

import { LavaEthersProvider } from "@lavanet/lava-ethers-v5";

//ethersProvider is initialized at first relay
const ethersProvider = new LavaEthersProvider({
  badge: {
    badgeServerAddress: "https://badges.lavanet.xyz",
    projectId: "//" //login to gateway.lavanet.xyz to get a projectId!
  },  
  chainIds: "ETH1",
  geolocation: "1" //optional
});

//client is initialized at the following call
const blockNumber = await ethersProvider.getBlockNumber();

```

</TabItem>

</Tabs>

❓ Looking for more examples? Check out the [examples](https://github.com/lavanet/lava-sdk-providers/tree/main/ethersjs/v5/examples) folder on our repository.