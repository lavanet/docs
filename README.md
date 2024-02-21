![Banner](static/img/banner/Chains.jpg)

# Documentazione su lava 📕

[![Sito web](https://img.shields.io/badge/WEBSITE-https%3A%2F%2Fdocs.lavanet.xyz-green?style=for-the-badge)](https://docs.lavanet.xyz) &emsp; [![Discord](https://img.shields.io/discord/963778337904427018?color=green&logo=discord&logoColor=white&style=for-the-badge)](https://discord.gg/EKzbc6bx)


## Panoramica 🔎

Questo repository (**@lavanet/docs**) contiene la documentazione tecnica per l'ecosistema Lava. La versione più recente di questo repository è distribuita sul sito Lava docs [website](https://docs.lavanet.xyz/) ed è visualizzabile lì. Se siete contrari alla formattazione, la documentazione di Lava può essere consultata anche come sorgente semplice nei file markdown disponibili nella cartella [docs](/docs/) di questo repository. Il sito web della documentazione di Lava è stato costruito utilizzando [Docusaurus 2](https://docusaurus.io/), un moderno generatore di siti web statici, e distribuito utilizzando la [Netlify Web Platform](https://www.netlify.com/).

I contenuti includono:

- Informazioni sulle catene supportate da Lava
- Guide all'installazione e alla configurazione per validatori, fornitori e sviluppatori
- Dettagli su reti e protocolli sulle caratteristiche uniche di Lava
- Collegamenti alle API RPC e Web3 più richieste

## Contributo 👥

Contribuire alla documentazione di Lava è un modo gratificante per contribuire all'ecosistema. Accogliamo sempre i collaboratori con amore e gentilezza. Dopo aver letto questo README, leggere la guida [contribution](CONTRIBUTING.md) per iniziare.


## Distribuzione 🚀

### Stato

[![Stato Netlify](https://api.netlify.com/api/v1/badges/58c0a448-7af0-48d3-8e29-86fc4a6f4868/deploy-status)](https://app.netlify.com/sites/sage-swan-13ac7b/deploys)

### Processo
Il ramo `main` di questo repository viene automaticamente distribuito al nostro sito di documentazione, mentre gli altri rami e le richieste di pull sfruttano Netlify deploy. Si noti che, a meno che non si sia un collaboratore riconosciuto di questo repository, ogni tentativo di PR genera un'approvazione Netlify che impedirà alla richiesta di pull di essere unita. Una volta che la richiesta è stata approvata e che è stata generata un'anteprima di deploy Netlify, un'anteprima di deploy Netlify apparirà nel corpo della PR come `😎 Deploy Preview`. Questa anteprima di distribuzione sarà verificata da un manutentore dei documenti prima di unire la richiesta di pull.

## Sviluppo locale 🔧

### 1. Sostituire questo repository!

Si consiglia di nominare il proprio fork `lava-docs` per distinguerlo da altri progetti che potrebbero avere convenzioni di denominazione simili.

### 2. Clonate il vostro fork

SSH **(consigliato)**

```bash
git clone git@github.com:Your-User-Name-Here/lava-docs.git
```

HTTPS

``bash
git clone https://github.com/Your-User-Name-Here/lava-docs.git
```

### 3. Impostare le variabili ambientali

```bash
cd lava-docs/
cp .env.example .env
```

Modificare il contenuto del file delle variabili ambientali (`.env`) come segue:

```
ALGOLIA_APP_ID=demo
ALGOLIA_API_KEY=demo
ALGOLIA_INDEX_NAME=demo
```

La ricerca di Algolia ha bisogno di valori assegnati a questi per avviarsi. Per le istanze di documenti locali (con ricerca non funzionale), qualsiasi valore fittizio funzionerà.

### 4. Installare tutti i pacchetti

```
yarn install
```

### 5. Ospitare un'anteprima locale dei documenti (*opzionale*)

```
yarn start
```

L'anteprima cambierà/caricherà dinamicamente man mano che si apportano modifiche ai file.

### 6. Creare una distribuzione locale dei documenti (*opzionale*)

```
yarn build
```

La compilazione apparirà nella cartella `./build/` della cartella docs.

### 7. Distribuzione su Github (*Opzionale*)

Se si usa GitHub pages per l'hosting, questo comando è un modo comodo per costruire il sito web e fare il push al ramo `gh-pages`.

```
$ GIT_USER=<il vostro nome utente GitHub> yarn deploy
```
