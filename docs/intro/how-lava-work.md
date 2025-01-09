---
slug: /how-lava-work
title: ⚙️ How Lava works
---

# **How Lava Works ⚙️**

## **Key network participants**

Lava Network has many different participants. 

Together, the network provides fast, reliable RPC and data services to AI agents and anyone using blockchain apps. 

- **(Data) Providers** e.g. RPC node runners, indexers are entities who register on the Lava blockchain to offer services and earn rewards from different blockchains
- **(Data) Consumers** e.g. wallets, dapps, AI agents are entities which use the Lava Network for permissionless, 24/7 access to blockchains, with minimal downtime
- **Validators** secure the Lava blockchain 
- **LAVA stakers** delegate to Validators to secure the Lava blockchain. They earn a share of Validator rewards
- **LAVA restakers** delegate to top Providers to direct more traffic to them. They earn a share of Provider rewards
- **Spec Champions** are open-source contributors to Lava who integrate new chains and services to be supported by the protocol. Think of these contributors are people who can permissionlessly add a new dish to the menu of a restaurant

## **Protocol overview (high level)**

Lava functions like a multi-sided marketplace. 
1. **Providers** stake to join the Lava Network and offer services such as Ethereum RPC or Websockets subscriptions 
2. Providers build up reputation by aggregating Quality of Service scores from **Consumers**. Consumers score Providers across latency, uptime and data freshness
3. **LAVA restakers** delegate to top Providers to direct more traffic to them
4. **Blockchains** create incentive pools on Lava to scale their infrastructure and reward LAVA restakers and Providers
5. Blockchains can either permissionlessly add themselves to Lava or **Spec Champions** can write the spec for the chain. Existing specs are here: https://github.com/lavanet/lava/tree/main/specs
6. Rewards are claimed via the Lava blockchain, secured by **Validators** and **LAVA stakers**
7. Consumers access RPC via the Lava Network using a hosted gateway (e.g. accounts.lavanet.xyz), the p2p Lava SDK or a self-hosted gateway (built using the [Server Kit](https://docs.lavanet.xyz/access-server-kit))

## **The LAVA token**

# 🎥 LAVA token introduction (~3m)

<video width="100%" height="100%" controls>
<source src="/img/tutorial/how_to_bridge/how_to_bridge_1.mp4" type="video/mp4" />
</video>

<br/><br/>
<hr/>
<br/>

The Lava token coordinates all network participants to provide fast, reliable, permissionless data services. 

LAVA is staked to secure the network and restaked to direct data traffic to top Providers.

You can read more about LAVA in the [tokenomics section](http://docs.lavanet.xyz/token) of this documentation. 