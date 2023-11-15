---
slug: /web3js
title: web3.js
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## web3.js

<Tabs>

<TabItem value='web3-opt1' label='create'>

```javascript
import { LavaSDKOptions } from "@lavanet/lava-sdk";
import Web3 from "web3";
import { LavaWeb3Provider } from "@lavanet/lava-web3";

async function createWeb3Instance(options: LavaSDKOptions): Promise<Web3> {
  const provider = await LavaWeb3Provider.create(options);
  return new Web3(provider);
}
```

</TabItem>

<TabItem value='web3-opt2' label='new (manual init)'>

```javascript

import { LavaSDKOptions } from "@lavanet/lava-sdk";
import Web3 from "web3";
import { LavaWeb3Provider } from "@lavanet/lava-web3";

async function createWeb3Instance(options: LavaSDKOptions): Promise<Web3> {
  // In this case, the provider will be initialized manually by the init() command
  const provider = new LavaWeb3Provider(options);
  await provider.init();
  return new Web3(provider);
}

```

</TabItem>

<TabItem value='web3-opt3' label='new (auto init)'>

```javascript

import { LavaSDKOptions } from "@lavanet/lava-sdk";
import Web3 from "web3";
import { LavaWeb3Provider } from "@lavanet/lava-web3";

async function createWeb3Instance(options: LavaSDKOptions): Promise<Web3> {
  // In this case, the provider will be initialized automatically on the first request
  const provider = new LavaWeb3Provider(options);
  return new Web3(provider);
}



```

</TabItem>

</Tabs>