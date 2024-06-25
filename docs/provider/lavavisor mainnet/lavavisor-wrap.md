---
slug: /lavavisor-wrap
title: Process Wrapper
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **LavaVisor Process Wrapper**


## 📄 Overview 
Lavavisor's Process Wrapping commands were designed with Dockerized and Kubernetes environments in mind, offering solutions for different scenarios:

1. For a virtual machine (VM) capable of downloading and compiling the Lavap binary, use the `lavavisor wrap` command.
2. In cases where resources are limited, such as in a pod environment, you can use the `lavavisor pod` command.

The key distinction between the two is that `lavavisor wrap` validates Golang installation and locally downloads and builds the Lavap codebase. Conversely, the `pod` command fetches the pre-compiled binary from the [official Lava Network repository](https://github.com/lavanet/lava/releases/latest), as it lacks the capability to compile binaries locally.

:::tip

Please make sure you are using the right `chainId` this document was written during testnet, and the active `chainId` was `lava-mainnet-1` at time of composition.

:::

<br />
<hr />

## ♨️ Commands

### > `lavavisor init`
LavaVisor `init` command initializes the environment for LavaVisor. It is generally the first command run when using LavaVisor.
If you're using [`lavavisor pod`](#-lavavisor-pod) this command is unnecesary and can be skipped.

**Optional Flags:**
    
`--directory` -  specifies the protocol flags directory (default "~/")
    
`--auto-download` - automatically downloads missing binaries
    
**Example usage:**

```bash
lavavisor init --auto-download --chain-id lava-mainnet-1
```

<br />

### > `lavavisor wrap` 
The `wrap` command is used for wrapping a single process in environment that cannot run with `systemd` (services) such as k8s or some containers. 
The `wrap` command doesn't require a config for itself, it just takes the lavap command the user provides and uses that as a sub command.

**Example usage:**

```bash
lavavisor wrap --cmd 'lavap rpcprovider ./config/my_rpcprovider_config.yml --from <account> --log_level debug --geolocation 1 --chain-id lava-mainnet-1' --auto-download
```

<br />

### > `lavavisor pod`

When running this command in a lightweight pod environment that lacks Golang or build dependencies, Lavavisor will automatically fetch the binary from the GitHub release page. This means you can obtain the binary without the need to build it or have a Golang setup on your virtual machine (VM)

:::info

`lavavisor pod` does not require `lavavisor init`. as it will initialize everything automatically.

:::

**Example usage:**

```bash
lavavisor pod --cmd 'lavap rpcprovider ./config/my_rpcprovider_config.yml --from <account> --log_level debug --geolocation 1 --chain-id lava-mainnet-1'
```

<br />
<hr />

## ❓ Considerations

### Running multiple wrap commands on the same VM 🎲
If you would like to run multiple wrappers on the same machine, you can set up one `--auto-download` process while the others are running with `--auto-download` disabled (default behavior) this will result with one process managing downloading and building while others just wait for the task to be completed. 

### Using keyring-backend os 🔑
If you are using keyring-backend os you will need to provide the lavavisor (wrap/pod commands only) with a keyring-backend password so it can use it to start the lavap process and read from the keyring os. 

In order to do that add the `--enter-keyring-password` flag to the lavavisor command line. when the lavavisor bootstrap it will request the password from the user with the following prompt:

```bash
INF [Lavavisor] Please enter the keyring password:
```

Lavavisor doesn't check if the password is correct; it will try to use it when starting the process. If the password is incorrect, it will keep retrying to revive the process, so make sure you are using the right password and validating the process started properly. 

### Example Use ⚙️

```bash
lavavisor wrap --cmd 'lavap rpcprovider ./config/my_rpcprovider_config.yml --geolocation 1 --log_level debug --from prod_client --chain-id lava-mainnet-1 --keyring-backend os --node "<local/public node url>"' --auto-download --node "<local/public node url>" --chain-id lava-mainnet-1 --enter-keyring-password
```
