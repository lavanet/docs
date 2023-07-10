---
slug: /badge-server
title: Using Badge Server
---
# Using Badge Server

Using Lava SDK on the Frontend without special provisions is inherently unsafe. Private keys from any user can be leaked through the browser. Right now, Lava uses a Badge Server to solve these limitations. The default Badge Server is hosted by Lava for ease of use and onboarding purposes. However, users who are interested in accomplishing the highest levels of decentralization are encouraged to run their own. 

## Badges

Badges are objects passed to the SDK instance which allow a user to forgo the usage of private keys.  A badge has the following format:

```jsx
const myBadge = {
  badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL
  projectId: "<from gateway>" //input your project ID from the Gateway or custom setup
};
```

A user can initialize the SDK using a badge instead of a privatekey

```jsx
const lavaSDK = await new sdk.LavaSDK({
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



## Running a Badge Server (COMING SOON!)

:::caution

Running a badge server is advanced and requires a little more setup than using Lava's default badge server. We are working to simplify the UX for users who require it. A comprehensive guide is COMING SOON!

:::