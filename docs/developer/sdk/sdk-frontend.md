---
slug: /sdk-frontend
title: 前端使用 🛡️
---
# 使用 LavaSDK 

## 🛡️ 前端

☠️**问题**:在没有特殊规定的情况下在前端使用私钥本质上是不安全的。在一般的开发场景中，用户的私钥可能会通过浏览器泄露。

✅**解决方案**:Lava使用了一种名为`badge`的独特解决方案来解决这些限制。`badge`由几个部分组成，用来代替私钥。但是，它必须由持有相关授权方私钥的外部服务器进行签名。[默认的徽章服务器](/badge-server#lava-badge-server-)由Lava托管，不需要额外的配置。

🚀**开始**:你可以开始从[Lava门户](https://gateway.lavanet.xyz/?utm_source=sdk-frontend-page&utm_medium=docs&utm_campaign=docs-to-gateway)!我们认识到托管解决方案并不适合所有用例。对实现最高级别的去中心化感兴趣的用户可以运行他们自己的[徽章服务器](/badge-server#running-a-badge-server-experimental-)。


<center>



</center>

## ↪️ 推荐流程

虽然你可以托管自己的徽章服务器，但最简单的方法是通过Lava的网关开始。

1. 注册到网关。👉🏿[现在注册](https://gateway.lavanet.xyz/?utm_source=sdk-frontend-page&utm_medium=docs&utm_campaign=docs-to-gateway)。

2. 创建一个项目并选择你的api !

3. 打开API，单击“LavaSDK”。

3. 安装SDK到你的项目-> ' npm Install @lavanet-lava-sdk '

4. 复制和粘贴你的代码片段到你的代码。

## 📛 Badges

### 使用 ⚙️

徽章是传递给SDK实例的对象，它允许用户放弃使用私钥。徽章的格式如下:

```jsx
const myBadge = {
  badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL
  projectId: "<from gateway>" //input your project ID from the Gateway or custom setup
};
```

用户可以使用badge而不是privatekey初始化SDK

```jsx
const lavaSDK = await LavaSDK.create({
    badge: myBadge,
    chainID: "LAV1",
    rpcInterface:  "rest",
});
```

调用也一样，不会暴露私钥！

```jsx
const info = await lavaSDK.sendRelay({
    method: "GET",
    url: "/node_info",
});
```

🚀 就是这样。对于大多数用户来说，在前端成功使用 LavaSDK 不需要其他信息！