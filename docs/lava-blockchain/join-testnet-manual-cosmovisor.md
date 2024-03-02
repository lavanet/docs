---
sidebar_position: 2
slug: /testnet-manual-cosmovisor
title: 方案 A - 带 Cosmovisor
---
import RoadmapItem from '@site/src/components/RoadmapItem';

# 加入测试网 - 使用 Cosmovisor 进行手动设置
## 必要准备

1. 验证[硬件要求](reqs)是否满足
2. 安装软件包依赖项
    - 注意：可能需要以 `sudo` 身份运行
    - 安装所需软件包
        
        ```bash
        ### Packages installations
        sudo apt update # in case of permissions error, try running with sudo
        sudo apt install -y unzip logrotate git jq sed wget curl coreutils systemd
        # Create the temp dir for the installation
        temp_folder=$(mktemp -d) && cd $temp_folder
        ```
        
    - Go installation
        
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
        
        2. `go env GOPATH` 命令应包括 `$HOME/go` 。
        如果没有，则执行 `export GOPATH=$HOME/go` 命令。
        
        3. PATH 应包括`$HOME/go/bin`。
        要验证 PATH，请运行 `echo $PATH`

## 1. 创建本地节点

### 下载应用程序配置

- 下载设置配置

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

- 在配置文件夹中设置创世文件
    
    ```bash
    # 将 genesis.json 文件复制到 Lava 配置文件夹中
    cp genesis_json/genesis.json $lava_config_folder/genesis.json
    ```

## 2. 加入Lava测试网

下文将介绍如何安装 Cosmovisor 以实现自动升级。


### 设置 Cosmovisor {#cosmovisor}

- 设置 Cosmovisor 以确保将来的升级完美无瑕。安装 Cosmovisor
    
    ```bash
    go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0
    # 创建 Cosmovisor 文件夹并将配置文件复制到其中
    mkdir -p $lavad_home_folder/cosmovisor/genesis/bin/
    # 下载创世二进制文件
    wget -O  $lavad_home_folder/cosmovisor/genesis/bin/lavad "https://github.com/lavanet/lava/releases/download/v0.21.1.2/lavad-v0.21.1.2-linux-amd64"
    chmod +x $lavad_home_folder/cosmovisor/genesis/bin/lavad
    ```

    ```bash
    # 设置环境变量
    echo "# Setup Cosmovisor" >> ~/.profile
    echo "export DAEMON_NAME=lavad" >> ~/.profile
    echo "export CHAIN_ID=lava-testnet-2" >> ~/.profile
    echo "export DAEMON_HOME=$HOME/.lava" >> ~/.profile
    echo "export DAEMON_ALLOW_DOWNLOAD_BINARIES=true" >> ~/.profile
    echo "export DAEMON_LOG_BUFFER_SIZE=512" >> ~/.profile
    echo "export DAEMON_RESTART_AFTER_UPGRADE=true" >> ~/.profile
    echo "export UNSAFE_SKIP_BACKUP=true" >> ~/.profile
    source ~/.profile
    ```

    ```bash
    # 初始化链
    $lavad_home_folder/cosmovisor/genesis/bin/lavad init \
    my-node \
    --chain-id lava-testnet-2 \
    --home $lavad_home_folder \
    --overwrite
    cp genesis_json/genesis.json $lava_config_folder/genesis.json
    ```

:::caution 请注意，cosmovisor 会提示错误 ⚠️。

将出现以下错误，lstat /home/ubuntu/.lava/cosmovisor/current/upgrade-info.json: no such file or directory（没有此类文件或目录）
:::

    ```bash
    cosmovisor version
    ```

  创建 systemd 运行单元文件
    
    ```bash
    # 创建 Cosmovisor 单元文件

    echo "[Unit]
    Description=Cosmovisor daemon
    After=network-online.target
    [Service]
    Environment="DAEMON_NAME=lavad"
    Environment="DAEMON_HOME=${HOME}/.lava"
    Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
    Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=true"
    Environment="DAEMON_LOG_BUFFER_SIZE=512"
    Environment="UNSAFE_SKIP_BACKUP=true"
    User=$USER
    ExecStart=${HOME}/go/bin/cosmovisor start --home=$lavad_home_folder --p2p.seeds $seed_node
    Restart=always
    RestartSec=3
    LimitNOFILE=infinity
    LimitNPROC=infinity
    [Install]
    WantedBy=multi-user.target
    " >cosmovisor.service
    sudo mv cosmovisor.service /lib/systemd/system/cosmovisor.service
    ```

### 下载最新的 Lava 数据快照 (_optional_) {#snapshots}

_即将到来_

### 激活并启动 Cosmovisor 服务
    
- 配置 Cosmovisor 服务在启动时运行，并启动它
    ```bash
    # 启用 cosmovisor 服务，使其在系统启动时自动启动
    sudo systemctl daemon-reload
    sudo systemctl enable cosmovisor.service
    sudo systemctl restart systemd-journald
    sudo systemctl start cosmovisor
    ```
    

## 3. 验证

### 验证 `cosmovisor` 设置

通过检查 cosmovisor 服务的状态，确保 `cosmovisor` 正在运行：

- 检查服务状态
    ```bash
    sudo systemctl status cosmovisor
    ```
- 要查看服务日志 - 要退出，请点击 CTRL+C

    ```bash
    sudo journalctl -u cosmovisor -f
    ```

### 验证节点状态

注意 `lavad` 现在存在于 `cosmovisor` 路径下：

```bash
# 检查节点当前是否处于同步区块过程中
$HOME/.lava/cosmovisor/current/bin/lavad status | jq .SyncInfo.catching_up
```

## 欢迎来到 Lava Testnet🌋

:::tip 已加入 Testnet？成为验证者！
您现在正在 Lava 网络中运行一个节点 🎉🥳!！

祝贺你，很高兴你能来到这里 😻 在 Discord 上与我们一起庆祝。

准备就绪后，开始将节点用作**验证器**：
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Validator" description="Validate blocks, secure the network, earn rewards"/>](/validator-manual#account)

:::
