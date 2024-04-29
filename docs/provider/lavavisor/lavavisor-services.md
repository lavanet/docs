---
slug: /lavavisor-services
title: Service Manager
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **LavaVisor 服务管理器**

## 📄 概览
Lavavisor服务管理器是一个功能，使用户可以运行一个Lavavisor服务来管理多个lavap服务。
使用这种方法的好处是，与lavavisor wrap命令相比，只运行一个lavavisor实例可以节省一些rpc调用。
每个lavavisor实例每30秒查询一次。

:::info
我们在最近的补丁中改进了rpc调用间隔，所以我们建议使用[`lavavisor wrap` or `pod` commands](/lavavisor-wrap#services)代替service manager命令。这仍然适用于多个服务。

:::

<br />
<hr />

## ♨️ 命令

### > `lavavisor init`
LavaVisor `init`命令用来初始化LavaVisor的环境。它通常是使用LavaVisor时运行的第一个命令。

**可选标识:**
    
`--directory` -  指定协议目录 (default "~/")
    
`--auto-download` - 自动下载缺少的二进制文件
    
`--auto-start` - automatically issues `start` after the `init` command completes

**用法示例：**

```bash
lavavisor init --auto-download --chain-id lava-testnet-2
```


<br />

### > `lavavisor create-service` 
LavaVisor 使用针对每个提供者/消费者的服务文件。LavaVisor 的 `create-service` 命令根据提供的消费者/提供者配置文件和标志创建这些文件。

您必须指定创建的是`provider`还是`consumer` 以及配置文件的位置。

**用法示例：**

```bash
# Provider Example
lavavisor create-service provider ./config --geolocation 1 --from user --log_level warn

# Consumer Example
lavavisor create-service consumer ./config --geolocation 1 --from user2 --log_level info

```

<br />

### > `lavavisor start` 
LavaVisor 使用链接的二进制文件启动指定的服务。它还会启动 LavaVisor 版本监视器。最简单的激活方法是运行 `lavavisor init --auto-download --auto-start` 命令。其次，您可以自行使用 `start` 命令进一步配置提供程序/用户或创建服务。

<br />
<hr />

## 🗜️ 测试

1. 首先，LavaVisor 应在连接到运行中的 Lava 网络（本地或公共网络）的节点上运行。

2. 运行 `lavavisor init --auto-download` → 这将设置 LavaVisor 目录并链接协议二进制文件
    
    ![lavavisor init](/img/tutorial/lavavisor/lavavisor1.png)

3. 与其手动创建服务文件，不如执行 `lavavisor create-service` 命令来生成服务文件。假设我们要启动一个消费者进程和两个提供者进程，那么我们总共需要执行以下三条命令：

    - `lavavisor create-service consumer /home/ubuntu/config/consumer-ETH1.yml --geolocation 1 --from user1 --log_level info --keyring-backend test --chain-id lava-testnet-2 --node https://public-rpc-testnet2.lavanet.xyz:443/rpc/`

    - `lavavisor create-service provider /home/ubuntu/config/provider1-ETH1.yml --geolocation 1 --from servicer1 --log_level info --keyring-backend test --chain-id lava-testnet-2 --node https://public-rpc-testnet2.lavanet.xyz:443/rpc/`
    
    - `lavavisor create-service provider /home/ubuntu/config/provider1-LAV1.yml --geolocation 1 --from servicer2 --log_level info --keyring-backend test --chain-id lava-testnet-2 --node https://public-rpc-testnet2.lavanet.xyz:443/rpc/`

4. 检查 `~/.lavavisor/` 目录并验证 `config.yml` 。它应该是这样的（根据进程调整服务名称）：


```yaml
services:
  - consumer-ETH1
  - provider1-ETH1
  - provider1-LAV1
```

5. `create-service`命令还应该在目录下创建一个 `service_configs`文件夹。并复制作为命令参数提供的配置文件(例如，provider1-ETH1.yml)。确保目录和配置文件存在。

<Tabs>
<TabItem value="provider_conf" label="✅ 提供者配置文件示例:">


```yaml
endpoints:
  - api-interface: jsonrpc
    chain-id: ETH1
    network-address:
      address: 127.0.0.1:2221
    node-urls:
      - url: wss://eth-exampleprovider.net/eth/ws/
```

</TabItem>

<TabItem value="consumer_conf" label="✅ 消费者配置文件示例:">

    
```yaml
endpoints:
    - chain-id: ETH1
      api-interface: jsonrpc
      network-address: 127.0.0.1:3333
metrics-listen-address: ":7779"
```
</TabItem>
</Tabs>

6. 执行`lavavisor start`，你应该可以看到所有服务都在运行。此外，版本监控器将开始验证版本。
    
    ![lavavisor start](/img/tutorial/lavavisor/lavavisor2.png)

7. 现在我们需要使用`/gov`模块来做一个升级建议，这样协议版本将在共识中发生变化，LavaVisor将检测并启动自动升级。
    
    🔽 下面是一个示例`proposal. json` 文件:
    
    <details>
    <summary> 📄 proposal.json </summary>
    
    ```json
    {
        "title": "Protocol Version Change",
        "description": "Update version",
        "changes": [
            {
                "subspace": "protocol",
                "key": "Version",
                "value": {
                    "provider_target": "0.23.2",
                    "consumer_target": "0.23.2",
                    "provider_min": "0.22.0",
                    "consumer_min": "0.22.0"
                }
            }
        ],
        "deposit": "10000000ulava"
    }
    ```

    </details>
    
    🔽 以下是发送版本更新建议事务的脚本(适用于Cosmos SDK v0.47.0):
    
    <details>
    <summary> 📄 upgrade_chain.sh </summary>

    ```bash
    #!/bin/bash
    # 升级脚本 (upgrade_chain.sh)
    
    # 等待下一个区块的功能(建议使用Cosmos SDK 0.47或更高版本的链时应该使用)
    function wait_next_block {
      current=$( lavad q block | jq .block.header.height)
      echo "Waiting for next block $current"
      while true; do
        sleep 0.5
        new=$( lavad q block | jq .block.header.height)
        if [[ $current != $new ]]
        then
          echo "finished waiting for block $new"
            break
        fi
      done
    }
    
    # 软件升级建议命令。这只建议软件升级。要应用升级，您需要投票"yes"(如下所示)。
    lavad tx gov submit-legacy-proposal param-change proposal.json \
    --gas "auto" \
    --from alice \
    --keyring-backend "test" \
    --gas-prices "0.000000001ulava" \
    --gas-adjustment "1.5" \
    --yes
    
    wait_next_block
    
    # 投票命令。如果使用init_chain_commands.sh脚本，则使用投票ID 4(如这里所示)。如果投票失败是因为一个坏的
    # 投票 ID，使用 "lavad q gov proposals "查询查看最新提案 ID，并将最新 ID + 1 放在此处。
    lavad tx gov vote 4 yes -y --from alice --gas-adjustment "1.5" --gas "auto" --gas-prices "0.000000001ulava"
    ```
    
    </details>

    (根据您的状态修正建议 ID 4 - 如果您没有运行 "init_chain_commands"，则应在此处置 1)
    
8. 提议通过后，LavaVisor 将检测事件并更新二进制文件。然后，它会使用新建立的符号链接重新启动进程：
    
    ![Update detected](/img/tutorial/lavavisor/lavavisor3.png)
    
    ❗ 已检测到更新
    
    ![Upgrade successful](/img/tutorial/lavavisor/lavavisor4.png)
    
    ✔️ 升级成功
