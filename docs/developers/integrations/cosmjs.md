---
slug: /cosmjs
title: cosmjs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CosmJSLogo from '/static/img/tutorial/integrations/cosmjs-logo-vertical-dark.png';

# 

<center>
<img src={CosmJSLogo} width="150"/>
</center>


![npm](/img/npm_favicon.ico) [npm](https://www.npmjs.com/package/@lavanet/lava-cosmjs):

```
npm i @lavanet/lava-cosmjs
```

<Tabs>
<TabItem value='cosmjs-opt1' label='create()'>


```javascript
const { Tendermint37Client } = require("@cosmjs/tendermint-rpc");
const { LavaCosmJsRPCClient } = require("@lavanet/lava-cosmjs");

async function getAbciInfo() {

  //LavaCosmJsRPCClient is initialized upon calling create()
    const client = await LavaCosmJsRPCClient.create({
        // privatekey or badge must be supplied
        badge: {
            badgeServerAddress: "https://badges.lavanet.xyz",
            projectId: "//" //login to gateway.lavanet.xyz to get a projectId!
        },
        chainIds: "LAV1",
        lavaChainId: "lava-testnet-2",
        geolocation: "1", //optional
    })

    const client = await Tendermint37Client.create(client);

    console.log(client.abciInfo());    
}

```

</TabItem>

<TabItem value='cosmjs-opt2' label='new() ...init()'>

```javascript
const { Tendermint37Client } = require("@cosmjs/tendermint-rpc");
const { LavaCosmJsRPCClient } = require("@lavanet/lava-cosmjs");

async function getAbciInfo() {

  //LavaCosmJsRPCClient is initialized by calling init() after new()
    const client = new LavaCosmJsRPCClient({
        // privatekey or badge must be supplied
        badge: {
            badgeServerAddress: "https://badges.lavanet.xyz",
            projectId: "//" //login to gateway.lavanet.xyz to get a projectId!
        },
        chainIds: "LAV1",
        lavaChainId: "lava-testnet-2",
        geolocation: "1", //optional
    })

    //client is initialized at the following call
    await client.init()
    const cosmJS = Tendermint37Client.create(client);

    console.log(cosmJS.abciInfo());    
}

```

</TabItem>

<TabItem value='cosmjs-opt3' label='new()...relay'>

```javascript
const { Tendermint37Client } = require("@cosmjs/tendermint-rpc");
const { LavaCosmJsRPCClient } = require("@lavanet/lava-cosmjs");

async function getAbciInfo() {

  //LavaCosmJsRPCClient is initialized at first relay
    const client = new LavaCosmJsRPCClient({
        // privatekey or badge must be supplied
        badge: {
            badgeServerAddress: "https://badges.lavanet.xyz",
            projectId: "//" //login to gateway.lavanet.xyz to get a projectId!
        },
        chainIds: "LAV1",
        lavaChainId: "lava-testnet-2",
        geolocation: "1", //optional
    })

    const client = Tendermint37Client.create(client);

    //client is initialized at the following call
    console.log(client.abciInfo());    
}

```

</TabItem>
</Tabs>

❓ Looking for more examples? Check out the [examples](https://github.com/lavanet/lava-sdk-providers/tree/main/cosmjs/examples) folder on our repository.