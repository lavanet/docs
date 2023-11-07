---
slug: /sdk-backend
title: Backend Use
---

# SDK Prerequisites for Backend Use

:::tip

If you are planning to use Lava for frontend development, you simply need to visit our [Gateway](https://gateway.lavanet.xyz/?utm_source=sdk-backend-page&utm_medium=docs&utm_campaign=docs-to-gateway) to get started!
 Read more about how badges make keyless frontend development safe [here](/sdk-frontend).

:::


## 1. Register for the Lava Gateway

The first step to using the Lava SDK is to register for the Lava Gateway. You will need to enter a few pieces of information and then press register. You will get an email to verify your account before you can login. If you do not see it, be sure to check your spam or junk mail folders! An account is necessary for SDK access.

<center>

👉🏿[Register now](https://gateway.lavanet.xyz/?utm_source=sdk-backend-page&utm_medium=docs&utm_campaign=docs-to-gateway) if you haven’t already!


![Gateway Register](/img/tutorial/sdk/GatewayRegister.png)

</center>

## 2. Create a Lava Address

You will need a Lava address in order to successfully use the SDK.
 A private-key, public-key pair can be generated using our [lavad](https://github.com/lavanet/lava) binary. For more information on how to create a lava address consult the [documentation](https://docs.lavanet.xyz/wallet#account).

If you already have lavad installed - you can easily generate a lava address by finding the directory of your `lavad` and entering the following command: `lavad keys add <keyname>`

<iframe width="100%" height="480" src="/img/tutorial/sdk/adding_lava_key.mp4" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


You'll need both `lava@` address and a privatekey to proceed. If you have an address that exists and no longer remember its private key, you can always use `lavad keys export <key-name> --unarmored-hex --unsafe` to see your privatekey printed as a string. Do not share the output with anyone!

Once you have an address, you can continue to the next step! You’ll need to make special note of your mnemonic so that you retain access to this key.

## 3. **Plug Address into the Gateway and Submit**

Good news! The SDK is completely free to use during Testnet. However, we need some means to fund your account. Return to the Gateway, select a Project, click Settings and select Project Keys. You'll need to enter your 

<iframe width="100%" height="480" src="/img/tutorial/sdk/sdk-gateway-integation.mp4" frameborder="0" allow="encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Be sure to enter only your public address! It will have a format starting with `lava@` followed by a series of alphanumeric characters (i.e. lava@1fk3s899lfx24…tt). It will begin syncing ASAP.

Now that you’ve completed this step, we’re one step closer!

## 4. **Wait a Few Minutes**

Presently, there is a small delay in sync time while the SDK associates your pubkey with an active subscription. This is only a temporary delay as our SDK is still in very early alpha. Our future integration will be instantaneous! Behind the scenes, the blockchain is syncing to recognize your pubkey as covered under one of our subscriptions.

<center>

![SynchingKey](/img/tutorial/sdk/SynchingKey.png)

</center>

## **Get Started**

After as little as 1 minute - you should be good. 

Now, you’re ready to go! Install lava-sdk using `npm install` command in the directory of your project and import the test code. Lava SDK is currently safe only on backends, where you’re certain your secrets can’t be exposed. You can change protocols (REST, Tendermint, URI, Websockets) and see how that affects your code!

![SDKGatewayCode](/img/tutorial/sdk/SDKGWCode.png)

Continue onto our [Getting Started with the SDK guide](/sdk-getting-started) if you’re interested in building out an example or if you want to learn more about using our SDK!