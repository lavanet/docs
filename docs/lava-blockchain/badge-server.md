---
slug: /badge-server
title: Badge Server
---

# Badge Server

## Overview 🔎

The badge server's primary function is to generate badges. Badges allow a user to make calls to any supported API without providing their private key. To do so, each badge server requires access to a valid private key associated with a project that is registered on-chain. This server is purposefully designed to be versatile, supporting multiple project configurations tailored for various decentralized applications (dApps). It achieves this flexibility through the use of several highly configurable environment variables. This approach ensures that the badge server can adapt to the specific needs of different dApps while maintaining a seamless and organized system for badge generation.

When the badge server receives a request to generate a badge, it performs the following check: If the project specified in the request exists in the server's configuration, it uses the private key associated with that project to sign the badge. However, if the project is not found in the configuration, the server defaults to using a predefined default configuration for the badge signing process.

## Lava Badge Server 🌋

Lava provides a hosted solution so that users do not have to spin up their own badge server! Lava's default badge server is reachable at `https://badges.lavanet.xyz`. A user can generate badges for use with Lava's badge server by creating projects on the [Lava Gateway](https://gateway.lavanet.xyz/?utm_source=badge-server&utm_medium=docs&utm_campaign=lava-phase-2).

## Running a Badge Server *(Experimental)* 🧪

:::warning

Running a badge server is advanced and requires a lot more setup than using Lava's default badge server. We recommend using the [Lava Gateway!](https://gateway.lavanet.xyz/?utm_source=sdk-frontend&utm_medium=docs&utm_campaign=docs-to-gateway) instead.

:::


### 📥 Install `lavap` 

Follow instructions at the [install page](/install-lava) to setup `lavap`

```bash
git clone https://github.com/lavanet/lava.git
cd lava
LAVA_BINARY=lavap make install
```

<br/>


### 🪛 Configure Environmental Variables 
`lavap` uses a `badgegenerator` command to set up the badge server. `badgegenerator` command takes a series of inputs from environmental variables. Some of these variables have default values, but others will be required to be configured to successfully run a badge server. To get started, you'll need to configure the environmental variables properly.

<hr/>

#### `PORT`

This specifies the port that the badge server will run on. 

```bash
#default value
PORT=8080
```
<hr/>

#### `METRICS_PORT`

The Metrics Port is used by Prometheus to track three metrics:
 - Total Requests
 - Failed Requests
 - Successful Processed Requests


```bash
#default value
METRICS_PORT=8081
```

<hr/>


#### `USER_DATA`

Within this variable, lies a mapping structure, where each entry connects a geolocation # to a project ID complete with the relevant keys and settings. It is in JSON format and used for the encryption mechanism of the badge server.

```json
{
  "2": {
    "default": {
      "project_public_key": "lava@......",
      "private_key": "<private key>",
      "epochs_max_cu": 99999
    },
    "project_id": {
      "project_public_key": "lava@......",
      "private_key": "<private key>",
      "epochs_max_cu": 99999
    }
  },
  "1": {
    "default": {
      "project_public_key": "lava@...",
      "private_key": "<private key>",
      "epochs_max_cu": 99999
    }
  }
}
```

<hr/>

#### `GRPC_URL`

This specifies the URL of the node with exposed gRPC port. Badge servers require access to a node with gRPC in order to function correctly.

```bash
GRPC_URL=public-rpc-testnet2.lavanet.xyz:9090
```
<hr/>

#### `CHAIN_ID`
This specifies the chain that will be used for providing badges.

```bash
#default value
CHAIN_ID=lava-tesnet-2
```

<hr/>

#### `DEFAULT_GEOLOCATION`
This holds importance as it serves as a fallback mechanism in cases where the user's country of origin cannot be determined for any reason. In such instances, the system defaults to the value specified in this variable.

```bash
#default value
DEFAULT_GEOLOCATION=1
```

<hr/>

#### `COUNTRIES_FILE_PATH`

This is the path-to-file for a CSV (Comma-Separated Values) file containing essential data about various countries, along with their corresponding links to Lava-geolocation information. This file structure consists of four columns: `country-code`, `country-name`, `continent code`, and `lava-geolocation`. 

You can download the file needed [here](https://storage.googleapis.com/lavanet-public-asssets/countries.csv).
<hr/>


#### `IP_FILE_PATH`

This is the path-to-file for a TSV (Tab-Separated Values) document containing IP address ranges and their corresponding country codes. The file consists of five columns: `range_start`, `range_end`, `AS_number`, `country_code`, and `AS_description`. 

It is available for download at the following location: [ip2asn-v4.tsv](https://iptoasn.com/)
<hr/>

<br/>

### 🔨 Run the `badgegenerator` command

Once you've taken the time to configure environmental variables, there is less need to use flags. The magic happens all with a single command:

```
lavap badgegenerator --log_level debug
```

:::tip

`log_level` should be set to `debug`. Setting to `debug` ensures that errors are caught in this experimental phase!

:::

<br/>

### 📏 Create and use a `badge` with LavaSDK

You can test the functionality of your badge server by asking it to sign a self-generated badge!

```javascript
const lavaSDK = await LavaSDK.create({
    badge: {
        badgeServerAddress: "<yourURLorAddress>",
        projectId: "<from setup>" //input your project ID from your setup
        },    
    chainID: "LAV1",
    rpcInterface:  "rest",
});
```
