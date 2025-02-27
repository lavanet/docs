---
slug: /how-to-bridge-lava
title: 🌉 How to bridge Lava
---

# How to Bridge Lava on Arbitrum Tokens to Lava Mainnet Tokens 

## Introduction to Lava

Lava is a Cosmos-based protocol that coordinates traffic for the onchain world. When you use a blockchain app, you send a stream of traffic - transactions, data queries - to the underlying chain. Lava aggregates data providers to serve AI agent and dapp traffic, dynamically routing requests to the fastest, most reliable providers.

Because LAVA exists both as an ERC20 token on **Arbitrum (an Ethereum Layer 2)** and as a native token on Lava Mainnet, some holders may have LAVA on Arbitrum, while others have Lava Mainnet tokens. To participate in staking or restaking on the Lava Network—and earn rewards from incentive pools—you need **Lava Mainnet tokens**. Bridging is therefore essential for anyone with Lava on Arbitrum.

### Why Are There Two Lava Tokens?

1. **LAVA on Arbitrum (ERC20 token):**
    - Traded on centralized and decentralized exchanges (e.g., Bybit, Uniswap)
    - Runs on Arbitrum, an Ethereum Layer 2
    - Compatible with EVM dapps, DeFi protocols, and other use-cases
2. **Lava Mainnet Token [native LAVA]:**
    - Powers the Lava Network protocol
    - Used for staking, restaking, and securing the network
    - Required to earn incentives from Lava’s unique contributor rewards model

**_Note:_** 
LAVA is available on DEXs: Osmosis (Lava Mainnet), Uniswap (ERC-20 Arbitrum, ERC-20 Base) and Pancakeswap (ERC-20 BSC).
- LAVA contract address on Arbitrum: `0x11e969e9B3f89cB16D686a03Cd8508C9fC0361AF`
- LAVA address on Binance Smart Chain: `0xFfeB8287dE7DC756067e171e9919c730f0636680`
- LAVA contract address on Base: `0x11e969e9B3f89cB16D686a03Cd8508C9fC0361AF`
- LAVA on Base and BSC **is not transferable to CEXs** as they only support the Arbitrum or Lava Mainnet version of LAVA.

If you purchased LAVA tokens on **KuCoin**, you already have Lava Mainnet tokens and do **not** need to bridge. These tokens can be staked or restaked immediately by transferring them to a Cosmos-compatible wallet, such as **Leap** or **Keplr**.

### How Lava Works at a Glance

- **Validators** secure the Lava blockchain and validate blocks.
- **Providers** register on Lava blockchain to offer high-quality RPC services.
- **Stakers** delegate Lava Mainnet tokens to Validators to secure the Lava blockchain.
- **Restakers** delegate Lava Mainnet tokens to top Providers to route traffic to them.

When blockchains use Lava to coordinate their RPC, they create incentive pools in their native tokens. Contributors—Validators, Stakers, Providers, and Restakers—can earn rewards from these pools.

### Why Bridge Your Lava from Arbitrum to Mainnet?

- **Support and Secure the Lava Network:** Lava Mainnet tokens let you fully participate in the ecosystem—helping to secure the network, direct RPC traffic, and contribute to the protocol’s long-term success.
- **Earn Staking & Restaking Rewards:** Lava Mainnet token holders who stake and restake their tokens are eligible for rewards. Staking of Lava Mainnet Tokens is also required as part of the Validator and Provider eligibility process.

<br/>

## Step-by-Step: Bridging Your Lava on Arbitrum to Lava Mainnet

# 🎥 How to bridge Lava (~6m)

<video width="100%" height="100%" controls>
<source src="/img/tutorial/how_to_bridge/Bridgin_How_To_v4.mp4" type="video/mp4" />
</video>

<br/><br/>
<hr/>
<br/>

Below is a guided process using two popular bridging routes: **Skip:Go and Squid Router**. You’ll need an **Ethereum-compatible wallet** (such as MetaMask), and a **Cosmos-compatible wallet** (Leap or Keplr) for Lava Mainnet.

- Skip:Go: https://go.skip.build/
- Squid Router: https://app.squidrouter.com/
- MetaMask: https://metamask.io/
- Leap: https://app.leapwallet.io/
- Keplr: https://wallet.keplr.app/

