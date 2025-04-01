---
sidebar_position: 1
slug: /reqs
title: Hardware requirements
---

## Deployment options

- VPS instance (on any cloud provider) - recommended 
- Shared compute instance (e.g. AWS EC2 instance)
- Your personal station

If you prefer running **Docker**, Docker containers are available at [Lava's repository on GitHub](https://github.com/lavanet/lava/tree/main/docker).

## Hardware requirements

As the network grows, bandwidth, CPU, and memory requirements rise. Large hard drives are recommended for storing years of blockchain history, as well as significant RAM to process the increasing amount of transactions.

**Recommended settings to get started**

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

## Operating system
- For using the prebuilt `lavad` - you need to run **`Ubuntu` - `20`** or newer.
- sudo permissions on your machine (e.g. can run `sudo hostname`)

## Network configurations
- Outbound - allow all traffic
- Inbound - open the following ports:
    - 1317 - REST
    - 26657 - TENDERMINT_RPC
    - 26656 - Cosmos

<details>
<summary>Planning to run as an [RPC Provider](../provider/provider.md)?</summary>

Add these specific ports:
        - 22221 
        - 22231 
        - 22241 

</details>
