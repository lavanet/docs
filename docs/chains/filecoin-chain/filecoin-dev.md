---
slug: /filecoin-dev
title: Getting Filecoin RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Filecoin RPC

## Filecoin ipRPC 🪙

Lava🌋 now offers incentivized public RPC for Filecoin. Developers can get free, public endpoints for all.

### Mainnet 🌐

| Service 🔌                    | URL 🔗                                         |
| ----------------------------- | ---------------------------------------------- |
| 🟢 json-rpc                   | https://filecoin.lava.build                    |


### Testnet 🧪

| Service 🔌                    | URL 🔗                                        |
| ----------------------------- | --------------------------------------------- |
| 🟢 json-rpc                   | https://filecoin-testnet.lava.build           |



<br />
<hr />

## API Reference

<Tabs>
<TabItems value="JSONRPC/HTTP" label="JSONRPC/HTTP">
<Tabs>
<TabItems value="cURL" label="cURL">

```shell
curl -X POST -H "Content-Type: application/json" https://g.w.lavanet.xyz:443/gateway/fvm/rpc-http/3dc655f970c930f1d3e78ee71beece18 --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install requests
import requests
import json

# URL for the FVM RPC HTTP endpoint
url = "https://g.w.lavanet.xyz:443/gateway/fvm/rpc-http/3dc655f970c930f1d3e78ee71beece18"
# JSON-RPC request payload
request_payload = {
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 1,
}

try:
    headers = {"Content-Type": "application/json"}
    # Sending POST request
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
//npm i axios
const axios = require("axios");

// URL for the FVM RPC HTTP endpoint
const url =
  "https://g.w.lavanet.xyz:443/gateway/fvm/rpc-http/3dc655f970c930f1d3e78ee71beece18";
// JSON-RPC request payload
const requestPayload = {
  jsonrpc: "2.0",
  method: "eth_blockNumber",
  params: [],
  id: 1,
};

async function fetchBlockNumber() {
  try {
    // Sending POST request
    const response = await axios.post(url, requestPayload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Logging the response
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
<TabItems value="JSONRPC/WEBSOCKET" label="JSONRPC/WEBSOCKET">
<Tabs>
<TabItems value="WSCAT" label="WSCAT">

```shell
wscat -c wss://g.w.lavanet.xyz:443/gateway/fvm/rpc/3dc655f970c930f1d3e78ee71beece18?secret=null -x '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install asyncio websockets
import asyncio
import websockets
import json

# WebSocket URL and JSON-RPC request payload
url = "wss://g.w.lavanet.xyz:443/gateway/fvm/rpc/3dc655f970c930f1d3e78ee71beece18?secret=null"
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
//npm i ws
const WebSocket = require("ws");

// WebSocket URL and JSON-RPC request payload
const url =
  "wss://g.w.lavanet.xyz:443/gateway/fvm/rpc/3dc655f970c930f1d3e78ee71beece18?secret=null";
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

## [Gateway](https://gateway.lavanet.xyz/?utm_source=filecoin-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=filecoin-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />

## [SDK](https://github.com/lavanet/lava-sdk)

### Input 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk");

async function useFilecoinMainnet() {
  const filecoinMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainIds: "FVM",
  });

  const filecoinBlockResponse = await filecoinMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(filecoinBlockResponse);
}

(async () => {
  await useFilecoinMainnet();
})();
```

</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk");

async function useFilecoinMainnet() {
  const filecoinMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL
      projectId: "enter_your_project_id_here",
    },
    chainIds: "FVM",
  });

  const filecoinBlockResponse = await filecoinMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(filecoinBlockResponse);
}

(async () => {
  await useFilecoinMainnet();
})();
```

</TabItem>
</Tabs>

### Output 📤

<iframe width="100%" src="/img/chains/filecoin_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-filecoin-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
