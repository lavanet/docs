---
slug: /near-dev
title: Getting NEAR RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting NEAR RPC

## NEAR ipRPC 🪙

Lava🌋 offers incentivized public RPC for NEAR. Developers can get free, public endpoints for all.

### Mainnet 🌐

| Service 🔌  | URL 🔗                    |
| ----------- | ------------------------- |
| 🟢 json-rpc | <https://near.lava.build> |

### Testnet 🧪

| Service 🔌  | URL 🔗                            |
| ----------- | --------------------------------- |
| 🟢 json-rpc | <https://near-testnet.lava.build> |

<hr />

## API Reference

<Tabs>
<TabItems value="JSONRPC/HTTP" label="JSONRPC/HTTP">
<Tabs>
<TabItems value="cURL" label="cURL">

```shell
curl -X POST -H "Content-Type: application/json" https://g.w.lavanet.xyz:443/gateway/near/rpc-http/3dc655f970c930f1d3e78ee71beece18 --data '{"jsonrpc":"2.0","method":"block","params":{"finality":"final"},"id":1}'
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install requests

import requests
import json

url = "https://g.w.lavanet.xyz:443/gateway/near/rpc-http/3dc655f970c930f1d3e78ee71beece18"
request_payload = {
    "jsonrpc": "2.0",
    "method": "block",
    "params": {
        "finality": "final"
    },
    "id": 1,
}

try:
    headers = {"Content-Type": "application/json"}
    response = requests.post(url, headers=headers, data=json.dumps(request_payload))
    response.raise_for_status()  # Check for HTTP errors
    data = response.json()
    print("Block Response:", data)
except requests.exceptions.RequestException as e:
    print(f"Error fetching block: {e}")

```

 </TabItems>
<TabItems value="NodeJS" label="NodeJS">

```jsx
// npm i axios

const axios = require("axios");

const url =
  "https://g.w.lavanet.xyz:443/gateway/near/rpc-http/3dc655f970c930f1d3e78ee71beece18";
const requestPayload = {
  jsonrpc: "2.0",
  method: "block",
  params: {
    finality: "final",
  },
  id: 1,
};

async function fetchBlock() {
  try {
    const response = await axios.post(url, requestPayload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Block Response:", response.data);
  } catch (error) {
    console.error("Error fetching block:", error.message);
  }
}

fetchBlock();
```

 </TabItems>

</Tabs>
</TabItems>
<TabItems value="JSONRPC/WEBSOCKET" label="JSONRPC/WEBSOCKET">
<Tabs>
<TabItems value="WSCAT" label="WSCAT">

```shell
wscat -c wss://g.w.lavanet.xyz:443/gateway/near/rpc/3dc655f970c930f1d3e78ee71beece18?secret=null -x '{"jsonrpc":"2.0","method":"block","params":{"finality":"final"},"id":1}'
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install websockets asyncio

import asyncio
import websockets
import json

# WebSocket URL and request payload
url = "wss://g.w.lavanet.xyz:443/gateway/near/rpc/3dc655f970c930f1d3e78ee71beece18?secret=null"
request_payload = {
    "jsonrpc": "2.0",
    "method": "block",
    "params": {
        "finality": "final"
    },
    "id": 1,
}

async def fetch_block():
    try:
        async with websockets.connect(url) as websocket:
            print("WebSocket connection opened.")
            # Send the JSON-RPC request
            await websocket.send(json.dumps(request_payload))

            # Receive the response
            response = await websocket.recv()
            print("Received response:", response)
    except Exception as e:
        print("Error:", e)

# Run the async function
asyncio.run(fetch_block())

```

 </TabItems>
<TabItems value="NodeJS" label="NodeJS">

```jsx
// npm i ws

const WebSocket = require("ws");

// WebSocket URL and request payload
const url =
  "wss://g.w.lavanet.xyz:443/gateway/near/rpc/3dc655f970c930f1d3e78ee71beece18?secret=null";
const requestPayload = {
  jsonrpc: "2.0",
  method: "block",
  params: {
    finality: "final",
  },
  id: 1,
};

const ws = new WebSocket(url);

// Open the WebSocket connection
ws.on("open", () => {
  console.log("WebSocket connection opened.");
  // Send the JSON-RPC request
  ws.send(JSON.stringify(requestPayload));
});

// Listen for the response message
ws.on("message", (message) => {
  console.log("Received response:", message.toString());
  ws.close();
});

// Handle WebSocket errors
ws.on("error", (error) => {
  console.error("WebSocket error:", error.message);
});

// Handle connection closure
ws.on("close", () => {
  console.log("WebSocket connection closed.");
});
```

 </TabItems>

</Tabs></TabItems>

</Tabs>

<hr/>

## [Gateway](https://gateway.lavanet.xyz/?utm_source=NEAR-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=NEAR-dev&utm_medium=docs&utm_campaign=docs-to-docs)

## [SDK](https://github.com/lavanet/lava-sdk)

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-NEAR-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

### Input 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk");

async function useNEARMainnet() {
  const nearMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainIds: "NEAR",
  });

  const nearBlockResponse = await nearMainnet.sendRelay({
    method: "block",
    params: { finality: "final" },
    rpcInterface: "jsonrpc",
  });

  console.log(nearBlockResponse);
}

(async () => {
  await useNEARMainnet();
})();
```

</TabItem>

<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk");

async function useNEARMainnet() {
  const nearMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL
      projectId: "enter_your_project_id_here",
    },
    chainIds: "NEAR",
    rpcInterface: "rest",
  });

  const nearBlockResponse = await nearMainnet.sendRelay({
    method: "block",
    params: { finality: "final" },
    rpcInterface: "jsonrpc",
  });

  console.log(nearBlockResponse);
}

(async () => {
  await useNEARMainnet();
})();
```

</TabItem>
</Tabs>

### Output 📤

<iframe width="100%" src="/img/chains/near_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-near-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
