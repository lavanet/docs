---
sidebar_position: 1
slug: /reqs
title: 硬件要求
---

## 部署选项
- VPS 实例（任何云提供商）--建议使用 ⭐️
- 共享计算实例（如 AWS EC2 实例）
- 您的个人工作站

**Docker**容器可从[Lava 在 GitHub 上的存储库](https://github.com/lavanet/lava/tree/main/docker) 获取。

## 硬件要求

随着网络的增长，带宽、CPU 和内存需求也会增加。建议使用大容量的硬盘来存储多年的区块链历史记录，并且需要足够的RAM来处理不断增加的交易量。

此外，在测试网和主网上运行将具有不同的要求。

**推荐用于测试网**

| Node Type     | RAM                   | Storage       | CPU
| -----------   | --------------------- | -----------   | ---
| Full (Minimum)| 8GB                   | 100GB SSD          | x64 2.0 GHz 4v CPU 
| Full (Recommended)| 16GB              | 512GB SSD     | x64 2.0 GHz 4v CPU 

<details>
<summary>AWS上运行？</summary>

设置：

- 最小`Instance Type` - **`c4.xlarge`**
- `Configure storage` - **`GP2 drive`**

</details>

### 操作系统
- 对于使用预构建的 `lavad` - 您需要运行 **`Ubuntu` - `20`** 或更新版本。
- 您的计算机需要具有 sudo 权限（例如，可以运行 `sudo hostname`）。

:::info
需要运行不同的操作系统？请在 Discord 告诉我们。
:::

## 网络配置
- 出站流量 - 允许所有流量
- 入站流量 - 打开以下端口：
    - 1317 - REST
    - 26657 - TENDERMINT_RPC
    - 26656 - Cosmos
    - *作为提供者运行？添加以下特定端口*：
        - 22221 - 提供者端口
        - 22231 - 提供者端口
        - 22241 - 提供者端口