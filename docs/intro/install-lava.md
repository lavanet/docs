---
sidebar_position: 2
slug: /install-lava
title: Build & Install
---

# Build & Install Lava Binaries

## 🔍 Overview

Lava has three binaries which fulfill different functions:

- `lavad` - consensus mechanisms, node running, genesis files, key creation / management

- `lavap` - protocol services, rpcconsumer, rpcprovider, badge server

- [`lavavisor`](/lavavisor) - automated rpcprovider & rpcconsumer initialization and updating / synchronization of `lavap`


## 📋 Prerequisites

### Operating System 💾


Lava is designed to run on ***nix style operating systems**. While running in other setups is possible, it is generally discouraged as it may produce unexpected behavior.

### Go 📇

Lava requires `go` version `1.20.3` or greater. Run `go version` to confirm your version.

Get the [latest release](https://go.dev/doc/install)!

### Packages 📦

The following packages are known dependencies of the install process:

`make` `gcc` `jq` `unzip` `coreutils` `git`

<br/>
<hr/>

## 🗄️ Installation Options 


### Install all Binaries 🛠️  **(Recommended)**

Enter the following commands:

```bash
git clone https://github.com/lavanet/lava.git
cd lava
make install-all
```

✅ Run `lavad version && lavap version` to ensure you've gotten the [latest releases](https://github.com/lavanet/lava/releases)!

<br />

### Install a Specific Binary 🔧

Select between `lavad`, `lavap`, and `lavavisor` and enter the following:

```bash
git clone https://github.com/lavanet/lava.git
cd lava
LAVA_BINARY=<name-of-binary> make install
```

✅ Run `<name-of-binary> --help` to ensure it installed properly.

<br />

### Build all Binaries Locally 🗜️

Enter the following commands:

```bash
git clone https://github.com/lavanet/lava.git
cd lava
make build-all
```

📁 You will now have all three binaries (`lavad`,`lavap`,`lavavisor`) in `./build/`

✅ Run `lavad version && lavap version` to ensure you've gotten the [latest releases](https://github.com/lavanet/lava/releases)!

<br />


### Build a Specific Binary Locally 🔨

Select between `lavad`, `lavap`, and `lavavisor` and enter the following:

```bash
git clone https://github.com/lavanet/lava.git
cd lava
LAVA_BINARY=<name-of-binary> make build
```

📁 You will now have the binary of your choice in `./build/`

<br />