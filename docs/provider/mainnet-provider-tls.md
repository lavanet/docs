---
slug: /mainnet-provider-tls
title: TLS Setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Provider TLS Setup Guide

:::caution
All providers on `lava-mainnet-1` must use a domain name and TLS (1.3). You must have a domain name to continue. If you have not already, please take a moment to purchase one! You can find cheap top-level domains [here](https://www.namecheap.com/) or [here](https://tld-list.com/).
:::

## 📊 Diagram

![Provider TLS Diagram](/img/tutorial/provider/provider-tls-diagram.png)

## 📋 Prerequisites

| Required Setup            |  ?  | 
| --------------------------|-----|
| acquired a domain name            | ✅  |
| `lavap` is installed & configured | ✅  |
| account with `ulava` balance      | ✅  |


## 📝 Written Guide (~45m)

<br />

### 🅰️ Change the A Record on your Domain


The first step of establishing your Provider is to modify some of the DNS settings on the domain you purchased. In specific, you'll need to change the A Records on your domain. Changing your `A-Record` will create a subdomain that routes traffic to a specific provider process. Depending upon who you've purchased your domain through, A-Records may be visible under `Advanced DNS` or another label.

<details> <summary> 🖧 Multiple Records (Recommended) </summary>


We recommend you create a separate `A-Record` for each one of the chains that you plan to support. This is more secure, as the default behavior is to refuse connection unless a consumer connects on the correct subdomain. 

For each chain you want to support, add an `A-Record` with the desired chain name as the `Host`, the `Value` will be your server IP.
For example, if you wanted to support Ethereum & Lava Mainnets, Your DNS Settings should include the following :

| Record Type       |  Host | Value |
| ------------------|-------| ----- |
| A-Record          |   eth |   Your-Server-Public-IP-Address-Here   |
| A-Record          |  lava |   Your-Server-Public-IP-Address-Here   |

</details>

<details> <summary> ⚀ Single Record </summary>

Alternatively, you can create one `A-Record` that captures traffic to all sub-domains. If you are supporting a large number of chains that frequently changes, doing this may somewhat simplify your process.

| Record Type       | Host | Value |
|-------------------|------|-------|
| A-Record          | *    | Your-Server-Public-IP-Address-Here |

</details>
<br />

### 📂 Install Required Dependencies

We will guide you on setting up and configuring Nginx to use a TLS certificate and handle connections to different provider processes. It is also possible to use alternative solutions for these two tasks, such as Caddy, Envoy or your preferred solution.

Run the following commands to install the required packages:

```bash
sudo apt update
sudo apt install certbot net-tools nginx python3-certbot-nginx -y
```

<br />

### 📮 Generate Certificate 

Next, we need to actually create the `TLS certificate` via the certifying authority. This process is automated by `certbot`.


Use `certbot` to create a certificate:

```
sudo certbot certonly -d you.xyz -d lava.you.xyz -d eth.you.xyz
```

Note, you will need one `-d` flag for each subdomain you created as an `A-Record`. Even if you opted to create a Single Record, you still need to indicate a subdomain for each provider process you will run. We use the filler `you.xyz` as an example above.

You may be met with several prompts. Use `nginx` or Nginx Web Server Plugin when asked. 
<br />

### 💻 Validate Certificate

Let's make sure your certificate successfully installed! ✅ Input the following command:

```sudo certbot certificates```

Keep track of your output. If your certificate generation was successful, it should look as following:

```
Found the following certs:
  Certificate Name: your-site.com
    Domains: your-site.com eth.your-site.com lava.your-site.com
    Expiry Date: 2023-11-07 14:37:29+00:00 (VALID: 84 days)
    Certificate Path: /etc/letsencrypt/live/your-site.com/fullchain.pem
    Private Key Path: /etc/letsencrypt/live/your-site.com/privkey.pem

```

You'll need both `Certificate Path` and `Private Key Path` for your next step.

<br />

### 🗃️ Add an Nginx Config for Each Domain

Lava recommends running each chain under a separate provider process. This will separate error logs and protect against complete provider failure in the case of a problematic provider process. The first step of this is to create different nginx routes for each chain.

For each chain that you want to support, you will need to create a separate `nginx` config file. 
`cd` into `/etc/nginx/sites-available/` and create a `server` file for each chain. You will need to select an open port for each chain. `Nginx` will use these config files to create your routes.

<Tabs>
<TabItem value="eth_ex" label="eth nginx server">

🟢 ```sudo nano eth_server``` 


```
server {
    listen 443 ssl http2;
    server_name eth.your-site.com;

    ssl_certificate /etc/letsencrypt/live/your-site.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-site.com/privkey.pem;
    error_log /var/log/nginx/debug.log debug;

    location / {
        proxy_pass http://127.0.0.1:2223;
        grpc_pass 127.0.0.1:2223;
    }
}
```

</TabItem>
<TabItem value="lav_ex" label="lava nginx server">

🟢 ```sudo nano lava_server```

```
server {
    listen 443 ssl http2;
    server_name lava.your-site.com;

    ssl_certificate /etc/letsencrypt/live/your-site.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-site.com/privkey.pem;
    error_log /var/log/nginx/debug.log debug;

    location / {
        proxy_pass http://127.0.0.1:2224;
        grpc_pass 127.0.0.1:2224;
    }
}
```


</TabItem>

<TabItem value="Caddy" label="caddy example">

:::warning
The below caddy example is to provide guidance only. The recommended route is through `nginx`. Although making a provider functional with Caddy is possible you are proceeding at your own risk and with your own expertise.
:::


```
https://your-site.com:443 {
   reverse_proxy {
    to h2c://127.0.0.1:2221
    transport http  {
        versions h2c 2
    }
   }
   log {
       output file /var/log/caddy/your-site.com.log
   }
}
```

</TabItem>

</Tabs>

In most cases, after creating a configuration file in accessible sites, you need to create a symbolic link to this file in the enabled sites directory. This can be done with a command like:
```
sudo ln -s /etc/nginx/sites-available/lava_server /etc/nginx/sites-enabled/lava_server
```
:::caution

The above examples use ports `443` for external listening and `2223` / `2224` for internal comms, respectively. Using ports other than `443` for external listening means that some users will not be able to connect to your provider. This can result in less rewards and poorer quality of service. For internal listening, be aware that some ports on your OS may be used for internal communication and should be avoided. 

:::

<br />

### 🧪 Test Nginx Configuration

Now, ensure that your `nginx` setup is working! ✅

```bash
sudo nginx -t
```

🖳 Expected Output:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

<br />

### ♻️ Restart Nginx

You will need to refresh the Nginx server:

```bash
sudo systemctl restart nginx
```
<br />

### ⚙️ Create the Provider Configuration

:::tip
Need a template? A default `rpcprovider.yml` configuration is available in `~/lava/config`
:::


Per earlier advisement, we'll create one `.yml` per chain we plan to support. Each one of these `.yml` files will function as the configuration for a distinct provider process. In case of our example, we'll create a `lava-provider.yml` and a `eth-provider.yml`.


<Tabs>
<TabItem value="lava_yml" label="lava-provider">

`nano lava-provider.yml`

```yaml

endpoints:
    - api-interface: tendermintrpc
      chain-id: LAV1
      network-address:
        address: 127.0.0.1:2224
        disable-tls: true
      node-urls:
        - url: ws://127.0.0.1:26657/websocket
        - url: http://127.0.0.1:26657
    - api-interface: grpc
      chain-id: LAV1
      network-address:
        address: 127.0.0.1:2224
        disable-tls: true
      node-urls: 
        url: 127.0.0.1:9090
    - api-interface: rest
      chain-id: LAV1
      network-address:
        address: 127.0.0.1:2224
        disable-tls: true
      node-urls: 
        url: http://127.0.0.1:1317
```

</TabItem>
<TabItem value="eth_yml" label="eth-provider">

`nano eth-provider.yml`

```yaml

endpoints:
    - api-interface: jsonrpc
      chain-id: ETH1
      network-address:
        address: 127.0.0.1:2223
        disable-tls: true
      node-urls: 
        url: wss://ethereum-rpc.com/ws/
```

</TabItem>
</Tabs>

Once we've created these files we can move onto starting the processes!
<br />

### 🏁 Start the Provider Process(es)

In this example, we use the built-in terminal multiplexer `screen` to run multiple provider processes. Begin by typing `screen`. But you can also use a different multiplexer, e.g. `tmux`.

⏫ To start the Ethereum process
```bash
screen -S eth-provider

# This will take us to a separate terminal where we can start the provider process:

lavap rpcprovider eth-provider.yml --from your_key_name_here --geolocation 1 --chain-id lava-mainnet-1 --log_level debug
```
Press `CTRL+ad` to detach from the `eth-provider` screen. <br />
⏫ To start the Lava provider process
```bash
screen -S lava-provider

# This will take us to a separate terminal where we can start the provider process:

lavap rpcprovider lava-provider.yml --from your_key_name_here --geolocation 1 --chain-id lava-mainnet-1 --log_level debug
```

Some notes:
* `--from` should be followed by the key name of your funded account that you will use to stake your provider
* `--log_level debug` gives us verbose output so we can diagnose any issues that may arise
* `--chain-id` may or may not be necessary, depending upon your setup, but we can default to `lava-mainnet-1`
* `--node` may or may not be necessary

:::caution
The syntax on your `.yml` files must be precise. Misplaced or invisible characters or inconsistent indentation can cause errors.
:::

<br />

### ☑️ Test the Provider Process!

Run the following commands one at a time!

`lavap test rpcprovider --from your_key_name_here --endpoints "your-site:443,LAV1"`

🖳 Expected output:

```
📄----------------------------------------✨SUMMARY✨----------------------------------------📄

🔵 Tests Passed:
🔹LAV1-grpclatest block: 0x4ca8c
🔹LAV1-restlatest block: 0x4ca8c
🔹LAV1-tendermintrpclatest block: 0x4ca8c

🔵 Tests Failed:
🔹None 🎉! all tests passed ✅

🔵 Provider Port Validation:
🔹✅ All Ports are valid! ✅

```


`lavap test rpcprovider --from your_key_name_here --endpoints "your-site:443,ETH1"`

🖳 Expected output:

```
📄----------------------------------------✨SUMMARY✨----------------------------------------📄

🔵 Tests Passed:
🔹ETH1-jsonrpclatest block: 0x1115fe9

🔵 Tests Failed:
🔹None 🎉! all tests passed ✅

🔵 Provider Port Validation:
🔹✅ All Ports are valid! ✅

```


### 🔗‍💥 Stake the Provider on Chain

Use a variation of the following command to stake on chain; the minimum stake is `50000000000ulava`

```bash
lavap tx pairing stake-provider ETH1 "50000000000ulava" "eth.your-site:443,1" 1 validator -y --from your_key_name_here --provider-moniker your-provider-moniker-1 --delegate-limit "0ulava" --gas-adjustment "1.5" --gas "auto" --gas-prices "0.0001ulava"
```
* validator - active validator address

```bash
lavap tx pairing stake-provider LAV1 "50000000000ulava" "lava.your-site:443,1" 1 validator -y --from your_key_name_here --provider-moniker your-provider-moniker-1 --delegate-limit "0ulava" --gas-adjustment "1.5" --gas "auto" --gas-prices "0.0001ulava"
```

### ☑️ Test the Providers again! 

```bash
lavap test rpcprovider --from your_key_name_here --endpoints "lava.your-site:443,LAV1"

lavap test rpcprovider --from your_key_name_here --endpoints "eth.your-site:443,ETH1"
```
You can also get useful information on the setup using:

```bash
lavap q pairing account-info --from your_key_name
```


❗ If you have any further issues, do not hesitate to venture to our [discord](https://discord.com/invite/Tbk5NxTCdA) where you can get better assistance!
