---
slug: /add-spec
title: Creating a New Specification
---

# Creating a New Specification 

<iframe width="100%" src="/img/tutorial/spec/spec_creation.webm" frameborder="0" allow="encrypted-media; gyroscope; picture-in-picture"></iframe>


## ℹ️ Context 
Creating a new specification in the Lava ecosystem is important for those aiming to extend or introduce new functionalities within the network. In Lava, a specification, often referred to as a 'spec', acts as a foundational blueprint that details the APIs, required methods, compute unit costs, and expected behavior pertinent to a specific chain or application.

## 🏗️ Essential Steps

If you're considering creating a specification for Lava, here's the simplified flow:

- Create a Specification File 🖊️: Begin by creating a JSON file that meets Lava's specification standards. You can get a sense of what fields are required from our [reference guide](/spec-details) or [cookbook](https://github.com/lavanet/lava/tree/main/cookbook/specs).
- Detail the Functions 📝: Within your spec file, specify any Imports, Add-Ons, and Extensions relevant to the chain or API you're considering. Make sure you review the importance of each of these [key concepts](/spec#key-concepts-)
- Submit a Proposal 📜: Once your spec is ready, submit it as a [governance proposal](#⌨️-command) to the Lava community.
- Community Decision 👩🏼‍⚖️🧑🏿‍⚖️ : If your proposal garners enough support, it will be accepted on-chain through a vote of validators. You can continue to provide support by submitting a [pull request (PR)](https://github.com/lavanet/lava/pulls) so your spec can be added to the Lava cookbook before any further updates.

## ⌨️ Command 

```bash
lavad tx gov submit-legacy-proposal spec-add "{JSON_FILE_PATH}" -y --from "{ACCOUNT_NAME}" --gas-adjustment "1.5" --gas "auto" --node "{LAVA_RPC_NODE}"
```
