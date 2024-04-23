---
slug: /secret-node
title: Running a Secret Network RPC Node
---

# Running a Secret Network RPC Node

## Requirements 📄


### Hardware Requirements 💻
Secret Network has strict hardware requirements. Before getting started, review these:

- [Supported CPUs](https://docs.scrt.network/secret-network-documentation/infrastructure/resources/setting-up-a-node-validator/hardware-setup/hardware-compliance#cpus)
- [Supported Motherboards](https://docs.scrt.network/secret-network-documentation/infrastructure/resources/setting-up-a-node-validator/hardware-setup/hardware-compliance#supported-motherboards)


### Software Requirements 🔢

- Ubuntu / Debian OS

##  Install Dependencies 📦 

### 📥 Install SGX & Secretd

Both of these are required for running a full node. To install,input the following in a terminal:


```bash
# sgx
wget https://raw.githubusercontent.com/SecretFoundation/docs/main/docs/node-guides/sgx
sudo bash sgx

# secretd
wget https://raw.githubusercontent.com/SecretFoundation/docs/main/docs/node-guides/install-secretd
sudo bash install-secretd
```


## Initialize and Configure the Node ⚙️

There are many steps required for setting up a node.
Visit the [Secret Network documentation](https://docs.scrt.network/secret-network-documentation/infrastructure/resources/setting-up-a-node-validator/node-setup/setup-full-node#installation) for full information


In addition to default node setup, you may want to also investigate the following node types:

- [Mantlemint Nodes / LCD](https://docs.scrt.network/secret-network-documentation/infrastructure/resources/sentry-archive-and-ibc-node-setup/mantlemint)
- [Sentry Nodes](https://docs.scrt.network/secret-network-documentation/infrastructure/resources/sentry-archive-and-ibc-node-setup/sentry-nodes)
- [Archive](https://docs.scrt.network/secret-network-documentation/infrastructure/resources/sentry-archive-and-ibc-node-setup/archive-nodes)

As soon as you have completed all the aforementione steps, you're ready to serve RPC!


## Setup your Provider on Lava Network 🌋

To set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-secret-rpc-node&utm_medium=docs&utm_campaign=secret-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider process.