var MessageTranslation = function(successCallback, errorCallback) {

	this.setItalian = function() {
		// label menu
		this.menu0 = "Home";
		this.menu1 = "Catalogo";
		this.menu2 = "KATO IMER";
		this.menu3 = "Estensione di garanzia";
		this.menu4 = "Dealers/Officine";
		this.menu5 = "News";
		this.menu6 = "Advertising";
		this.menu7 = "Contatti";
		this.menu8 = "Assistenza";
		this.menu9 = "YouTube";
		this.menu10 = "Area utente";
		this.menu11 = "Logout";
		this.menu12 = "FAQ";

		// pagina login
	    this.logiBtLabel = "Entra";
	    this.registerBtLabel = "Registrati";
	    this.fbBtLabel = "Login con Facebook";
	    this.gplusBtLabel = "Login con Google+";
	    this.newRegisterBtLabel = "Nuova registrazione";
	    this.labelAlertNoconn = "Connessione assente. Impossibile effettuare login o nuove registrazioni."; 
	    this.labelAlertNoconnHome = "Connessione assente."; 
	    this.ackAuth = "Autenticazione riuscita";    // NEWWW 29.06.2018
	    this.nackAuth = "Autenticazione non riuscita";    // NEWWW 29.06.2018
	    this.errorAuth = "Impossibile effettuare l'utenticazione";     // NEWWW 29.06.2018
		this.contentCookie = "Questa Web App consente l'invio di cookie tecnici e di profilazione di \"terze parti\" e utilizza cookie di analisi di terze parti per compilare statistiche aggregate ed anonime. Per avere indicazioni sull’uso dei cookie acceda <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/it-IT_INF_B_CookiePolicyUtenti__WebAppKatoImer.php');return false;\">all'Informativa estesa</a>. Selezionando ACCETTA I COOKIE acconsente l’utilizzo dei cookie presenti.";
        this.buttonCookie = "Accetta i Cookie"; 
	    this.buttonClose = "Chiudi";
	    this.nackCookie = "Ci dispiace ma se non acconsente l’utilizzo dei cookie non potrà utilizzare la nostra APP.";

		// registrazione
		this.labelOspite = "ospite";
		this.labelProprietario = "proprietario";
		this.ownerAlertLabel = "L'utente proprietario sarà attivo solo previo controllo di KATO IMER<br/>";
		this.errorNoModels = "Nessuna macchina inserita";
		this.btLabelRegOspite = "Registrami come ospite";
		this.btLabelRegProprietario = "Registrami come proprietario";
		this.btLabelUpdateOspite = "Aggiornamento ospite";
		this.btLabelUpdateProprietario = "Aggiornamento proprietario";
		this.btLabelUpgradeProprietario = "Upgrade a proprietario";   // NEWWWWWWWWWWWWWWWWWWWWWWWWW
		this.confirmUpgradeProprietario = "Conferma l'upgrade a";   // NEWWW 29.06.2018
		this.ackRequestUpgradeProprietario = "Richiesta upgrade a Proprietario corretamente inviata!";
		this.labelUserNotFound = "Utente non trovato!";    // NEWWW 29.06.2018
		this.btLabelRemoveUser = "Rimuovi il mio account";
	    this.nameReg = "Nome";
	    this.emailReg = "Email";
	    this.pwReg = "Password";
	    this.pw2Reg = "Ripeti Password";
	    this.telReg = "Tel.";
	    this.titleMacchinari = "Macchine in tuo possesso";
	    this.labelModelMacchinari = "Modello";
	    this.labelSerialMacchinari = "Num. Seriale";
	    this.labelBtAggiungi = "Aggiungi";
	    this.titleRemoveUser = "Vuoi davvero eliminare il tuo utente";   // NEWWW 29.06.2018
	    this.txtRemoveUser = "L'operazione non può essere annullata";   // NEWWW 29.06.2018

	    // home
	    this.btSearchDealer = "Ricerca Dealers/Officine";
	    this.labelFlagHome = "KATO IMER è una partnership <br/>italo-giapponese <br/>fra Imer Group E Kato Works";  // ADD 17.10.2018
	    this.labelBtCatalogueHome = "Catalogo"; // ADD 17.10.2018
	    this.claimHome = "Construction<br/>equipment"; // ADD 17.10.2018

	    // dealers/officine
	    this.btLabelDealer = "Dealer";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btLabelDealers = "Dealers";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btLabelOfficina = "Officina";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btLabelOfficine = "Officine";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.allCountries = "Tutte le nazioni";

	    this.titleAlertPosition = "Vuoi che l'App\"KATO IMER\" acceda alla tua posizione?";
	    this.textAlertPosition = "Dichiaro di aver letto l'<a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/it-IT_INF_E_InformativaGeolocalizzazione__WebAppKatoImer.php');return false;\">Informativa</a> sul trattamento dei dati personali degli utenti in relazione alla geolocalizzazione (Art. 13 del RGPD (EU) 2016/679) e presto il consenso al trattamento per utilizzare le coordinate di geolocalizzazione del dispositivo in uso  per rintracciare il dealer/officina Kato Imer più vicino";
	    this.ackPosition = "Consenti";
	    this.nackPosition = "Non consentire";

	    // lista catalogo
	    this.titCatalogo= "Catalogo";
	    this.labelPesoOp = "Peso Operativo";
	    this.labelCaricoOp = "Carico Operativo";
	    this.labelPeso = "Peso";

	    //dettaglio catalogo
	    this.labelBtBrochure = "Brochure";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtSchedatecnica = "Scheda tecnica";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtManuale = "Richiedi manuale operatore";   // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    // lista news
	    this.titNews= "News";  // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    // assistenza
	    this.titlePageHelp= "Inviaci la tua richiesta";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	   	this.oggettoForm= "Oggetto";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.textForm= "Testo richiesta";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btHelp= "Invia richiesta";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelObbligatori= "* campi obbligatori";  // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    //katoimer
	    this.titKato = "";
	    this.textKato = "<p>A Novembre 2016, la multinazionale giapponese KATO WORKS CO., LTD. e la conglomerata giapponese IHI Corporation Ltd. (IHI) hanno siglato un accordo per il trasferimento del 100% delle azioni della IHI Construction Machinery Ltd., (IK) da IHI a KATO. Da gennaio 2017 la IK, che controllava il 51% della IHIMER S.p.A. con sede in Italia a San Gimignano (il 49% continua invece ad essere detenuto da IMER GROUP S.p.A.), ha mutato la propria ragione sociale in KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Dal 17 febbraio 2017, IHIMER S.p.A. ha variato la propria ragione sociale in KATO IMER S.p.A.</p><p>Il colosso giapponese KATO WORKS&nbsp;produce una vasta gamma di macchine per costruzione ed &egrave;&nbsp;attiva nel settore dal 1895, ha deciso di investire in Europa convinto della centralit&agrave; del mercato, in collaborazione con l&rsquo;italiana Imer Group, leader europeo nella produzione di macchine per l&rsquo;edilizia e impianti di calcestruzzo.</p><p>KATO IMER produce in Italia miniescavatori a tecnologia KATO, skid-loader e dumper cingolati; distribuisce miniescavatori e crawler carrier prodotti in Giappone da KATO HICOM.</p><p>I miniescavatori, coprono una gamma che va da 0,9 a 8,5 tonnellate, short-tail, tradizionali e girosagoma.</p><p>Gli skid-loader gommati con carico operativo da 400 a 2500 kg e cingolati. I dumper si suddividono in due classi: i mini dumper, con carico operativo da 400 a 2500 kg, per ristrutturazioni e vivaistica; i dumper con carichi operativi compresi tra 3000 e 11000 kg usati nel genio civile e nella costruzione di infrastrutture.</p><p>Lo stabilimento di KATO IMER a San Gimignano, in provincia di Siena, si estende su una superficie di oltre 36mila metri quadrati. La costante ricerca di innovazione e la continua attivit&agrave; di progettazione permettono alla societ&agrave; di sviluppare macchine all&rsquo;avanguardia e perfettamente rispondenti alle esigenze di mercato.</p><p>I prodotti KATO IMER vengono commercializzati grazie a una rete di oltre 100 distributori e rivenditori, che copre in modo uniforme tutti i principali Paesi europei e altri ancora nei 5 continenti. Per le linee skid e minidumper &egrave; stato gi&agrave; avviato un network di distribuzione a livello mondiale.</p>";

	    //MA.MO.T.
	    this.titMamot = "";
	    // this.textMamot = "<p><strong>Massima serenità</strong></p><p>Per avere sempre la massima serenit&agrave; anche dopo la scadenza della garanzia convenzionale (1&deg; anno), &egrave; sufficiente chiedere al concessionario KATO IMER di fiducia le informazioni sul programma di estensione della garanzia MA.MO.T. e lavorare in totale sicurezza e tranquillit&agrave; fino a un massimo di 5 anni dall&rsquo;acquisto. Grazie alla sicurezza di potersi avvalere per molti anni dell&rsquo;esperienza di tecnici autorizzati e di ricambi originali, le macchine KATO IMER si riveleranno certamente un ottimo investimento.</p><p><strong>Un'ampia gamma di possibilità</strong></p><p>La copertura assicurativa MA.MO.T. &egrave; acquistabile per tutte le macchine nuove. &Egrave; possibile lavorare senza preoccupazioni e protetti dai rischi di dover sostenere spese derivanti da riparazioni impreviste.</p><p><strong>La copertura annuale</strong></p><p>Il programma MA.MO.T. consente di far riparare i guasti di natura elettrica, idraulica e/o meccanica, causati da rottura improvvisa e accidentale di uno o pi&ugrave; componenti.</p><p><strong>Centri Assistenza autorizzati KATO IMER</strong></p><p>Il servizio di garanzia &egrave; valido e viene riconosciuto presso tutti i Centri di Assistenza autorizzati KATO IMER.</p><p>Tutte le condizioni di garanzia sono contenute nella polizza assicurativa.</p>";
	    this.textMamot = "<img src=\"img/5-yrs-warranty.jpg\" class=\"floatRight\" /><p><strong>Massima serenità</strong></p><p>Programma di estensione della garanzia MA.MO.T. per lavori in <strong>totale sicurezza e tranquillità</strong> fino a un <strong>massimo di 5 anni dall’acquisto</strong> anche dopo la scadenza della garanzia convenzionale (1° anno).</p><p><strong>Un'ampia gamma di possibilità</strong></p><p>La copertura assicurativa MA.MO.T. è acquistabile per tutte le <strong>macchine nuove.</strong><br/><br/></p><p><strong>Guasti garantiti</strong></p><div class=\"titGaranzia\">Alimentazione (unità termica):</div><div class=\"txtGaranzia\">Pompa bassa pressione, pompa alta pressione</div><div class=\"titGaranzia\">Avviamento (unità termica):</div><div class=\"txtGaranzia\">Motorino avviamento</div><div class=\"titGaranzia\">Bracci di scavo:</div><div class=\"txtGaranzia\">Braccio, bilanciere, cilindro</div><div class=\"titGaranzia\">Centrali elettroniche:</div><div class=\"txtGaranzia\">Centralina gestione motore</div><div class=\"titGaranzia\">Collettori:</div><div class=\"txtGaranzia\">Di scarico e di aspirazione</div><div class=\"titGaranzia\">Generatore elettricità (unità termica):</div><div class=\"txtGaranzia\">Alternatore e regolatore di tensione</div><div class=\"titGaranzia\">Motore (termico):</div><div class=\"txtGaranzia\">Tutti i componenti meccanici dell'unità termica e la guarnizione della testa</div><div class=\"titGaranzia\">Raffreddamento motore (termico):</div><div class=\"txtGaranzia\">Elettroventilatore, giunto viscostatico, pompa del liquido refrigerante, elettrotermostato, massa radiante</div><div class=\"titGaranzia\">Sovralimentazione:</div><div class=\"txtGaranzia\">Turbocompressore</div><div class=\"titGaranzia\">Sovrastruttura:</div><div class=\"txtGaranzia\">Motoriduttore della rotazione</div><div class=\"titGaranzia\">Trasmissione e traslazione:</div><div class=\"txtGaranzia\">Componenti meccanici del motoriduttore, alberi, semialberi, rulli</div><div class=\"titGaranzia\">Sistema idraulico:</div><div class=\"txtGaranzia\">Pompa idraulica primaria, distributore idraulico rotativo e tubazioni</div></p><p><br/><br/><strong>Dealer autorizzati KATO IMER</strong></p><p>Estensione di garanzia attivabile presso i Dealer Autorizzati.</p><p><strong>Manutenzione programmata</strong></p><p>Intervalli di manutenzione non superiori ai 6 mesi eseguiti presso i Centri di Assistenza autorizzati da KATO IMER.</p><p>Tutte le condizioni di garanzia sono contenute nella polizza assicurativa.<br/><br/>Per maggiori informazioni chiama il <a href=\"tel:0039057795121\" >+39 0577 95121</a> oppure <a href=\"mailto:marketing@katoimer.com\" >marketing@katoimer.com</a>.</p>";

	    //contatti
	    this.txtContatti = "<strong>Sede Legale, Uffici e Stabilimento</strong><br/>53037 Loc. Cusona <br/>San Gimignano (SI) - Italy<br/><br/><hr/><br/>Tel.: <a href='tel:+39 0577 951 21' >+39 0577 951 21</a><br/>Fax: +39 0577 982 400<br/><a href='mailto:info@katoimer.com' >info@katoimer.com</a><br/><br/><hr/><br/><strong>Commerciale:</strong><br/><a href='mailto:marketing@katoimer.com' >marketing@katoimer.com</a><br/><strong>Service:</strong><br/><a href='mailto:service@katoimer.com' >service@katoimer.com</a><br/><strong>Parts:</strong><br/><a href='mailto:parts@katoimer.com' >parts@katoimer.com</a><br/><br/><br/>";

	    // FAQ
	    this.titFaq = "";
	    this.textFaq = "";
	    this.questionsFaq = ["Manuali – Come posso reperire un manuale uso e manutenzione o manuale ricambi?","È possibile procurarsi i manuali tecnici di vecchi modelli Ihimer / Ihi / Katoimer / Kato ?","Sono alla ricerca di macchine usate. Come posso fare?","Segnalazione macchine KATO IMER rubate – A chi devo comunicare il furto della mia macchina?","Numero di serie — Dove si trova?","Peso operativo — Cosa include?","Come posso ottenere una brochure di una macchina KATO?","Elenco delle concessionarie – Posso avere un elenco delle sedi delle concessionarie KATOIMER?","Ricambi — Dove posso acquistare i ricambi per la mia macchina KATOIMER?","Ricambi - Come posso contattarvi per informazioni?","Garanzia, come funziona l'estensione di garanzia MA.MOT.?","Campagna leasing 36 mesi interessi zero?","KATOIMER è giapponese o cinese?"];
	    this.answersFaq = ["I manuali d'uso e manutenzione ed i manuali dei ricambi possono essere richiesti tramite la nostra APP oppure ordinati presso qualsiasi concessionaria ufficiale KATOIMER.","Si, tramite le concessionarie ufficiali KATO IMER.","KATO IMER non commercializza macchine usate e non pubblica annunci on line. Però può rivolgersi al Suo concessionario che Le darà tutte le informazioni utili.","La invitiamo anzitutto ad inoltrare regolare denuncia alle autorità di pubblica sicurezza e  ad informare la concessionaria KATO IMER a Lei più vicina. Gestiremo il numero di serie della Sua macchina in un apposito database al fine di effettuare controlli sulle macchine gestite dalla nostra rete vendita per scopi di assistenza tecnica.","I numeri di serie sono riportati sulle macchine KATO IMER in varie posizioni, come illustrato nel manuale d'uso e manutenzione. Se non riesce a trovarlo, contatti la concessionaria KATO IMER a Lei più vicina.","Questo peso  include il peso della macchina maggiorato di quello della benna standard, di tutti i fluidi di esercizio (incluso il carburante) e di un operatore di corporatura normale. Trova questa e tutte le altre specifiche nelle pagine dedicate a prodotti.","La brochure può essere scaricata tramite la nostra APP oppure dal nostro sito web <a href=\"#\" onclick=\"window.open('http://www.katoimer.com'); return false;\" >www.katoimer.com</a>.","KATOIMER protegge la privacy delle sue concessionarie e non condivide l'elenco completo. Può trovare l'indirizzo delle concessionarie KATOIMER a lei più vicine nella nostra APP e nel nostro sito web <a href=\"#\" onclick=\"window.open('http://www.katoimer.com'); return false;\" >www.katoimer.com</a>","Solo le concessionarie KATOIMER autorizzate e Centri assistenza KATOIMER autorizzati possono vendere i ricambi originali KATOIMER. Dispongono della conoscenza e dell'esperienza necessarie per assisterLa nella manutenzione e nell'assistenza della Sua attrezzatura KATOIMER. In alternativa può inviare una richiesta a  <a href='mailto:parts@katoimer.com' >parts@katoimer.com</a>.","Può contattare i nostri addetti al n. <a href='tel:+39 0577 951232' >+39 0577 951232</a>, oppure tramite e-mail all'indirizzo <a href='mailto:parts@katoimer.com' >parts@katoimer.com</a>","Rimandiamo alla lettura della parte specifica nel ns. sito oppure ad informarsi presso le concessionarie autorizzate KATOIMER.","Rimandiamo alla lettura della parte specifica nel ns. sito oppure ad informarsi presso le concessionarie autorizzate KATOIMER.","A Novembre 2016, la multinazionale giapponese KATO WORKS CO., LTD. e la conglomerata giapponese IHI Corporation Ltd. (IHI) hanno siglato un accordo per il trasferimento del 100% delle azioni della IHI Construction Machinery Ltd., (IK) da IHI a KATO. Da gennaio 2017 la IK, che controllava il 51% della IHIMER S.p.A. con sede in Italia a San Gimignano (il 49% continua invece ad essere detenuto da IMER GROUP S.p.A.), ha mutato la propria ragione sociale in KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Dal 17 febbraio 2017, IHIMER S.p.A. ha variato la propria ragione sociale in KATO IMER S.p.A. Il colosso giapponese KATO WORKS produce una vasta gamma di macchine per costruzione ed è attiva nel settore dal 1895, ha deciso di investire in Europa convinto della centralità del mercato, in collaborazione con l'italiana Imer Group, leader europeo nella produzione di macchine per l'edilizia e impianti di calcestruzzo."];

	    // messaggi richieste ajax/check form
	    this.nackDatabase = "Errore nella richiesta al Database";
	    this.nackPrepareQuery = "Errore preparazione Query";
	    this.sendAjax = "Invio richiesta...";
	    this.ackAjaxRequest = "Richiesta inviata correttamente";
	    this.nackAjaxRequest = "Errore invio richiesta";
	    this.ackAjaxIscritto = "Richiesta iscrizione effettuata correttamente. Controlla la tua mail per attivazione.";
	    this.ackAjaxUpdate = "Modifica effettuata correttamente";
	    this.ackAjaxRemove = "Utente eliminato!"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.nackAjax001 = "Errore interno COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Errore interno COD: 002"; // errore sending ajax request
	    this.emptyField = "I campi * non possono essere vuoti.";
	    this.pwNotEqual = "Le password non coincidono.";
	   	this.pwWrongEmail = "Formato email errato."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	   	this.ackSendingEmail = "Email inviata correttamente"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	   	this.nackSendingEmail = "Errore invio email"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.userAlreadyReg = "Utente già registrato";
	    this.userRemoved = "Utente eliminato dal sistema. Grazie per aver usato la nostra app."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.nackToken = "Token non riconosciuto";

	    // privacy marketing push label
	    this.checkPrivacy = "Per proseguire è necessario dichiarare di aver preso visione dell'informativa sul trattamento dei dati";
	    this.labelPrivacy = "Dichiaro di aver letto l'<a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/it-IT_INF_A_PrivacyPolicyUtenti_WebAppKatoImer.php');return false;\">Informativa</a> sul trattamento dei dati personali (Art. 13 del RGPD (EU) 2016/679)";
	    this.labelMarketing = "Dichiaro di aver letto l'<a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/it-IT_INF_D_InformativaAttivitaPromozionali__WebAppKatoImer.php');return false;\">Informativa</a> sul trattamento dei dati personali in relazione alle attività promozionali e presto il consenso per la finalità ascritta (Art. 13 del RGPD (EU) 2016/679)";
	    this.labelPush = "Accetto di ricevere notifiche push sul mio dispositivo";
	    this.codeIubendaPrivacy = "30408334";

	}

	this.setEnglish = function() {

		// label menu
		this.menu0 = "Home";
		this.menu1 = "Catalogue";
		this.menu2 = "KATO IMER";
		this.menu3 = "Warranty extension";
		this.menu4 = "Dealers/Workshops";
		this.menu5 = "News";
		this.menu6 = "Advertising";
		this.menu7 = "Contacts";
		this.menu8 = "Assistance";
		this.menu9 = "YouTube";
		this.menu10 = "User profile";
		this.menu11 = "Logout";
		this.menu12 = "FAQ";

		// pagina login
	    this.logiBtLabel = "Enter";
	    this.registerBtLabel = "Register";
	    this.fbBtLabel = "Login with Facebook";
	    this.gplusBtLabel = "Login with Google+";
	    this.newRegisterBtLabel = "New registration";
	    this.labelAlertNoconn = "No connection. Cannot login or perform new recordings.";   // NEWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelAlertNoconnHome = "No connection."; 
	   	this.ackAuth = "Authentication successful";    // NEWWW 29.06.2018
	    this.nackAuth = "Authentication failed";    // NEWWW 29.06.2018
	    this.errorAuth = "It is impossible to make the authentication";     // NEWWW 29.06.2018
	    this.contentCookie = "This Web App allows the sending of \"third-party\" technical and profiling cookies and uses third-party analytical cookies to construct aggregated and anonymous statistics. For instructions on the use of cookies, please read <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_B_CookiePolicyUtenti__WebAppKatoImer.php');return false;\">the extended Information Notice</a>. By selecting ACCEPT COOKIES, you grant consent to the use of the existing cookies.";
	    this.buttonCookie = "Accept Cookies";
	    this.buttonClose = "Close";
	    this.nackCookie = "We are sorry but you cannot use our APP if you do not consent to the use of cookies.";

		// registrazione
		this.labelOspite = "guest";
		this.labelProprietario = "owner";

		this.ownerAlertLabel = "The owner user will be active only upon verification by KATO IMER<br/>";
		this.errorNoModels = "No machine inserted";

		this.btLabelRegOspite = "Register as a guest";
		this.btLabelRegProprietario = "Register as an owner";
		this.btLabelUpdateOspite = "Update guest";
		this.btLabelUpdateProprietario = "Update owner";
		this.btLabelUpgradeProprietario = "Upgrade to owner";   // NEWWWWWWWWWWWWWWWWWWWWWWWWW
		this.confirmUpgradeProprietario = "Confirm upgrade to";   // NEWWW 29.06.2018
		this.ackRequestUpgradeProprietario = "Upgrade request to Owner correctly sent!";
		this.labelUserNotFound = "User not found!";    // NEWWW 29.06.2018

		this.btLabelRemoveUser = "Remove my account";

	    this.nameReg = "Name";
	    this.emailReg = "Email";
	    this.pwReg = "Password";
	    this.pw2Reg = "Repeat Password";
	    this.telReg = "Phone";

	    this.titleMacchinari = "Machines in your possession";
	    this.labelModelMacchinari = "Model";
	    this.labelSerialMacchinari = "Serial number";
	    this.labelBtAggiungi = "Add";
	    this.titleRemoveUser = "Do you really want to delete your user";   // NEWWW 29.06.2018
	    this.txtRemoveUser = "The operation cannot be cancelled";   // NEWWW 29.06.2018

	    // home
	    this.btSearchDealer = "Search Dealers/Workshops";
	    this.labelFlagHome = "KATO IMER is an Italian-Japanese partnership between Imer Group and Kato Works";  // ADD 17.10.2018
	    this.labelBtCatalogueHome = "Catalogue"; // ADD 17.10.2018
	    this.claimHome = "Construction<br/>equipment"; // ADD 17.10.2018

	    // dealers/officine
	    this.btLabelDealer = "Dealer";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btLabelDealers = "Dealers";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btLabelOfficina = "Workshop";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btLabelOfficine = "Workshops";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.allCountries = "All countries";

	    this.titleAlertPosition = "Do you want the \"KATO IMER\" App to access your location?";
		this.textAlertPosition = "I declare to have read the <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_E_InformativaGeolocalizzazione__WebAppKatoImer.php');return false;\">Information</a> on the processing of personal data of users in relation to geolocation (Article 13 of the RGPD (EU) 2016/679) and I consent to the processing to use the geolocation coordinates of the device in use to trace the nearest Kato Imer dealer / workshop.";
	    this.ackPosition = "Yes";
	    this.nackPosition = "No";

	    // lista catalogo
	    this.titCatalogo= "Catalogue";
	    this.labelPesoOp = "Operating weight";
	    this.labelCaricoOp = "Payload capacity";
	    this.labelPeso = "Weight";

	    //dettaglio catalogo
	    this.labelBtBrochure = "Brochure";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtSchedatecnica = "Technical file";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtManuale = "Request operator manual";   // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    // lista news
	    this.titNews= "News";  // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    // assistenza
	    this.titlePageHelp= "Send your request";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.oggettoForm= "Subject";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.textForm= "Request";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btHelp= "Send request";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelObbligatori= "* required fields";  // NEWWWWWWWWWWWWWWWWWWWWWWWW


	    //katoimer
	    this.titKato = "";
	    this.textKato = "<p>In November 2016, Japanese multinational KATO WORKS CO., LTD. and Japanese conglomerate IHI Corporation Ltd. (IHI) signed an agreement to transfer 100% of the shares of IHI Construction Machinery Ltd., (IK) from IHI to KATO. As of January 2017, IK, which owned 51% of IHIMER S.p.A. based in Italy in San Gimignano (49% is still held by IMER GROUP S.p.A.) has changed its company name to KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). As of February 17 2017, IHIMER S.p.A. has changed its company name to KATO IMER S.p.A.</p><p>Japanese colossal KATO WORKS, which produces a broad range of construction machinery and has been active in the industry since 1895, has decided to invest in Europe, believing strongly in the centrality of the market, in collaboration with Italian Imer Group, European leader in the production of machinery for construction and batch plants.</p><p>In Italy KATO IMER produces mini-excavators with KATO technology, skid-loaders and dumpers; it distributes mini-excavators and crawler carriers produced in Japan by KATO HICOM.</p><p>The mini-excavators cover a range that spans from 0.9 to 8.5 tonnes, short-tail, traditional and zero tail swing.</p><p>Wheel, and tracked, skid-loaders with operating load from 400 to 2500 kg. The dumpers are divided into two classes: mini dumpers, with operating load between 400 and 2500 kg, for restoration and nursery work; dumpers with operating load between 3000 and 11000 kg used in civil engineering and infrastructure construction.</p><p>The KATO IMER factory in San Gimignano, in the province of Siena, covers a surface area of more than 36 thousand square meters. The constant pursuit of innovation and the company&rsquo;s on-going design activity allows it to develop cutting edge machines in perfect compliance with market demands.</p><p>KATO IMER products are sold through a network of more than 100 distributors and dealers uniformly covering all major European countries and others across the 5 continents. A worldwide distribution network has already been set up for skid and minidumper lines.</p>";

	    //MA.MO.T.
	    this.titMamot = "Extension of the warranty";
	    this.textMamot = "<p><strong>Maximum assurance</strong></p><p>To enjoy maximum assurance even once the standard warranty expires (1st year), simply ask your usual KATO IMER dealer for information on the MA.MO.T. warranty extension scheme and work in full safety and assurance up to a maximum of 5 years following your purchase. Thanks to the assurance of being able to avail of the experience of authorised technicians and original parts for many years, KATO IMER machinery would certainly prove to be an excellent investment.</p><p><strong>A broad range of possibilities</strong></p><p>MA.MO.T. insurance coverage can be purchased for all new machines. You can work worry-free and protected against the risk of having to take on expenses stemming from unexpected repairs.</p><p><strong>Annual coverage</strong></p><p>The MA.MO.T. scheme includes electrical, hydraulic and/or mechanical failures caused by the unexpected and accidental breakage of one or more parts.</p><p><strong>Authorised KATO IMER Assistance Centres</strong></p><p>The warranty service is valid and recognised by all KATO IMER authorised Assistance Centres.</p><p>All of the warranty conditions are contained in the insurance policy.</p>";

	    //contatti
	    this.txtContatti = "<strong>Head Offices, Sales and Plant</strong><br/>53037 Loc. Cusona <br/>San Gimignano (SI) - Italy<br/><br/><hr/><br/>Phone: <a href='tel:+39 0577 951 21' >+39 0577 951 21</a><br/>Fax: +39 0577 982 400<br/><a href='mailto:info@katoimer.com' >info@katoimer.com</a><br/><br/><hr/><br/><strong>Sales:</strong><br/><a href='mailto:marketing@katoimer.com' >marketing@katoimer.com</a><br/><strong>Service:</strong><br/><a href='mailto:service@katoimer.com' >service@katoimer.com</a><br/><strong>Parts:</strong><br/><a href='mailto:parts@katoimer.com' >parts@katoimer.com</a><br/><br/><br/>";

	    // FAQ
	    this.titFaq = "";
	    this.textFaq = "";
	    this.questionsFaq = ["Manuals - Where can I find an operating and maintenance manual or a spare parts manual?","Is it possible to get the technical manuals of old Ihimer / Ihi / Katoimer / Kato models?","I am looking for used machines. What can I do?","Reporting stolen KATO IMER machines - Who should I inform of the theft of my machine?","Serial number - Where can I find it?","Operating weight - What does it include?","How can I get a KATO machine brochure?","List of dealerships - Can I have a list of the offices of the KATOIMER dealerships?","Spare parts - Where can I buy spare parts for my KATOIMER machine?","Spare parts - How can I contact you for information?","Warranty, how does the MA.MO.T. extended warranty work?","36-month lease at 0% interest campaign?","Is KATOIMER Japanese or Chinese?"];
		this.answersFaq = ["You can request operating and maintenance manuals and spare parts manuals through our APP, or you can order them from any official KATOIMER dealership.","Yes, through the official KATO IMER dealerships.","KATO IMER does not sell used machines and does not place online ads. You can, however, get in touch with your dealer, who will give you all the information you need.","We advise that you start by lodging an official complaint with the law enforcement authorities and that you inform your nearest KATO IMER dealership. We will enter the serial number of your machine in a special database so that we can carry out checks on the machines managed by our sales network for technical support purposes.","Serial numbers can be found at various locations on the KATO IMER machines, as shown in the operating and maintenance manual. If you cannot find it, contact your nearest KATO IMER dealership.","This weight includes the weight of the machine plus that of the standard bucket, of all operating fluids (including fuel) and of an operator of normal build. You can find these and all other specifications in the pages dedicated to products.","Brochures can be downloaded through our App or from our website <a href=\"#\" onclick=\"window.open('http://www.katoimer.com'); return false;\" >www.katoimer.com</a>.","KATOIMER protects the privacy of its dealerships and does not share their full list. You can find the address of your nearest KATOIMER dealerships in our APP and on our website <a href=\"#\" onclick=\"window.open('http://www.katoimer.com'); return false;\" >www.katoimer.com</a>","Only authorised KATOIMER dealerships and authorised KATOIMER Service centres can sell original KATOIMER spare parts. They have the necessary knowledge and experience to assist you in the maintenance and the service of your KATOIMER equipment. Alternatively, you can send a request to <a href='mailto:parts@katoimer.com' >parts@katoimer.com</a>.","You can get contact our staff at telephone no. <a href='tel:+39 0577 951232' >+39 0577 951232</a>, or via e-mail to the address <a href='mailto:parts@katoimer.com' >parts@katoimer.com</a>","Please read the specific section of our site or request information from the authorised KATOIMER dealerships.","Please read the specific section of our site or request information from the authorised KATOIMER dealerships.","In November 2016, Japanese multinational KATO WORKS CO., LTD. and Japanese conglomerate IHI Corporation Ltd. (IHI) signed an agreement to transfer 100% of the shares of IHI Construction Machinery Ltd., (IK) from IHI to KATO. Commencing January 2017, IK, which owned 51% of IHIMER S.p.A. based in Italy in San Gimignano (49% is still held by IMER GROUP S.p.A.), has changed its company name to KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). As of February 17 2017, IHIMER S.p.A. has changed its company name to KATO IMER S.p.A. The Japanese colossus KATO WORKS, which produces a broad range of construction machinery and has been active in the industry since 1895, has decided to invest in Europe, believing strongly in the centrality of the market, in collaboration with Italian Imer Group, European leader in the production of machinery for construction and batch plants."];

	    // messaggi richieste ajax/check form 
	    this.nackDatabase = "Database request error";
	    this.nackPrepareQuery = "Query preparation error";
	    this.sendAjax = "Sending request...";
	    this.ackAjaxRequest = "Request correctly sent";
	    this.nackAjaxRequest = "Error sending request";
	    this.ackAjaxIscritto = "Subscription request received. Check your email for activation.";
	    this.ackAjaxUpdate = "Edited successfully";
	    this.ackAjaxRemove = "User removed!"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.nackAjax001 = "Internal error COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Internal error COD: 002"; // errore sending ajax request
	    this.emptyField = "* Required fields";
	    this.pwNotEqual = "Passwords do not match";
	    this.pwWrongEmail = "Incorrect e-mail format."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.ackSendingEmail = "E-mail sent correctly"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	   	this.nackSendingEmail = "E-mail sending error"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

	    this.userAlreadyReg = "Already registered user";
	    this.userRemoved = "User removed from system. Thank you for using our app."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.nackToken = "Token not allowed";

	    // privacy marketing push label
	    this.checkPrivacy = "To proceed, you need to declare that you have read the information notice on the processing of data";
	    this.labelPrivacy = "I declare that I have read the<a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_A_PrivacyPolicyUtenti_WebAppKatoImer.php');return false;\">Information Notice</a> on the processing of personal data (Art. 13 of the GDPR (EU) 2016/679)";
	    this.labelMarketing = "I declare that I have read the<a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_D_InformativaAttivitaPromozionali__WebAppKatoImer.php');return false;\">Information Notice</a> on the processing of personal data with regard to promotional activities and that I grant consent for the purpose described (Art. 13 of the GDPR (EU) 2016/679)";
	    this.labelPush = "I agree to receive push notifications on my device";
	    // this.checkPrivacy = "Mandatory Privacy Acceptance";
	    // this.labelPrivacy = "I authorize the <a href=\"#pages9\"> processing of my personal data </a> according to Legislative Decree 30 June 2003, n. 196 \"Code regarding the protection of personal data\" and the GDPR (EU Regulation 2016/679). ";
	    // this.labelMarketing = "I agree to receive marketing communications from KATO IMER";
	    this.codeIubendaPrivacy = "66974646";

	}

	this.setDeutch = function() {

		// label menu
		this.menu0 = "Home";
		this.menu1 = "Katalog";
		this.menu2 = "KATO IMER";
		this.menu3 = "Erweiterten Garantie";
		this.menu4 = "Händler/Werkstatt";
		this.menu5 = "Nachrichten";
		this.menu6 = "Werbung";
		this.menu7 = "Kontakte";
		this.menu8 = "Unterstützung";
		this.menu9 = "YouTube";
		this.menu10 = "Benutzerprofil";
		this.menu11 = "Ausloggen";
		this.menu12 = "FAQ";

		// pagina login
	    this.logiBtLabel = "Anmeldung";
	    this.registerBtLabel = "Registrieren";
	    this.fbBtLabel = "Einloggen mit Facebook";
	    this.gplusBtLabel = "Einloggen mit Google+";
	    this.newRegisterBtLabel = "Neue Registrierung";
	    this.labelAlertNoconn = "Verbindung fehlt. Es ist nicht möglich, sich einzuloggen oder neu zu registrieren.";
	    this.labelAlertNoconnHome = "Verbindung fehlt."; 
	    this.ackAuth = "Authentifizierung erfolgreich durchgeführt";    // NEWWW 29.06.2018
	    this.nackAuth = "Authentifizierung konnte nicht durchgeführt werden";    // NEWWW 29.06.2018
	    this.errorAuth = "Authentifizierung ist nicht möglich";     // NEWWW 29.06.2018
	    this.contentCookie = "Diese Web-App ermöglicht das Senden von technischen Cookies und Profil-Cookies von \"Drittanbieter\" und verwendet Analyse-Cookies von Drittanbietern, um aggregierte und anonyme Statistiken zu erstellen. Um Informationen über die Verwendung von Cookies zu erhalten, besuchen Sie bitte die <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_B_CookiePolicyUtenti__WebAppKatoImer.php');return false;\">umfassende Datenschutzinformationsschrift</a>. Wenn Sie auf COOKIES AKZEPTIEREN klicken, stimmen Sie der Verwendung der vorhandenen Cookies zu.";
	    this.buttonCookie = "Cookies Akzeptieren";
	    this.buttonClose = "Schließen";
	    this.nackCookie = "Leider müssen wir Ihnen mitteilen, dass zur Nutzung unserer APP das Einverständnis zur Verwendung von Cookies unumgänglich ist.";

		// registrazione
		this.labelOspite = "Gast";
		this.labelProprietario = "Besitzer";

		this.ownerAlertLabel = "Der Besitzerbenutzer ist nur aktiv, nachdem er KATO IMER überprüft hat<br/>";
		this.errorNoModels = "Keine Maschine eingesetzt";

		this.btLabelRegOspite = "Als Gast registrieren";
		this.btLabelRegProprietario = "Als Besitzer registrieren";
		this.btLabelUpdateOspite = "Aktualisierung Gast";
		this.btLabelUpdateProprietario = "Aktualisierung Besitzer";
		this.btLabelUpgradeProprietario = "Upgrade zum Besitzer";   // NEWWWWWWWWWWWWWWWWWWWWWWWWW
		this.confirmUpgradeProprietario = "Bestätigen Sie das Upgrade auf";   // NEWWW 29.06.2018
		this.ackRequestUpgradeProprietario = "Antrag auf Eigentümeraktualisierung erfolgreich durchgeführt!";
		this.labelUserNotFound = "Nutzer nicht gefunden!";    // NEWWW 29.06.2018

		this.btLabelRemoveUser = "Account löschen";

	    this.nameReg = "Name";
	    this.emailReg = "Email";
	    this.pwReg = "Passwort";
	    this.pw2Reg = "Passwort wiederholen";
	    this.telReg = "Telefon";

	    this.titleMacchinari = "Maschinen in Ihrem Besitz";
	    this.labelModelMacchinari = "Modell";
	    this.labelSerialMacchinari = "Seriennummer";
	    this.labelBtAggiungi = "Hinzufügen";
	    this.titleRemoveUser = "Möchten Sie wirklich Ihren Nutzer löschen";   // NEWWW 29.06.2018
	    this.txtRemoveUser = "Dieser Vorgang kann nicht rückgängig gemacht werden";   // NEWWW 29.06.2018

	    // home
	    this.btSearchDealer = "Suche Händler/Werkstatt";
	    this.labelFlagHome = "KATO IMER ist eine italienisch-japanische Partnerschaft zwischen Imer Group und Kato Works";  // ADD 17.10.2018
	    this.labelBtCatalogueHome = "Katalog"; // ADD 17.10.2018
	    this.claimHome = "Construction<br/>equipment"; // ADD 17.10.2018

	    // dealers/officine
	    this.btLabelDealer = "Händler";
	    this.btLabelDealers = "Händler";
	    this.btLabelOfficina = "Werkstatt";
	    this.btLabelOfficine = "Werkstatt";
	    this.allCountries = "Alle Nationen";

	    this.titleAlertPosition = "Möchten Sie, dass die \"KATO IMER\" App auf Ihre Position zugreifen kann?";
		this.textAlertPosition = "Ich erkläre, die <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_E_InformativaGeolocalizzazione__WebAppKatoImer.php');return false;\">Informationen</a> über die Verarbeitung personenbezogener Daten von Nutzern in Bezug auf Geolocation (Artikel 13 der RGPD (EU) 2016/679) gelesen zu haben, und stimme der Verarbeitung zu, um die Geolocation-Koordinaten des verwendeten Geräts zur Verfolgung des Geräts zu verwenden nächster Kato Imer-Händler / Werkstatt.";
	    this.ackPosition = "Ok";
	    this.nackPosition = "Keine";

	    // lista catalogo
	    this.titCatalogo= "Katalog";
	    this.labelPesoOp = "Betriebsgewicht";
	    this.labelCaricoOp = "Zuladung";
	    this.labelPeso = "Gewicht";

	    // lista news
	    this.titNews= "News";   // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    //dettaglio catalogo
	    this.labelBtBrochure = "Broschüre";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtSchedatecnica = "Technisches Datenblatt";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtManuale = "Bedienerhandbuch anfordern";   // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    // assistenza
	    this.titlePageHelp= "Senden Sie uns Ihre Anfrage";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	   	this.oggettoForm= "Betreff";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.textForm= "Text der Anfrage";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btHelp= "Anfrage senden";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelObbligatori= "* pflichtfelder";  // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    //katoimer
	    this.titKato = "";
	    this.textKato = "<p>Im November 2016 haben das multinationale japanische Unternehmen KATO WORKS CO., LTD. und der japanische Mischkonzern IHI Corporation Ltd. (IHI) eine Vereinbarung &uuml;ber die &Uuml;bertragung von 100 % der Aktien des Unternehmens IHI Construction Machinery Ltd., (IK) von IHI an KATO unterzeichnet. Im Januar 2017 &auml;nderte IK, das 51 % von IHIMER S.p.A. mit Sitz in San Gimignano in Italien kontrollierte (49 % werden weiterhin von IMER GROUP S.p.A. gehalten), seine Firmenbezeichnung zu KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Am 17. Februar 2017 &auml;nderte IHIMER S.p.A. seine Firmenbezeichnung zu KATO IMER S.p.A.</p><p>Das japanische Gro&szlig;unternehmen KATO WORKS stellt ein umfangreiches Sortiment an Baumaschinen her und ist seit 1895 in diesem Sektor t&auml;tig. Dort hat man sich entschieden, in Europa zu investieren, &uuml;berzeugt von der Zentralit&auml;t des Marktes. Dies erfolgt in Zusammenarbeit mit der italienischen Imer Group, einem f&uuml;hrenden europ&auml;ischen Hersteller von Baumaschinen und Betonmischanlagen.</p><p>KATO IMER stellt in Italien Minibagger mit KATO-Technologie, Kompaktlader und Raupenmuldenkipper her und vertreibt in Japan von KATO HICOM hergestellte Minibagger und Raupenkipper.</p><p>Die Minibagger sind mit Kapazit&auml;ten von 0,9 bis 8,5 Tonnen, mit Kurzheck, in herk&ouml;mmlicher Ausf&uuml;hrung und drehbar lieferbar.</p><p>Die Kompaktlader sind mit R&auml;dern mit Betriebslast von 400 bis 2500 kg und mit Raupenketten lieferbar. Die Muldenkipper unterteilen sich in zwei Kategorien: Minidumper mit Betriebslast von 400 bis 2500 kg f&uuml;r Sanierungen und Gartenbau sowie Muldenkipper mit Betriebslast zwischen 3000 und 11000 kg, die vorwiegend im Hoch- und Tiefbau und im Stra&szlig;enbau eingesetzt werden.</p><p>Das Werk von KATO IMER in San Gimignano in der Provinz Siena erstreckt sich &uuml;ber eine Fl&auml;che von mehr als 36000 m2. Durch die st&auml;ndige Suche nach Innovationen und fortw&auml;hrende Planung schafft es das Unternehmen immer wieder, fortschrittliche Maschinen zu entwickeln, die optimal auf die aktuelle Nachfrage abgestimmt sind.</p><p>Die Produkte von KATO IMER werden &uuml;ber ein Netz von &uuml;ber 100 Vertriebsunternehmen und H&auml;ndlern vertrieben, das die wichtigsten europ&auml;ischen L&auml;nder sowie weitere L&auml;nder auf f&uuml;nf Kontinenten gleichm&auml;&szlig;ig abdeckt. F&uuml;r die Kompaktlader- und Minidumper-Baureihen wurde bereits begonnen, ein weltweites Vertriebsnetz aufzubauen.</p>"

	    //MA.MO.T.
	    this.titMamot = "Erweiterte Garantie";
	    this.textMamot = "<p><strong>Bestm&ouml;gliche Absicherung</strong><br />Um auch nach Ablauf der vertraglich vereinbarten Garantie (1. Jahr) immer optimal abgesichert zu sein, brauchen Sie nur den KATO-IMER-H&auml;ndler Ihres Vertrauens nach der erweiterten Garantie MA.MO.T. zu fragen. So k&ouml;nnen Sie bis maximal f&uuml;nf Jahre nach dem Kauf v&ouml;llig sicher und sorglos mit der Maschine arbeiten. Durch die Sicherheit, viele Jahre lang von der Erfahrung der zugelassenen Techniker und von Originalersatzteilen profitieren zu k&ouml;nnen, werden sich die Maschinen von KATO IMER zweifellos als optimale Investition erweisen. Eine umfassende Auswahl an M&ouml;glichkeiten Der MA.MO.T.-Versicherungsschutz kann f&uuml;r alle neuen Maschinen erworben werden. So k&ouml;nnen Sie bedenkenlos arbeiten und sind vor dem Risiko gesch&uuml;tzt, dass pl&ouml;tzlich Kosten durch unvorhergesehene Reparaturen anfallen. J&auml;hrlicher Schutz Mit dem MA.MO.T.-Plan k&ouml;nnen Defekte an der Elektrik, Hydraulik und/oder Mechanik repariert werden, die durch pl&ouml;tzliche, unbeabsichtigte Besch&auml;digung einer oder mehrerer Bauteile entstanden sind. Zugelassene KATO-IMER-Kundendienstzentren Die Garantie wird in allen zugelassenen Kundendienstzentren von KATO IMER anerkannt. Alle Garantiebedingungen k&ouml;nnen in der Versicherungspolice nachgelesen werden.</p>"

	    //contatti
	    this.txtContatti = "<strong>Geschäftssitz, Vertrieb und Betriebsstätte</strong><br/>53037 Loc. Cusona <br/>San Gimignano (SI) - Italy<br/><br/><hr/><br/>Telefon: <a href='tel:+39 0577 951 21' >+39 0577 951 21</a><br/>Fax: +39 0577 982 400<br/><a href='mailto:info@katoimer.com' >info@katoimer.com</a><br/><br/><hr/><br/><strong>Vertrieb:</strong><br/><a href='mailto:marketing@katoimer.com' >marketing@katoimer.com</a><br/><strong>Dienstleistung:</strong><br/><a href='mailto:service@katoimer.com' >service@katoimer.com</a><br/><strong>Ersatzteile:</strong><br/><a href='mailto:parts@katoimer.com' >parts@katoimer.com</a><br/><br/><br/>";

	    // FAQ
	    this.titFaq = "";
	    this.textFaq = "";
	    this.questionsFaq = ["Handbücher - Wie kann ich ein Bedienungs- und Wartungshandbuch oder ein Ersatzteil-Handbuch finden?","Kann man die technischen Handbücher der alten Modelle Ihimer / Ihi / Katoimer / Kato anfordern?","Ich suche gebrauchte Maschinen. Wie kann ich vorgehen?","Meldung bei Diebstahl von KATO IMER Maschinen - Wem muss ich den Diebstahl meiner Maschine bekanntgeben?","Wo befindet sich die Seriennummer?","Was beinhaltet das Betriebsgewicht?","Wie kann ich eine Broschüre eines KATO Fahrzeugs erhalten?","Liste der Vertragshändler - Kann ich eine Liste der KATOIMER-Vertragshändler erhalten?","Ersatzteile - Wo kann ich Ersatzteile für meine KATOIMER-Maschine kaufen?","Ersatzteile - Wie kann ich Ihre Firma für Informationen kontaktieren?","Garantie, wie funktioniert die Ausdehnung der Garantie MA.MOT?","Kampagne 36 Monate zinsloses Leasing?","Ist KATOIMER japanisch oder chinesisch?"];
		this.answersFaq = ["Die Bedienungs- und Wartungshandbücher oder Ersatzteil-Handbücher können mit unserer APP angefordert werden oder bei jedem offiziellen Vertragshändler KATO IMER bestellt werden.","Ja, bei den offiziellen Vertragshändlern KATO IMER.","KATO IMER handelt nicht mit gebrauchten Maschinen und veröffentlicht keine Online-Anzeigen. Sie können sich jedoch an Ihren Vertragshändler wenden, der Ihnen alle notwendigen Informationen liefern kann.","Wir raten Ihnen vor allem, Anzeige bei den polizeilichen Behörden zu erstatten und Ihren nächsten KATO IMER Vertragshändler zu benachrichtigen. Wir verwalten die Seriennummer Ihrer Maschine in einer speziellen Datenbank, um die von unserem Vertriebsnetz für technische Kundendienstzwecke betreuten Maschinen zu überprüfen.","Die Seriennummern sind bei den KATO IMER Maschinen an verschiedenen Stellen angebracht, wie im Bedienungs- und Wartungshandbuch angegeben. Falls Sie sie nicht finden sollten, wenden Sie sich bitte an den nächsten KATO IMER-Vertragshändler.","Dieses Gewicht beinhaltet das Gewicht der Maschine plus das Gewicht der Standardschaufel, aller Betriebsflüssigkeiten (einschließlich Kraftstoff) und eines Bedieners von durchschnittlicher Größe. Diese und andere Spezifikationen finden Sie in den Seiten, die den Produkten gewidmet sind.","Die Broschüre kann über unsere APP oder unsere Website <a href=\"#\" onclick=\"window.open('http://www.katoimer.com'); return false;\" >www.katoimer.com</a> heruntergeladen werden.","KATOIMER veröffentlicht die gesamte Liste seiner Vertragshändler aus Datenschutzgründen nicht. Sie können die Adressen der KATOIMER --Vertragshändler in Ihrer Nähe mittels unserer APP oder auf der Website <a href=\"#\" onclick=\"window.open('http://www.katoimer.com'); return false;\" >www.katoimer.com</a> erfahren.","Nur die zugelassenen KATOIMER-Vertragshändler und die zugelassenen KATOIMER-Kundendienste dürfen die Originalersatzteile KATOIMER verkaufen. Sie besitzen die nötigen Kenntnisse und Erfahrung, um die Wartung und den Kundendienst an Ihren KATOIMER-Maschinen durchzuführen. Andernfalls können Sie eine Anfrage an <a href='mailto:parts@katoimer.com' >parts@katoimer.com</a> richten.","Sie können unsere Mitarbeiter unter Nr. <a href='tel:+39 0577 951232' >+39 0577 951232</a>, oder per E-Mail unter folgender Adresse kontaktieren: <a href='mailto:parts@katoimer.com' >parts@katoimer.com</a>","Wir verweisen hier auf den entsprechenden Teil in unserer Website oder raten, sich bei den zugelassenen KATOIMER-Vertragshändlern zu informieren.","Wir verweisen hier auf den entsprechenden Teil in unserer Website oder raten, sich bei den zugelassenen KATOIMER-Vertragshändlern zu informieren.","Im November 2016 haben der multinationale japanische Konzern KATO WORKS CO., LTD. und der japanische Großkonzern IHI Corporation Ltd. (IHI) eine Vereinbarung zur Übertragung von 100% der Aktien der IHI Construction Machinery Ltd., (IK) von IHI zu KATO unterzeichnet. Im Januar 2017 änderte IK, das 51 % von IHIMER S.p.A. mit Sitz in San Gimignano in Italien kontrollierte (49 % werden weiterhin von IMER GROUP S.p.A. gehalten), seine Firmenbezeichnung zu KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Ab 17. Februar 2017 hat IHIMER S.p.A. seine Firmenbezeichnung zu KATO IMER S.p.A. geändert. Das japanische Großunternehmen KATO WORKS stellt ein umfangreiches Sortiment an Baumaschinen her und ist seit 1895 in diesem Sektor tätig. Man hat sich entschieden, in Europa zu investieren, überzeugt von der Zentralität des Marktes. Dies erfolgt in Zusammenarbeit mit der italienischen Imer Group, einem führenden europäischen Hersteller von Baumaschinen und Betonmischanlagen."];

		// messaggi richieste ajax/check form
		this.nackDatabase = "Account löschen";
		this.nackPrepareQuery = "Fehler bei Erstellung der Query";
	    this.sendAjax = "Anfrage wird versendet...";
	    this.ackAjaxRequest = "Anfrage korrekt gesendet";
	    this.nackAjaxRequest = "Error sending request";
	    this.ackAjaxIscritto = "Abonnementanforderung erhalten. Überprüfen Sie Ihre Mailbox auf Aktivierung.";
	    this.ackAjaxUpdate = "Änderung erfolgreich vorgenommen";
	    this.ackAjaxRemove = "Benutzer gelöscht"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.nackAjax001 = "Internal error COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Internal error COD: 002"; // errore sending ajax request
	    this.emptyField = "* Pflichtfelder";
	    this.pwNotEqual = "Passwörter stimmen nicht überein";
	    this.pwWrongEmail = "Falsches E-Mail-Format."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.ackSendingEmail = "E-Mail korrekt gesendet"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	   	this.nackSendingEmail = "Fehler beim Senden der E-Mail"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW	    

		this.userAlreadyReg = "Bereits registrierter Benutzer";
		this.userRemoved = "Benutzer aus dem System gelöscht. Vielen Dank für die Nutzung unserer App."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.nackToken = "Token nicht erlaubt";

	    // privacy marketing push label
	    this.checkPrivacy = "Um fortfahren zu können, müssen Sie erklären, Einsicht in die Datenschutzinformationsschrift genommen zu haben.";
	    this.labelPrivacy = "Ich erkläre hiermit, die <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_A_PrivacyPolicyUtenti_WebAppKatoImer.php');return false;\">Informationsschrift</a> zur Verarbeitung der personenbezogenen Daten gelesen zu haben (Art. 13 der DSGVO (EU) 2016/679)";
	    this.labelMarketing = "Ich erkläre hiermit, die <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_D_InformativaAttivitaPromozionali__WebAppKatoImer.php');return false;\">Informationsschrift</a> zur Verarbeitung der personenbezogenen Daten hinsichtlich der Werbeaktivitäten gelesen zu haben und gebe dazu mein Einverständnis (Art . 13 der DSGVO (EU) 2016/679)";
	    this.labelPush = "Ich stimme zu, Push-Benachrichtigungen auf meinem Gerät zu erhalten";
	    // this.checkPrivacy = "Annahme der obligatorischen Privatsphäre";
	    // this.labelPrivacy = "Ich autorisiere die <a href=\"#pages9\"> Verarbeitung meiner persönlichen Daten </a> gemäß gesetzesvertretendem Dekret vom 30. Juni 2003, Nr. 196 \"Kodex zum Schutz personenbezogener Daten\" und der DSGVO (EU-Verordnung 2016/679). ";
	    // this.labelMarketing = "Ich bin damit einverstanden, Marketing-Mitteilungen von KATO IMER zu erhalten";
	    this.codeIubendaPrivacy = "86163521";

	}

	this.setSpanish = function() {

		// label menu
		this.menu0 = "Home";
		this.menu1 = "Catálogo";
		this.menu2 = "KATO IMER";
		this.menu3 = "Estensión de la garantía";
		this.menu4 = "Distribuidores/Talleres";
		this.menu5 = "Noticias";
		this.menu6 = "Publicidad";
		this.menu7 = "Contactos";
		this.menu8 = "Soporte";
		this.menu9 = "YouTube";
		this.menu10 = "Perfil de usuario";
		this.menu11 = "Cerrar sesión";
		this.menu12 = "FAQ";

		// pagina login
	    this.logiBtLabel = "Entrar";
	    this.registerBtLabel= "Registro";
	    this.fbBtLabel = "Entrar con Facebook";
	    this.gplusBtLabel = "Entrar con Google+";
	    this.newRegisterBtLabel= "Nuevo registro";
	    this.labelAlertNoconn = "Sin conexión. Imposible acceder o realizar nuevos registros.";   // NEWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelAlertNoconnHome = "Sin conexión."; 
	    this.ackAuth = "Autenticación exitosa";    // NEWWW 29.06.2018
	    this.nackAuth = "Autenticación fallida";    // NEWWW 29.06.2018
	    this.errorAuth = "Imposible efectuar la autenticación";     // NEWWW 29.06.2018
	    this.contentCookie = "Esta Aplicación Web permite el envío de cookies técnicas y de elaboración de perfiles de \"tercero\" y utiliza cookies de análisis de terceros para realizar estadísticas agregadas y anónimas. Para disponer de indicaciones sobre el uso de las cookies, acceda <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_B_CookiePolicyUtenti__WebAppKatoImer.php');return false;\">a la Nota Informativa completa</a>. Seleccionando ACEPTAR LAS COOKIES, autoriza el uso de las cookies presentes.";
	    this.buttonCookie = "Aceptar las Cookies";
	    this.buttonClose = "Cerrar";
	    this.nackCookie = "Lo lamentamos, pero si no autoriza el uso de las cookies no podrá utilizar nuestra Aplicación.";

		// registrazione
		this.labelOspite = "Huésped";
		this.labelProprietario = "Propietario";

		this.ownerAlertLabel = "El usuario propietario solo estará activo después de verificar KATO IMER<br/>";
		this.errorNoModels = "Ninguna máquina insertado";

		this.btLabelRegOspite = "Regístrame como huésped";
		this.btLabelRegProprietario = "Regístrame como propietario";
		this.btLabelUpdateOspite = "Actualización huésped";
		this.btLabelUpdateProprietario = "Actualización propietario";
		this.btLabelUpgradeProprietario = "Conversión al nivel de propietario";   // NEWWWWWWWWWWWWWWWWWWWWWWWWW
		this.confirmUpgradeProprietario = "Confirmar la actualización a";   // NEWWW 29.06.2018
		this.ackRequestUpgradeProprietario = "Conversión al nivel de propietario enviada correctamente!";   // NEWWWWWWWWWWWWWWWWWWWWWWWWW";
		this.labelUserNotFound = "¡Usuario no encontrado!";    // NEWWW 29.06.2018

		this.btLabelRemoveUser = "Elimina mi cuenta";

	    this.nameReg = "Nombre";
	    this.emailReg = "Email";
	    this.pwReg = "Contraseña";
	    this.pw2Reg = "Repetir contraseña";
	    this.telReg = "Tel.";

	    this.titleMacchinari = "Máquinas en tu posesión";
	    this.labelModelMacchinari = "Modelo";
	    this.labelSerialMacchinari = "Num. Serial";
	    this.labelBtAggiungi = "Agregar";
	    this.titleRemoveUser = "¿Quiere realmente eliminar su usuario?";   // NEWWW 29.06.2018
	    this.txtRemoveUser = "La operación no puede anularse";   // NEWWW 29.06.2018

	    // home
	    this.btSearchDealer = "Búsqueda Distribuidores/Talleres";
	    this.labelFlagHome = "KATO IMER es un socio italo-japonés entre Imer Group E Kato Works";  // ADD 17.10.2018
	    this.labelBtCatalogueHome = "Catálogo"; // ADD 17.10.2018
	    this.claimHome = "Construction<br/>equipment"; // ADD 17.10.2018

	    // dealers/officine
	    this.btLabelDealer = "Distribuidor";
	    this.btLabelDealers = "Distribuidores";
	    this.btLabelOfficina = "Taller";
	    this.btLabelOfficine = "Talleres";
	    this.allCountries = "Todas las naciones";

	    this.titleAlertPosition = "¿Quieres que la Aplicación \"KATO IMER\" acceda a tu posición?";
		this.textAlertPosition = "Declaro haber leído la <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_E_InformativaGeolocalizzazione__WebAppKatoImer.php');return false;\">Información</a> sobre el procesamiento de datos personales de los usuarios en relación con la geolocalización (Artículo 13 de la RGPD (UE) 2016/679) y doy mi consentimiento al procesamiento para utilizar las coordenadas de geolocalización del dispositivo en uso para rastrear el El distribuidor / taller más cercano de Kato Imer.";
    	this.ackPosition = "Si, acepto";
	    this.nackPosition = "No";

	    // lista catalogo
	    this.titCatalogo= "Catálogo";
	    this.labelPesoOp = "Peso operativo";
	    this.labelCaricoOp = "Carga operativa";
	    this.labelPeso = "Peso";

	    //dettaglio catalogo
	    this.labelBtBrochure = "Folleto";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtSchedatecnica = "Ficha técnica";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtManuale = "Solicita el manual del operador";   // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    // lista news
	    this.titNews= "Noticias";

	    // assistenza
	    this.titlePageHelp= "Envía tu solicitud";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.oggettoForm= "Objeto";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.textForm= "Texto de solicitud";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btHelp= "Envía la solicitud";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelObbligatori= "* campos obligatorios";  // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    //katoimer
	    this.titKato = "";
	    this.textKato = "<p>En noviembre de 2016, la multinacional japonesa KATO WORKS CO., LTD. y la conglomerada japonesa IHI Corporation Ltd. (IHI) firmaron un acuerdo para el traspaso del 100% de las acciones de IHI Construction Machinery Ltd., (IK) de IHI a KATO. Desde enero de 2017, IK, que controlaba el 51% de IHIMER S.p.A., con sede en Italia, en San Gimignano (el 49%, en cambio segu&iacute;a posey&eacute;ndolo IMER GROUP S.p.A.), cambi&oacute; su raz&oacute;n social, pasando a ser KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Desde el 17 de febrero de 2017, IHIMER S.p.A. cambi&oacute; su raz&oacute;n social, pasando a ser KATO IMER S.p.A. El coloso jap&oacute;nes KATO WORKS produce una amplia gama de m&aacute;quinas para la construcci&oacute;n y est&aacute; activa en el sector desde 1895; ha decidido invertir en Europa, convencido de la centralidad del mercado, en colaboraci&oacute;n con la italiana Imer Group, l&iacute;der europeo en la producci&oacute;n de m&aacute;quinas para la construcci&oacute;n y equipos de hormig&oacute;n. KATO IMER produce en Italia miniexcavadoras con tecnolog&iacute;a KATO, cargadores de direcci&oacute;n deslizantes y d&uacute;mperes de orugas; distribuye miniexcavadoras y transportadores de orugas producidos en Jap&oacute;n por KATO HICOM. Las miniexcavadoras cubren una gama que va de 0,9 a 8,5 toneladas, short-tail, tradicionales y giratorias. Los cargadores de direcci&oacute;n deslizantes con carga operativa de 400 a 2500 kg y con orugas. Los d&uacute;mperes se subdividen en dos clases: los mini-d&uacute;mperes, con carga operativa de 400 a 2500 kg, para el sector de la construcci&oacute;n y los viveros; los d&uacute;mperes con cargas operativas comprendidas entre 3000 y 11000 kg usados en la ingenier&iacute;a civil y en la construcci&oacute;n de infraestructuras. El establecimiento de KATO IMER en San Gimignano, en la provincia de Siena, se extiende sobre una superficie de m&aacute;s de 36.000 metros cuadrados. La constante b&uacute;squeda de innovaci&oacute;n y la continua actividad de proyecci&oacute;n permiten a la sociedad desarrollar m&aacute;quinas a la vanguardia y que responden perfectamente a las necesidades del mercado. Los productos KATO IMER se comercializan gracias a una red de m&aacute;s de 100 distribuidores y revendedores, que cubre de manera uniforme todos los principales Pa&iacute;ses europeos y algunos m&aacute;s en los 5 continentes. Para las l&iacute;neas skid (cargadores de direcci&oacute;n) y minid&uacute;mper ya se ha puesto en marcha una red de distribuci&oacute;n a nivel mundial.</p>";

	    //MA.MO.T.
	    this.titMamot = "Ampliación de la garantía";
	    this.textMamot = "<p><strong>Máxima tranquilidad</strong></p><p>Para tener siempre la máxima tranquilidad, incluso después del vencimiento de la garantía convencional (1er año), es suficiente con pedir al concesionario KATO IMER de confianza la información sobre el programa de extensión de la garantía MA.MO.T. y trabajar con total seguridad y tranquilidad hasta un máximo de 5 años desde la compra. Gracias a la seguridad de poderse valer durante muchos años de la experiencia de técnicos autorizados y repuestos originales, las máquinas KATO IMER evidentemente se revelarán una excelente inversión.</p><p><strong>Una amplia gama de posibilidades</strong></p><p>La cobertura de seguro MA.MO.T. se puede comprar para todas las máquinas nuevas. Se puede trabajar sin preocupaciones y protegidos de los riesgos de tener que sufragar gastos derivados de reparaciones imprevistas.</p><p><strong>La cobertura anual</strong></p><p>El programa MA.MO.T. permite hacer reparar las averías de naturaleza eléctrica, hidráulica y/o mecánica, causadas por rotura imprevista y accidental de uno o varios componentes.</p><p><strong>Centros de Asistencia autorizados KATO IMER</strong></p><p>El servicio de garantía es válido y se reconoce en todos los Centros de Asistencia autorizados KATO IMER.</p><p>Todas las condiciones de garantía están contenidas en la póliza de seguros.</p>";

	    //contatti
	    this.txtContatti = "<strong>Oficinas Centrales, Ventas y Planta</strong><br/>53037 Loc. Cusona <br/>San Gimignano (SI) - Italy<br/><br/><hr/><br/>Phone: <a href='tel:+39 0577 951 21' >+39 0577 951 21</a><br/>Fax: +39 0577 982 400<br/><a href='mailto:info@katoimer.com' >info@katoimer.com</a><br/><br/><hr/><br/><strong>Ventas:</strong><br/><a href='mailto:marketing@katoimer.com' >marketing@katoimer.com</a><br/><strong>Servicio:</strong><br/><a href='mailto:service@katoimer.com' >service@katoimer.com</a><br/><strong>Partes:</strong><br/><a href='mailto:parts@katoimer.com' >parts@katoimer.com</a><br/><br/><br/>";

	    // FAQ
	    this.titFaq = "XXX";
	    this.textFaq = "XXX";
	    this.questionsFaq = ["Manuales – ¿Cómo puedo encontrar un manual de uso y mantenimiento o un manual de repuestos?","¿Es posible conseguir los manuales técnicos de viejos modelos Ihimer / Ihi / Katoimer / Kato?","Estoy buscando máquinas usadas. ¿Qué puedo hacer?","Aviso de máquinas KATO IMER robadas – ¿A quién debo comunicar el robo de mi máquina?","Número de serie — ¿Dónde se encuentra?","Peso operativo — ¿Qué incluye?","¿Cómo puedo obtener un folleto de una máquina KATO?","Lista de los concesionarios – ¿Puede conseguir un listado de las sedes de los concesionarios KATOIMER?","Repuestos — ¿Dónde puedo comprar los repuestos para mi máquina KATOIMER?","Repuestos - ¿Cómo puedo ponerme en contacto con ustedes para recibir información?","Garantía; ¿cómo funciona la extensión de garantía MA.MOT.?","¿Campaña de leasing de 36 meses sin intereses?","¿KATOIMER es japonés o chino?"];
		this.answersFaq = ["Los manuales de uso y mantenimiento y los manuales de repuestos pueden solicitarse mediante nuestra Aplicación o bien pidiéndolos a cualquier concesionario oficial KATOIMER.","Sí, mediante los concesionarios oficiales KATO IMER.","KATO IMER no comercializa máquinas usadas ni publica anuncios en línea. Sin embargo, puede dirigirse a su concesionario; allí le proporcionarán todas las informaciones útiles.","En primer lugar, le aconsejamos que envíe una denuncia regular a las autoridades de seguridad pública e informar al concesionario KATO IMER más cercano. Gestionaremos el número de serie de su máquina en una base de datos específica a fin de realizar controles de las máquinas gestionadas por nuestra red de venta para finalidades de asistencia técnica.","Los números de serie están colocados en las máquinas KATO IMER en diferentes posiciones, tal como se explica en el manual de uso y mantenimiento. Si no logra encontrarlo, póngase en contacto con el concesionario KATO IMER más cercano.","Este peso incluye el peso de la máquina incrementado con el de la pala estándar, con todos los fluidos de ejercicio (incluido el combustible) y con un operador de corpulencia normal. Encuentre ésta y otras especificaciones en las páginas dedicadas a los productos.","El folleto puede descargarse mediante nuestra Aplicación o bien desde nuestro sitio web <a href=\"#\" onclick=\"window.open('http://www.katoimer.com'); return false;\" >www.katoimer.com</a>.","KATOIMER protege la privacidad de sus concesionarios y no comparte la lista completa. Puede encontrar la dirección de los concesionarios KATOIMER más cercanos a su domicilio en nuestra Aplicación y en nuestro sitio web <a href=\"#\" onclick=\"window.open('http://www.katoimer.com'); return false;\" >www.katoimer.com</a>","Solo los concesionarios KATOIMER autorizados y los Centros de asistencia KATOIMER autorizados pueden vender los repuestos originales KATOIMER. Disponen de los conocimientos y de la experiencia necesarios para ayudarle en el mantenimiento y en la asistencia de su equipo KATOIMER. Como alternativa, puede enviar una solicitud a <a href='mailto:parts@katoimer.com' >parts@katoimer.com</a>.","Puede contactar con nuestros encargados llamando al n.º <a href='tel:+39 0577 951232' >+39 0577 951232</a>, o bien mediante correo electrónico escribiendo a la dirección <a href='mailto:parts@katoimer.com' >parts@katoimer.com</a>","Le aconsejamos que lea la parte específica de nuestro sitio o bien que se informe en los concesionarios autorizados KATOIMER.","Le aconsejamos que lea la parte específica de nuestro sitio o bien que se informe en los concesionarios autorizados KATOIMER.","En noviembre de 2016, la multinacional japonesa KATO WORKS CO., LTD. y la conglomerada japonesa IHI Corporation Ltd. (IHI) firmaron un acuerdo para el traspaso del 100% de las acciones de IHI Construction Machinery Ltd., (IK) de IHI a KATO. Desde enero de 2017, IK, que controlaba el 51% de IHIMER S.p.A., con sede en Italia, en San Gimignano (el 49%, en cambio seguía poseyéndolo IMER GROUP S.p.A.), cambió su razón social, pasando a ser KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Desde el 17 de febrero de 2017, IHIMER S.p.A. cambió su razón social, pasando a ser KATO IMER S.p.A. El coloso japonés KATO WORKS produce una amplia gama de máquinas para la construcción y está activa en el sector desde 1895; ha decidido invertir en Europa, convencido de la centralidad del mercado, en colaboración con la empresa italiana Imer Group, líder europea en la producción de máquinas para la construcción y equipos de hormigón."];

		// messaggi richieste ajax/check form
		this.nackDatabase = "Error en la solicitud a la base de datos";
		this.nackPrepareQuery = "Error preparación Query";
	    this.sendAjax = "Enviando pedido...";
	    this.ackAjaxRequest = "Solicitud enviada correctamente";
	    this.nackAjaxRequest = "Errore enviando solicitud";
	    this.ackAjaxIscritto = "Solicitud de suscripción recibida. Revise su correo electrónico para la activación.";
	    this.ackAjaxUpdate = "Modificación realizada correctamente";
	    this.ackAjaxRemove = "¡Usuario eliminado!"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.nackAjax001 = "Internal error COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Internal error COD: 002"; // errore sending ajax request
	    this.emptyField = "* Campos requeridos";
	    this.pwNotEqual = "Las contraseñas no son iguales";
	    this.pwWrongEmail = "Formato de correo electrónico erróneo."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.ackSendingEmail = "Correo electrónico enviado correctamente"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	   	this.nackSendingEmail = "Error al enviar el correo electrónico"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW	    

	    this.userAlreadyReg = "Usuario ya registrado";
	    this.userRemoved = "Usuario eliminado del sistema. Gracias por haber usado nuestra aplicación."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.nackToken = "Token no permitido";

	    // privacy marketing push label
	    this.checkPrivacy = "Para proseguir es necesario declarar haber leído la nota informativa sobre el tratamiento de los datos";
	    this.labelPrivacy = "Declaro haber leído la Nota <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_A_PrivacyPolicyUtenti_WebAppKatoImer.php');return false;\">Informativa</a> sobre el tratamiento de los datos personales (Art. 13 del RGPD (EU) 2016/679)";
	    this.labelMarketing = "Declaro haber leído la Nota <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_D_InformativaAttivitaPromozionali__WebAppKatoImer.php');return false;\">Informativa</a> sobre el tratamiento de los datos personales en relación con las actividades promocionales y doy mi consentimiento para las finalidades referidas (Art. 13 del RGPD (EU) 2016/679)";
	    this.labelPush = "Acepto recibir notificaciones push en mi dispositivo";
	    // this.checkPrivacy = "Accettazione Privacidad obbligatoria";
	    // this.labelPrivacy = "Autorizo el <a href=\"#pages9\"> procesamiento de mis datos personales </a> de conformidad con el Decreto Legislativo del 30 de junio de 2003, n. 196 \"Código relativo a la protección de datos personales\" y el GDPR (Reglamento UE 2016/679). ";
	    // this.labelMarketing = "Acepto recibir marketing informativo de KATO IMER";
	    this.codeIubendaPrivacy = "76458544";

	}

	this.setFrench = function() {

		// label menu
		this.menu0 = "Accueil";
		this.menu1 = "Catalogue";
		this.menu2 = "KATO IMER";
		this.menu3 = "Extension de la garantie";
		this.menu4 = "Revendeurs/Ateliers";
		this.menu5 = "Nouvelles";
		this.menu6 = "Advertising";
		this.menu7 = "Contacts";
		this.menu8 = "Support";
		this.menu9 = "YouTube";
		this.menu10 = "Profil de l'utilisateur";
		this.menu11 = "Déconnexion";
		this.menu12 = "FAQ";

		// pagina login
	    this.logiBtLabel = "Entrèe";
	    this.registerBtLabel= "Registre";
	    this.fbBtLabel = "Se connecter avec Facebook";
	    this.gplusBtLabel = "Se connecter avec Google+";
	    this.newRegisterBtLabel= "Nouvelle inscription";
	    this.labelAlertNoconn = "Connexion absente. Impossible d'effectuer le login ou de nouveaux enregistrements.";   // NEWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelAlertNoconnHome = "Connexion absente."; 
	    this.ackAuth = "Authentification réussie";    // NEWWW 29.06.2018
	    this.nackAuth = "Authentification non réussie";    // NEWWW 29.06.2018
	    this.errorAuth = "Impossible d’effectuer l’authentification";     // NEWWW 29.06.2018
	    this.contentCookie = "Cette Web App permet l'envoi de cookies techniques et de profilage de \« tierces parties »\ et utilise des cookies d'analyse tiers pour compiler des statistiques agrégées et anonymes. Pour en savoir plus sur l'utilisation des cookies, veuillez consulter <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_B_CookiePolicyUtenti__WebAppKatoImer.php');return false;\">la Note d’information intégrale</a>. En sélectionnant ACCEPTER LES COOKIES, vous acceptez l'utilisation des cookies présents.";
	    this.buttonCookie = "Accepter les Cookies";
	    this.buttonClose = "Terminer";
	    this.nackCookie = "Nous sommes désolés, mais si vous n'acceptez pas l'utilisation des cookies, vous ne pourrez pas utiliser notre APP.";

		// registrazione
		this.labelOspite = "Hôte";
		this.labelProprietario = "Propriétaire";

		this.ownerAlertLabel = "L'utilisateur propriétaire ne sera actif qu'après avoir vérifié KATO IMER<br/>";
		this.errorNoModels = "Aucune machine insérée";

		this.btLabelRegOspite = "Enregistrez-moi comme hôte";
		this.btLabelRegProprietario = "Enregistrez-moi comme propriétaire";
		this.btLabelUpdateOspite = "Mise à jour de l’hôte";
		this.btLabelUpdateProprietario = "Mise à jour du propriétaire";
		this.btLabelUpgradeProprietario = "Upgrade en propriétaire";   // NEWWWWWWWWWWWWWWWWWWWWWWWWW
		this.confirmUpgradeProprietario = "Confirmez la mise à niveau à";   // NEWWW 29.06.2018
		this.ackRequestUpgradeProprietario = "Demande de upgrade au propriétaire correctement envoyée!";   // NEWWWWWWWWWWWWWWWWWWWWWWWWW";
		this.labelUserNotFound = "Utilisateur introuvable!";    // NEWWW 29.06.2018

		this.btLabelRemoveUser = "Supprimez mon compte";

	    this.nameReg = "Prenom";
	    this.emailReg = "Email";
	    this.pwReg = "Password";
	    this.pw2Reg = "Répétez Password";
	    this.telReg = "Tél.";

	    this.titleMacchinari = "Machines en votre possession";
	    this.labelModelMacchinari = "Modèle";
	    this.labelSerialMacchinari = "Numéro de série";
	    this.labelBtAggiungi = "Ajouter";
	    this.titleRemoveUser = "Vous voulez vraiment supprimer votre utilisateur";   // NEWWW 29.06.2018
	    this.txtRemoveUser = "L’opération ne peut pas être annulée";   // NEWWW 29.06.2018

	    // home
	    this.btSearchDealer = "Rechercher Revendeurs/Ateliers";
	    this.labelFlagHome = "KATO IMER est un partenariat italo-japonais entre Imer Group et Kato Works";  // ADD 17.10.2018
	    this.labelBtCatalogueHome = "Catalogue"; // ADD 17.10.2018
	    this.claimHome = "Construction<br/>equipment"; // ADD 17.10.2018

	    // dealers/officine
	    this.btLabelDealer = "Revendeur";
	    this.btLabelDealers = "Revendeurs";
	    this.btLabelOfficina = "Atelier";
	    this.btLabelOfficine = "Ateliers";
	    this.allCountries = "Toutes les nations";

	    this.titleAlertPosition = "Voulez-vous que l'Appli \"KATO IMER\" accède à votre position ?";
		this.textAlertPosition = "Je déclare avoir pris connaissance <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_E_InformativaGeolocalizzazione__WebAppKatoImer.php');return false;\">des informations</a> sur le traitement des données à caractère personnel des utilisateurs en rapport avec la géolocalisation (article 13 de la RGPD (UE) 2016/679) et j'accepte que le traitement utilise les coordonnées de géolocalisation du dispositif utilisé pour tracer revendeur / atelier Kato Imer le plus proche.";
	    this.ackPosition = "Oui, j'accepte";
	    this.nackPosition = "Non, merci";

	    // lista catalogo
	    this.titCatalogo= "Catalogue";
	    this.labelPesoOp = "Poids en marche";
	    this.labelCaricoOp = "Charge utile";
	    this.labelPeso = "Poids";
	    
	    //dettaglio catalogo
	    this.labelBtBrochure = "Brochure";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtSchedatecnica = "Fiche technique";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtManuale = "Demandez le manuel opérateur";   // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    // lista news
	    this.titNews= "News";

	    // assistenza
	    this.titlePageHelp= "Envoyez-nous votre demande";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.oggettoForm= "Objet";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.textForm= "Texte demande";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btHelp= "Envoyer demande";  // NEWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelObbligatori= "* champs obligatoires";  // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    //katoimer
	    this.titKato = "";
	    this.textKato = "<p>En novembre 2016, la multinationale japonaise KATO WORKS CO., LTD. et le conglom&eacute;rat japonais IHI Corporation Ltd. ont sign&eacute; un accord pour le transfert de 100 % des actions de la soci&eacute;t&eacute; IHI Construction Machinery Ltd., (IK) de IHI &agrave; KATO. Depuis janvier 2017 la soci&eacute;t&eacute; IK, qui contr&ocirc;lait 51 % de la soci&eacute;t&eacute; IHIMER S.p.A. avec son si&egrave;ge en Italie &agrave; San Gimignano (49 % continue en revanche &agrave; &ecirc;tre d&eacute;tenu par la soci&eacute;t&eacute; IMER GROUP S.p.A.), elle a modifi&eacute; sa raison sociale en KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Depuis le 17 f&eacute;vrier 2017, IHIMER S.p.A. a modifi&eacute; sa raison sociale en KATO IMER S.p.A. Le colosse japonais KATO WORKS produit une vaste gamme de machines pour la construction et active dans le secteur depuis 1895, il a d&eacute;cid&eacute; d&rsquo;investir en Europe convaincu de l&rsquo;importance du march&eacute;, en collaboration avec la soci&eacute;t&eacute; italienne Imer Group, leader europ&eacute;en dans la production de machines pour le b&acirc;timent et les installations de b&eacute;ton. KATO IMER produit en Italie des mini-pelles m&eacute;caniques &agrave; technologie KATO, skid-loader et dumper &agrave; chenilles ; distribue des mini-pelles m&eacute;caniques et crawler carrier produits au Japon par KATO HICOM. Les mini-pelles m&eacute;caniques couvrent une gamme allant de 0,9 &agrave; 8,5 tonnes, short-tail, traditionnelles et sans d&eacute;port arri&egrave;re. Les skid-loader &agrave; pneus avec un chargement op&eacute;rationnel de 400 &agrave; 2500 kg et &agrave; chenilles. Les dumpers se divisent en deux classes : les mini-dumpers, avec une charge op&eacute;rationnelle de 400 &agrave; 2500 kg, pour les restructurations et les p&eacute;pini&egrave;res ; les dumpers avec des charges op&eacute;rationnelles comprises entre 3000 et 11 000 kg utilis&eacute;s dans le g&eacute;nie civil et dans la construction d&rsquo;infrastructures. L&rsquo;&eacute;tablissement de KATO IMER &agrave; San Gimignano, dans la province de Sienne, s&rsquo;&eacute;tend sur une surface de plus de 36 000 m<sup>2</sup>. La recherche constante d&rsquo;innovation et l&rsquo;activit&eacute; continue de conception permettent &agrave; la soci&eacute;t&eacute; de d&eacute;velopper des machines &agrave; l&rsquo;avant-garde et parfaitement conformes aux exigences du march&eacute;. Les produits KATO IMER sont commercialis&eacute;s gr&acirc;ce &agrave; un r&eacute;seau de plus de 100 distributeurs et revendeurs qui couvre en mode uniforme tous les principaux pays europ&eacute;ens et d&rsquo;autres encore sur les 5 continents. Un r&eacute;seau de distribution a d&eacute;j&agrave; &eacute;t&eacute; d&eacute;marr&eacute; au niveau mondial pour les lignes skid et minidumper.</p>";

	    //MA.MO.T.
	    this.titMamot = "L&rsquo;extension de garantie S&eacute;r&eacute;nit&eacute; maximale";
	    this.textMamot = "</p><p><strong>S&eacute;r&eacute;nit&eacute; maximale</strong></p><p>Pour &ecirc;tre toujours en totale s&eacute;r&eacute;nit&eacute;, m&ecirc;me apr&egrave;s l&rsquo;&eacute;ch&eacute;ance de la garantie conventionnelle (1&egrave;re ann&eacute;e), il suffit de demander &agrave; son concessionnaire KATO IMER de confiance les informations concernant le programme d&rsquo;extension de la garantie MA.MO.T. et travailler en totale s&eacute;curit&eacute; et tranquillit&eacute; jusqu&rsquo;&agrave; 5 ans maximum &agrave; partir de l&rsquo;achat. Gr&acirc;ce &agrave; la s&eacute;curit&eacute; de pouvoir b&eacute;n&eacute;ficier pendant de nombreuses ann&eacute;es de l&rsquo;exp&eacute;rience de techniciens autoris&eacute;s et de pi&egrave;ces de rechange originales, les machines KATO IMER se r&eacute;v&eacute;leront certainement un parfait investissement.</p><p><strong>Une vaste gamme de possibilit&eacute;s</strong></p><p>La couverture d&rsquo;assurance MA.MO.T. peut &ecirc;tre acquise pour toutes les machines neuves. Il est possible de travailler sans pr&eacute;occupations et prot&eacute;g&eacute;s des risques de devoir soutenir des d&eacute;penses caus&eacute;es par des r&eacute;parations impr&eacute;vues.</p><p><strong>La couverture annuelle</strong></p><p>Le programme MA.MO.T. permet de faire r&eacute;parer les pannes de nature &eacute;lectrique, hydraulique et/ou m&eacute;canique, caus&eacute;es par une rupture soudaine et accidentelle d&rsquo;un ou plusieurs composants.</p><p><strong>Centres d&rsquo;Assistance autoris&eacute;s KATO IMER </strong></p><p>Le service de garantie est valide et il est reconnu aupr&egrave;s de tous les Centres d&rsquo;Assistance autoris&eacute;s KATO IMER. Toutes les conditions de garantie sont contenues dans la police d&rsquo;assurance.</p>";

	    //contatti
	    this.txtContatti = "<strong>Siège social, vente et éstablissement</strong><br/>53037 Loc. Cusona <br/>San Gimignano (SI) - Italy<br/><br/><hr/><br/>Tèl: <a href='tel:+39 0577 951 21' >+39 0577 951 21</a><br/>Fax: +39 0577 982 400<br/><a href='mailto:info@katoimer.com' >info@katoimer.com</a><br/><br/><hr/><br/><strong>Ventes:</strong><br/><a href='mailto:marketing@katoimer.com' >marketing@katoimer.com</a><br/><strong>Service:</strong><br/><a href='mailto:service@katoimer.com' >service@katoimer.com</a><br/><strong>Parties:</strong><br/><a href='mailto:parts@katoimer.com' >parts@katoimer.com</a><br/><br/><br/>";

	    // FAQ
	    this.titFaq = "";
	    this.textFaq = "";
	    this.questionsFaq = ["Manuels – Comment puis-je trouver un manuel d'utilisation et d'entretien ou un manuel de pièces de rechange?","Est-il possible de se procurer les manuels techniques d’anciens modèles Ihimer / Ihi / Katoimer / Kato ?","Je cherche des machines d'occasion. Comment puis-je faire?","Déclaration de vol de machines KATO IMER – À qui dois-je signaler le vol de ma machine?","Numéro de série — Où se trouve-t-il?","Poids opérationnel — Qu'est-ce que cela comprend ?","Comment puis-je obtenir une brochure d'une machine KATO ?","Liste des concessionnaires – Puis-je obtenir une liste des concessionnaires KATOIMER ?","Pièces de rechange – Où puis-je acheter les pièces de rechange pour ma machine KATOIMER ?","Pièces de rechange – Comment puis-je vous contacter pour plus d'informations?","Garantie, comment fonctionne l'extension de garantie MA.MOT.?","Campagne leasing 36 mois sans intérêt?","KATOIMER est japonaise ou chinoise?"];
		this.answersFaq = ["Les manuels d'utilisation et d'entretien ainsi que les manuels de pièces de rechange peuvent être demandés depuis notre APP ou commandés auprès d’un concessionnaire officiel KATOIMER.","Oui, par l'intermédiaire des concessionnaires officiels KATO IMER.","KATO IMER ne commercialise pas de machines d'occasion et ne publie pas d'annonces en ligne. Cependant, vous pouvez contacter votre concessionnaire qui vous fournira toutes les informations utiles.","Tout d'abord, nous vous invitons à vous déposer une plainte auprès des autorités de sécurité publique et à informer votre concessionnaire KATO IMER le plus proche. Nous gérerons le numéro de série de votre machine dans une base de données spéciale afin d'effectuer des contrôles sur les machines gérées par notre réseau de vente à des fins d'assistance technique.","Les numéros de série sont indiqués sur les machines KATO IMER dans différentes positions, comme illustré dans le manuel d'utilisation et d’entretien. Si vous ne le trouvez pas, veuillez contacter votre concessionnaire KATO IMER le plus proche.","Ce poids comprend le poids de la machine plus le poids de la benne standard, de tous les fluides de fonctionnement (y compris le carburant) et un opérateur de corpulence normale. Retrouvez cette spécification et toutes les autres sur les pages consacrées aux produits.","La brochure peut être téléchargée depuis notre APP ou depuis notre site web <a href=\"#\" onclick=\"window.open('http://www.katoimer.com'); return false;\" >www.katoimer.com</a>.","KATOIMER protège la vie privée de ses concessionnaires et ne partage pas la liste complète. Vous pouvez trouver l'adresse de votre concessionnaire KATOIMER le plus proche dans notre APP et sur notre site web <a href=\"#\" onclick=\"window.open('http://www.katoimer.com'); return false;\" >www.katoimer.com</a>","Seuls les concessionnaires agréés KATOIMER et les Centres d’assistance agréés KATOIMER peuvent vendre des pièces de rechange d'origine KATOIMER. Ils possèdent les connaissances et l'expérience nécessaires pour vous assister dans l'entretien et l’assistance de votre équipement KATOIMER. Vous pouvez également envoyer une demande à <a href='mailto:parts@katoimer.com' >parts@katoimer.com</a>.","Vous pouvez contacter notre personnel au n°<a href='tel:+39 0577 951232' >+39 0577 951232</a>, ou par e-mail à l’adresse <a href='mailto:parts@katoimer.com' >parts@katoimer.com</a>","Veuillez vous référer à la section spécifique de notre site ou vous informer auprès des concessionnaires KATOIMER agréés.","Veuillez vous référer à la section spécifique de notre site ou vous informer auprès des concessionnaires KATOIMER agréés.","En novembre 2016, la multinationale japonaise KATO WORKS CO., LTD. et le conglomérat japonais IHI Corporation Ltd. ont signé un accord pour le transfert de 100 % des actions de la société IHI Construction Machinery Ltd., (IK) de IHI à KATO. Depuis janvier 2017 la société IK, qui contrôlait 51 % de la société IHIMER S.p.A. avec son siège en Italie à San Gimignano (49 % continue en revanche à être détenue par la société IMER GROUP S.p.A.), elle a modifié sa raison sociale en KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Depuis le 17 février 2017, IHIMER S.p.A. a modifié sa raison sociale en KATO IMER S.p.A. Le colosse japonais KATO WORKS produit une vaste gamme de machines pour la construction et il est actif dans le secteur depuis 1895, il a décidé d’investir en Europe convaincu de l’importance du marché, en collaboration avec la société italienne Imer Group, leader européen dans la production de machines pour le bâtiment et les installations de béton."];

		// messaggi richieste ajax/check form 
		this.nackDatabase = "Erreur dans la demande à la base de données";
		this.nackPrepareQuery = "Erreur de préparation Query";
	    this.sendAjax = "Envoyer une requete...";
	    this.ackAjaxRequest = "Demande correctement envoyée";
	    this.nackAjaxRequest = "Erreur demande d'envoi";
	    this.ackAjaxIscritto = "Demande d'abonnement reçue. Vérifiez votre e-mail pour l'activation.";
	    this.ackAjaxUpdate = "Modification effectuée correctement";
	    this.ackAjaxRemove = "Utilisateur supprimé!"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.nackAjax001 = "Internal error COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Internal error COD: 002"; // errore sending ajax request
	    this.emptyField = "* Champs obligatoires";
	    this.pwNotEqual = "Passwords ne correspondent pas";
	    this.pwWrongEmail = "Format e-mail erroné"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.ackSendingEmail = "E-mail envoyé correctement"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	   	this.nackSendingEmail = "Erreur envoi e-mail"; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW	    

	    this.userAlreadyReg = "Utilisateur déjà enregistré";
	    this.userRemoved = "Utilisateur supprimé du système. Merci d’avoir utilisé notre application."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
	    this.nackToken = "Jeton non autorisé";

	    // privacy marketing push label
	    this.checkPrivacy = "Pour continuer, vous devez déclarer que vous avez pris connaissance de la note d’information relative au traitement des données";
	    this.labelPrivacy = "Je déclare avoir lu la <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_A_PrivacyPolicyUtenti_WebAppKatoImer.php');return false;\">Note d’information</a> sur le traitement des données à caractère personnel (Art. 13 du RGPD (UE) 2016/679)";
	    this.labelMarketing = "Je déclare avoir lu la <a href=\"#\" onClick=\"window.open('https://app.katoimer.com/informative/en-EN_INF_D_InformativaAttivitaPromozionali__WebAppKatoImer.php');return false;\">Note d’information</a> sur le traitement des données à caractère personnel dans le cadre d'activités promotionnelles et je donne mon consentement aux fins prévues (Art. 13 du RGPD (UE) 2016/679)";
	    this.labelPush = "J'accepte de recevoir des notifications push sur mon appareil";
	    // this.checkPrivacy = "Acceptation de la confidentialité obligatoire";
	    // this.labelPrivacy = "J'autorise le <a href=\"#pages9\"> traitement de mes données personnelles </a> conformément au décret-loi du 30 juin 2003, n. 196 \"Code concernant la protection des données personnelles\" et le GDPR (Règlement de l'UE 2016/679). ";
	    // this.labelMarketing = "J'accepte de recevoir des communications marketing de KATO IMER";
	    this.codeIubendaPrivacy = "85846522";

	}

}