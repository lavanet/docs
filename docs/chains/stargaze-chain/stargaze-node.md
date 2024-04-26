---
slug: /stargaze-node
title: Running a Stargaze RPC Node
---

# Running a Stargaze RPC Node

## Requirements 📄


### Hardware Requirements 💻


- 8 Cores (modern CPU)
- 16GB RAM
- 1TB of storage (SSD or NVME)


### Software Requirements 🔢

- Modern Linux and/or recent MacOS
- Go >= 1.20

##  Install Dependencies 📦 

### 📥 Install Preqrequisite packages

Some build tools may be needed for successful install. Update your OS and grab the essential build tools:

```bash
sudo apt-get update && sudo apt upgrade -y
sudo apt-get install make build-essential gcc git jq chrony -y
```

### 📥 Install Stargaze Client


Retrieve `<version-tag>` from [latest releases](https://github.com/public-awesome/stargaze/releases).

Run the following commands:

```bash
git clone https://github.com/public-awesome/stargaze
cd stargaze
git fetch
git checkout <version-tag>

make install
```

## Initialize and Configure the Node ⚙️

There are many steps required for setting up a node.

A detailed step-by-step guide is available in the official [Stargaze documentation](https://docs.stargaze.zone/nodes-and-validators/joining-mainnet).


## Setup your Provider on Lava Network 🌋

To set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-stargaze-rpc-node&utm_medium=docs&utm_campaign=stargaze-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider process.