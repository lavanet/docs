---
slug: /faq
title: ❓ FAQs 
---

# FAQs

![FAQs Banner](/img/banner/FAQs.jpg)

:::info
There is an additional channel called #FAQ on our Discord. If you need further help hop on to our support channels there.
:::

<hr />

## Nodes, Validators and Providers ⏫ {#nodes-validators-providers}

### 🟡  What is a specification and what does it let me do? {#specs}
A specification (“spec”) is a module which you can add to Lava, extending the range of data services the network of providers can serve. RPC specs are the first to be added to Lava, and we will offer subgraph specs soon.


### 🟡 I have problems running the install scripts. {#install-troubleshooting}

Troubleshooting:

1. `lavad` command not found
    1. Try running `source ~/.profile`
2. The node is stuck on “Waiting for node to catch up”
    1. This process might take some time based on your internet connection, compute capabilities and the height of the latest block on the network
    2. Please allow 5-20 minutes for this procedure to catch up with the latest block in the network
3. curl or unzip commands are not found
    1. `sudo apt update && sudo apt install curl unzip -y`
4. sudo command not found
    1. `apt install sudo -y`
5. When running `stake_validator` you get the error
    ```bash
    account lava@XYZ not found: key not found
    ```
    1. Make sure your account is funded from Lava side before you try to stake as a validator

## Providers 🖥️ {#providers}

### 🟡 What is QoS (Passable Quality-of-Service)? {#qos}
This score for providers per relay is based on the metrics of latency, sync, and availability. There are two different types of QoS: 
- [Passable QoS](/provider-rewards-service#passable-qos)
- [QoS Excellence](/provider-rewards-service#qos-excellence)


### 🟡 How can you improve your provider's QoS? {#improve-qos}
Providers are rated based on response time, availability and freshness. It is also important to maintain high performance on your nodes and to have powerful servers. For more details, see [RSCH-1000](https://community.lavanet.xyz/t/rsch-1000-passable-quality-of-service/25)

### 🟡 How can I check the provider's performance? {#provider-performance}
You can check all providers on [Lava Info](https://info.lavanet.xyz). For your own provider, you can [configure Prometheus](/provider-features/#config-prometheus) using the `metrics-listening-address` flag.

You can also track your own performance using the CLI: `lavad test rpcprovider...`.

### 🟡 How do I earn Magma points with a provider? {#provider-points}
At the moment, providers are not connected to Magma and you cannot earn any points. However, you can already test the performance of providers, evaluate your CU, QoS...

### 🟡  What is the difference between a provider who uses Lavavisor and one who does not? {#lavavisor}
There is no difference. LavaVisor updates the binary automatically. Without it you have to do it manually. [LavaVisor](/lavavisor) is based on [Cosmovisor](https://docs.cosmos.network/main/build/tooling/cosmovisor)

### 🟡  The tokens used for providers and validators are different? {#provider-tokens}
No, there is only one token - `LAVA`. It is used as a governance token, as gas fees required for transactions, for rewards distributed to validators/providers, etc.
Lava uses dualstaking, when staking a provider, a validator is also specified.

### 🟡  How does slashing work for providers?
Slashing has not yet been implemented for providers. It is planned to only be for fraudulent activity. A [freeze feature](/provider-features#freeze) has been implemented for service providers to avoid downtime or poor QoS. 
Documentation is available for [jailing](/provider-rewards-service#jailing).

Here are some basic facts about jailing:
- providers claim CUs serviced via relay payments;
- each relay payment has an unreponsive providers list (provider1's claim might report providers 2,3 for example), these reports are signed by the consumer as well as the CU used;
- every epoch (15m) the chain checks unresponsiveness claims, against the CU serviced over the last 5 epochs;
- if the ratio of complaints per relay is greater than the ratio of service claimed (if you want the full equation lmk) if more than 0.5 AND the number of providers available in the specification is greater than 5 per geolocation, then the provider is jailed and gets all its funds back after 25 hours.

### 🟡  How much do providers earn now? {#providers-earn}
Providers earn fees in the form of lava tokens from consumers for servicing requests. Accordingly, testnet providers are currently earning lava tokens on the testnet.
Remember that Testnet tokens have no value!

### 🟡  How quickly do new providers receive relay requests? {#new-providers}
It can take up to 15m to get relays again.

### 🟡  Is it ok to use the same wallet address between node and provider?  {#same-wallet-address}
Yes, you can, it's allowed.

### 🟡 What is Incentivized Public RPC (ipRPC)? {#provider-iprpc}

These are incentivized programs where providers earn for servicing specific chains. Chains reward node operators for joining Lava and serving infrastructure in their native token.
The following ipRPCs are currently supported:
- [Evmos](https://www.lavanet.xyz/blog/providers-guide-to-evmos-iprpc?utm_source=provider-faq&utm_medium=docs)
- [Axelar](https://www.lavanet.xyz/blog/providers-guide-to-axelar-iprpc?utm_source=provider-faq&utm_medium=docs)
- [NEAR](https://www.lavanet.xyz/blog/onboarding-guide-get-paid-to-run-a-near-rpc-node?utm_source=provider-faq&utm_medium=docs)

### 🟡  Who can join the Incentivized Public RPC? {#join-iprpc}
Anyone can join the ipRPC. It requires [setting up a provider](https://docs.lavanet.xyz/provider-setup) for the appropriate service. Then sign up to receive lava testnet tokens using the appropriate forms:
- [Evmos ipRPC](https://lavanet.typeform.com/to/qQ1x6WJs)
- [Axelar ipRPC](https://lavanet.typeform.com/to/iW8rynWg)
- [NEAR ipRPC](https://lavanet.typeform.com/to/plCaDdVM)

### 🟡  How can I update/edit my provider information? {#provider-info}
To update your provider information on chain, send the `lavad tx pairing modify-provider...` transaction with the updated information and an additional stake of minimum 1 ulava.

### 🟡 I get `ERR_stake_provider_endpoints: invalid provider endpoints` error when trying to stake as a provider {#staking-error}
In your stake-provider transaction you need to specify all required provider endpoints based on the chain you are staking on. For example to provide for cosmos chains you need both tendermint-rpc and rest as follows: `"IP:port,tendermintrpc,1 IP:port,rest,1"`.

### 🟡 Is there an unbonding period for providers? {#unbonding-period}
Yes, it's currently configured to 21 days.

### 🟡 How can I see my current provider state (incl. unbonding)? {#provider-state}
You can use the following query: `lavad q pairing providers <CHAIN_ID>`

### 🟡 When running my provider process `lavad server` I get the following error `provider endpoint mismatch` {#provider-endpoint-mismatch}
This error means that you have used different geolocations when using  the `provider-stake` transaction and when running `lavad server`, please ensure they match and the problem should be resolved.
