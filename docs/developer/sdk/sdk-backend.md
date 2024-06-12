---
slug: /sdk-backend
title: 后端使用 🛡️
---

# 使用 LavaSDK


## 🛡️ 后端

☠️ **问题**：调用 API 提供商的计算成本很高。创建后端应用程序需要在本地生成私钥并保持足够的余额，以便在多个链上进行调用。

✅ **解决方案**：Lava 通过我们的网关为所有项目提供免费 [订阅](/subscriptions)，简化了多链后端开发。Lava 允许任何用户注册网关。默认订阅由 Lava 提供，无需额外配置。此订阅有速率限制，但对许多用例来说足够大。

🚀 **开始**：您可以从 [Lava Gateway](https://gateway.lavanet.xyz/?utm_source=sdk-backend-page&utm_medium=docs&utm_campaign=docs-to-gateway)直接开始使用！我们认识到，项目/订阅管理的托管解决方案并不适合所有用户，有些用户可能希望对订阅或限制进行更精细的控制。对自我托管项目管理感兴趣的用户应了解有关 [subscriptions](/subscriptions) 的更多信息。



## ↪️ 建议流程

虽然可以通过命令行订阅私钥，但最简单的方法还是通过 Lava 的网关：

1. 注册网关。👉🏿[立即注册](https://gateway.lavanet.xyz/?utm_source=sdk-backend-page&utm_medium=docs&utm_campaign=docs-to-gateway) 。

2. 创建一个项目并选择您的 API！

3. 进入设置 -> 项目密钥

4. 点击 "添加新密钥 "并决定是 "生成新密钥 "还是 "添加公钥

5. 稍等片刻让密钥同步！

![SynchingKey](/img/tutorial/sdk/SynchingKey.png)

6. 将 SDK 安装到项目中 -> `npm install @lavanet-lava-sdk`.

7. 选择任何 API 访问（LavaSDK -> `Use in BackEnd`）并将代码片段复制粘贴到代码中。

<br/>

## 🔑 手动创建密钥

私钥和公钥对也可以使用[' lavad '](https://github.com/lavanet/lava)二进制文件生成。[安装指南](/install-lava)对想要使用`lavad`的用户非常有帮助。有关如何创建熔岩地址的更多信息，请参阅[现有文档](https://docs.lavanet.xyz/wallet#account)。

如果你已经安装了`lavad `-你可以很容易地通过输入以下命令生成熔岩地址: `lavad keys add <keyname>`

<iframe width="100%" height="480" src="/img/tutorial/sdk/adding_lava_key.mp4" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

如果您有一个存在的地址，并且不再记住它的私钥，您可以使用`lavad keys export <key-name> --unarmored-hex --unsafe` 来查看您的私钥作为字符串打印。不要与任何人分享输出!

🚀您的私钥和公钥对可以用于后端开发，只要您有订阅!