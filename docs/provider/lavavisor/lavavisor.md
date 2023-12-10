---
slug: /lavavisor
title: Lavavisor
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **LavaVisor**


## 📄 Overview 
LavaVisor acts as a service manager for the Lava protocol application binaries. Its duty is to manage protocol versioning and coordinate seamless transitions to updated protocol versions.

When an upgrade becomes necessary, either because the current protocol version has dropped below the minimum version or not compliant with the recommended target version, LavaVisor’s responsibilities begin. LavaVisor orchestrates the necessary upgrade process in an automated manner, ensuring that the protocol version is aligned with the current standards and capabilities set by the minimum and target versions.

## 🧰 Setup

:::tip
Some older versions of the `lava-protocol` binary (now `lavap`) lack the version command, which LavaVisor employs to validate binary versions. Please ensure you've updated to the most recent version of LavaVisor or you may face errors.
:::

Lavavisor is added as a `LAVA_ALL_BINARIES` parameter in the Makefile. As such, any script that executes `install-all` such as `start_env_dev.sh` will automatically install Lavavisor binary. 

To ensure that a LavaVisor binary is created, navigate to your local `/lava` directory and run  **`make install-all`**


### Prerequisites ✅

1. Go version above than 1.19

<br />
<hr />

## ♨️ Usage

### > `lavavisor init`
LavaVisor `init` command initializes the environment for LavaVisor. It is generally the first command run when using LavaVisor.

**Optional Flags:**
    
`--directory` -  specifies the protocol flags directory (default "~/")
    
`--auto-download` - automatically downloads missing binaries
    
`--auto-start` - automatically issues `start` after the the `init` command completes

**Example usage:**

```bash
lavavisor init --auto-download --chain-id lava-testnet-2
```
