---
slug: /gateway-getting-started
title: Getting Started with Lava Gateway 🔥
---
# Getting Started with Lava Gateway 🔥

Getting started with our Lava gateway is simple! You can access our Lava gateway at any time: [gateway.lavanet.xyz](https://accounts.lavanet.xyz/register?utm_source=getting-started-with-lava-gateway&utm_medium=docs). You are only a few clicks away from fast, available, and accountable RPC.

## 🎥 Video Demonstration (~7m) 

<video width="100%" height="100%" controls><source src="/img/tutorial/gateway/gateway_getting_started.mp4" type="video/mp4"></source></video>

<br /> <br />
<hr />
<br />

## 📝 Written Guide (~5m)

### Create an Account

If you’re stumped about how to get started — don’t worry at all! It’s as simple as putting in your credentials or creating an account at [gateway.lavanet.xyz/](https://accounts.lavanet.xyz/register?utm_source=getting-started-with-lava-gateway&utm_medium=docs) . 

![CreateAccountScreenshot](/img/tutorial/gateway/create_account_screenshot.png)

### Create a Project

Once logged in you will be able to create a project! Here the gateway will prompt you to give a Project name for your project and select which APIs are to be used. You can select any and all that will be needed for RPC calls in your project.

![CreateProjectScreenshot](/img/tutorial/gateway/create_project_screenshot.png)


### Select your API Access (RPC)

After filling in the Project Name and desired API access - your RPC node endpoints will be available for use on the respective networks you selected. As in the example below, you can see that new API access can be added at any time, or API access can be revoked by simply clicking the trashcan next to the one you want to get rid of - it’s that easy!

![APIAccessScreenshot](/img/tutorial/gateway/api_access_screenshot.png)

### Set your Security Controls

Of course, safety first! Once you have access to the endpoints, it would be wise to secure them. You can select Settings at the top of the Project Management screen and enable a Secret Key or JWT Tokens to limit who can access your endpoints. This will ensure that they are not wrongly accessed or hit too many times. It should be noted that, because these endpoints are available for free, they are rate-limited.

![SecurityControlsScreenshot](/img/tutorial/gateway/security_controls_screenshot.png)


### Pull your Endpoint

By the way, each network has a different number of interfaces that can be queried. As seen below, the Ethereum RPC can accept calls from both JSONRPC through HTTP and JSONRPC through WebSockets, whereas Lava accepts REST, URI, Tendermint and Tendermint using Websockets. You will notice that on Lava gateway, no matter which chains you select, we support a multitude of interfaces.

![EthereumAccessScreenshot](/img/tutorial/gateway/eth_access_screenshot.png)

![LavaAccessScreenshot](/img/tutorial/gateway/lava_access_screenshot.png)

We even support Cosmos Hub on multiple interfaces!!🚀

![CosmosAccessScreenshot](/img/tutorial/gateway/cosmoshub_access_screenshot.png)

The magic is that all of these endpoint addresses are plug-and-play! You can take any address, plug it into Web3.js, Ether.js, and Gaia, and use it seamlessly. Enjoy fast and free RPC!