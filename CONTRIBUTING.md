# 欢迎来到Lava文档贡献指南 <!-- omit in toc -->

> 首先-感谢您花时间贡献! 🌋👍

本网站是使用[Docusaurus 2](https://docusaurus.io/)建立的，您的所有更改将反映在Lava Docs @ [docs.lavanet.xyz](https://docs.lavanet.xyz)上。

### 你能帮什么忙? 💪?
1. 报告你发现的问题/错误
2. 通过PR提出修复建议(请阅读下文)
3. 想要添加新的内容/教程?请先通过New issue提出，然后再写出来，这样可以节省时间

在本指南中，您将获得从打开问题，创建PR，审查和合并PR的贡献工作流程的概述。

## 新贡献者指南

要获得Lava的概述，请阅读[Docs简介](/docs/intro.md)。

这个存储库符合为开源做出贡献的最佳实践，就像你在GitHub上的许多存储库中发现的那样。如果你不熟悉这些，请从这些伟大的资源开始:
- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## 格式指南
Lava docs在不同的生命周期步骤中为多种用户类型提供服务。
我们想创建一个文档资源，它将适合所有人，但有一个共同的风格。

风格指南是指导而不是限制，为此我们挑选的好文章有:
- 当涉及到git操作时，我们建议 https://cbea.ms/git-commit/
- 当它是文档实际内容时，我们推荐 https://medium.com/larimaza-en/how-to-write-good-documentation-e19c70dc67f0

## 开始

### Issues

#### 创建 new issue

如果你发现了文档中的问题，[如果问题已经存在，请搜索](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments)。如果相关的问题不存在，您可以使用相关的[问题表单](https://github.com/lavanet/docs/issues/new/choose)打开一个新问题。

#### 解决 issue

浏览我们的[现有问题](https://github.com/lavanet/docs/issues)，找到一个您感兴趣的。你可以使用`labels`作为过滤器来缩小搜索范围。如果你发现了一个需要解决的问题，欢迎你打开一个修复的PR。

### 做出更改

#### 修改内容

点击任何文档页面底部的**贡献代码** (**Make a contribution**)，进行一些小的更改，例如拼写错误、句子修复或链接损坏。这将带你到`。Md `文件，您可以在其中进行更改并创建一个pull request以进行审查。

#### 在本地进行修改

1. 安装 Git
2. Fork仓库
3. 克隆到你的工作空间
4. 使用`$ yarn start`运行本地版本
5. 创建一个工作分支并开始修改!

### Commit & Pull Request

一旦你对修改感到满意，就提交修改。

当您完成更改后，创建拉取请求，也称为PR。
- 填写“Ready for review”模板，这样我们就可以审查你的PR。这个模板可以帮助审稿人了解你的更改以及你的pull请求的目的。
- 如果你正在解决一个问题，不要忘记[链接PR到问题](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)。
- 启用复选框 [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) 因此分支可以为合并而更新。
一旦你提交了你的PR，一个团队成员会审查你的提案。我们可能会提出问题或要求提供更多信息。
- 我们可能会要求在合并PR之前进行更改，或者使用[suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) 或者拉请求注释。您可以直接通过UI应用建议的更改。您可以在您的分支中进行任何其他更改，然后将它们提交到您的分支。
- 当您更新PR并应用更改时，将每个对话标记为[resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- 如果您遇到任何合并问题，请签出此 [git tutorial](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) 帮助您解决合并冲突和其他问题。

### 你的 PR 已被 merged!

祝贺🦸，Lava感谢你🌋🙏。

一旦你的PR被合并，你的贡献将在[Lava Docs](https://docs.lavanet.xyz)上公开可见。

_感谢[GitHub Docs](https://github.com/github/docs)提供编写此贡献文本的灵感_
