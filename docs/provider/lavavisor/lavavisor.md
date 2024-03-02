---
slug: /lavavisor
title: Lavavisor
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **LavaVisor**


## 📄 概述
LavaVisor是Lava协议应用程序二进制文件的服务管理器。它的职责是管理协议版本，并协调无缝过渡到更新的协议版本。

当需要升级时，无论是因为当前协议版本低于最低版本，还是不符合推荐的目标版本，LavaVisor的责任就开始了。LavaVisor以自动化方式协调必要的升级过程，确保协议版本与最低版本和目标版本设置的当前标准和功能保持一致。
## 🧰 设置

:::tip
一些老版本的`lava-protocol`二进制文件(现在的`lavap`)缺少version命令，LavaVisor使用它来验证二进制文件的版本。请确保您已经更新到最新版本的LavaVisor，否则您可能会遇到错误。
:::

Lavavisor作为`LAVA_ALL_BINARIES`参数添加到Makefile中。因此，任何执行`install-all`命令的脚本，例如`start_env_dev.sh`，都会自动安装Lavavisor二进制文件。

为了确保创建了LavaVisor二进制文件，请导航到本地`/lava`目录并运行**`make install-all`**


### 必要准备 ✅

1. Go version above than 1.19

### 开始 🔥

要正确配置Lavavisor，你有两个选择:

- [**Process Wrapper**](/lavavisor-wrap): 此选项提供高级功能，包括与基于密钥环的操作系统的兼容性以及对进程的增强控制。

- [**Service Manager**](/lavavisor-services): 如果要在一台计算机上管理多个服务，则服务管理器可能是合适的选择。它维护一个 Lavavisor 实例，从而减少查询。

### 推荐路线 ⤵️
我们推荐使用**process wrapper**，因为它具有广泛的功能集，非常适合需要与基于密钥环的操作系统兼容和加强进程控制的方案。

当您在一台计算机上拥有大量服务时，**service manager**非常有用，因为它管理单个 Lavavisor 实例，从而减少查询开销。但是，请注意，对于使用密钥环后端操作系统的环境或使用 Docker 或 Kubernetes 服务的环境，它可能不是最佳选择。

