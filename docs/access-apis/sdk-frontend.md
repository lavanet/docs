---
slug: /sdk-frontend
title: Frontend Use
---
# Using LavaSDK in FrontEnd Development

Using private keys on the frontend without special provisions is inherently unsafe. In ordinary development scenarios, private keys from a user can be leaked through the browser. 

Lava uses a unique solution called `badges` to solve these limitations. A `badge` consists of several parts and is used in lieu of a private key. It must, however, be signed by an external server that holds the relevant authorizing party's private key. The default Badge Server is hosted by Lava and requires no additional configurations.

You can get started right from the [Lava Gateway](https://gateway.lavanet.xyz/?utm_source=sdk-frontend-page&utm_medium=docs&utm_campaign=docs-to-gateway)! We recognize that a hosted solution is not ideal for every use case. Users who are interested in accomplishing the highest levels of decentralization may run their own [badge server](/badge-server).


<center>

👉🏿[Register now](https://gateway.lavanet.xyz/?utm_source=sdk-frontend-page&utm_medium=docs&utm_campaign=docs-to-gateway) if you haven’t already!

</center>


## 📛 Badges

### Usage ⚙️

Badges are objects passed to the SDK instance which allow a user to forgo the usage of private keys.  A badge has the following format:

```jsx
const myBadge = {
  badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL
  projectId: "<from gateway>" //input your project ID from the Gateway or custom setup
};
```

A user can initialize the SDK using a badge instead of a privatekey

```jsx
const lavaSDK = await LavaSDK.create({
    badge: myBadge,
    chainID: "LAV1",
    rpcInterface:  "rest",
});
```

And make calls all the same - no privatekeys exposed!

```jsx
const info = await lavaSDK.sendRelay({
    method: "GET",
    url: "/node_info",
});
```

🚀 That's it. For most users, there is no additional information required to successfully use LavaSDK on the front end!