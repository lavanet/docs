---
slug: /near-node
title: Running an NEAR RPC Node
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Running an NEAR RPC Node

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
Some users have reported issues with the NEARate install script. If you encounter issues, please consider making an [issue](https://github.com/NEARnetwork/NEARate-community/issues) or trying to install manually.
:::

Clone the NEARate-Community Repo and then run the Node Setup Script.
```bash
git clone https://github.com/NEARnetwork/NEARate-community.git
cd NEARate-community
./scripts/setup-node.sh -n [mainnet|testnet]
```

### Start your Node! 🚀

Run the following command to initiate your node!

```bash
$NEARD_HOME/bin/NEARd start [moniker] --home $NEARD_HOME >> $NEARD_HOME/logs/NEARd.log 2>&1 &
```

## NEAR ipRPC 🪙

Want to reach more developers and get more rewards as a node runner? NEAR pays providers who're interested. NEAR offers Incentivized Public RPC (ipRPC) endpoints to developers in its ecosystem. By signing up here, you can become one of our premier providers contributing to decentralized public goods. [Sign up now!](https://lavanet.typeform.com/to/qQ1x6WJs?utm_source=becoming-a-lava-provider-for-NEAR&utm_medium=docs&utm_campaign=NEAR-post-grant)


## Apply to our Provider Incubation Program 📋

In our current state of Testnet, there is an additional stage to pass through before you can become a provider on the Lava Network. Please fill out the [application form](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-NEAR&utm_medium=docs&utm_campaign=NEAR-post-grant) for our Provider Incubation Program. Feel free to drop a line in our [Discord](https://discord.gg/UxujNZbW) once you’ve completed this step!

## Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-NEAR-rpc-node&utm_medium=docs&utm_campaign=NEAR-post-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node on the Lava Network.