---
slug: /ethersjs6
title: ethers.js (6.x) ✨
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import EthersLogo from '/static/img/tutorial/integrations/ethersjsbanner.png';

# 

<center>
<img src={EthersLogo} width="300"/>
</center>

![npm](/img/npm_favicon.ico) [npm](https://www.npmjs.com/package/@lavanet/lava-ethers-v6):

```
npm i @lavanet/lava-ethers-v6
```


<Tabs>
<TabItem value='ethers6-create' label='create()'>



```javascript

import { LavaEthersProvider } from "@lavanet/lava-ethers-v6";

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

<TabItem value='ethers6-init' label='new() ...init()'>

```javascript

import { LavaEthersProvider } from "@lavanet/lava-ethers-v6";

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

<TabItem value='ethers6-lazy-init' label='new() ...relay'>

```javascript

import { LavaEthersProvider } from "@lavanet/lava-ethers-v6";

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

❓ 想要更多的例子吗?查看我们的仓库中的[examples](https://github.com/lavanet/lava-sdk-providers/tree/main/ethersjs/v6/examples)文件夹。