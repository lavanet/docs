---
slug: /web3js
title: web3.js ✨
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Web3JSLogo from '/static/img/tutorial/integrations/web3js.png';

# 

<center>
<img src={Web3JSLogo} width="150"/>
</center>

![npm](/img/npm_favicon.ico) [npm](https://www.npmjs.com/package/@lavanet/lava-web3):

```
npm i @lavanet/lava-web3
```

<Tabs>

<TabItem value='web3-opt1' label='create'>

```javascript
import Web3 from "web3";
import { LavaWeb3Provider } from "@lavanet/lava-web3";

async function createWeb3Instance {
  // the provider will be initialized automatically by the create() command
  const provider = await LavaWeb3Provider.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz",
      projectId: "//" //login to gateway.lavanet.xyz to get a projectId!
    },  
    chainIds: "ETH1",
    geolocation: "1" //optional
  });

  return new Web3(provider);
}
```

</TabItem>

<TabItem value='web3-opt2' label='new...init()'>

```javascript
import Web3 from "web3";
import { LavaWeb3Provider } from "@lavanet/lava-web3";

async function createWeb3Instance {
  // the provider will be initialized manually by the init() command
  const provider = new LavaWeb3Provider({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz",
      projectId: "//" //login to gateway.lavanet.xyz to get a projectId!
    },  
    chainIds: "ETH1",
    geolocation: "1" //optional
  });

  //provider is initialized by the following command
  await provider.init();
  return new Web3(provider);
}

```

</TabItem>

<TabItem value='web3-opt3' label='new()...relay'>

```javascript
import Web3 from "web3";
import { LavaWeb3Provider } from "@lavanet/lava-web3";

async function createWeb3Instance {
  // the provider will be initialized automatically on the first request
  const provider = new LavaWeb3Provider({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz",
      projectId: "//" //login to gateway.lavanet.xyz to get a projectId!
    },  
    chainIds: "ETH1",
    geolocation: "1" //optional
  });

  //provider will be initialized at first relay
  return new Web3(provider);
}



```

</TabItem>

</Tabs>

❓ Looking for more examples? Check out the [examples](https://github.com/lavanet/lava-sdk-providers/tree/main/web3js/examples) folder on our repository.