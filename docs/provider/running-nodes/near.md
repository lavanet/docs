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

Get the [latest release](https://github.com/near/nearcore/releases).

```bash
git checkout tags/<RELEASE TAG HERE> -b mynode
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