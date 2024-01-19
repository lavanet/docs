---
slug: /axelar-node
title: Running an Axelar RPC Node
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Running an Axelar RPC Node

## Requirements 📄 

Before you start, ensure that your machine meets the following [minimum requirements](https://docs.avax.network/nodes/build/set-up-node-with-installer#before-you-start):

<Tabs>
<TabItem value="min_req" label="Minimum">

    CPU: 4 cores
    RAM: 8-16 GB RAM
    Storage: 512 GB
    OS: Ubuntu 18.04 or MacOS(x86)
    ARM 64 or AMD64

</TabItem>

<TabItem value="rec_req" label="Recommended">

```
CPU: 6-8 cores
RAM: 16-32 GB RAM
Storage: 1 TB
OS: Ubuntu 18.04 or MacOS(x86)
```

</TabItem>
</Tabs>

## Install 📥

:::caution
Some users have reported issues with the Axelarate install script. If you encounter issues, please consider making an [issue](https://github.com/axelarnetwork/axelarate-community/issues) or trying to install manually.
:::

Clone the Axelarate-Community Repo and then run the Node Setup Script.
```bash
git clone https://github.com/axelarnetwork/axelarate-community.git
cd axelarate-community
./scripts/setup-node.sh -n [mainnet|testnet]
```

### Start your Node! 🚀

Run the following command to initiate your node!

```bash
$AXELARD_HOME/bin/axelard start [moniker] --home $AXELARD_HOME >> $AXELARD_HOME/logs/axelard.log 2>&1 &
```

## Axelar ipRPC 🪙

Want to reach more developers and get more rewards as a node runner? Axelar pays providers who're interested. Axelar offers Incentivized Public RPC (ipRPC) endpoints to developers in its ecosystem. By signing up here, you can become one of our premier providers contributing to decentralized public goods. [Sign up now!](https://lavanet.typeform.com/to/qQ1x6WJs?utm_source=becoming-a-lava-provider-for-axelar&utm_medium=docs&utm_campaign=axelar-post-grant)


## Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-axelar-rpc-node&utm_medium=docs&utm_campaign=axelar-post-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node on the Lava Network.