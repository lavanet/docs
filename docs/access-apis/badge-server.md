---
slug: /badge-server
title: Badge Server
---
# Badge Server

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

And make calls all the same!

```jsx
const info = await lavaSDK.sendRelay({
    method: "GET",
    url: "/node_info",
});
```

## Running a Badge Server

Running a badge server is advanced and requires a little more setup than using Lava's default badge server. With a few steps, you can have your own badge server up and running for maximum decentralization and trustlessness.


### 1. Install `lavad`

The badge server is launched from `lavad` using the `badgegenerator` command. Our first step is to get lavad:

```
git clone https://github.com/lavanet/lava.git
git 
```


### 2. Run a Lava Node or Get Access to a Lava Node with gRPC

In order to start the badge server, you will need access to a Lava Node which has gRPC ports exposed. You can setup a Lava node using [Cosmovisor](/testnet-manual-cosmovisor) or do things [manually](/testnet-manual). If you're running a node, gRPC should be available to you by default at `127.0.0.1:9090`.


### 3. Create a `BADGE_USER_DATA` environmental variable

`lavad` will pull the configuration 

```
BADGE_USER_DATA="{\"projectnamegoeshere\":{\"project_public_key\":\"lava@19u6dq2zanqrs9y08e93nz4zask6elem3eww85x\",\"private_key\":\"0330e1290ffcbdf5a8671b46356aec4e1c746e9e44946e0363c09bd6a10d7893\",\"epochs_max_cu\":2233333333}}"
```

### 4. Run `lavad badgegenerator` command

The magic happens all with a single command.

```
lavad badgegenerator --grpc-url=<lava-node-ip/domain>:<grpc-port> --log_level=debug --node=https://<lava-node-ip/domain>:<rpc-port> --chain-id=lava-testnet-1
```

`grpc-url` 

`node`

`chain-id` is `lava-testnet-1`

`log_level` should be set to `debug`. Setting to `debug` ensures that 

### 5. Create and use a BadgeObject for the SDK instance

You can test the of your badge server by asking it for credentials
Instantiate an instacne of 

```jsx
const lavaSDK = await new sdk.LavaSDK({
    badge: {
        badgeServerAddress: "<yourURLorAddress>",
        projectId: "<from gateway>" //input your project ID from the Gateway or custom setup
        },    
    chainID: "LAV1",
    rpcInterface:  "rest",
});
```