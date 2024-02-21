---
slug: /add-spec
title: 添加 Specifications 🔧
---

# 向Lava添加Specification

<iframe width="100%" src="/img/tutorial/spec/spec_creation.webm" frameborder="0" allow="encrypted-media; gyroscope; picture-in-picture"></iframe>


## ℹ️ 内容 
在 Lava 生态系统中创建新的 specification 对于那些希望在网络中扩展或引入新功能的人来说至关重要。Lava 是模块化的；可以支持全新的 API、额外的链和索引器，而无需修改 Lava 协议。在 Lava 中，规范通常被称为 'spec'，作为一个基础蓝图，详细描述了特定链或应用程序相关的 API、所需方法、计算单元成本和预期行为。

贡献者通过添加新的specs在 Lava 中扮演着至关重要的角色。成为 Lava 的贡献者是整个生态系统中最重要的角色之一。在主网上，计划通过协议的经济机制来奖励贡献者。创建新的规范不仅是扩展 Lava 的一种方式，还具有许多其他好处：它建立了一个针对需求 API 的提供者社区，它允许根据需要以模块化的方式更改 API 集合，并为维护者和规范创建者提供了可能获得奖励的机会。贡献新的规范是非常受欢迎和必要的努力，用于保护和改进 web3 基础设施。

## 🏗️ 必要步骤

如果您正在考虑为 Lava 创建specification，以下是简化流程：

- 创建spec文件 🖊️： 首先创建一个符合 Lava spec标准的 JSON 文件。您可以从我们的 [reference guide](/spec-reference) 或 [cookbook](https://github.com/lavanet/lava/tree/main/cookbook/specs) 了解需要哪些字段。
- 详细说明功能📝: 在您的spec文件中，指定与您正在考虑的链或API相关的任何导入、加载项和扩展。请确保查看这些[key concepts](/spec#key-concepts-)
- 提交建议书📜: 一旦你的spec准备好了，就把它作为[governance proposal](#⌨️-command)到Lava社区。
- 社区决策👩🏼‍⚖️🧑🏿‍⚖️ : 如果你的提案获得了足够的支持，它将通过验证人的投票在链上被接受。您可以通过提交[pull request (PR)](https://github.com/lavanet/lava/pulls)继续提供支持，因此，您的spec可以在任何进一步更新之前添加到Lava cookbook中。

## ⌨️ 命令

```bash
lavad tx gov submit-legacy-proposal spec-add "{JSON_FILE_PATH}" -y --from "{ACCOUNT_NAME}" --gas-adjustment "1.5" --gas "auto" --node "{LAVA_RPC_NODE}"
```
