---
slug: /juno-dev
title: Getting Juno RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Juno RPC

## API Reference

<Tabs>
<TabItems value="REST/HTTP" label="REST/HTTP">
<Tabs>
<TabItems value="cURL" label="cURL">

```shell
curl -X GET -H "Content-Type: application/json" https://g.w.lavanet.xyz:443/gateway/jun1/rest/3dc655f970c930f1d3e78ee71beece18/cosmos/base/tendermint/v1beta1/blocks/latest
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install requests
import requests

url = "https://g.w.lavanet.xyz:443/gateway/jun1/rest/3dc655f970c930f1d3e78ee71beece18/cosmos/base/tendermint/v1beta1/blocks/latest"
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
//npm i axios
const axios = require("axios");

const url =
  "https://g.w.lavanet.xyz:443/gateway/jun1/rest/3dc655f970c930f1d3e78ee71beece18/cosmos/base/tendermint/v1beta1/blocks/latest";

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

<TabItems value="URI/HTTP" label="URI/HTTP">
<Tabs>
<TabItems value="cURL" label="cURL">

```shell
curl -X GET -H "Content-Type: application/json" https://g.w.lavanet.xyz:443/gateway/jun1/rpc-http/3dc655f970c930f1d3e78ee71beece18/status?
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install websockets asyncio
import requests

url = "https://g.w.lavanet.xyz:443/gateway/jun1/rpc-http/3dc655f970c930f1d3e78ee71beece18/status"
headers = {
    "Content-Type": "application/json",
}

try:
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # Check if the request was successful
    data = response.json()
    print("Status Response:", data)
except requests.exceptions.RequestException as e:
    print(f"Error fetching status: {e}")

```

 </TabItems>
<TabItems value="NodeJS" label="NodeJS">

```jsx
// npm i ws
const axios = require("axios");

const url =
  "https://g.w.lavanet.xyz:443/gateway/jun1/rpc-http/3dc655f970c930f1d3e78ee71beece18/status";

async function fetchStatus() {
  try {
    const response = await axios.get(url, {
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
<TabItems value="TENDERMINT/HTTP" label="TENDERMINT/HTTP">
<Tabs>
<TabItems value="cURL" label="cURL">

```shell
curl -X POST -H "Content-Type: application/json" https://g.w.lavanet.xyz:443/gateway/jun1/rpc-http/3dc655f970c930f1d3e78ee71beece18 --data '{"jsonrpc": "2.0", "id": 1, "method": "status", "params": []}'
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install websockets asyncio
import requests
import json

url = "https://g.w.lavanet.xyz:443/gateway/jun1/rpc-http/3dc655f970c930f1d3e78ee71beece18"
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
// npm i ws
const axios = require("axios");

const url =
  "https://g.w.lavanet.xyz:443/gateway/jun1/rpc-http/3dc655f970c930f1d3e78ee71beece18";
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
wscat -c wss://g.w.lavanet.xyz:443/gateway/jun1/rpc/3dc655f970c930f1d3e78ee71beece18?secret=null -x '{"jsonrpc": "2.0", "id": 1, "method": "status", "params": []}	'
```

</TabItems>
<TabItems value="Python" label="Python">

```python
# pip install websockets asyncio
import asyncio
import websockets
import json

# WebSocket URL and JSON-RPC request payload
url = "wss://g.w.lavanet.xyz:443/gateway/jun1/rpc/3dc655f970c930f1d3e78ee71beece18?secret=null"
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
  "wss://g.w.lavanet.xyz:443/gateway/jun1/rpc/3dc655f970c930f1d3e78ee71beece18?secret=null";
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

## [Gateway](https://gateway.lavanet.xyz/?utm_source=juno-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

<video width="100%" height="100%" controls><source src="/img/chains/junovideodemo.mp4" type="video/mp4"></source></video>

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=juno-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution

Lava SDK is currently in Alpha. Please observe the documentation on both [frontend](https://docs.lavanet.xyz/sdk-frontend?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=docs-to-docs) and [backend](https://docs.lavanet.xyz/sdk-backend?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=docs-to-docs) use before getting started.

:::

### Input 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk");

async function useJunoTestnet() {
  const junoTestnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainIds: "JUNT1",
  });

  const junoBlockResponse = await junoTestnet.sendRelay({
    method: "block",
    params: ["82500"],
  });

  console.log(junoBlockResponse);
}

(async () => {
  await useJunoTestnet();
})();
```

</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk");

async function useJunoTestnet() {
  const junoTestnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL
      projectId: "enter_your_project_id_here",
    },
    chainIds: "JUNT1",
  });

  const junoBlockResponse = await junoTestnet.sendRelay({
    method: "block",
    params: ["82500"],
  });

  console.log(junoBlockResponse);
}

(async () => {
  await useJunoTestnet();
})();
```

</TabItem>
</Tabs>

### Output 📤

<iframe width="100%" src="/img/chains/juno_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
