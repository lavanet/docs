---
slug: /starknet-dev
title: Getting Starknet RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Starknet RPC

## Starknet Public RPC

### Mainnet 🌐

| Service 🔌  | URL 🔗                            |
| ----------- | --------------------------------- |
| 🟢 json-rpc | https://rpc.starknet.lava.build |

### Testnet 🧪

| Service 🔌  | URL 🔗                                    |
| ----------- | ----------------------------------------- |
| 🟢 json-rpc | https://rpc.starknet-testnet.lava.build |

## API Reference

<Tabs>
<TabItems value="REST/HTTP" label="REST/HTTP">
<Tabs>
<TabItems value="cURL" label="cURL">

```shell
curl -X POST -H "Content-Type: application/json" https://g.w.lavanet.xyz:443/gateway/strk/rpc-http/3dc655f970c930f1d3e78ee71beece18 --data '{"jsonrpc":"2.0","method":"starknet_blockNumber","params":[],"id":1}'
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install requests

import requests
import json

url = "https://g.w.lavanet.xyz:443/gateway/strk/rpc-http/3dc655f970c930f1d3e78ee71beece18"
request_payload = {
    "jsonrpc": "2.0",
    "method": "starknet_blockNumber",
    "params": [],
    "id": 1,
}

try:
    headers = {"Content-Type": "application/json"}
    response = requests.post(url, headers=headers, data=json.dumps(request_payload))
    response.raise_for_status()  # Raises an HTTPError if the request was unsuccessful
    data = response.json()
    print("Block Number Response:", data)
except requests.exceptions.RequestException as e:
    print(f"Error fetching block number: {e}")

```

 </TabItems>
<TabItems value="NodeJS" label="NodeJS">

```jsx
// npm i axios

const axios = require("axios");

const url =
  "https://g.w.lavanet.xyz:443/gateway/strk/rpc-http/3dc655f970c930f1d3e78ee71beece18";
const requestPayload = {
  jsonrpc: "2.0",
  method: "starknet_blockNumber",
  params: [],
  id: 1,
};

async function fetchBlockNumber() {
  try {
    const response = await axios.post(url, requestPayload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Block Number Response:", response.data);
  } catch (error) {
    console.error("Error fetching block number:", error.message);
  }
}

fetchBlockNumber();
```

 </TabItems>

</Tabs>
</TabItems>

</Tabs>

<hr/>

## [Gateway](https://gateway.lavanet.xyz/?utm_source=starknet-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=starknet-dev&utm_medium=docs&utm_campaign=docs-to-docs)

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution

Lava SDK is currently in Alpha. Please observe the documentation on both [frontend](https://docs.lavanet.xyz/sdk-frontend?utm_source=getting-starknet-rpc&utm_medium=docs&utm_campaign=docs-to-docs) and [backend](https://docs.lavanet.xyz/sdk-backend?utm_source=getting-starknet-rpc&utm_medium=docs&utm_campaign=docs-to-docs) use before getting started.

:::

### Input 📥

<Tabs>

<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk");

async function useStarknet() {
  const starknet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainIds: "STRK",
  });

  const starknetBlockResponse = await starknet.sendRelay({
    method: "starknet_blockNumber",
    params: [],
  });

  console.log(starknetBlockResponse);
}

(async () => {
  await useStarknet();
})();
```

</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk");

async function useStarknet() {
  const starknet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL
      projectId: "enter_your_project_id_here",
    },
    chainIds: "STRK",
    geolocation: "2",
  });

  const starknetBlockResponse = await starknet.sendRelay({
    method: "starknet_blockNumber",
    params: [],
  });

  console.log(starknetBlockResponse);
}

(async () => {
  await useStarknet();
})();
```

</TabItem>

</Tabs>

### Output 📤

<iframe width="100%" src="/img/chains/starknet_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-starknet-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
