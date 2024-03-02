---
slug: /lavavisor-wrap
title: Process Wrapper
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **LavaVisor Process Wrapper**


## 📄 概述 
Lavavisor 的 Process Wrapping 命令在设计时考虑了 Docker 化和 Kubernetes 环境，为不同的场景提供了解决方案：

1. 对于能够下载和编译 Lavap 二进制文件的虚拟机 （VM），请使用以下`lavavisor wrap`命令。
2. 在资源有限的情况下（例如在 Pod 环境中），您可以使用该`lavavisor pod`命令。

两者之间的主要区别在于验证`lavavisor wrap`Golang 安装并在本地下载和构建 Lavap 代码库。相反，该`pod`命令从官方 Lava Network 存储库获取预编译的二进制文件，因为它缺乏在本地编译二进制文件的能力。
两者之间的关键区别在于，`lavavisor wrap`验证Golang安装，并在本地下载和构建Lavap代码库。相反，`pod`命令从[官方熔岩网络存储库](https://github.com/lavanet/lava/releases/latest)获取预编译的二进制文件，因为它缺乏本地编译二进制文件的能力。

:::tip

请确保您使用了正确的`chainId`，本文档是在测试网期间编写的，并且在撰写时活动的`chainId`是`lava-testnet-2`。

:::

<br />
<hr />

## ♨️ 命令

### > `lavavisor init`
LavaVisor `init`命令用来初始化LavaVisor的环境。它通常是使用LavaVisor时运行的第一个命令.
如果你使用的是[' lavavisor pod '](#-lavavisor-pod)，那么这个命令就不必要了，可以跳过。

**可选 Flags:**
    
`--directory` -  指定协议目录(默认为"~/")
    
`--auto-download` - 自动下载丢失的二进制文件
    
**用法示例：**

```bash
lavavisor init --auto-download --chain-id lava-testnet-2
```

<br />

### > `lavavisor wrap` 
`wrap`命令用于在无法使用`systemd`(服务)运行的环境中包装单个进程，例如k8s或某些容器。
`wrap`命令本身不需要配置，它只需要接收用户提供的lavap命令并将其用作子命令。

**用法示例：**

```bash
lavavisor wrap --cmd 'lavap rpcprovider ./config/my_rpcprovider_config.yml --from <account> --log_level debug --geolocation 1 --chain-id lava-testnet-2' --auto-download
```

<br />

### > `lavavisor pod`

当在缺乏Golang或构建依赖项的轻量级pod环境中运行此命令时，Lavavisor将自动从GitHub发布页面获取二进制文件。这意味着您无需在虚拟机(VM)上构建或设置Golang即可获得二进制文件。

:::info

`lavavisor pod`不需要`lavavisor init`。因为它会自动初始化所有东西。

:::

**用法示例**

```bash
lavavisor pod --cmd 'lavap rpcprovider ./config/my_rpcprovider_config.yml --from <account> --log_level debug --geolocation 1 --chain-id lava-testnet-2'
```

<br />
<hr />

## ❓ 注意事项

### 在同一个虚拟机上运行多个wrap命令🎲
如果你想在同一台机器上运行多个wrappers，可以设置一个`--auto-download` 进程，而其他进程在运行时禁用`--auto-download` （默认行为），这将导致一个进程管理下载和构建，而其他进程只是等待任务完成。

### 使用 keyring-backend os 🔑
如果使用keyring-backend os，则需要向 lavavisor（仅限 wrap/pod 命令）提供keyring-backend密码，以便它启动 lavap 进程和读取keyring os。

为此，请在 lavavisor 命令行中添加`--enter-keyring-password`标记：

```bash
INF [Lavavisor] Please enter the keyring password:
```

Lavavisor 不会检查密码是否正确，而是在启动进程时尝试使用密码。如果密码不正确，它会不断重试以恢复进程，因此请确保使用正确的密码并验证进程已正确启动。

### 使用示例 ⚙️

```bash
lavavisor wrap --cmd 'lavap rpcprovider ./config/my_rpcprovider_config.yml --geolocation 1 --log_level debug --from prod_client --chain-id lava-testnet-2 --keyring-backend os --node "<local/public node url>"' --auto-download --node "<local/public node url>" --chain-id lava-testnet-2 --enter-keyring-password
```