![Banner](static/img/banner/Chains.jpg)

# Lava Documentation 📕

[![Website](https://img.shields.io/badge/WEBSITE-https%3A%2F%2Fdocs.lavanet.xyz-green?style=for-the-badge)](https://docs.lavanet.xyz) &emsp;  [![Discord](https://img.shields.io/discord/963778337904427018?color=green&logo=discord&logoColor=white&style=for-the-badge)](https://discord.gg/xp3vFSAMgS)


## Overview 🔎

This repository (**@lavanet/docs**) contains technical documentation for the Lava ecosystem. The most recent version of this repository is deployed to the Lava docs [website](https://docs.lavanet.xyz/) and is viewable there. If you're averse to rich formatting, Lava Documentation can also be browsed as plain source in the markdown files available in the [docs folder](/docs/) of this repository. The Lava docs website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator, and deployed using the [Netlify Web Platform](https://www.netlify.com/).

Contents include:

- Information on Lava's supported chains
- Installation & Setup Guides for Validators, Providers, and Developers
- Network & Protocol Details on Lava's Unique Features
- Links to in-demand RPC & Web3 APIs

## Deployment 🚀

### Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/58c0a448-7af0-48d3-8e29-86fc4a6f4868/deploy-status)](https://app.netlify.com/sites/sage-swan-13ac7b/deploys)

### Process
The `main` branch of this repository is automatically deployed to our docs site, and other branches and pull requests leverage Netlify deploy. Please note that unless you are a recognized contributor of this repository, each attempted PR generates a Netlify approval that will prevent your pull request from being merged. Once the request is approved and a Netlify deploy preview is generated, a Netlify deploy preview will appear in the body of your PR as `😎 Deploy Preview`. This deploy preview will be audited by a docs maintainer before merging your pull request.

## Local Development 🔧

### 1. Fork this repository!

We recommend naming your fork `lava-docs` to distinguish from other projects which might have similar naming conventions.

### 2. Clone your fork

SSH **(recommended)**

```bash
git clone git@github.com:Your-User-Name-Here/lava-docs.git
```

HTTPS

```bash
git clone https://github.com/Your-User-Name-Here/lava-docs.git
```

### 3. Set up environmental variables

```bash
cd lava-docs/
cp .env.example .env
```

Change the contents of your environmental variables(`.env`) file to the following:

```
ALGOLIA_APP_ID=demo
ALGOLIA_API_KEY=demo
ALGOLIA_INDEX_NAME=demo
```

Algolia search needs values assigned to these in order to start. For local docs instances (w/ non-functional search), any dummy values will work.

### 4. Install all packages

```
yarn install
```

### 5. Host a local preview of the docs (*Optional*)

```
yarn start
```

Your preview will dynamically change/hotload as you make changes to files.

### 6. Build a local deployment of the docs (*Optional*)

```
yarn build
```

Your build will appear in the `./build/` folder of your docs directory.

### 7. Deploy to Github (*Optional*)

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

## Contribution 👥

Contributing to the documentation of Lava is a rewarding way to give back to the ecosystem. We always welcome contributors with love & kindness. Please read the [contribution](CONTRIBUTING.md) guide to help you get started.
