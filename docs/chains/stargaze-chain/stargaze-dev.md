---
slug: /stargaze-dev
title: Getting Stargaze RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Stargaze RPC

## Stargaze ipRPC 🌌

### Mainnet 🌐

| Service 🔌                    | URL 🔗                                           |
| ----------------------------- | ------------------------------------------------ |
| 🟢 tendermint-rpc             | <https://strgz.tendermintrpc.lava.build>         |
| 🟢 tendermint-rpc / websocket | <wss://strgz.tendermintrpc.lava.build/websocket> |
| 🟢 rest                       | <https://strgz.lava.build>                       |
| 🟢 grpc                       | strgz.grpc.lava.build                            |

### Testnet 🧪

| Service 🔌                    | URL 🔗                                            |
| ----------------------------- | ------------------------------------------------- |
| 🟢 tendermint-rpc             | <https://strgzt.tendermintrpc.lava.build>         |
| 🟢 tendermint-rpc / websocket | <wss://strgzt.tendermintrpc.lava.build/websocket> |
| 🟢 rest                       | <https://strgzt.lava.build>                       |
| 🟢 grpc                       | strgzt.grpc.lava.build                            |

## API Reference

<Tabs>
<TabItems value="REST/HTTP" label="REST/HTTP">
<Tabs>
<TabItems value="cURL" label="cURL">

```shell
curl -X GET -H "Content-Type: application/json" https://g.w.lavanet.xyz:443/gateway/strgz/rest/3dc655f970c930f1d3e78ee71beece18/cosmos/base/tendermint/v1beta1/blocks/latest
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install requests

import requests

url = "https://g.w.lavanet.xyz:443/gateway/strgz/rest/3dc655f970c930f1d3e78ee71beece18/cosmos/base/tendermint/v1beta1/blocks/latest"
headers = {
    "Content-Type": "application/json",
}

try:
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # Check if the request was successful
    data = response.json()
    print("Latest Block Data:", data)
except requests.exceptions.RequestException as e:
    print(f"Error fetching latest block data: {e}")

```

 </TabItems>
<TabItems value="NodeJS" label="NodeJS">

```jsx
// npm i axios
const axios = require("axios");

const url =
  "https://g.w.lavanet.xyz:443/gateway/strgz/rest/3dc655f970c930f1d3e78ee71beece18/cosmos/base/tendermint/v1beta1/blocks/latest";

async function fetchLatestBlock() {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Latest Block Data:", response.data);
  } catch (error) {
    console.error("Error fetching latest block data:", error.message);
  }
}

fetchLatestBlock();
```

 </TabItems>

</Tabs>
</TabItems>

<TabItems value="TENDERMINT/HTTP" label="TENDERMINT/HTTP">
<Tabs>
<TabItems value="cURL" label="cURL">

```shell
curl -X POST -H "Content-Type: application/json" https://g.w.lavanet.xyz:443/gateway/strgz/tendermint-rpc-http/3dc655f970c930f1d3e78ee71beece18 --data '{"jsonrpc": "2.0", "id": 1, "method": "status", "params": []}'
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install requests
import requests
import json

url = "https://g.w.lavanet.xyz:443/gateway/strgz/tendermint-rpc-http/3dc655f970c930f1d3e78ee71beece18"
request_payload = {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "status",
    "params": [],
}

try:
    headers = {"Content-Type": "application/json"}
    response = requests.post(url, headers=headers, data=json.dumps(request_payload))
    response.raise_for_status()  # Check for HTTP errors
    data = response.json()
    print("Status Response:", data)
except requests.exceptions.RequestException as e:
    print(f"Error fetching status: {e}")

```

 </TabItems>
<TabItems value="NodeJS" label="NodeJS">

```jsx
// npm i axios
const axios = require("axios");

const url =
  "https://g.w.lavanet.xyz:443/gateway/strgz/tendermint-rpc-http/3dc655f970c930f1d3e78ee71beece18";
const requestPayload = {
  jsonrpc: "2.0",
  id: 1,
  method: "status",
  params: [],
};

async function fetchStatus() {
  try {
    const response = await axios.post(url, requestPayload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Status Response:", response.data);
  } catch (error) {
    console.error("Error fetching status:", error.message);
  }
}

fetchStatus();
```

 </TabItems>

</Tabs></TabItems>
<TabItems value="TENDERMINT/WEBSOCKET" label="TENDERMINT/WEBSOCKET">
<Tabs>
<TabItems value="WSCAT" label="WSCAT">

```shell
wscat -c wss://g.w.lavanet.xyz:443/gateway/strgz/tendermint-rpc/3dc655f970c930f1d3e78ee71beece18?secret=null -x '{"jsonrpc": "2.0", "id": 1, "method": "status", "params": []}'
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install websockets asyncio
import asyncio
import websockets
import json

# WebSocket URL and JSON-RPC request payload
url = "wss://g.w.lavanet.xyz:443/gateway/strgz/tendermint-rpc/3dc655f970c930f1d3e78ee71beece18?secret=null"
request_payload = {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "status",
    "params": [],
}

async def fetch_status():
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
asyncio.run(fetch_status())

```

 </TabItems>
<TabItems value="NodeJS" label="NodeJS">

```jsx
// npm i ws
const WebSocket = require("ws");

// WebSocket URL and JSON-RPC request payload
const url =
  "wss://g.w.lavanet.xyz:443/gateway/strgz/tendermint-rpc/3dc655f970c930f1d3e78ee71beece18?secret=null";
const requestPayload = {
  jsonrpc: "2.0",
  id: 1,
  method: "status",
  params: [],
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

## [Gateway](https://gateway.lavanet.xyz/?utm_source=stargaze-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway, visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=stargaze-dev&utm_medium=docs&utm_campaign=docs-to-docs).

<hr />
<br />
