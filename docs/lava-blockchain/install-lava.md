---
sidebar_position: 2
slug: /install-lava
title: 构建 & 安装
---

# 构建 & 安装 Lava 二进制文件

## 🔍 概览

Lava 有三个不同功能的二进制文件：

- `lavad` - 共识机制、节点运行、创世文件、密钥创建/管理

- `lavap` - 协议服务、RPC 消费者、RPC 提供者、徽章服务器

- [`lavavisor`](/lavavisor) - 自动化的 RPC 提供者和 RPC 消费者初始化以及 `lavap` 的更新/同步


## 📋 必要准备 

### 操作系统 💾


Lava 设计用于在 ***nix 风格操作系统** 上运行。虽然在其他设置中运行是可能的，但通常不建议，因为它可能会产生意外。

### Go 📇

Lava 需要 `go` 1.20.3 或更高版本。运行 `go version` 确认您的版本。

获取 [latest release](https://go.dev/doc/install)!

### Packages 📦

以下软件包是安装程序的已知依赖包：

`make` `gcc` `jq` `unzip` `coreutils` `git`

<br/>
<hr/>

## 🗄️ 安装选项 


### 安装所有二进制文件 🛠️  **(Recommended)**

输入以下命令：

```bash
git clone https://github.com/lavanet/lava.git
cd lava
make install-all
```

✅ 运行 `lavad version && lavap version` 以确保获得 [最新版本](https://github.com/lavanet/lava/releases)！

<br />

### 安装指定二进制文件 🔧

在 `lavad`， `lavap`， 和`lavavisor`之间选择，然后输入以下内容：

```bash
git clone https://github.com/lavanet/lava.git
cd lava
LAVA_BINARY=<name-of-binary> make install
```

✅ 运行`<name-of-binary> --help`以确保正确安装。

<br />

### 在本地编译所有二进制文件 🗜️

输入以下命令：

```bash
git clone https://github.com/lavanet/lava.git
cd lava
make build-all
```

📁 现在，三个二进制文件（`lavad`,`lavap`,`lavisor`）都在`./build/`中了。

✅ 运行 `lavad version && lavap version` 以确保获得 [最新版本](https://github.com/lavanet/lava/releases)！

<br />


### 在本地构建特定二进制文件 🔨

在 `lavad`， `lavap`，和 `lavavisor`之间选择，然后输入以下内容：

```bash
git clone https://github.com/lavanet/lava.git
cd lava
LAVA_BINARY=<name-of-binary> make build
```

📁 现在，您可以在 `./build/` 中选择二进制文件。

<br />