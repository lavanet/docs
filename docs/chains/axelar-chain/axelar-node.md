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
    OS: Ubuntu 20.04 or MacOS >= 12
    Network: sustained 5Mbps up/down bandwidth
    Go version >= 1.19.6

</TabItem>

<TabItem value="rec_req" label="Recommended">



## Install


### Start your Node!

```bash
$AXELARD_HOME/bin/axelard start [moniker] --home $AXELARD_HOME >> $AXELARD_HOME/logs/axelard.log 2>&1 &
```

## Apply to our Provider Incubation Program 📋

In our current state of Testnet, there is an additional stage to pass through before you can become a provider on the Lava Network. Please fill out the [application form](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-axelar&utm_medium=docs&utm_campaign=axelar-pre-grant) for our Provider Incubation Program. Feel free to drop a line in our [Discord](https://discord.gg/UxujNZbW) once you’ve completed this step!

## Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-axelar-rpc-node&utm_medium=docs&utm_campaign=axelar-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node on the Lava Network.