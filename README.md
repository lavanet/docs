![Banner](static/img/banner/Chains.jpg)

# Lava 文档 📕

[![Website](https://img.shields.io/badge/WEBSITE-https%3A%2F%2Fdocs.lavanet.xyz-green?style=for-the-badge)](https://docs.lavanet.xyz) &emsp;  [![Discord](https://img.shields.io/discord/963778337904427018?color=green&logo=discord&logoColor=white&style=for-the-badge)](https://discord.gg/EKzbc6bx)


## 概览 🔎

这个仓库 (**@lavanet/docs**) 包含了 Lava 生态系统的技术文档。该仓库的最新版本已部署到 Lava 文档 [网站](https://docs.lavanet.xyz/) 并可在那里查看。如果你不喜欢丰富的格式，Lava 文档也可以在该仓库的 [docs 文件夹](/docs/) 中的 markdown 文件中以纯源码形式浏览。Lava 文档网站是使用 [Docusaurus 2](https://docusaurus.io/)，一种现代静态网站生成器构建的，并使用 [Netlify Web 平台](https://www.netlify.com/) 部署的。

内容包括:

-Lava支持链的信息
-针对验证者、提供者和开发人员的安装和设置指南
-关于Lava独特功能的网络和协议细节
-到需要的RPC和Web3 api的链接

## 贡献 👥

对Lava的记录做出贡献是回报生态系统的一种有益的方式。我们总是以爱心和善意欢迎贡献者。在审阅完这个自述文件后，请阅读[contribution](CONTRIBUTING.md)指南以帮助您开始。


## 部署 🚀

### 状态

[![Netlify Status](https://api.netlify.com/api/v1/badges/58c0a448-7af0-48d3-8e29-86fc4a6f4868/deploy-status)](https://app.netlify.com/sites/sage-swan-13ac7b/deploys)

### 处理
这个仓库的`main`分支自动部署到我们的文档站点，其他分支和pull请求利用Netlify deploy。请注意，除非您是此存储库的公认贡献者，否则每次尝试PR都会生成一个Netlify批准，以防止您的pull request被合并。一旦请求被批准并生成一个Netlify部署预览版，一个Netlify部署预览版将出现在你的PR主体中，名为 `😎 Deploy Preview`。这个部署预览将由文档维护者在合并你的pull request之前进行审计。
## 本地开发 🔧

### 1. 分叉该版本库！

我们建议将您的 fork 命名为 `lava-docs`，以区别于其他可能有类似命名约定的项目。

### 2. 克隆你的分叉

SSH **(recommended)**

```bash
git clone git@github.com:Your-User-Name-Here/lava-docs.git
```

HTTPS

```bash
git clone https://github.com/Your-User-Name-Here/lava-docs.git
```

### 3. 设置环境变量

```bash
cd lava-docs/
cp .env.example .env
```

将环境变量（`.env`）文件的内容更改为以下内容：

```
ALGOLIA_APP_ID=demo
ALGOLIA_API_KEY=demo
ALGOLIA_INDEX_NAME=demo
```

Algolia 搜索需要为这些值赋值才能启动。对于本地文档实例（无功能搜索），任何虚值都可以使用。

### 4. 安装所有软件包

```
yarn install
```

### 5. 在本地预览文档（*可选*）。

```
yarn start
```

当你对文件进行修改时，预览会动态更改/热载。

### 6. 构建文档的本地部署（*可选*）。

```
yarn build
```

您的构建将出现在文档目录下的 `./build/` 文件夹中。

### 7. 部署到 Github（*可选*）。

如果使用 GitHub 页面托管，该命令可以方便地构建网站并推送到 `gh-pages` 分支。

```
$ GIT_USER=<Your GitHub username> yarn deploy
```