<br/>

# 1. Prepare Your Wallets

## 1.1 Lava on Arbitrum
Transfer your ERC20 LAVA tokens from the CEX to your Arbitrum wallet e.g., MetaMask.

**_Note:_** If your tokens are on Kucoin, you should only transfer to a Cosmos wallet because they are already native LAVA tokens.

## 1.2 Add Arbitrum Network in MetaMask
1. Open MetaMask and click the network selector (usually labeled "Ethereum Mainnet").

![MetaMask settings for adding or switching to the Arbitrum network pt1](/img/tutorial/how_to_bridge/MetaMask1.png)

2. Click "Add Network", then add/approve Arbitrum if it's not already in your list.

![MetaMask settings for adding or switching to the Arbitrum network pt2](/img/tutorial/how_to_bridge/MetaMask_Arbitrum.png)

3. You can verify the Arbitrum network details at (arbitrum-mainnet.infura.io).

![MetaMask settings for adding or switching to the Arbitrum network pt3](/img/tutorial/how_to_bridge/MetaMask_Arbitrum2.png)

---

## 1.3 Import the Lava (Arbitrum) Token Contract
1. Copy the official Lava on Arbitrum **ERC20 contract address** from a reliable source:
- **Arbiscan:** https://arbiscan.io/token/0x11e969e9B3f89cB16D686a03Cd8508C9fC0361AF
- **Copy & Paste:** `0x11e969e9B3f89cB16D686a03Cd8508C9fC0361AF`
- **Lava Website:** https://www.lavanet.xyz/blog/eruption 

2. In MetaMask, click **Import Tokens**, paste the contract address, and confirm.

    ![MetaMask interface with the Lava (Arbitrum) token contract being manually imported. pt1](/img/tutorial/how_to_bridge/MetaMask_LavaImport.png)

    ![MetaMask interface with the Lava (Arbitrum) token contract being manually imported. pt2](/img/tutorial/how_to_bridge/MetaMask_LavaImport2.png)

- Once imported, you should see your Lava (Arbitrum) tokens in your MetaMask wallet.

    ![Updated MetaMask token list including Lava (Arbitrum) tokens.](/img/tutorial/how_to_bridge/MetaMask_ArbImport.png)

<br/>

## 1.4 Set Up a Lava Mainnet Wallet

Because Lava Mainnet is a Cosmos chain, you need a **Cosmos-compatible wallet:**

1. Install the **Leap** or **Keplr** Chrome extension.
- Leap: https://app.leapwallet.io/
- Keplr: https://wallet.keplr.app/
2. Create or import your wallet, and keep your seed phrase secure.

- **Leap wallet Chrome extension interface** 

    ![Leap wallet opened with “Lava” selected as the chain, showing the user’s wallet address. pt1](/img/tutorial/how_to_bridge/Leap_1.png)

    ![Leap wallet opened with “Lava” selected as the chain, showing the user’s wallet address. pt2](/img/tutorial/how_to_bridge/Leap_2.png)

- **Keplr wallet Chrome extension interface**

    ![Keplr wallet showing the Lava chain selection and the wallet address. pt1](/img/tutorial/how_to_bridge/Keplr_1.png)

    ![Keplr wallet showing the Lava chain selection and the wallet address. pt2](/img/tutorial/how_to_bridge/Keplr_2.png)

<br/>

## 2. Using Skip:Go to Bridge

