---
sidebar_position: 2
title: Be a Validator
---
# Validator introduction
Lava blockchain uses Proof-of-stake (PoS) as the consensus mechanism, based on [Tendermint](https://tendermint.com/). Validators participate in the network by verifying new blocks to earn rewards.

LAVA holders are incentivized to stake their tokens to secure Lava, while receiving a reward in return.
Validators earn LAVA from creation of new blocks and from the transaction fees, and on the other hand - slashing may occur to punish bad actors, all facilitated by Tendermint's consensus protocol. 

_Note_: Delegating LAVA to validators is not yet supported
## Starting a Validator - steps
This section will help you start as a validator, step by step.
For additional help see the [FAQ Section](faq.md)

### 1. Setup a node
Running as validator requires a Lava Node running, with state synced. 
Please refer to **[set up a node](/lava-node-intro.md)** section.

### 2. Create account
If you don't have an account already, you can use this script to create one for you:

```bash
curl -s --location --request GET 'https://get.lavanet.xyz/pnet_run_validator' --header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 01_run_validator.sh && \
  chmod +x 01_run_validator.sh && \
  ./01_run_validator.sh production create_account
```

### 3. Fund account
Script finished? Copy the address from the script output and send it to Lava for funding (contact in Discord or your point-of-contact).

(Example address: `lava@1xtlgz4nugxducwscc7zm2lkumagluf6jj8m599`)

### 4. Stake & start validating

Got your airdrop? **Wait** for our confirmation that your account is funded, then run:

```bash
curl -s --location --request GET 'https://get.lavanet.xyz/pnet_run_validator' --header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 01_run_validator.sh && \
  chmod +x 01_run_validator.sh && \
  ./01_run_validator.sh production stake_validator
```