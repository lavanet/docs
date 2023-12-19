---
slug: /near-node
title: Running a NEAR RPC Node
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Running a NEAR RPC Node

## Requirements 📄 

Before you start, ensure that your machine meets the following [minimum requirements](https://near-nodes.io/rpc/hardware-rpc):

<Tabs>
<TabItem value="rec_req" label="Recommended">

    CPU: 8-Core (16-Thread) Intel i7/Xeon or equivalent with AVX support
    RAM: 20GB DDR4
    Storage: 1TB SSD  - NVMe SSD recommended
    OS: MacOS / Linux

</TabItem>

<TabItem value="min_req" label="Minimum">

```
CPU: 8-Core (16-Thread) Intel i7/Xeon or equivalent with AVX support
RAM: 12GB DDR4
Storage: 500GB SSD
OS: MacOS / Linux
```

</TabItem>
</Tabs>

:::tip

Installing NEAR will also require a current installation of [Rust](https://www.rust-lang.org/), [Git](https://git-scm.com/), as well as many common dev tools (`python`, `docker`, `awscli`, & `protobuf-compiler`).

:::

## Install 📥

### Get `nearcore`

Clone the NEAR `nearcore` repo to your machine and switch to it.

```bash
git clone https://github.com/near/nearcore
cd nearcore
git fetch origin --tags
```

Get the latest release

```bash
git checkout tags/1.25.0 -b mynode
```

### Compile the latest stable release

Ensure you're in the correct folder (`/nearcore/`) & run the following command:

```bash
make release
```

:::caution
`make release` will cause the `nearcore` to compile. Compilation is a time-intensive process and can take ~30 minutes or longer on recommmended hardware.
:::

### Configure the release folder
With one command you can create the required directory structure -- generating a config.json, node_key.json, and downloading a genesis.json for your respective chain-id choice.


<Tabs>
<TabItem value="near-main" label="🌐 Mainnet">

```bash
./target/release/neard --home ~/.near init --chain-id mainnet --download-genesis --download-config
```


</TabItem>

<TabItem value="near-test" label="🧪 Testnet">

```bash
./target/release/neard --home ~/.near init --chain-id testnet --download-genesis --download-config
```

</TabItem>
</Tabs>

### Start your Node! 🚀

Run the following command to initiate your node!

```bash

# Get a data backup 
aws s3 --no-sign-request cp s3://near-protocol-public/backups/mainnet/rpc/latest .
LATEST=$(cat latest)
aws s3 --no-sign-request cp --no-sign-request --recursive s3://near-protocol-public/backups/mainnet/rpc/$LATEST ~/.near/data

# Start the Node!
./target/release/neard --home ~/.near run
```

## Configure your Provider 🔧

After you've gotten things together with your node. You can set things in motion with a provider.
Use the following template(s) to set up your provider config file:

<Tabs>
<TabItem value="near-ex-conf1" label="🌐 Mainnet Example">

```yaml
endpoints:
 - api-interface: jsonrpc
   chain-id: NEAR
   network-address:
    address: "127.0.0.1:port"
    disable-tls: true
   node-urls:
    - url: https://endpoint/mainnet/erpc

metrics-listen-address: ":port"
```

</TabItem>
<TabItem value="near-ex-conf2" label="🧪 Testnet Example">

```yaml
endpoints:
 - api-interface: jsonrpc
   chain-id: NEART
   network-address:
    address: "127.0.0.1:port"
    disable-tls: true
   node-urls:
    - url: https://endpoint/testnet/erpc

metrics-listen-address: ":port"
```


</TabItem>
</Tabs>


Want to reach more developers and get more rewards as a node runner? NEAR is looking to offer Incentivized Public RPC (ipRPC) endpoints to developers in its ecosystem. By signing up here, you can be first in line to being one of our premier providers contributing to decentralized public goods. [Sign up now!](https://lavanet.typeform.com/to/qQ1x6WJs?utm_source=becoming-a-lava-provider-for-NEAR&utm_medium=docs&utm_campaign=NEAR-post-grant)



## Apply to our Provider Incubation Program 📋

In our current state of Testnet, there is an additional stage to pass through before you can become a provider on the Lava Network. Please fill out the [application form](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-near&utm_medium=docs&utm_campaign=near-post-grant) for our Provider Incubation Program. Feel free to drop a line in our [Discord](https://discord.gg/UxujNZbW) once you’ve completed this step!

## Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-near-rpc-node&utm_medium=docs&utm_campaign=near-post-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node on the Lava Network.
