---
slug: /optimism-node
title: Running an Optimism RPC Node
---

## Requirements

Running a node on Optimism is best accomplished through Docker, however, if you want to take the steps to build manually, you can consult the guide available here:
https://community.optimism.io/docs/developers/build/run-a-node/#non-docker-configuration


Before beginning, verify that your computer meets the following [hardware requirements](https://github.com/smartcontracts/simple-optimism-node#recommended-hardware)


```bash
git clone https://github.com/smartcontracts/simple-optimism-node.git
cd simple-optimism-node
cp .env.example .env
```

You'll need to open `.env` file and change the environmental variables of the file to your liking. Note that you'll need to spin up a legacy 