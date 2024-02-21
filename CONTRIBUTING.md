# Benvenuti nella guida alla contribuzione dei documenti di Lava <!-- omettere nel toc -->.

> Prima di tutto - GRAZIE per aver trovato il tempo di contribuire! 🌋👍

Questo sito web è costruito utilizzando [Docusaurus 2](https://docusaurus.io/), tutte le vostre modifiche si rifletteranno su Lava Docs @ [docs.lavanet.xyz](https://docs.lavanet.xyz)

### Come puoi aiutare 💪?
1. Segnala un problema o un errore riscontrato
2. Suggerite una correzione tramite PR (leggete sotto)
3. Vuoi aggiungere nuovi contenuti/tutorial? Proponetelo prima tramite un nuovo problema e solo dopo scrivetelo, per risparmiare tempo.

In questa guida avrete una panoramica del flusso di lavoro dei contributi, dall'apertura di un problema, alla creazione di una PR, alla revisione e all'unione della PR.

## Guida per i nuovi contributori

Per avere una visione d'insieme di Lava, leggere la [Docs Intro](/docs/intro.md).

Questo repository è in linea con le migliori pratiche di contribuzione all'open source che si trovano in molti repository su GitHub. Se non le conoscete, iniziate da queste ottime risorse:
- [Trovare modi per contribuire all'open source su GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Configurare Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [Flusso di GitHub](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborare con le richieste di pull](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Guida di stile
Lava docs serve diversi tipi di utenti in diverse fasi del ciclo di vita.
Vogliamo creare una risorsa di documenti che si adatti a tutti, ma che abbia un denominatore comune di stile.

Le guide di stile sono una guida e non una restrizione; i buoni articoli che abbiamo scelto per questo scopo sono:
- Quando si tratta di opeartizioni git, raccomandiamo https://cbea.ms/git-commit/.
- Quando si tratta del contenuto vero e proprio dei documenti, raccomandiamo https://medium.com/larimaza-en/how-to-write-good-documentation-e19c70dc67f0

## Iniziare

### Problemi

#### Creare un nuovo problema

Se si riscontra un problema nella documentazione, [cercare se esiste già un problema](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). Se non esiste un problema correlato, si può aprire un nuovo problema usando un apposito [modulo per i problemi](https://github.com/lavanet/docs/issues/new/choose).

#### Risolvere un problema

Scorrete i nostri [problemi esistenti](https://github.com/lavanet/docs/issues) per trovarne uno che vi interessa. È possibile restringere la ricerca utilizzando i `labels` come filtri. Se si trova un problema su cui lavorare, si può aprire una PR con una soluzione.

### Apportare modifiche

#### Apportare modifiche al contenuto

Fare clic su **Porta un contributo** in fondo a qualsiasi pagina del documento per apportare piccole modifiche, come un errore di battitura, la correzione di una frase o un link interrotto. Si accede al file `.md' dove si possono apportare le modifiche e creare una richiesta di pull per la revisione.

#### Apportare modifiche localmente

1. Installare Git
2. Aprire il repository
3. Clonarlo nel proprio spazio di lavoro
4. Eseguire una versione locale usando `$ yarn start`.
5. Create un ramo di lavoro e iniziate con le vostre modifiche!

### Impegno e richiesta di prelievo

Effettuare il commit delle modifiche una volta che si è soddisfatti.

Una volta terminate le modifiche, creare una richiesta di pull, nota anche come PR.
- Compilare il modello "Ready for review" (pronto per la revisione), in modo che la PR possa essere revisionata. Questo modello aiuta i revisori a capire le modifiche e lo scopo della richiesta di pull.
- Non dimenticare di [collegare la PR al problema](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) se ne stai risolvendo uno.
- Attivare la casella di controllo [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork), in modo che il ramo possa essere aggiornato per un merge.
Una volta inviata la PR, un membro del team esaminerà la proposta. Potremmo fare domande o richiedere informazioni aggiuntive.
- Potremmo chiedere di apportare delle modifiche prima che la PR possa essere unita, usando [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) o i commenti alla richiesta di pull. È possibile applicare le modifiche suggerite direttamente attraverso l'interfaccia utente. È possibile apportare qualsiasi altra modifica nel proprio fork, quindi eseguire il commit nel proprio ramo.
- Quando si aggiorna la PR e si applicano le modifiche, contrassegnare ogni conversazione come [risolta](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- Se si incontrano problemi di fusione, consultare questo [tutorial git](https://lab.github.com/githubtraining/managing-merge-conflicts) per risolvere conflitti di fusione e altri problemi.

### Il tuo PR è stato unito!

Congratulazioni 🦸 Lava ti ringrazia 🌋🙏.

Una volta che il tuo PR è stato unito, i tuoi contributi saranno visibili pubblicamente su [Lava Docs](https://docs.lavanet.xyz).

Grazie a [GitHub Docs](https://github.com/github/docs) per l'ispirazione nella stesura del testo di questo contributo.
