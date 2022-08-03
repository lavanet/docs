# Run a Node
This section will help you prepare a server and set up your Lava node.

## Step 1 - Prepare a server

### Deployment options
- VPS instance (on any cloud provider) - recommended ⭐️
- Shared compute instance (e.g. AWS EC2 instance)
- Your personal station - less recommended

_ Please note that **Docker** containers are not available yet. _

### Hardware requirements

As the network grows, bandwidth, CPU, and memory requirements rise. Large hard drives are recommended for storing years of blockchain history, as well as significant RAM to process the increasing amount of transactions.

Also, running on testnet and mainnet will feature different requirements.

**Recommended testnet**

| Node Type     | RAM                   | Storage       | CPU
| -----------   | --------------------- | -----------   | ---
| Full          | 8GB                   | 100GB SSD          | x64 2.0 GHz 4v CPU 

<details>
<summary>Running on AWS?</summary>

Settings:

- Minimum `Instance Type` - **`c4.xlarge`**
- `Configure storage` - **`GP2 drive`**

</details>

### Operating system
- For using the installer - you need to run **`Ubuntu` - `20`** or newer.
- sudo permissions on your machine (e.g. can run `sudo hostname`)

:::info
Need to run a different OS? Let us know in Discord.
:::

### Network configurations
- Outbound - allow all traffic
- Inbound - open the following ports:
    - 1317 - REST
    - 26657 - TENDERMINT_RPC
    - 26656 - Cosmos
    - *Running as a Provider? Add these specific ports*:
        - 22221 - provider port
        - 22231 - provider port
        - 22241 - provider port

## Step 2 - Install

**There are 3 options to install a node:**
1. [Use installer](/lava-node/node-use-installer.md) - **common for most users** ⭐️
2. [Build source](/lava-node/node-build-source.md) - common for code contributors
3. [Connect remote](/lava-node/node-connect-remote.md) - misc usages

<details>

<summary>Not sure how to choose?</summary>

:::note Powering Lava? 🌋
- Want to [be a validator](/validator-intro.md)? Use option [1. Installer](/lava-node/node-use-installer.md)
- Want to [be a provider](/provider-intro.md)? Use option [1. Installer](/lava-node/node-use-installer.md) or [3. Remote](/lava-node/node-connect-remote.md)
:::


:::note Accessing Web3 APIs? ⚡️
- Need access fast? No need for a node, just use the [gateway](/access-apis/gateway-access.md).
- Want full D-access (Decentralized access)? [coming soon](/access-apis/d-access.md).
:::

:::note Open Source contributor?
- Use option [2.Build](/lava-node/node-build-source.md)
:::

</details>