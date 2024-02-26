---
slug: /badge-server
title: 徽章服务器
---

# 徽章服务器

## 概览 🔎

徽章服务器的主要功能是生成徽章。徽章允许用户调用任何支持的 API 而无需提供其私钥。为此，每个徽章服务器都需要访问与链上注册的项目相关联的有效私钥。该服务器被专门设计为通用性强，支持多个专为不同去中心化应用（dApps）定制的项目配置。它通过使用几个高度可配置的环境变量来实现这种灵活性。这种方法确保了徽章服务器能够适应不同 dApps 的特定需求，同时保持了徽章生成的无缝和有序系统。

当徽章服务器收到生成徽章的请求时，它执行以下检查：如果请求中指定的项目在服务器的配置中存在，则使用与该项目关联的私钥来签署徽章。但是，如果在配置中未找到该项目，则服务器将默认使用预定义的默认配置来进行徽章签名过程。

## Lava 徽章服务器 🌋

Lava提供了托管解决方案，使用户无需自行启动徽章服务器！Lava的默认徽章服务器可通过 `https://badges.lavanet.xyz` 访问。用户可以通过在[Lava网关](https://gateway.lavanet.xyz/?utm_source=badge-server&utm_medium=docs&utm_campaign=lava-phase-2)上创建项目来生成与Lava徽章服务器一起使用的徽章。

## 运行徽章服务器 *（实验性）* 🧪

:::warning

运行徽章服务器比较复杂，需要比使用 Lava 默认徽章服务器更多的设置。我们建议使用 [Lava Gateway!](https://gateway.lavanet.xyz/?utm_source=sdk-frontend&utm_medium=docs&utm_campaign=docs-to-gateway)。

:::


### 📥 下载 `lavap` 

按照[安装页面](/install-lava) 的说明设置 `lavap

```bash
git clone https://github.com/lavanet/lava.git
cd lava
LAVA_BINARY=lavap make install
```

<br/>


### 🪛 配置环境变量
`lavap` 使用 `badgegenerator` 命令来设置徽章服务器。徽章生成器 "命令从环境变量中获取一系列输入。其中一些变量有默认值，但要成功运行徽章服务器，还需要对其他变量进行配置。要开始使用，你需要正确配置环境变量。

<hr/>

#### `PORT`

指定徽章服务器运行的端口。

```bash
#默认端口
PORT=8080
```
<hr/>

#### `METRICS_PORT`

指标端口用于Prometheus跟踪三个指标：
- 总请求数
- 失败请求
- 成功处理的请求


```bash
#default value
METRICS_PORT=8081
```

<hr/>


#### `USER_DATA`

在这个变量内，存在一个映射结构，其中每个条目将一个地理位置 # 与一个项目 ID 相连接，包含相关的密钥和设置。它采用 JSON 格式，并用于徽章服务器的加密机制。

```json
{
  "2": {
    "default": {
      "project_public_key": "lava@......",
      "private_key": "<private key>",
      "epochs_max_cu": 99999
    },
    "project_id": {
      "project_public_key": "lava@......",
      "private_key": "<private key>",
      "epochs_max_cu": 99999
    }
  },
  "1": {
    "default": {
      "project_public_key": "lava@...",
      "private_key": "<private key>",
      "epochs_max_cu": 99999
    }
  }
}
```

<hr/>

#### `GRPC_URL`

这指定了具有暴露 gRPC 端口的节点的 URL。徽章服务器需要访问具有 gRPC 的节点才能正常运行。

```bash
GRPC_URL=public-rpc-testnet2.lavanet.xyz:9090
```
<hr/>

#### `CHAIN_ID`
这指定将用于提供徽章的链。

```bash
#default value
CHAIN_ID=lava-tesnet-2
```

<hr/>

#### `DEFAULT_GEOLOCATION`
这一点非常重要，因为它在用户的原籍国无法确定的情况下充当备用机制。在这种情况下，系统将默认使用该变量中指定的值。

```bash
#default value
DEFAULT_GEOLOCATION=1
```

<hr/>

#### `COUNTRIES_FILE_PATH`

这是一个 CSV（逗号分隔值）文件的路径，其中包含各个国家的基本数据，以及它们对应的 Lava 地理位置信息的链接。该文件结构包括四列：`country-code`、`country-name`、`continent code` 和 `lava-geolocation`。

您可以下载所需的文件 [此处](https://storage.googleapis.com/lavanet-public-asssets/countries.csv)。
<hr/>


#### `IP_FILE_PATH`

这是一个包含 IP 地址范围及其对应国家代码的 TSV（制表符分隔值）文档的文件路径。该文件包括五列：`range_start`、`range_end`、`AS_number`、`country_code` 和 `AS_description`。

可从以下位置下载： [ip2asn-v4.tsv](https://iptoasn.com/)
<hr/>

<br/>

### 🔨 运行 `badgegenerator` 命令

一旦你花时间配置了环境变量，就不再需要使用flags了。只需一条命令，就能实现神奇的效果：

```
lavap badgegenerator --log_level debug
```

:::tip

`log_level` 应设置为 `debug`。将其设置为 `debug` 可确保在这个实验阶段捕获错误！

:::

<br/>

### 📏 使用 LavaSDK 创建和使用 `badge`

您可以让徽章服务器签署一个自己生成的徽章，以此来测试徽章服务器的功能！

```javascript
const lavaSDK = await LavaSDK.create({
    badge: {
        badgeServerAddress: "<yourURLorAddress>",
        projectId: "<from setup>" //input your project ID from your setup
        },    
    chainID: "LAV1",
    rpcInterface:  "rest",
});
```
