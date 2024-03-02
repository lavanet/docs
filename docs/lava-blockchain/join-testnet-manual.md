---
sidebar_position: 2
slug: /testnet-manual
title: 方案 B - 不带 Cosmovisor
---
import RoadmapItem from '@site/src/components/RoadmapItem';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 加入测试网 - 手动设置

本页将指导你手动安装节点并加入网络。

请注意，它不包括 "Cosmovisor "工具，因此一旦安装了第一个创世二进制文件，就需要按照[upgrades](#upgrades)中的说明逐步升级节点。

## 必要准备

1. 验证[硬件要求](reqs)是否满足
2. 安装软件包依赖项
    - 注意：可能需要以 `sudo` 身份运行
    - 安装所需软件包
        
        ```bash
        ### Packages installations
        sudo apt update # In case of permissions error, try running with sudo
        sudo apt install -y unzip logrotate git jq sed wget curl coreutils systemd
        # Create the temp dir for the installation
        temp_folder=$(mktemp -d) && cd $temp_folder
        ```
        
    - Go 安装
        
        ```bash
        ### Configurations
        go_package_url="https://go.dev/dl/go1.20.5.linux-amd64.tar.gz"
        go_package_file_name=${go_package_url##*\/}
        # Download GO
        wget -q $go_package_url
        # Unpack the GO installation file
        sudo tar -C /usr/local -xzf $go_package_file_name
        # Environment adjustments
        echo "export PATH=\$PATH:/usr/local/go/bin" >>~/.profile
        echo "export PATH=\$PATH:\$(go env GOPATH)/bin" >>~/.profile
        source ~/.profile
        ```
        
    - 安装验证
        
        
        1. 您可以运行： `go version` 来验证已安装的 go 版本。
        
        2. 命令 `go env GOPATH` 应包括`$HOME/go`。
        如果没有，则`export GOPATH=$HOME/go`
        
        3.PATH 应包括`$HOME/go/bin`。
        要验证 PATH，请运行 `echo $PATH`
        

## 1. 创建本地节点

### 下载应用程序的配置

- 下载安装配置

    下载安装所需的配置文件
    
    ```bash
    # 下载安装设置配置
    git clone https://github.com/lavanet/lava-config.git
    cd lava-config/testnet-2
    # 从文件中读取配置
    # 注意：您可以查看配置文件并验证配置
    source setup_config/setup_config.sh
    ```
    
- 设置应用程序配置

  将 lavad 默认配置文件复制到 config Lava 配置文件夹中
    
    ```bash
    echo "Lava config file path: $lava_config_folder"
    mkdir -p $lavad_home_folder
    mkdir -p $lava_config_folder
    cp default_lavad_config_files/* $lava_config_folder
    ```
    

### 设置创世文件

- 在配置文件夹中设置创世 JSON 文件
    
    ```bash
    # 将 genesis.json 文件复制到 Lava 配置文件夹中
    cp genesis_json/genesis.json $lava_config_folder/genesis.json
    ```

## 2. 加入Lava测试网

### 复制创世二进制文件

- 设置 lavad 二进制文件的位置，并将创世二进制文件复制到该位置

    ```bash
    # 设置并创建 lavad 二进制路径
    lavad_binary_path="$HOME/go/bin/"
    mkdir -p $lavad_binary_path
    # 下载创世二进制到Lava路径
    wget -O ./lavad "https://github.com/lavanet/lava/releases/download/v0.21.1.2/lavad-v0.21.1.2-linux-amd64"
    chmod +x lavad
    # 现在应该可以从 PATH 访问 Lavad 了，要验证这一点，请尝试运行
    cp lavad /usr/local/bin
    # 如果无法访问，请确保 $lavad_binary_path 是 PATH 的一部分（请参阅 "Go 安装 "部分）。
    lavad --help # Make sure you can see the lavad binary help printed out
    ```

### 使用创世二进制文件开始运行节点

- 创建运行 Lava 节点的 systemd 服务

    ```bash
    # 使用 logrotate 创建 systemd 单元文件
    echo "[Unit]
    Description=Lava Node
    After=network-online.target
    [Service]
    User=$USER
    ExecStart=$(which lavad) start --home=$lavad_home_folder --p2p.seeds $seed_node
    Restart=always
    RestartSec=180
    LimitNOFILE=infinity
    LimitNPROC=infinity
    [Install]
    WantedBy=multi-user.target" >lavad.service
    sudo mv lavad.service /lib/systemd/system/lavad.service
    ```

### 下载最新的 Lava 数据快照（_可选项） {#snapshots}

_即将到来_

### 启动和验证服务

- 配置 lavad 服务在启动时运行，并启动它

    ```bash
    # 启用 lavad 服务，使其在系统启动时自动启动
    sudo systemctl daemon-reload
    sudo systemctl enable lavad.service
    sudo systemctl restart systemd-journald
    sudo systemctl start lavad
    ```

- 检查 lavad 服务的状态
    
    ```bash
    sudo systemctl status lavad
    # 查看服务日志
    sudo journalctl -u lavad -f
    ```

## 3. 升级 {#upgrades}
Lava 区块链升级需要更新 `lavad`。假设您不使用 Cosmovisor，本指南将介绍手动更新步骤。

### 如何知道要进行升级？

加入 Lava 测试网后，您的节点开始同步时，您可能会发现一条错误信息，例如

```bash
panic: UPGRADE "XYZ" NEEDED at height: 12345
```

此消息指定已同意在网络的某个高度升级到新版本。注意：当使用 cosmovisor 设置时，升级将自动为您处理。

这种情况需要使用不同的二进制文件 (`lavad`) 进行工作，过程如下：

1. 您已使用创世二进制文件加入了网络
2. 节点已开始同步
3. **需要升级的错误** 👈 您现在处于此步骤
4. 手动升级节点以使用新的二进制文件
5. 节点继续使用新的二进制文件同步
### 升级列表历史记录

下面是块高度所需的升级跟踪。
版本跟踪在 [Lava git](https://github.com/lavanet/lava) 中（从源代码构建或使用发布页面）。

<Tabs>
<TabItem value="lava-testnet-2" label="lava-testnet-2">

| Version name | Block height
| --- | --- |
| v0.21.1.2 | 340778 |
| v0.22.0 | 396595 |
| v0.23.5 | 435889 |

</TabItem>
<TabItem value="lava-testnet-1" label="lava-testnet-1">

| Version name | Block height
| --- | --- |
| v0.3.0 | genesis |
| v0.4.0 | 838 |
| v0.4.3 | 22300 |
| v0.4.4 | 41735 |
| v0.5.2 | 63760 |
| v0.6.0 ("RC3") | 82570 |
| v0.7.0 | 102800 |
| v0.8.1 | 133100 |
| v0.9.8 | 163960 |
| v0.10.1 | 184620 |
| v0.11.2 | 208115 |
| v0.12.1 | 227130 |
| v0.12.1-hf | 233850 |
| v0.13.1 | 247630 |
| v0.14.0 | 254645 |
| v0.15.1 | 266490 |
| v0.16.0 | 286030 |

</TabItem>

</Tabs>

### 升级节点的步骤

1. 设置进程所需的配置

```bash
# 升级配置
temp_folder=$(mktemp -d) && cd $temp_folder
required_upgrade_name="v0.21.1.2" # CHANGE THIS
upgrade_binary_url="https://github.com/lavanet/lava/releases/download/$required_upgrade_name/lavad-$required_upgrade_name-linux-amd64"
```


2.杀死所有当前的 lavad 进程

```bash
source ~/.profile
# 如果将 lavad 作为服务使用，请运行
sudo systemctl stop lavad
```

3.下载二进制文件并替换当前的 `lavad

```bash
# 下载二进制文件并替换为当前文件
wget "$upgrade_binary_url" -q -O $temp_folder/lavad
chmod +x $temp_folder/lavad

# 用升级后的二进制文件替换当前的 lava 二进制文件
sudo cp $temp_folder/lavad $(which lavad)
```

4. 运行 lava 节点

```bash
# 重新启动已停止的 lavad 服务
sudo systemctl start lavad
```

5. 验证节点是否继续从最新区块高度同步

```bash
# 检查节点当前是否处于追赶最新区块过程中
lavad status | jq .SyncInfo.catching_up
# 检查 lavad 进程日志
sudo journalctl -u lavad -f
```

## 欢迎来到 Lava Testnet 🌋

:::tip 已加入 Testnet？成为验证者！
您现在正在 Lava 网络中运行一个节点 🎉🥳!！

祝贺你，很高兴你能来到这里 😻 在 Discord 上与我们一起庆祝。

准备就绪后，开始将节点用作**验证器**：
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Validator" description="Validate blocks, secure the network, earn rewards"/>](/validator-manual#account)

:::
