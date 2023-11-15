---
slug: /viem
title: viem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```javascript
import { createViemClientWithLavaSDK } from "../src/lavaViemProvider";

// Backend usage with a subscribed private key.
// A pre subscribed key can be set for free on https://gateway.lavanet.xyz .
async function printLatestBlock() {
  const viem = await createViemClientWithLavaSDK({
    privateKey: process.env.PRIVATE_KEY,
    chainIds: "ETH1",
    geolocation: "1",
    pairingListConfig: process.env.PAIRING_LIST_CONFIG_PATH,
    lavaChainId: "lava",
    logLevel: "info",
    allowInsecureTransport: true,
  });

  const latestBlock = await viem.request({
    method: "eth_blockNumber",
  });

  console.log(latestBlock);
}

```