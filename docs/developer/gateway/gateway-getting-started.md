---
slug: /gateway-getting-started
title: 开始 ⚡ 
---
# 开始使用 Lava Gateway 🔥

开始使用我们的 Lava 网关非常简单！您可以随时访问我们的 Lava 网关： [gateway.lavanet.xyz](https://accounts.lavanet.xyz/register?utm_source=getting-started-with-lava-gateway&utm_medium=docs&utm_campaign=docs-to-gateway)。您只需点击几下，就能获得快速、可用和负责任的 RPC。

## 🎥 视频演示 (~7m) 

<video width="100%" height="100%" controls><source src="/img/tutorial/gateway/gateway_getting_started.mp4" type="video/mp4"></source></video>

<br /> <br />
<hr />
<br />

## 📝 书面指南 (~5m)

### 创建账户

如果您不知道如何开始，完全不用担心！只需在 [gateway.lavanet.xyz/](https://accounts.lavanet.xyz/register?utm_source=getting-started-with-lava-gateway&utm_medium=docs&utm_campaign=docs-to-gateway) 上输入您的证书或创建账户即可。

![CreateAccountScreenshot](/img/tutorial/gateway/create_account_screenshot.png)

### 创建项目

登录后，您就可以创建一个项目！网关将提示您为项目命名，并选择要使用的 API。您可以选择项目中 RPC 调用所需的所有 API。

![CreateProjectScreenshot](/img/tutorial/gateway/create_project_screenshot.png)


### 选择您的 API 访问 (RPC)

填写项目名称和所需的 API 访问权限后，您的 RPC 节点端点就可以在您选择的各个网络上使用了。如下面的示例所示，您可以随时添加新的 API 访问权限，或者只需单击要取消的 API 访问权限旁边的垃圾桶即可取消该访问权限--就是这么简单！

![APIAccessScreenshot](/img/tutorial/gateway/api_access_screenshot.png)

### 设置安全控制

当然，安全第一！一旦可以访问端点，最好确保其安全。您可以选择 "项目管理 "屏幕顶部的 "设置"，启用秘钥或 JWT 标记来限制谁可以访问端点。这将确保端点不会被错误访问或访问次数过多。需要注意的是，由于这些端点是免费提供的，因此有速率限制。

![SecurityControlsScreenshot](/img/tutorial/gateway/security_controls_screenshot.png)


### 推送你的端点

顺便说一下，每个网络都有不同数量的接口可以查询。如下图所示，以太坊RPC可以通过HTTP和WebSockets接受来自JSONRPC的调用，而Lava使用WebSockets接受REST、URI、Tendermint和Tendermint。你会注意到，在熔岩网关上，无论你选择哪个链，我们都支持多种接口。

![EthereumAccessScreenshot](/img/tutorial/gateway/eth_access_screenshot.png)

![LavaAccessScreenshot](/img/tutorial/gateway/lava_access_screenshot.png)

我们甚至在多个接口上支持Cosmos Hub !!🚀

![CosmosAccessScreenshot](/img/tutorial/gateway/cosmoshub_access_screenshot.png)

神奇的是，所有这些端点地址都是即插即用的!你可以选择任何地址，将其插入Web3.js、Ether.js和Gaia，然后无缝地使用它。享受快速和免费的RPC!