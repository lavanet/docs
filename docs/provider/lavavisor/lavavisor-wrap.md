---
slug: /lavavisor-wrap
title: Process Wrapper
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **LavaVisor Process Wrapping**


## 📄 Overview 
The process wrapping commands were developed while keeping dockerized / kubernetes environments in mind, we have created a process wrapper command to answer each of these requirements. 

1. a VM that would be able to download the codebase and compile the lavap binary can use the `lavavisor wrap` command
2. a pod with minimal assets that cannot compile the lavap binary can use the `lavavisor pod` command 

the main difference between the two is that `lavavisor wrap` would validate golang installation, and download + build the lavap code base locally instead
while the `pod` command would fetch the pre compiled binary from the official lava network repository as it wont have the capabilities of compiling the binaries.

## Things to Note:
Make sure you are using the right chain id. this document was written during testnet, and the active chain id was `lava-testnet-2`

<br />
<hr />

## ♨️ Usage

### > `lavavisor init`
LavaVisor `init` command initializes the environment for LavaVisor. It is generally the first command run when using LavaVisor.
For the `lavavisor pod` skip this command as it doesn't need to initialize the environment

**Optional Flags:**
    
`--directory` -  specifies the protocol flags directory (default "~/")
    
`--auto-download` - automatically downloads missing binaries
    
**Example usage:**

```bash
lavavisor init --auto-download --chain-id lava-testnet-2
```

<br />

### > `lavavisor wrap` 
Wrap command is used for wrapping a single process in environment that cannot run with systemd (services) such as k8s or some containers. 
The wrap command doesn't require a config for itself, it just takes the lavap command the user provides and uses that as a sub command.

* Example
```bash
lavavisor wrap --cmd 'lavap rpcprovider ./config/my_rpcprovider_config.yml --from <account> --log_level debug --geolocation 1 --chain-id lava-testnet-2' --auto-download
```

<br />

### > `lavavisor pod` 
running the command in a lean pod environments that does not have golang / build dependencies and will fetch the binary from the github release page 
without building the binary and having a golang setup on the VM

* lavavisor pod does not require lavavisor init. as it will set everything on the go.

* Example
```bash
lavavisor pod --cmd 'lavap rpcprovider ./config/my_rpcprovider_config.yml --from <account> --log_level debug --geolocation 1 --chain-id lava-testnet-2'
```

<br />
<hr />

### Running multiple wrap commands on the same VM
if you would like to run multiple wrappers on the same machine, you can set up one `--auto-download` process while the others are running with `--auto-download` disabled (default behavior) this will result with one process managing downloading and building while others just wait for the task to be completed. 

### Using keyring-backend os
If you are using keyring-backend os you will need to provide the lavavisor (wrap/pod commands only) with a keyring-backend password so it can use it to start the lavap process and read from the keyring os. 

In order to do that add the `--enter-keyring-password` flag to the lavavisor command line. when the lavavisor bootstrap it will request the password from the user with the following prompt:

```bash
INF [Lavavisor] Please enter the keyring password:
```

lavavisor doesn't check if the password is correct it will try to use it when starting the process. if the password is incorrect it will keep retrying to revive the process, so make sure you are using the right password and validating the process started properly. 

# Example use: 
```bash
lavavisor wrap --cmd 'lavap rpcprovider ./config/my_rpcprovider_config.yml --geolocation 1 --log_level debug --from prod_client --chain-id lava-testnet-2 --keyring-backend os --node "<local/public node url>"' --auto-download --node "<local/public node url>" --chain-id lava-testnet-2 --enter-keyring-password
```