---
slug: /access-sdk
title: SDK on Lava Testnet
---

# Lava SDK (Beta)

## Overview 🔎

The **Lava-SDK** is a powerful JavaScript/TypeScript library designed for developers. It enables decentralized access to all chains supported by the Lava ecosystem and can be used both in server and browser environments. By importing Lava-SDK into a project, developers can easily interact with multiple blockchains and build decentralized applications.


![github](/img/github_favicon.ico) [github](https://github.com/lavanet/lava/tree/main/ecosystem/lava-sdk):

```
lavanet/lava/ecosystem/lava-sdk
```

![npm](/img/npm_favicon.ico) [npm](https://www.npmjs.com/package/@lavanet/lava-sdk):

```
@lavanet/lava-sdk
```

## Prerequisites 📋

Lava SDK setup requires additional steps at the moment, but we're working on minimizing prerequisites as we progress towards Mainnet. The recommended flow is as follows:

1. Create an account on the [Lava Gateway](https://gateway.lavanet.xyz?utm_source=access-sdk-page&utm_medium=docs) 🎫

2. Install `@lavanet/lava-sdk` into your local project repository ! 📥 

4. Decide whether you'll be doing [frontend](/sdk-frontend) or [backend](/sdk-backend) 🏭

3. Add a public key to the Lava Gateway or use your auto-generated badge from Lava's badge server! 🔑 📛
 

## Repositories 🔧

📦 [Lava-SDK](https://github.com/lavanet/lava-sdk): implementation of the Lava SDK library. This repository provides the core functionality for developers to interact with multiple blockchain networks in a decentralized manner.

📦 [Lava-SDK-providers](https://github.com/lavanet/lava-sdk-providers/tree/feature/implement_ethersjs_provider): contains implementations of providers for various third-party libraries used for accessing blockchains using Lava SDK's underlying functionality. Lava-SDK-providers currently supports ethers.js, web3.js, cosmjs, and viem integrations and we plan to add support for even more blockchain libraries and web3 APIs in the future.

📦 [Lava-providers](https://github.com/lavanet/lava-providers): contains `sdkSeedProviders.json`, a resource for LavaSDK to discover the first providers to connect to access initial Pairing data.
