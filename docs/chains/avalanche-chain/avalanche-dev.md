---
slug: /avalanche-dev
title: Getting Avalanche RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Avalanche RPC

## API Reference

<Tabs>
<TabItems value="JSONRPC/REST" label="JSONRPC / REST">
<Tabs>
<TabItems value="cURL" label="cURL">

```shell
curl -X POST -H "Content-Type: application/json" https://g.w.lavanet.xyz:443/gateway/avax/rpc-http/3dc655f970c930f1d3e78ee71beece18 --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install requests

import requests
import json

url = "https://g.w.lavanet.xyz:443/gateway/avax/rpc-http/3dc655f970c930f1d3e78ee71beece18"
request_payload = {
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 1,
}

try:
    headers = {"Content-Type": "application/json"}
    response = requests.post(url, headers=headers, data=json.dumps(request_payload))
    response.raise_for_status()  # Check if the request was successful
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
  "https://g.w.lavanet.xyz:443/gateway/avax/rpc-http/3dc655f970c930f1d3e78ee71beece18";
const requestPayload = {
  jsonrpc: "2.0",
  method: "eth_blockNumber",
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
<TabItems value="JSONRPC/WEBSOCKET" label="JSONRPC / WEBSOCKET">
<Tabs>
<TabItems value="wscat" label="WSCAT">

```shell
wscat -c wss://g.w.lavanet.xyz:443/gateway/avax/rpc/3dc655f970c930f1d3e78ee71beece18?secret=null -x '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install websockets asyncio
import asyncio
import websockets
import json

# WebSocket URL and request payload
url = "wss://g.w.lavanet.xyz:443/gateway/avax/rpc/3dc655f970c930f1d3e78ee71beece18?secret=null"
request_payload = {
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 1,
}

async def fetch_block_number():
    try:
        async with websockets.connect(url) as websocket:
            print("WebSocket connection opened.")
            # Send the JSON-RPC request payload
            await websocket.send(json.dumps(request_payload))

            # Receive the response
            response = await websocket.recv()
            print("Received response:", response)
    except Exception as e:
        print("Error:", e)

# Run the async function
asyncio.run(fetch_block_number())

```

 </TabItems>
<TabItems value="NodeJS" label="NodeJS">

```jsx
// npm i ws
const WebSocket = require("ws");

// WebSocket URL and JSON-RPC request payload
const url =
  "wss://g.w.lavanet.xyz:443/gateway/avax/rpc/3dc655f970c930f1d3e78ee71beece18?secret=null";
const requestPayload = {
  jsonrpc: "2.0",
  method: "eth_blockNumber",
  params: [],
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

## [Gateway](https://gateway.lavanet.xyz/?utm_source=avalanche-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=avalanche-dev&utm_medium=docs&utm_campaign=docs-to-docs)

## [SDK](https://github.com/lavanet/lava-sdk)

### Input 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk");

async function useAvalancheMainnet() {
  const avalancheMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainIds: "AVAX",
  });

  const avalancheBlockResponse = await avalancheMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(avalancheBlockResponse);
}

(async () => {
  await useAvalancheMainnet();
})();
```

</TabItem>

<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk");

async function useAvalancheMainnet() {
  const avalancheMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL
      projectId: "enter_your_project_id_here",
    },
    chainIds: "AVAX",
    geolocation: "2",
  });

  const avalancheBlockResponse = await avalancheMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(avalancheBlockResponse);
}

(async () => {
  await useAvalancheMainnet();
})();
```

</TabItem>
</Tabs>

### Output 📤

<iframe width="100%" src="/img/chains/avalanche_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-avalanche-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
