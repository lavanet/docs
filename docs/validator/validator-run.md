---
sidebar_position: 1
---

# Running a Validator
Want to run a validator? This section will help you through it, step by step.
For additional help see the [FAQ Section](/validator/validator-faq.md)

:::info prerequisite
Before continuing with this section, you'll have to [set up a full node](/lava-blockchain/run-node.md) and make sure it's synced to latest block.
:::

## Start your Validator

Once you have a full node running and the required uLAVA, start you validator by running the following command:


TODO !!!!!!!!

```bash
lavad tx staking create-validator \
  --amount=1000000ulava \
  --pubkey=$(lavad tendermint show-validator) \
  --moniker="choose a moniker" \
  --chain-id=<chain_id> \
  --commission-rate="0.10" \
  --commission-max-rate="0.20" \
  --commission-max-change-rate="0.01" \
  --min-self-delegation="1000000" \
  --gas="auto" \
  --gas-prices="0.0025ulava" \
  --from=<key_name>
```

### View your Validator details
Viewing your validator is possible with the command:
```bash
lavad query staking validator <account>
```

TODO: EDIT?

## Confirm the Validator is running
Look for your validator address using:
```bash
lavad tendermint show-address
```

### With the CLI
You should see if your validator has joined the network validators by running the following command and receiving a result:
```bash
lavad query tendermint-validator-set | grep "$(lavad tendermint show-address)"
```

### With Lava Scan
You can visit [Lava Scan](/) and search for your validator address you got above.

## Advanced configurations
You can find more advanced information about running a node or a validator on the [Tendermint Core documentation](https://docs.tendermint.com/v0.35/nodes/).
