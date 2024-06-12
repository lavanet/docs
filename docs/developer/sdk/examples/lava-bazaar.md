---
slug: /lava-bazaar
---

# 🔨 构建Lava Bazaar： P2P 跨链资产检查器

![Lava Bazaar UI](/img/tutorial/sdk/demo_app/lava_bazaar_ui.png)

**Lava Bazaar** 是一个简单的跨链资产检查器。它利用 LavaSDK 与 viem 的 P2P RPC 集成（[`lava-viem`](/viem)），为用户提供一个 React 前端来检查不同区块链上的钱包余额。在引擎盖下，Lava 将 viem 的 [`PublicClient`](https://viem.sh/docs/clients/public.html) 替换为其整个去中心化的 RPC 提供商网络，为 dApp 开发者带来了许多好处。Lava Bazaar 是一个基本示例，可以进行修改，以便与 LavaSDK 和 viem 支持的任何区块链进行交互。

:::tip

查看完整项目，请访问 ![Github](/img/github_favicon.ico) [Github](https://github.com/KagemniKarimu/lava-bazaar)❗

:::

## 概览 🔎

这个教程探讨了如何使用 `lava-viem` 构建一个完全去中心化的跨链资产检查器，它可以在所有由 LavaSDK 和 viem 共同支持的链上运行。能够使用单个凭证跨多个链检查余额是许多 Web3 工具的基础，包括钱包、索引器和交易所。

本教程将引导你创建一个简单的应用程序，可以实现以下功能：

- 从以太坊、Arbitrum、FileCoin、Avalanche、Celo、Optimism 和 Polygon 主网获取并显示当前钱包余额和交易数量。
- 通过简单编辑两个数组，动态添加/删除对新区块链的支持！
- 在没有单个 RPC URL 的情况下访问 viem 上的 P2P RPC。


## 必备条件 📦

- 基本了解 [Node.js](https://nodejs.org/en)、[Express](https://expressjs.com/) 和 [React](https://react.dev/learn)。
- Node.js and npm 已下载。
- 熟悉使用应用程序接口/路由结构！

## 后端设置 🔙

首先，我们将设置一个 Express.js 服务器，通过 viem 的客户端实例与区块链网络交互。在普通的 dApp 中，我们不需要将后端与前端分开，但由于本教程编写时的网络条件，这是一个不错的设置，可以避免与某些提供商发生 CORS 问题。

### 📥 安装依赖项

```bash
npm install @lavanet/lava-viem express viem
```

### ⚒️ 构建构造器

```jsx
// viemclient.js
const { createViemClientWithLavaSDK } = require("@lavanet/lava-viem");

const clientList = {};

async function createClientForChain(chainID) {
    try {
        const client = await createViemClientWithLavaSDK({
            badge: {
                badgeServerAddress: "https://badges.lavanet.xyz",
                projectId: " // ", // Fetch your project ID from https://gateway.lavanet.xyz
            },
            geolocation: "1", //optional
            chainIds: chainID
        });
        if (client) {
            console.log(`${chainID}  🔩 intialized: `, client.name, client.transport.name, client.uid);
            return client;
        } else {
            console.log(`${chainID} ❌ failed to initialize!`);
        };
    } catch (error) {
        console.log(`❗ Error: ${error}`)
    };
};

async function getClient(chainID) {
    const client = clientList[chainID];
    if (!client) {
        throw new Error(` Unsupported or unitialized chain: ${chainID}`);
    }
    return client;
};

module.exports = { createClientForChain, clientList };

```

在 `viemclient.js` 中，我们定义了一个函数，用于为各种链创建 viem 客户端并将其存储在 `clientList` 中。我们需要导出该函数，以便将这一逻辑整合到服务器中。我们还将编写一个小的异步函数 `getClient()`，它允许我们为给定请求选择要使用的链！🧠

### 🧭 写入初始化函数

```jsx
// server.js
const express = require('express');
const { clientList, createClientForChain } = require('./viemclient');

const app = express();
const supportedChains = ["ARB1", "AVAX", "CELO", "ETH1", "FVM", "OPTM", "POLYGON1"];

(async () => {
for (const chain of supportedChains) {
    const client = await createClientForChain(chain);
    clientList[chain] = client;
  }
})();

// ... Define API endpoints such as /api/wallet/balance

```

在 `server.js` 中，我们从 `viemclient.js` 中导入函数，用它们来初始化客户端并设置 API 端点。我们将这些功能打包到一个匿名异步函数中......稍后，我们将在这里放置一些 API 端点！


### 🌐 创建 APIs

在构建路由之前，我们需要重新访问 `viemclient.js`。我们需要添加一些函数，用于获取最新的区块编号、获取相关钱包的钱包余额，以及获取给定地址的交易次数。所有这些都将使用 `getClient()` 函数来确定我们将与哪个实例通信...... 在 `viemclient.js` 中加入以下内容：

```jsx
//viemclient.js (cont'd)

// Function that gets the latest block from the selected chain!
async function getBlockNumber(chainInput) {

    const client = await getClient(chainInput);

    //Call the viem getBlockNumber
    const latestBlockNumber = await client.getBlockNumber();

    //convert to Number
    return Number(latestBlockNumber);
}

// Function that gets wallet balance of a given address on a given chain
async function getWalletBalance(addressInput, chainInput) {

    const client = await getClient(chainInput);

    //Call the viem getBalance
    let balance = await client.getBalance({ address: addressInput });

    return balance;
};

// Function that gets the number of TXs from a given address!
async function getWalletTxNumber(addressInput, chainInput) {
    const client = await getClient(chainInput);

    //Call the viem getTxCount
    const txCount = await client.getTransactionCount({ address: addressInput });

    return txCount;

};
```

在 `server.js` 中，我们需要添加一些路由，这样就可以顺利地从前端调用这些路由。这意味着我们的 `server.js` 可以包含如下内容：

```jsx
//server.js (cont'd)

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/api/chain/latest_block_num', async (req, res) => {
  console.log("✅ GET - /api/chain/latest_block_num", req.query.chain);
  try {
    const chain = req.query.chain
    const latestBlockNum = await getBlockNumber(chain);

    console.log(`➡️  ${chain} Returned BlockNum: ${latestBlockNum}`)
    res.json({ chain: chain, latestBlockNumber: latestBlockNum })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

// Route to get wallet balances
app.get('/api/wallet/balance', async (req, res) => {
  console.log("✅ GET - /api/wallet/balance", req.query.address, req.query.chain);
  try {
    const walletAddress = req.query.address;
    const chain = req.query.chain
    const balance = await getWalletBalance(walletAddress, chain); // Your function to get the balance
    const balanceString = balance.toString();

    console.log(`➡️  ${chain} Returned Balance: ${balance} for ${walletAddress}`)
    res.json({ chain: chain, address: walletAddress, balance: balanceString });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  // Logic to interact with blockchain and fetch balance
});

//Route to get Transaction Count
app.get('/api/wallet/transaction_count', async (req, res) => {
  console.log("✅ GET - /api/wallet/transaction_count", req.query.address, req.query.chain);
  // Logic to interact with blockchain and fetch transactions
  try {
    const walletAddress = req.query.address;
    const chain = req.query.chain;

    // Check if all required parameters are provided
    if (!walletAddress || !chain) {
      return res.status(400).json({ error: 'Missing required parameters' });
    };

    //Get and return the Transactions

    const transactionCount = await getWalletTxNumber(walletAddress, chain);
    console.log(`➡️  ${chain} Counted ${transactionCount} TXs on ${walletAddress}`);

    res.json({ chain, address: walletAddress, count: transactionCount });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🖥️⚡ Server running on port ${PORT}`);
});
```

这 3 个基本路由将构成我们应用程序的基础！正确构建后，请使用 `node server.js` 对其进行测试。我们应该会得到类似下面的结果（或多或少有几行；） ✨

![Lava Bazaar Backend Successful Launch](/img/tutorial/sdk/demo_app/lava_bazaar_be.png)

<br />

## 前端设置 🪟

现在，我们可以开始构建界面了，如果您熟悉 React，这应该是轻而易举的。如果不熟悉，请确保已设置好 `index.js`、`index.html` 和 `App.js`。我们特意避免使用 `create-react-app`，因为它与常见的 web3 依赖关系存在一些配置问题。如果你不习惯使用它，在不使用 `create-react-app` 的情况下设置 React 环境并非易事！因此，请慢慢来，并查阅单独的 [tutorial](https://react.dev/learn/add-react-to-an-existing-project) 或 [two](https://dev.to/underscorecode/creating-your-react-project-from-scratch-without-create-react-app-the-complete-guide-4kbc) 。

您可以使用这些依赖项中的任何一个或更多，具体取决于您的设置：

 > Dependency Tree (`npm ls`)
 > 
 > ├── @babel/core@7.23.6 <br/>
 > ├── @babel/preset-env@7.23.6 <br/>
 > ├── @babel/preset-react@7.23.3 <br/>
 > ├── babel-loader@9.1.3 <br/>
 > ├── css-loader@6.8.1 <br />
 > ├── react-dom@18.2.0 <br />
 > ├── react@18.2.0 <br />
 > ├── style-loader@3.3.3 <br />
 > ├── webpack-cli@5.1.4 <br />
 > ├── webpack-dev-server@4.15.1 <br />
 > └── webpack@5.89.0 <br />


### 💼 设置 WalletInfo 组件

```jsx
//WalletInfo.js

