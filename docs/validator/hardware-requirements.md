---
sidebar_position: 1
slug: /reqs
title: Hardware requirements
---

## Deployment options
- VPS instance (on any cloud provider) - recommended ⭐️
- Shared compute instance (e.g. AWS EC2 instance)
- Your personal station

**Docker** container are available at [Lava's repository on GitHub](https://github.com/lavanet/lava/tree/main/docker)

## Hardware requirements

As the network grows, bandwidth, CPU, and memory requirements rise. Large hard drives are recommended for storing years of blockchain history, as well as significant RAM to process the increasing amount of transactions.

Also, running on testnet and mainnet will feature different requirements.

**Recommended for Testnet**

| Node Type     | RAM                   | Storage       | CPU
| -----------   | --------------------- | -----------   | ---
| Full (Minimum)| 8GB                   | 100GB SSD          | x64 2.0 GHz 4v CPU 
| Full (Recommended)| 16GB              | 512GB SSD     | x64 2.0 GHz 4v CPU 

<details>
<summary>Running on AWS?</summary>

Settings:

- Minimum `Instance Type` - **`c4.xlarge`**
- `Configure storage` - **`GP2 drive`**

</details>

### Operating system
- For using the prebuilt `lavad` - you need to run **`Ubuntu` - `20`** or newer.
- sudo permissions on your machine (e.g. can run `sudo hostname`)

:::info
Need to run a different OS? Let us know in Discord.
:::

## Network configurations
- Outbound - allow all traffic
- Inbound - open the following ports:
    - 1317 - REST
    - 26657 - TENDERMINT_RPC
    - 26656 - Cosmos
    - *Running as a Provider? Add these specific ports*:
        - 22221 - provider port
        - 22231 - provider port
        - 22241 - provider port
