---
slug: /sdk-integrations
title: Library Integrations
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Integrations 🔌

## Overview 🔎

It is possible and even encouraged to use Lava with popular web3 development libraries such as [ethers.js](/ethersjs6), [web3.js](/web3js), [cosmjs](/cosmjs) and [viem](/viem). Lava integrations allow for developers to build decentralized applications (dApps) with their favorite development tools while harnessing Lava's decentralized peer-to-peer network of high quality RPC providers. There is no need to sacrifice the functionality of frequently used APIs, simply install and use the specified Lava integration while building! 

## Usage 🏗️

Taking advantage of integrations is an important way to multi-chain and decentralize your application. Due to differences in architecture, each Lava integration has its idiosyncracies. However, all of them follow the same general flow:

1. Install the supported web3 development package (i.e. `npm i viem`) in your project.
2. Install the Lava integration package into your project (i.e. `npm i @lavanet/lava-viem`)
3. Initialize the respective SDK integration object using the proper [parameters](#parameters). A chart is provided below for your reference. You must provide either a subscribed *privateKey* or a valid *badge*, but not both.

### ✔️ Required Parameters{#parameters}

The two primary fields that are necessary are a `badge`/`privateKey` to cover the cost of API calls and `chainIds` to let Lava know which chains to target. If you haven't already, you should sign up from the [Lava Gateway](https://gateway.lavanet.xyz/?utm_source=library-integrations&utm_medium=docs&utm_campaign=lava-phase-2), where you can acquire both of these with ease!

```javascript
badge: {
    badgeServerAddress: "https://badges.lavanet.xyz" //or your own URL
    projectId: ""
}

// OR

privateKey: process.env.PRIVATE_KEY

// AND

chainIds: "ETH1"
```

### 📋 All Options

There are numerous other options that can be configured while creating and initializing the Lava integration object. An exhaustive list follows:


| Option                     | Required/Optional                           | Description                                                                                                      |
| ---------------------------| --------------------------------------------| ---------------------------------------------------------------------------------------------------------------- |
| `privateKey`               | **Required**                                | The private key with active subscription to be used in lieu of a `badge.`                                                                      |
| `badge`                    | **Required**                                | Public URL of badge server and ID of the project you want to connect. Remove `privateKey` if badge is provided.  |
| `chainIds`                 | **Required**                                | The ID of the chain you want to query or an array of chain IDs (e.g., "ETH1" or ["ETH1", "LAV1"])             |
| `pairingListConfig`        | Optional                                    | The Lava pairing list config used for communicating with the Lava network. Default is [Lava-providers](https://github.com/lavanet/lava-providers)                                       |
| `network`                  | Optional                                    | The network from pairingListConfig to be used (e.g., ["mainnet", "testnet"] )                                   |
| `geolocation`              | Optional                                    | The geolocation to be used (e.g., "1" for North America, "2" for Europe -> "1" is default)                                         |
| `lavaChainId`              | Optional                                    | The Lava chain ID (default value is `lava-testnet-2' for Lava Testnet)                                                              |
| `secure`                   | Optional                                    | Communicates through HTTPS (temporary flag that will be disabled once the chain uses HTTPS by default)        |
| `allowInsecureTransport`   | Optional                                    | Indicates to use an insecure transport when connecting the provider, for testing purposes only                  |
| `logLevel`                 | Optional                                    | Log level settings (e.g., "debug", "info", "warn", "error", "success", "NoPrints")                              |
| `transport`                | Optional                                    | Transport settings for changing the method of transport                                                     |
| `providerOptimizerStrategy`| Optional                                    | The strategy to use to pick providers (default: balanced)                                                        |
| `maxConcurrentProviders`   | Optional                                    | The maximum number of providers to use concurrently (default: 3)                                                 |


:::tip

You can optionally pull in an object containing all of these fields with the following code:

```javascript
import { LavaSDKOptions } from "@lavanet/lava-sdk"
```

This will require installing `@lavanet/lava-sdk` as a dependency!

:::

## Repository 🛠️

![github](/img/github_favicon.ico) [github](https://github.com/lavanet/lava-sdk-providers/):

```
lavanet/lava-sdk-providers
```
