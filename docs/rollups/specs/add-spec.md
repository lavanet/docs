---
slug: /add-spec
title: Adding Specifications 🔧
---

# Adding a Specification to Lava

<iframe width="100%" src="/img/tutorial/spec/spec_creation.webm" frameborder="0" allow="encrypted-media; gyroscope; picture-in-picture"></iframe>


## ℹ️ Context 
Creating a new specification in the Lava ecosystem is important for those aiming to extend or introduce new functionalities within the network. Lava is modular; entirely new APIs, additional chains, and indexers can be supported without modifications to the Lava Protocol.  In Lava, a specification, often referred to as a 'spec', acts as a foundational blueprint that details the APIs, required methods, compute unit costs, and expected behavior pertinent to a specific chain or application. 

Contributors play a vital role in Lava by adding new specs. Becoming a contributor to Lava is one of the most significant roles to play in the entire ecosystem. At Mainnet, it is planned for Contributors to be rewarded by the economics of the protocol. Creating new specs is not only a way to expand Lava, but has many other benefits: it builds a community of providers for an in-demand API, it allows modular changes to API collections on an as-needed basis, and it gives an opportunity to potentially earn rewards as a maintainer and creator of the spec. The contribution of new specs is highly appreciated and necessary endeavor for securing and improving web3 infrastructure.

## 🏗️ Essential Steps

If you're considering creating a specification for Lava, here's the simplified flow:

- Create a Specification File 🖊️: Begin by creating a JSON file that meets Lava's specification standards. You can get a sense of what fields are required from our [reference guide](/spec-reference) or [example specifications](https://github.com/lavanet/lava/blob/main/config/provider_examples/test_spec_template.yml).
- Detail the Functions 📝: Within your spec file, specify any Imports, Add-Ons, and Extensions relevant to the chain or API you're considering. Make sure you review the importance of each of these [key concepts](/spec#key-concepts-).
- Submit a Proposal 📜: Once your spec is ready, submit it as a [governance proposal](../../governance/submit-proposal.md) to the Lava community.
- Community Decision 👩🏼‍⚖️🧑🏿‍⚖️ : If your proposal garners enough support, it will be accepted on-chain through a vote of validators. You can continue to provide support by submitting a [pull request (PR)](https://github.com/lavanet/lava/pulls) so your spec can be added to the Lava cookbook before any further updates.

## Command to submit a proposal

```bash
lavad tx gov submit-legacy-proposal spec-add "{JSON_FILE_PATH}" -y --from "{ACCOUNT_NAME}" --gas-adjustment "1.5" --gas "auto" --node "{LAVA_RPC_NODE}"
```
