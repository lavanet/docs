---
slug: /viem
title: viem ✨
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ViemLogo from '/static/img/tutorial/integrations/viem-icon-dark.png';

# 

<center>
<img src={ViemLogo} width="150"/>
</center>

![npm](/img/npm_favicon.ico) [npm](https://www.npmjs.com/package/@lavanet/lava-viem):

```
npm i @lavanet/lava-viem
```

<Tabs>
<TabItem value='viem' label='create()'>

```javascript
import { createViemClientWithLavaSDK } from "@lavanet/lava-viem";

async function printLatestBlock() {
  const viem = await createViemClientWithLavaSDK({
    // subscribed private key or badge must be supplied
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL
      projectId: "//", // Fetch your project ID from https://gateway.lavanet.xyz
    },
    chainIds: "ETH1",
    logLevel: "info",
    geolocation: "2", // OPTIONAL
  });

  const latestBlock = await viem.request({
    method: "eth_blockNumber",
  });

  console.log(latestBlock);
}

```
</TabItem>
</Tabs>

❓ Looking for more examples? Check out the [examples](https://github.com/lavanet/lava-sdk-providers/tree/main/viem/examples) folder on our repository.