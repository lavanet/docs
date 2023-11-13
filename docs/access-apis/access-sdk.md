---
slug: /access-sdk
title: SDK
---

# Lava SDK

**🌋 Programmatic, decentralized access to any Web3 API, from anywhere, the Lava way 😉**

The **Lava-SDK** is a powerful JavaScript/TypeScript library designed for developers. It enables decentralized access to all chains supported by the Lava ecosystem and can be used both in server and browser environments. By importing Lava-SDK into a project, developers can easily interact with various blockchains and build decentralized applications.

### Prerequisites

Lava SDK setup requires additional steps at the moment, but we're working on minimizing prerequisites as we progress towards Mainnet. The recommended flow is as follows:

1. Create an account on the [Lava Gateway](https://gateway.lavanet.xyz?utm_source=access-sdk-page&utm_medium=docs)

2. Install `@lavanet/lava-sdk` into your local project repository !

4. Decide whether you'll be doing [frontend](/sdk-frontend) or [backend](/sdk-backend)

3. Add a public key to the Lava Gateway or use your auto-generated badge from Lava's badge server!


### Overview

![Lava SDK](/img/lava-sdk.png)

1. [Lava-SDK](https://github.com/lavanet/lava-sdk): implementation of the Lava SDK library. This repository provides the core functionality for developers to interact with various blockchain networks in a decentralized manner.

In addition to the core Lava-SDK library, the Lava ecosystem has several other open-source GitHub repositories that extend its functionality. These include:

1. [Lava-SDK-providers](https://github.com/lavanet/lava-sdk-providers/tree/feature/implement_ethersjs_provider): contains implementations of providers for various third-party libraries used for accessing blockchains using Lava SDK. Lava-SDK-providers currently supports ethers.js implementation and we plan to add support for even more blockchain libraries in the future.
2. [Lava-SDK-playground](https://github.com/lavanet/lava-sdk-playground): a playground for the Lava SDK. It provides a simple Node.js application with Lava SDK imported, allowing you to run scripts and test requests to the Lava network. Use this repository to experiment with Lava SDK on the server.
3. [Lava-SDK-demo](https://github.com/lavanet/lava_sdk_demo): a playground for the Lava SDK. It provides a simple React application with Lava SDK imported, allowing you to test Lava-SDK in the demo browser app. Use this repository to experiment with Lava SDK on browser
4. [Lava-providers](https://github.com/lavanet/lava-providers): contains `sdkSeedProviders.json`, a resource for Lava Access SDK to discover the first providers to connect to access initial Pairing data.

### Demo applications

Demo applications are a great way to showcase the usage of Lava SDK libraries in existing apps, and our team is always on the lookout for opportunities to integrate Lava SDK into open source projects. Currently, we have integrated Lava SDK into the following application(s):

1. [full-stack-ethereum](https://github.com/lavanet/full-stack-ethereum):
   This application uses ethers.js providers to communicate with EVM-compatible networks, and we have replaced the official ethers.js provider with our LavaEthersProvider. By using LavaEthersProvider, developers have decentralized access to all chains supported by the Lava ecosystem.
