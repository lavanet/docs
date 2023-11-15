---
slug: /cosmjs
title: CosmJS
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## cosmjs

![npm](/img/npm_favicon.ico) [npm](https://www.npmjs.com/package/@lavanet/lava-cosmjs):

```
npm i @lavanet/lava-cosmjs
```

<Tabs>
<TabItem value='cosmjs-opt1' label='create'>

```typescript

import { LavaSDKOptions } from "@lavanet/lava-sdk";
import {
  Tendermint34Client,
  Tendermint37Client,
  TendermintClient,
  Comet,
} from "@cosmjs/tendermint-rpc";
import { LavaCosmJsRPCClient } from "@lavanet/lava-cosmjs";

async function createTendermintClientInstance(
  rpcClientName: string,
  options: LavaSDKOptions
): Promise<TendermintClient> {
  const client = await LavaCosmJsRPCClient.create(options);
  switch (rpcClientName) {
    case "tendermint34":
      return Tendermint34Client.create(client);
    case "tendermint37":
      return Tendermint37Client.create(client);
    default:
      throw new Error(`Unknown RPC client: ${rpcClientName}`);
  }
}

async function printLatestBlock(rpcClientName: string) {
  const tendermintClient = await createTendermintClientInstance(rpcClientName, {
    privateKey: process.env.PRIVATE_KEY, // or badge!
    chainIds: "LAV1",
    geolocation: "1",
    pairingListConfig: process.env.PAIRING_LIST_CONFIG_PATH,
    lavaChainId: "lava",
    logLevel: "info",
    allowInsecureTransport: true,
  });

  const latestBlock = await tendermintClient.abciInfo();
  return latestBlock;
}

```

</TabItem>

<TabItem value='cosmjs-opt2' label='new (manual init)'>

```typescript

import { LavaSDKOptions } from "@lavanet/lava-sdk";
import {
  Tendermint34Client,
  Tendermint37Client,
  TendermintClient,
  Comet,
} from "@cosmjs/tendermint-rpc";
import { LavaCosmJsRPCClient } from "@lavanet/lava-cosmjs";

async function createTendermintClientInstance(
  rpcClientName: string,
  options: LavaSDKOptions
): Promise<TendermintClient> {
  // In this case, the provider is initialized manually by calling init()
     const provider = new LavaCosmJsRPCClient(options);
     await provider.init();

  switch (rpcClientName) {
    case "tendermint34":
      return Tendermint34Client.create(client);
    case "tendermint37":
      return Tendermint37Client.create(client);
    default:
      throw new Error(`Unknown RPC client: ${rpcClientName}`);
  }
}

async function printLatestBlock(rpcClientName: string) {
  const tendermintClient = await createTendermintClientInstance(rpcClientName, {
    privateKey: process.env.PRIVATE_KEY,
    chainIds: "LAV1",
    geolocation: "1",
    pairingListConfig: process.env.PAIRING_LIST_CONFIG_PATH,
    lavaChainId: "lava",
    logLevel: "info",
    allowInsecureTransport: true,
  });

  const latestBlock = await tendermintClient.abciInfo();
  return latestBlock;
}

```

</TabItem>

<TabItem value='cosmjs-opt3' label='new (auto init)'>

```typescript

import { LavaSDKOptions } from "@lavanet/lava-sdk";
import {
  Tendermint34Client,
  Tendermint37Client,
  TendermintClient,
  Comet,
} from "@cosmjs/tendermint-rpc";
import { LavaCosmJsRPCClient } from "@lavanet/lava-cosmjs";

async function createTendermintClientInstance(
  rpcClientName: string,
  options: LavaSDKOptions
): Promise<TendermintClient> {
  // In this case, the provider will be initialized automatically on the first request
    const provider = new LavaCosmJsRPCClient(options);

  switch (rpcClientName) {
    case "tendermint34":
      return Tendermint34Client.create(client);
    case "tendermint37":
      return Tendermint37Client.create(client);
    default:
      throw new Error(`Unknown RPC client: ${rpcClientName}`);
  }
}

async function printLatestBlock(rpcClientName: string) {
  const tendermintClient = await createTendermintClientInstance(rpcClientName, {
    privateKey: process.env.PRIVATE_KEY,
    chainIds: "LAV1",
    geolocation: "1",
    pairingListConfig: process.env.PAIRING_LIST_CONFIG_PATH,
    lavaChainId: "lava",
    logLevel: "info",
    allowInsecureTransport: true,
  });

  const latestBlock = await tendermintClient.abciInfo();
  return latestBlock;
}

```

</TabItem>
</Tabs>