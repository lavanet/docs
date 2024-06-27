---
slug: /sdk-backend
title: Backend Use 🛡️
---

# Using LavaSDK


## 🛡️ The Backend

☠️ **The Problem**:   Making calls to API providers is computationally expensive. Creating a backend application requires generating a private key locally and maintaining a sufficient balance to make calls on multiple chains.

✅ **The Solution**:  Lava simplifies multi-chain backend development with free [subscriptions](/subscriptions) on all projects through our gateway. Lava allows any user to sign up to the gateway. A default subscription is provided courtesy of Lava and requires no additional configurations. This subscription is rate-limited but should be substantial enough for many use cases.

🚀 **Get Started**:  You can get started right from the [Lava Gateway](https://gateway.lavanet.xyz/?utm_source=sdk-backend-page&utm_medium=docs&utm_campaign=docs-to-gateway)! We recognize that a hosted solution for project/subscription management is not ideal for all users and some may want more granular control of subscriptions or limits. Users who are interested in self-custodial project management should learn more about [subscriptions](/subscriptions).



## ↪️ Recommended Flow

Although you can subscribe your private key from the commandline, the easiest way to get started is through Lava's Gateway. 
1. Sign up to the Gateway. 👉🏿[Register now](https://gateway.lavanet.xyz/?utm_source=sdk-backend-page&utm_medium=docs&utm_campaign=docs-to-gateway) if you haven’t already!

2. Create a Project and Select your APIs!

3. Go to Settings -> Project Keys

4. Click `Add New Key` and decide whether you want to `Generate a new Key` or `Add a public Key`

5. Give a moment for your key to sync! 

![SynchingKey](/img/tutorial/sdk/SynchingKey.png)

6. Install the SDK into your project -> `npm install @lavanet-lava-sdk`

7. Select any of your API accesses (LavaSDK -> `Use in BackEnd`) & copy & paste your code snippet into your code.

<br/>

## 🔑 Manual Key Creation

 A private-key, public-key pair can also be generated using our [`lavad`](https://github.com/lavanet/lava) binary. The [installation guide](/install-lava) can be very helpful for users looking to use `lavad`.For more information on how to create a lava address consult the [existing documentation](https://docs.lavanet.xyz/wallet#account).

If you already have `lavad` installed - you can easily generate a lava address by entering the following command: `lavad keys add <keyname>`

<iframe width="100%" height="480" src="/img/tutorial/sdk/adding_lava_key.mp4" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 If you have an address that exists and no longer remember its private key, you can always use `lavad keys export <key-name> --unarmored-hex --unsafe` to see your privatekey printed as a string. Do not share the output with anyone!

🚀  Your private-key, public-key pair can be used for backend development provided you have a subscription!