function WalletInfo() {
    const [address, setAddress] = useState('');
    const [chain, setChain] = useState('ETH1');
    const [balance, setBalance] = useState('');
    const [latestBlock, setLatestBlock] = useState('')
    const [txCount, setTxCount] = useState('');
    const [error, setError] = useState('');

    const chainOptions = {
        'ARB1': 'Arbitrum Mainnet',
        'AVAX': 'Avalanche Mainnet',
        'CELO': 'Celo Mainnet',
        'ETH1': 'Ethereum Mainnet',
        'FVM': 'FileCoin Mainnet',
        'OPTM': 'Optimism Mainnet',
        'POLYGON1': 'Polygon Mainnet'
    };

    const fetchWalletBalance = async () => {
        const response = await fetch(`http://localhost:3000/api/wallet/balance?address=${address}&chain=${chain}`);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        setBalance(data.balance);
    };

    const fetchCurrentBlock = async () => {
        const response = await fetch(`http://localhost:3000/api/chain/latest_block_num?chain=${chain}`)
        if (!response.ok) throw new Error(`Error: ${responseLatestBlock.statusText}`);
        const data = await response.json();
        setLatestBlock(data.latestBlockNumber);
    }

    const fetchTransactionCount = async () => {
        const response = await fetch(`http://localhost:3000/api/wallet/transaction_count?chain=${chain}&address=${address}`);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        setTxCount(data.count);
    };

    const fetchWalletData = async () => {
        setError('');
        try {
            await fetchCurrentBlock();
            await fetchWalletBalance();
            await fetchTransactionCount();
        } catch (err) {
            setError(err.message);
        }
    };
```

上面是 `WalletInfo.js` 组件的基本逻辑。我们有 `fetch` 函数，用于调用我们创建的 API，获取适当的响应并设置状态；我们还概述了我们的 `chainOptions` 函数，用于在构建界面时使用。每次我们创建的按钮被调用时，我们都会激活这些函数，以便更新界面，这就是 `fetchWalletData()`。在担心这些之前，我们还需要在最后的括号中添加一个 `return` 语句，详细说明组件的布局！

```jsx
    //WalletInfo.js (cont'd)

    return (
        <div style={{ padding: '20px' }}>
            <center><h1>🌋 The Lava Bazaar</h1>
            <h2>P2P Cross-Chain Asset Checker</h2>
            powered by <a href='https://docs.lavanet.xyz/viem'>Lava & viem</a>

            <div style={{ marginBottom: '20px' }}>

                <TextField
                    label="Wallet Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel>Blockchain</InputLabel>
                    <Select
                        value={chain}
                        onChange={(e) => setChain(e.target.value)}
                        label="Blockchain"
                    >
                        {Object.entries(chainOptions).map(([value, label]) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={fetchWalletData}
                    style={{ marginTop: '20px' }}
                >
                    Fetch Wallet Data
                </Button>
            </div>

            {balance && <p>Balance: {balance}</p>}
            {txCount && <p>TxCount: {txCount}</p>}
            {latestBlock && <p>Latest Block: {latestBlock}</p>}

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            </center>
        </div>
    );
}

// Now we can export!
export default WalletInfo;
```

这样我们就有了一个完整的用户界面！请务必将其添加到 `App.js` 主 `App()` 函数中：

```jsx
//App.js

function App() {
    return (
        <div className="App">
            <WalletInfo />
        </div>
    );
}

export default App;
```

如果一切正常，你应该会得到类似下面的输出结果：

![Lava Bazaar Successful FrontEnd Launch](/img/tutorial/sdk/demo_app/lava_bazaar_fe.png)

## 测试🗳️

测试一下！能用吗？点击这里查看最终版本！

```
https://github.com/KagemniKarimu/lava-bazaar
```

## 挑战 🧩

需要提高难度？想练习 web3 开发技能并了解更多集成知识？试试下面的方法：

- ⛓️ 增加对更多链的支持
- 🦜解析余额，使其更易于人阅读
- 📏添加地址输入验证
- 实施实时余额监控
- 💾缓存响应以提高速度
- 并行化所有链的初始化过程
- 🔎在同一文本输入的地址查找之外增加 Tx 查找