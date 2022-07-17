---
sidebar_position: 1
---

# Starting a Validator
Want to run a validator? This section will help you through it, step by step.
For additional help see the [FAQ Section](../faq.md)

:::warning prerequisite
Before continuing with this section, you'll have to [set up a node](/lava-node-intro.md) and make sure it's synced to latest block.
:::

### 1. Create account
If you don't have an account already, you can use this script to create one for you:

```bash
curl -s --location --request GET 'https://get.lavanet.xyz/pnet_run_validator' --header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 01_run_validator.sh && \
  chmod +x 01_run_validator.sh && \
  ./01_run_validator.sh production create_account
```

### 2. Fund account
Script finished? Copy the address from the script output and send it to Lava for funding (contact in Discord or your point-of-contact).

(Example address: `lava@1xtlgz4nugxducwscc7zm2lkumagluf6jj8m599`)

### 3. Stake & start validating

Got your airdrop? **Wait** for our confirmation that your account is funded, then run:

```bash
curl -s --location --request GET 'https://get.lavanet.xyz/pnet_run_validator' --header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 01_run_validator.sh && \
  chmod +x 01_run_validator.sh && \
  ./01_run_validator.sh production stake_validator
```