1. Open [Skip:Go](URL: https://go.skip.build/) and connect your MetaMask wallet
- **Skip:Go homepage**

    ![Skip:Go's main dashboard, showing an option to connect MetaMasks.](/img/tutorial/how_to_bridge/SkipGo_2.png)

<br/>

2. **Select Arbitrum → Lava Mainnet**
- Choose **Arbitrum** as the source chain.
- Select **Lava on Arbitrum** as the token you want to swap out.
- Choose **Lava** and **Lava Mainnet** as the destination chain and token.
- **Skip:Go bridging interface**

    ![Skip:Go user interface highlighting Arbitrum as the source and Lava Mainnet as the destination.](/img/tutorial/how_to_bridge/skipGo_1.png)

<br/>

3. **Enter the Amount & Confirm**
1. Input the number of **Lava (Arbitrum)** tokens to bridge.
2. Set your destination address: Keplr or Leap
3. Confirm any prompts in MetaMask.

    ![Skip:Go user interface highlighting Arbitrum as the source and Lava Mainnet as the destination.](/img/tutorial/how_to_bridge/SkipGo_Set_Destination.png)

4. Wait for cross-chain confirmation messages.
- **Go with user inputting Lava amount**

    ![User typing the desired number of Lava tokens to bridge, with a MetaMask pop-up for transaction approval.](/img/tutorial/how_to_bridge/SkipGo_Leap_Transfer_Wallet.png)

<br/>

4. **Check Your Lava Mainnet Wallet**
- Once completed, **Skip:Go** will display a success message.
- Check your Leap or Keplr wallet to confirm your new Lava Mainnet balance.

    ![Skip:Go user interface](/img/tutorial/how_to_bridge/SkipGo_Amount.png)

<br/>

## 3. Using Squid Router to Bridge
1. **Open Squid Router**
- Go to (Insert Squid Router URL) in your browser.
- Select **Swap** from the homepage or menu.
- **Squid Router homepage**

    ![Squid Router website main dashboard with a visible “Cross-Chain Swap” option.](/img/tutorial/how_to_bridge/Squid_Main.png)

<br/>

2. **Connect MetaMask and Select Arbitrum**
- Squid Router will prompt you to **Connect Wallet**.

    ![Squid Router bridging page highlighting Arbitrum as the source chain and Lava (Arbitrum) as the token.](/img/tutorial/how_to_bridge/Squid_Connect.png)

- Confirm in MetaMask, ensuring **Arbitrum** is selected as the source chain.
- Choose **Lava (Arbitrum)** as the token you want to swap.
- **Squid Router interface with Arbitrum selected as the source chain**   

    ![Squid Router bridging page highlighting Arbitrum as the source chain and Lava (Arbitrum) as the token.](/img/tutorial/how_to_bridge/Squid_Swap.png)

<br/>

3. **Choose Destination: Lava Mainnet**
- For the destination chain, pick **Lava** and select **Lava Mainnet** as the token to receive.
- Click **Add a recipient**. 
- Connect your Leap or Keplr wallet when prompted, and approve any prompts in MetaMask (such as token allowance).

- **Squid Router’s “Add a recipient” dialog**

    ![Squid Router step requesting connection to Leap or Keplr for Lava Mainnet, with MetaMask connected on the Arbitrum side.](/img/tutorial/how_to_bridge/Squid_Receive.png)

    ![Squid Router step requesting connection to Leap or Keplr for Lava Mainnet, with MetaMask connected on the Arbitrum side.](/img/tutorial/how_to_bridge/Squid_Receive_Keplr.png)

<br/>

4. Confirm the Swap
- Enter the **amount of Lava (Arbitrum)** you want to bridge
- Click **Swap.**
- Approve the transaction in MetaMask.
- **Squid Router “Swap” confirmation**

    ![Squid Router interface showing an amount of Lava (Arbitrum) to be swapped to Lava Mainnet, along with a MetaMask confirmation window.](/img/tutorial/how_to_bridge/Squid_Swap_Confirm.png)

<br/>

5. **Verify in Your Lava Mainnet Wallet**
- Wait a few moments for cross-chain confirmations.
- Check **Leap** or **Keplr** to confirm your new Lava Mainnet tokens have arrived.
- **Leap or Keplr wallet with updated Lava Mainnet balance**

    ![Keplr/ Leap wallet displaying a newly updated Lava token balance on Lava Mainnet, confirming a successful bridge](/img/tutorial/how_to_bridge/Squid_Swap_Confirm_Keplr.png)

<br/>

## Next Step: Staking and Restaking

Now that you’ve bridged your Lava tokens from Arbitrum to Lava Mainnet, you can:

- **Stake** to **Validators** to secure the network and validate blocks.
- **Restake** to direct traffic to **Providers** who deliver high-quality RPC services for supported chains. 

Both Stakers and Restakers earn additional incentives from the protocol.

<br/>

By bridging your Lava on Arbitrum tokens to Lava Mainnet, you unlock the full utility of the Lava Network—securing the ecosystem, directing RPC traffic, and earning rewards alongside other contributors. 
