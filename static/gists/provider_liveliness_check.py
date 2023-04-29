import json
import requests
import argparse
import subprocess
from urllib.parse import quote as urlquote

def get_chains(rpc_url):
    response = requests.get(f"{rpc_url}/lavanet/lava/spec/show_all_chains")
    return response.json()['chainInfoList']

def get_providers(rpc_url, chain_id):
    response = requests.get(f"{rpc_url}/lavanet/lava/pairing/providers/{urlquote(chain_id)}?showFrozen=True")
    return response.json()['stakeEntry']

def check_provider(rpc_url, chain_id, moniker=None, address=None):
    providers = get_providers(rpc_url, chain_id)
    if moniker:
        provider = next((p for p in providers if moniker.lower() in p['moniker'].lower()), None)
    elif address:
        provider = next((p for p in providers if p['address'] == address), None)
    else:
        raise ValueError("Either moniker or address must be provided")

    if provider:
        if provider['stake_applied_block'] == '9223372036854775807':
            print("Provider frozen ❄️")
            print("More info: https://docs.lavanet.xyz/provider-features#freeze")
            return
        for endpoint in provider['endpoints']:
            ret = subprocess.run(
                f"grpcurl -max-time 1 -plaintext {endpoint['iPPORT']} list",
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                shell=True,
            )
            result = ret.stdout.decode()
            if "server does not support the reflection API" in result:
                print(f"{endpoint['iPPORT']}: OK")
            else:
                print(f"{endpoint['iPPORT']}: ERROR - {result}")
    else:
        print("Provider not found")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--rpc_url", default="https://public-rpc.lavanet.xyz/rest/")
    parser.add_argument("--chain_id", required=True)
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--moniker")
    group.add_argument("--address")

    args = parser.parse_args()

    check_provider(args.rpc_url, args.chain_id, args.moniker, args.address)

if __name__ == "__main__":
    main()