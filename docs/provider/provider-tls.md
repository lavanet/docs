---
slug: /provider-tls
title: 设置 TLS
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 提供商 TLS 设置指南

:::caution
`lava-testnet-2` 上的所有提供程序都必须使用域名和 TLS (1.3)。您必须拥有一个域名才能继续。如果还没有，请花点时间购买一个！您可以在 [此处](https://www.namecheap.com/) 或 [此处](https://tld-list.com/) 找到便宜的顶级域名。
:::

## 📊 图表

![Provider TLS Diagram](/img/tutorial/provider/provider-tls-diagram.png)

## 📋 必备条件

| 必要设置            |  ?  | 
| -------------------------|-----|
| 获得域名            | ✅  |
| 已安装和配置 `lavap` | ✅  |
| 有`ulava` 余额的账户 | ✅  |


## 📝 书面指南 (~45m)

<br />

### 🅰️ 更改域名的 A 记录


建立 Provider 的第一步是修改您所购买域名的一些 DNS 设置。具体来说，您需要更改域名上的 A 记录。更改 "A-Record "将创建一个子域，将流量路由到特定的提供商进程。A-Record可能在 "Advanced DNS"（高级 DNS）或其他标签下可见，具体取决于您通过谁哪个域名供应商购买域名。

<details> <summary> 🖧 多个记录 (Recommended) </summary>


我们建议您为计划支持的每个链创建一个单独的 "A-Record"。这样会更安全，因为默认行为是拒绝连接，除非消费者在正确的子域上进行连接。

为您要支持的每个链添加一个`A-Record`，将所需的链名作为`Host`，`Value`将是您的服务器 IP。
例如，如果您想支持以太坊和 Lava 主网，您的 DNS 设置应包括以下内容 ：

| Record Type       |  Host | Value |
| ------------------|-------| ----- |
| A-Record          |   eth |   Your-Server-Public-IP-Address-Here   |
| A-Record          |  lava |   Your-Server-Public-IP-Address-Here   |

</details>

<details> <summary> ⚀ 单个记录 </summary>

或者，您也可以创建一个 `A-Record` 来捕获所有子域的流量。如果您要支持大量经常变化的链，这样做可能会在一定程度上简化流程。

| Record Type       | Host | Value |
|-------------------|------|-------|
| A-Record          | *    | Your-Server-Public-IP-Address-Here |

</details>
<br />

### 📂 安装所需的依赖项

我们将指导您设置和配置 Nginx，使其使用 TLS 证书并处理与不同提供商进程的连接。您也可以使用其他解决方案来完成这两项任务，如 Caddy、Envoy 或您喜欢的解决方案。

运行以下命令安装所需的软件包：

```bash
sudo apt update
sudo apt install certbot net-tools nginx python3-certbot-nginx -y
```

<br />

### 📮 创建证书

接下来，我们需要通过认证机构实际创建`TLS certificate` 。这个过程由 `certbot` 自动完成。


使用 `certbot` 创建证书：

```
sudo certbot certonly -d you.xyz -d lava.you.xyz -d eth.you.xyz
```

请注意，您将需要为作为`A-Record`创建的每个子域添加一个`-d` 标志。即使您选择创建单个记录，您仍需要为将要运行的每个提供程序指明一个子域。我们以上面的填充程序 `you.xyz` 为例。

你可能会遇到几个提示。在出现提示时，请使用 `nginx` 或 Nginx 网络服务器插件。
<br />

### 💻 验证证书

确保证书安装成功！✅ 输入以下命令：

```sudo certbot certificates```

跟踪输出结果。如果证书生成成功，它应该如下所示：

```
Found the following certs:
  Certificate Name: your-site.com
    Domains: your-site.com eth.your-site.com lava.your-site.com
    Expiry Date: 2023-11-07 14:37:29+00:00 (VALID: 84 days)
    Certificate Path: /etc/letsencrypt/live/your-site.com/fullchain.pem
    Private Key Path: /etc/letsencrypt/live/your-site.com/privkey.pem

```

下一步需要`Certificate Path`和`Private Key Path` 。

<br />

### 🗃️ 为每个域添加 Nginx 配置

Lava 建议在单独的提供程序进程下运行每个链。这将分离错误日志，并在提供程序出现问题时防止提供程序完全失效。第一步是为每个链创建不同的 nginx 路由。

对于要支持的每个链，都需要创建单独的 `nginx` 配置文件。
`cd`到`/etc/nginx/sites-available/`，并为每个链创建一个`server`文件。你需要为每个链选择一个开放端口。Nginx会使用这些配置文件创建路由。

<Tabs>
<TabItem value="eth_ex" label="eth nginx server">

🟢 ```sudo nano eth_server``` 


```
server {
    listen 443 ssl http2;
    server_name eth.your-site.com;

    ssl_certificate /etc/letsencrypt/live/your-site.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-site.com/privkey.pem;
    error_log /var/log/nginx/debug.log debug;

    location / {
        proxy_pass http://127.0.0.1:2223;
        grpc_pass 127.0.0.1:2223;
    }
}
```

</TabItem>
<TabItem value="lav_ex" label="lava nginx server">

🟢 ```sudo nano lava_server```

```
server {
    listen 443 ssl http2;
    server_name lava.your-site.com;

    ssl_certificate /etc/letsencrypt/live/your-site.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-site.com/privkey.pem;
    error_log /var/log/nginx/debug.log debug;

    location / {
        proxy_pass http://127.0.0.1:2224;
        grpc_pass 127.0.0.1:2224;
    }
}
```


</TabItem>

<TabItem value="Caddy" label="caddy example">

:::warning
以下caddy示例仅供参考。推荐路线是通过 `nginx`。虽然可以使用 Caddy 实现提供商功能，但风险和专业知识需自行承担。
:::


```
https://your-site.com:443 {
   reverse_proxy {
    to h2c://127.0.0.1:2221
    transport http  {
        versions h2c 2
    }
   }
   log {
       output file /var/log/caddy/your-site.com.log
   }
}
```

</TabItem>

</Tabs>

大多数情况下，在可访问站点中创建配置文件后，需要在启用站点目录中创建该文件的符号链接。可以使用以下命令来完成
```
sudo ln -s /etc/nginx/sites-available/lava_server /etc/nginx/sites-enabled/lava_server
```
:::caution

上述示例分别使用端口 `443` 进行外部监听，使用端口 `2223` / `2224` 进行内部通信。将端口 `443` 以外的端口用于外部监听意味着一些用户将无法连接到您的提供商。这会导致奖励减少和服务质量下降。对于内部监听，请注意操作系统上的某些端口可能用于内部通信，应避免使用。

:::

<br />

### 🧪 测试 Nginx 配置

现在，请确保您的 `nginx` 设置正常运行！ ✅

```bash
sudo nginx -t
```

🖳 预期输出：
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

<br />

### ♻️ 重启 Nginx

您需要刷新 Nginx 服务器：

```bash
sudo systemctl restart nginx
```
<br />

### ⚙️ 创建提供商配置

:::tip
需要模板？默认的 `rpcprovider.yml` 配置位于 `~/lava/config` 中。
:::


根据之前的建议，我们将为计划支持的每个链创建一个 `.yml`。每个 `.yml` 文件都将作为不同提供程序的配置文件。在我们的示例中，我们将创建一个 `lava-provider.yml` 和一个 `eth-provider.yml` 。


<Tabs>
<TabItem value="lava_yml" label="lava-provider">

`nano lava-provider.yml`

```yaml

endpoints:
    - api-interface: tendermintrpc
      chain-id: LAV1
      network-address:
        address: 127.0.0.1:2224
        disable-tls: true
      node-urls:
        - url: ws://127.0.0.1:26657/websocket
        - url: http://127.0.0.1:26657
    - api-interface: grpc
      chain-id: LAV1
      network-address:
        address: 127.0.0.1:2224
        disable-tls: true
      node-urls: 
        url: 127.0.0.1:9090
    - api-interface: rest
      chain-id: LAV1
      network-address:
        address: 127.0.0.1:2224
        disable-tls: true
      node-urls: 
        url: http://127.0.0.1:1317
```

</TabItem>
<TabItem value="eth_yml" label="eth-provider">

`nano eth-provider.yml`

```yaml

endpoints:
    - api-interface: jsonrpc
      chain-id: ETH1
      network-address:
        address: 127.0.0.1:2223
        disable-tls: true
      node-urls: 
        url: wss://ethereum-rpc.com/ws/
```

</TabItem>
</Tabs>

创建完这些文件后，我们就可以开始启动进程了！
<br />

### 🏁 启动提供商进程

在这个例子中，我们使用内置的终端多路复用器`screen`来运行多个provider进程。首先输入`screen`。但是你也可以使用不同的多路复用器，例如 `tmux`。

⏫ 启动以太坊进程
```bash
screen -S eth-provider

# 这将把我们带到一个单独的终端，在这里我们可以启动provider进程:

lavap rpcprovider eth-provider.yml --from your_key_name_here --geolocation 1 --chain-id lava-testnet-2 --log_level debug
```
按`CTRL+ad`从`eth-provider`Screen分离。 <br />
⏫ 启动 Lava provider 进程
```bash
screen -S lava-provider

# 这将把我们带到一个单独的终端，在这里我们可以启动provider进程:

lavap rpcprovider lava-provider.yml --from your_key_name_here --geolocation 1 --chain-id lava-testnet-2 --log_level debug
```

一些注意事项:
* `——from`后面应该跟着您的资金账户的名称，您将使用该名称来质押您的提供商
* `——log_level debug`为我们提供详细的输出，以便我们可以诊断可能出现的任何问题
* `——chain-id`可能是必要的，也可能不是，这取决于你的设置，但我们可以默认为`——lava-testnet-2`
* `——node`可能是也可能不是必需的

:::caution
您的 `.yml` 文件语法必须精确。错位、隐形字符或缩进不一致都可能导致错误。
:::

<br />

### ☑️ 测试提供商进程

逐次运行以下命令！

`lavap test rpcprovider --from your_key_name_here --endpoints "your-site:443,LAV1"`

🖳 预期输出：

```
📄----------------------------------------✨SUMMARY✨----------------------------------------📄

🔵 Tests Passed:
🔹LAV1-grpclatest block: 0x4ca8c
🔹LAV1-restlatest block: 0x4ca8c
🔹LAV1-tendermintrpclatest block: 0x4ca8c

🔵 Tests Failed:
🔹None 🎉! all tests passed ✅

🔵 Provider Port Validation:
🔹✅ All Ports are valid! ✅

```


`lavap test rpcprovider --from your_key_name_here --endpoints "your-site:443,ETH1"`

🖳 预期输出：

```
📄----------------------------------------✨SUMMARY✨----------------------------------------📄

🔵 Tests Passed:
🔹ETH1-jsonrpclatest block: 0x1115fe9

🔵 Tests Failed:
🔹None 🎉! all tests passed ✅

🔵 Provider Port Validation:
🔹✅ All Ports are valid! ✅

```


### 🔗‍💥 链上质押提供商

使用以下命令对链进行质押；最小质押为 `50000000000ulava`

```bash
lavap tx pairing stake-provider ETH1 "50000000000ulava" "eth.your-site:443,1" 1 validator -y --from your_key_name_here --provider-moniker your-provider-moniker-1 --delegate-limit "0ulava" --gas-adjustment "1.5" --gas "auto" --gas-prices "0.0001ulava"
```
* validator - active validator address

```bash
lavap tx pairing stake-provider LAV1 "50000000000ulava" "lava.your-site:443,1" 1 validator -y --from your_key_name_here --provider-moniker your-provider-moniker-1 --delegate-limit "0ulava" --gas-adjustment "1.5" --gas "auto" --gas-prices "0.0001ulava"
```

### ☑️ 再次测试供应商！

```bash
lavap test rpcprovider --from your_key_name_here --endpoints "lava.your-site:443,LAV1"

lavap test rpcprovider --from your_key_name_here --endpoints "eth.your-site:443,ETH1"
```
您还可以通过以下方式获取有关设置的有用信息：

```bash
lavap q pairing account-info --from your_key_name
```


❗ 如果您还有其他问题，请随时访问我们的 [discord](https://discord.com/invite/Tbk5NxTCdA)，在那里您可以获得更好的帮助！
