var MessageTranslation = function(successCallback, errorCallback) {
 
	this.setItalian = function() {

		// label menu
		this.menu0 = "Home";
		this.menu1 = "Catalogo";
		this.menu2 = "KATO IMER";
		this.menu3 = "MA.MO.T.";
		this.menu4 = "Dealers/Officine";
		this.menu5 = "News";
		this.menu6 = "FAQ";
		this.menu7 = "Contatti";
		this.menu8 = "Assistenza";
		this.menu9 = "YouTube";
		this.menu10 = "Area utente";
		this.menu11 = "Logout";

		// pagina login
	    this.logiBtLabel = "Entra";
	    this.registerBtLabel = "Registrati";
	    this.fbBtLabel = "Login con Facebook";
	    this.gplusBtLabel = "Login con Google+";
	    this.newRegisterBtLabel = "Nuova registrazione";
	    this.labelAlertNoconn = "Connessione assente. Impossibile effettuare login o nuove registrazioni.";   // NEWWWWWWWWWWWWWWWWWWWWWWWWW
	    
		// registrazione
		this.labelOspite = "ospite";
		this.labelProprietario = "proprietario";

		this.ownerAlertLabel = "L'utente proprietario sarà attivo solo previo controllo di KATO IMER...";
		this.errorNoModels = "Nessuna macchina inserita";

		this.btLabelRegOspite = "Registrami come ospite";
		this.btLabelRegProprietario = "Registrami come proprietario";
		this.btLabelUpdateOspite = "Aggiornamento ospite";
		this.btLabelUpdateProprietario = "Aggiornamento proprietario";
		this.btLabelUpgradeProprietario = "Upgrade a proprietario";

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

	    // home
	    this.btSearchDealer = "Ricerca Dealers/Officine";

	    // dealers/officine
	    this.btLabelDealer = "Dealer";
	    this.btLabelDealers = "Dealers";
	    this.btLabelOfficina = "Officina";
	    this.btLabelOfficine = "Officine";
	    
	    // lista catalogo
	    this.titCatalogo= "Catalogo";

	    //dettaglio catalogo
	    this.labelBtBrochure = "Brochure";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtSchedatecnica = "Scheda tecnica";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtManuale = "Richiedi manuale operatore";   // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    // lista news
	    this.titNews= "News";

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
	    this.titMamot = "Estensione di garanzia";
	    this.textMamot = "<p><strong>Massima serenità</strong></p><p>Per avere sempre la massima serenit&agrave; anche dopo la scadenza della garanzia convenzionale (1&deg; anno), &egrave; sufficiente chiedere al concessionario KATO IMER di fiducia le informazioni sul programma di estensione della garanzia MA.MO.T. e lavorare in totale sicurezza e tranquillit&agrave; fino a un massimo di 5 anni dall&rsquo;acquisto. Grazie alla sicurezza di potersi avvalere per molti anni dell&rsquo;esperienza di tecnici autorizzati e di ricambi originali, le macchine KATO IMER si riveleranno certamente un ottimo investimento.</p><p><strong>Un'ampia gamma di possibilità</strong></p><p>La copertura assicurativa MA.MO.T. &egrave; acquistabile per tutte le macchine nuove. &Egrave; possibile lavorare senza preoccupazioni e protetti dai rischi di dover sostenere spese derivanti da riparazioni impreviste.</p><p><strong>La copertura annuale</strong></p><p>Il programma MA.MO.T. consente di far riparare i guasti di natura elettrica, idraulica e/o meccanica, causati da rottura improvvisa e accidentale di uno o pi&ugrave; componenti.</p><p><strong>Centri Assistenza autorizzati KATO IMER</strong></p><p>Il servizio di garanzia &egrave; valido e viene riconosciuto presso tutti i Centri di Assistenza autorizzati KATO IMER.</p><p>Tutte le condizioni di garanzia sono contenute nella polizza assicurativa.</p>";

	    //contatti
	    this.txtContatti = "<strong>Sede Legale, Uffici e Stabilimento</strong><br/>53037 Loc. Cusona <br/>San Gimignano (SI) - Italy<br/><br/><hr/><br/>Tel.: <a href='tel:+39 0577 951 21' >+39 0577 951 21</a><br/>Fax: +39 0577 982 400<br/>info@katoimer.com<br/><br/><hr/><br/><strong>Commerciale:</strong><br/>marketing@katoimer.com<br/><strong>Service:</strong><br/>service@katoimer.com<br/><strong>Parts:</strong><br/>parts@katoimer.com<br/><br/><br/>";

	    // messaggi richieste ajax/check form
	    this.nackDatabase = "Errore nella richiesta al Database";
	    this.nackPrepareQuery = "Errore preparazione Query";
	    this.sendAjax = "Invio richiesta...";
	    this.ackAjaxRequest = "Richiesta inviata correttamente";
	    this.nackAjaxRequest = "Errore invio richiesta";
	    this.ackAjaxIscritto = "Iscrizione effettuata correttamente";
	    this.ackAjaxUpdate = "Modifica effettuata correttamente";
	    this.nackAjax001 = "Errore interno COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Errore interno COD: 002"; // errore sending ajax request
	    this.emptyField = "I campi * non possono essere vuoti.";
	    this.pwNotEqual = "Le password non coincidono.";
	   	this.pwWrongEmail = "Formato email errato."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

	    this.userAlreadyReg = "Utente già registrato";
	    this.userRemoved = "Utente eliminato dal sistema. Grazie per aver usato la nostra app.";
	    this.nackToken = "Token non riconosciuto";

	    // privacy marketing push label
	    this.checkPrivacy = "Accettazione Privacy obbligatoria";
	    this.labelPrivacy = "Autorizzo il <a href=\"#pages9\">trattamento dei miei dati personali</a> ai sensi del Decreto Legislativo 30 giugno 2003, n. 196 “Codice in materia di protezione dei dati personali” e del GDPR (Regolamento UE 2016/679). ";
	    this.labelMarketing = "Accetto di ricevere informative marketing da KATO IMER";
	    this.labelPush = "Accetto di ricevere notifiche push sul mio dispositivo";
	    this.codeIubendaPrivacy = "30408334";
	}

	this.setEnglish = function() {

		// label menu
		this.menu0 = "Home";
		this.menu1 = "Catalogue";
		this.menu2 = "KATO IMER";
		this.menu3 = "MA.MO.T.";
		this.menu4 = "Dealers/Workshops";
		this.menu5 = "News";
		this.menu6 = "FAQ";
		this.menu7 = "Contacts";
		this.menu8 = "Assistance";
		this.menu9 = "YouTube";
		this.menu10 = "User profile";
		this.menu11 = "Logout";

		// pagina login
	    this.logiBtLabel = "Enter";
	    this.registerBtLabel = "Register";
	    this.fbBtLabel = "Login with Facebook";
	    this.gplusBtLabel = "Login with Google+";
	    this.newRegisterBtLabel = "New registration";
	    
		// registrazione
		this.labelOspite = "guest";
		this.labelProprietario = "owner";

		this.ownerAlertLabel = "The owner user will be active only upon verification by KATO IMER...";
		this.errorNoModels = "No machine inserted";

		this.btLabelRegOspite = "Registrami come ospite";
		this.btLabelRegProprietario = "Registrami come proprietario";
		this.btLabelUpdateOspite = "Upgrade profile";
		this.btLabelUpdateProprietario = "Upgrade profile";
		this.btLabelUpgradeProprietario = "Upgrade to owner";

		this.btLabelRemoveUser = "Rimuovi il mio account";

	    this.nameReg = "Name";
	    this.emailReg = "Email";
	    this.pwReg = "Password";
	    this.pw2Reg = "Repeat Password";
	    this.telReg = "Phone";

	    this.titleMacchinari = "Machines in your possession";
	    this.labelModelMacchinari = "Model";
	    this.labelSerialMacchinari = "Serial number";
	    this.labelBtAggiungi = "Add";

	    // home
	    this.btSearchDealer = "Search Dealers/Workshops";

	    // dealers/officine
	    this.btLabelDealer = "Dealer";
	    this.btLabelDealers = "Dealers";
	    this.btLabelOfficina = "Workshop";
	    this.btLabelOfficine = "Workshops";	    

	    // lista catalogo

	    this.titCatalogo= "Catalogue";

	    //dettaglio catalogo
	    this.labelBtBrochure = "Brochure";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtSchedatecnica = "Scheda tecnica";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtManuale = "Richiedi manuale operatore";   // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    // lista news
	    this.titNews= "News";

	    // assistenza
	    this.titlePageHelp= "Send your request";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.oggettoForm= "Object";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.textForm= "Request";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btHelp= "Invia richiesta";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelObbligatori= "* campi obbligatori";  // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    //katoimer
	    this.titKato = "";
	    this.textKato = "<p>In November 2016, Japanese multinational KATO WORKS CO., LTD. and Japanese conglomerate IHI Corporation Ltd. (IHI) signed an agreement to transfer 100% of the shares of IHI Construction Machinery Ltd., (IK) from IHI to KATO. As of January 2017, IK, which owned 51% of IHIMER S.p.A. based in Italy in San Gimignano (49% is still held by IMER GROUP S.p.A.) has changed its company name to KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). As of February 17 2017, IHIMER S.p.A. has changed its company name to KATO IMER S.p.A.</p><p>Japanese colossal KATO WORKS, which produces a broad range of construction machinery and has been active in the industry since 1895, has decided to invest in Europe, believing strongly in the centrality of the market, in collaboration with Italian Imer Group, European leader in the production of machinery for construction and batch plants.</p><p>In Italy KATO IMER produces mini-excavators with KATO technology, skid-loaders and dumpers; it distributes mini-excavators and crawler carriers produced in Japan by KATO HICOM.</p><p>The mini-excavators cover a range that spans from 0.9 to 8.5 tonnes, short-tail, traditional and zero tail swing.</p><p>Wheel, and tracked, skid-loaders with operating load from 400 to 2500 kg. The dumpers are divided into two classes: mini dumpers, with operating load between 400 and 2500 kg, for restoration and nursery work; dumpers with operating load between 3000 and 11000 kg used in civil engineering and infrastructure construction.</p><p>The KATO IMER factory in San Gimignano, in the province of Siena, covers a surface area of more than 36 thousand square meters. The constant pursuit of innovation and the company&rsquo;s on-going design activity allows it to develop cutting edge machines in perfect compliance with market demands.</p><p>KATO IMER products are sold through a network of more than 100 distributors and dealers uniformly covering all major European countries and others across the 5 continents. A worldwide distribution network has already been set up for skid and minidumper lines.</p>";

	    //MA.MO.T.
	    this.titMamot = "Extension of the warranty";
	    this.textMamot = "<p><strong>Maximum assurance</strong></p><p>To enjoy maximum assurance even once the standard warranty expires (1st year), simply ask your usual KATO IMER dealer for information on the MA.MO.T. warranty extension scheme and work in full safety and assurance up to a maximum of 5 years following your purchase. Thanks to the assurance of being able to avail of the experience of authorised technicians and original parts for many years, KATO IMER machinery would certainly prove to be an excellent investment.</p><p><strong>A broad range of possibilities</strong></p><p>MA.MO.T. insurance coverage can be purchased for all new machines. You can work worry-free and protected against the risk of having to take on expenses stemming from unexpected repairs.</p><p><strong>Annual coverage</strong></p><p>The MA.MO.T. scheme includes electrical, hydraulic and/or mechanical failures caused by the unexpected and accidental breakage of one or more parts.</p><p><strong>Authorised KATO IMER Assistance Centres</strong></p><p>The warranty service is valid and recognised by all KATO IMER authorised Assistance Centres.</p><p>All of the warranty conditions are contained in the insurance policy.</p>";

	    //contatti
	    this.txtContatti = "<strong>Head Offices, Sales and Plant</strong><br/>53037 Loc. Cusona <br/>San Gimignano (SI) - Italy<br/><br/><hr/><br/>Phone: <a href='tel:+39 0577 951 21' >+39 0577 951 21</a><br/>Fax: +39 0577 982 400<br/>info@katoimer.com<br/><br/><hr/><br/><strong>Sales:</strong><br/>marketing@katoimer.com<br/><strong>Service:</strong><br/>service@katoimer.com<br/><strong>Parts:</strong><br/>parts@katoimer.com<br/><br/><br/>";

	    // messaggi richieste ajax/check form 
	    this.nackDatabase = "Error on Database request";
	    this.nackPrepareQuery = "Errore preparazione Query";
	    this.sendAjax = "Sending request...";
	    this.ackAjaxRequest = "Request correctly sent";
	    this.nackAjaxRequest = "Error sending request";
	    this.ackAjaxIscritto = "Subscription ";
	    this.ackAjaxUpdate = "Modifica effettuata correttamente";
	    this.nackAjax001 = "Internal error COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Internal error COD: 002"; // errore sending ajax request
	    this.emptyField = "* Required fields";
	    this.pwNotEqual = "Passwords do not match";
	    this.pwWrongEmail = "Formato email errato."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

	    this.userAlreadyReg = "Already registered user";
	    this.userRemoved = "Utente eliminato dal sistema. Grazie per aver usato la nostra app.";
	    this.nackToken = "Token not allowed";

	    // privacy marketing push label
	    this.checkPrivacy = "Mandatory Privacy Acceptance";
	    this.labelPrivacy = "I authorize the <a href=\"#pages9\"> processing of my personal data </a> according to Legislative Decree 30 June 2003, n. 196 \"Code regarding the protection of personal data\" and the GDPR (EU Regulation 2016/679). ";
	    this.labelMarketing = "I agree to receive marketing communications from KATO IMER";
	    this.labelPush = "I agree to receive push notifications on my device";
	    this.codeIubendaPrivacy = "66974646";

	}

	this.setDeutch = function() {

		// label menu
		this.menu0 = "Home";
		this.menu1 = "Katalog";
		this.menu2 = "KATO IMER";
		this.menu3 = "MA.MO.T.";
		this.menu4 = "Händler/Werkstatt";
		this.menu5 = "Nachrichten";
		this.menu6 = "FAQ";
		this.menu7 = "Kontakte";
		this.menu8 = "Unterstützung";
		this.menu9 = "YouTube";
		this.menu10 = "Benutzerprofil";
		this.menu11 = "Ausloggen";


		// pagina login
	    this.logiBtLabel = "Anmeldung";
	    this.registerBtLabel = "Registrieren";
	    this.fbBtLabel = "Einloggen mit Facebook";
	    this.gplusBtLabel = "Einloggen mit Google+";
	    this.newRegisterBtLabel = "Neue Registrierung";
	    	    
		// registrazione
		this.labelOspite = "ospite";
		this.labelProprietario = "proprietario";

		this.ownerAlertLabel = "Der Besitzerbenutzer ist nur aktiv, nachdem er KATO IMER überprüft hat...";
		this.errorNoModels = "Keine Maschine eingesetzt";

		this.btLabelRegOspite = "Registrami come ospite";
		this.btLabelRegProprietario = "Registrami come proprietario";
		this.btLabelUpdateOspite = "Aggiornamento ospite";
		this.btLabelUpdateProprietario = "Aggiornamento proprietario";
		this.btLabelUpgradeProprietario = "Upgrade to owner";

		this.btLabelRemoveUser = "Rimuovi il mio account";

	    this.nameReg = "Name";
	    this.emailReg = "Email";
	    this.pwReg = "Passwort";
	    this.pw2Reg = "Passwort wiederholen";
	    this.telReg = "Tel.";

	    this.titleMacchinari = "Maschinen in Ihrem Besitz";
	    this.labelModelMacchinari = "Modell";
	    this.labelSerialMacchinari = "Seriennummer";
	    this.labelBtAggiungi = "Hinzufügen";

	    // home
	    this.btSearchDealer = "Suche Händler/Werkstatt";

	    // dealers/officine
	    this.btLabelDealer = "Händler";
	    this.btLabelDealers = "Händler";
	    this.btLabelOfficina = "Werkstatt";
	    this.btLabelOfficine = "Werkstatt";

	    // lista catalogo
	    this.titCatalogo= "Katalog";

	    // lista news
	    this.titNews= "News";   // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    //dettaglio catalogo
	    this.labelBtBrochure = "Brochure";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtSchedatecnica = "Scheda tecnica";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtManuale = "Richiedi manuale operatore";   // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    // assistenza
	    this.titlePageHelp= "Inviaci la tua richiesta";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	   	this.oggettoForm= "Oggetto";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.textForm= "Testo richiesta";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btHelp= "Invia richiesta";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelObbligatori= "* campi obbligatori";  // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    //katoimer
	    this.titKato = "";
	    this.textKato = "<p>Im November 2016 haben das multinationale japanische Unternehmen KATO WORKS CO., LTD. und der japanische Mischkonzern IHI Corporation Ltd. (IHI) eine Vereinbarung &uuml;ber die &Uuml;bertragung von 100 % der Aktien des Unternehmens IHI Construction Machinery Ltd., (IK) von IHI an KATO unterzeichnet. Im Januar 2017 &auml;nderte IK, das 51 % von IHIMER S.p.A. mit Sitz in San Gimignano in Italien kontrollierte (49 % werden weiterhin von IMER GROUP S.p.A. gehalten), seine Firmenbezeichnung zu KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Am 17. Februar 2017 &auml;nderte IHIMER S.p.A. seine Firmenbezeichnung zu KATO IMER S.p.A.</p><p>Das japanische Gro&szlig;unternehmen KATO WORKS stellt ein umfangreiches Sortiment an Baumaschinen her und ist seit 1895 in diesem Sektor t&auml;tig. Dort hat man sich entschieden, in Europa zu investieren, &uuml;berzeugt von der Zentralit&auml;t des Marktes. Dies erfolgt in Zusammenarbeit mit der italienischen Imer Group, einem f&uuml;hrenden europ&auml;ischen Hersteller von Baumaschinen und Betonmischanlagen.</p><p>KATO IMER stellt in Italien Minibagger mit KATO-Technologie, Kompaktlader und Raupenmuldenkipper her und vertreibt in Japan von KATO HICOM hergestellte Minibagger und Raupenkipper.</p><p>Die Minibagger sind mit Kapazit&auml;ten von 0,9 bis 8,5 Tonnen, mit Kurzheck, in herk&ouml;mmlicher Ausf&uuml;hrung und drehbar lieferbar.</p><p>Die Kompaktlader sind mit R&auml;dern mit Betriebslast von 400 bis 2500 kg und mit Raupenketten lieferbar. Die Muldenkipper unterteilen sich in zwei Kategorien: Minidumper mit Betriebslast von 400 bis 2500 kg f&uuml;r Sanierungen und Gartenbau sowie Muldenkipper mit Betriebslast zwischen 3000 und 11000 kg, die vorwiegend im Hoch- und Tiefbau und im Stra&szlig;enbau eingesetzt werden.</p><p>Das Werk von KATO IMER in San Gimignano in der Provinz Siena erstreckt sich &uuml;ber eine Fl&auml;che von mehr als 36000 m2. Durch die st&auml;ndige Suche nach Innovationen und fortw&auml;hrende Planung schafft es das Unternehmen immer wieder, fortschrittliche Maschinen zu entwickeln, die optimal auf die aktuelle Nachfrage abgestimmt sind.</p><p>Die Produkte von KATO IMER werden &uuml;ber ein Netz von &uuml;ber 100 Vertriebsunternehmen und H&auml;ndlern vertrieben, das die wichtigsten europ&auml;ischen L&auml;nder sowie weitere L&auml;nder auf f&uuml;nf Kontinenten gleichm&auml;&szlig;ig abdeckt. F&uuml;r die Kompaktlader- und Minidumper-Baureihen wurde bereits begonnen, ein weltweites Vertriebsnetz aufzubauen.</p>"
	   
	    //MA.MO.T.
	    this.titMamot = "Erweiterte Garantie";
	    this.textMamot = "<p><strong>Bestm&ouml;gliche Absicherung</strong><br />Um auch nach Ablauf der vertraglich vereinbarten Garantie (1. Jahr) immer optimal abgesichert zu sein, brauchen Sie nur den KATO-IMER-H&auml;ndler Ihres Vertrauens nach der erweiterten Garantie MA.MO.T. zu fragen. So k&ouml;nnen Sie bis maximal f&uuml;nf Jahre nach dem Kauf v&ouml;llig sicher und sorglos mit der Maschine arbeiten. Durch die Sicherheit, viele Jahre lang von der Erfahrung der zugelassenen Techniker und von Originalersatzteilen profitieren zu k&ouml;nnen, werden sich die Maschinen von KATO IMER zweifellos als optimale Investition erweisen. Eine umfassende Auswahl an M&ouml;glichkeiten Der MA.MO.T.-Versicherungsschutz kann f&uuml;r alle neuen Maschinen erworben werden. So k&ouml;nnen Sie bedenkenlos arbeiten und sind vor dem Risiko gesch&uuml;tzt, dass pl&ouml;tzlich Kosten durch unvorhergesehene Reparaturen anfallen. J&auml;hrlicher Schutz Mit dem MA.MO.T.-Plan k&ouml;nnen Defekte an der Elektrik, Hydraulik und/oder Mechanik repariert werden, die durch pl&ouml;tzliche, unbeabsichtigte Besch&auml;digung einer oder mehrerer Bauteile entstanden sind. Zugelassene KATO-IMER-Kundendienstzentren Die Garantie wird in allen zugelassenen Kundendienstzentren von KATO IMER anerkannt. Alle Garantiebedingungen k&ouml;nnen in der Versicherungspolice nachgelesen werden.</p>"
	    //contatti
	    this.txtContatti = "<strong>Head Offices, Sales and Plant</strong><br/>53037 Loc. Cusona <br/>San Gimignano (SI) - Italy<br/><br/><hr/><br/>Phone: <a href='tel:+39 0577 951 21' >+39 0577 951 21</a><br/>Fax: +39 0577 982 400<br/>info@katoimer.com<br/><br/><hr/><br/><strong>Sales:</strong><br/>marketing@katoimer.com<br/><strong>Service:</strong><br/>service@katoimer.com<br/><strong>Parts:</strong><br/>parts@katoimer.com<br/><br/><br/>";

		// messaggi richieste ajax/check form
		this.nackDatabase = "Error on Database request";
		this.nackPrepareQuery = "Errore preparazione Query";
	    this.sendAjax = "Sending request...";
	    this.ackAjaxRequest = "Request correctly sended";
	    this.nackAjaxRequest = "Error sending request";
	    this.ackAjaxIscritto = "Abonnement ";
	    this.ackAjaxUpdate = "Modifica effettuata correttamente";
	    this.nackAjax001 = "Internal error COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Internal error COD: 002"; // errore sending ajax request
	    this.emptyField = "* Pflichtfelder";
	    this.pwNotEqual = "Passwörter stimmen nicht überein";
	    this.pwWrongEmail = "Formato email errato."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

		this.userAlreadyReg = "Bereits registrierter Benutzer";
		this.userRemoved = "Utente eliminato dal sistema. Grazie per aver usato la nostra app.";
	    this.nackToken = "Token nicht erlaubt";
	    
	    // privacy marketing push label
	    this.checkPrivacy = "Annahme der obligatorischen Privatsphäre";
	    this.labelPrivacy = "Ich autorisiere die <a href=\"#pages9\"> Verarbeitung meiner persönlichen Daten </a> gemäß gesetzesvertretendem Dekret vom 30. Juni 2003, Nr. 196 \"Kodex zum Schutz personenbezogener Daten\" und der DSGVO (EU-Verordnung 2016/679). ";
	    this.labelMarketing = "Ich bin damit einverstanden, Marketing-Mitteilungen von KATO IMER zu erhalten";
	    this.labelPush = "Ich stimme zu, Push-Benachrichtigungen auf meinem Gerät zu erhalten";
	    this.codeIubendaPrivacy = "86163521";
	}


	this.setSpanish = function() {

		// label menu
		this.menu0 = "Home";
		this.menu1 = "Catálogo";
		this.menu2 = "KATO IMER";
		this.menu3 = "MA.MO.T.";
		this.menu4 = "Distribuidores/Talleres";
		this.menu5 = "Noticias";
		this.menu6 = "FAQ";
		this.menu7 = "Contactos";
		this.menu8 = "Soporte";
		this.menu9 = "YouTube";
		this.menu10 = "Perfil de usuario";
		this.menu11 = "Cerrar sesión";

		// pagina login
	    this.logiBtLabel = "Entrar";
	    this.registerBtLabel= "Registro";
	    this.fbBtLabel = "Entrar con Facebook";
	    this.gplusBtLabel = "Entrar con Google+";
	    this.newRegisterBtLabel= "Nuevo registro";

		// registrazione
		this.labelOspite = "ospite";
		this.labelProprietario = "proprietario";

		this.ownerAlertLabel = "El usuario propietario solo estará activo después de verificar KATO IMER...";
		this.errorNoModels = "Ninguna máquina insertado";

		this.btLabelRegOspite = "Registrami come ospite";
		this.btLabelRegProprietario = "Registrami come proprietario";
		this.btLabelUpdateOspite = "Aggiornamento ospite";
		this.btLabelUpdateProprietario = "Aggiornamento proprietario";
		this.btLabelUpgradeProprietario = "Upgrade to owner";

		this.btLabelRemoveUser = "Rimuovi il mio account";

	    this.nameReg = "Nombre";
	    this.emailReg = "Email";
	    this.pwReg = "Contraseña";
	    this.pw2Reg = "Repetir contraseña";
	    this.telReg = "Tel.";

	    this.titleMacchinari = "Máquinas en tu posesión";
	    this.labelModelMacchinari = "Modelo";
	    this.labelSerialMacchinari = "Num. Serial";
	    this.labelBtAggiungi = "Agregar";
	    
	    // home
	    this.btSearchDealer = "Búsqueda Distribuidores/Talleres";

	    // dealers/officine
	    this.btLabelDealer = "Distribuidor";
	    this.btLabelDealers = "Distribuidores";
	    this.btLabelOfficina = "Taller";
	    this.btLabelOfficine = "Talleres";

	    // lista catalogo
	    this.titCatalogo= "Catálogo";

	    //dettaglio catalogo
	    this.labelBtBrochure = "Brochure";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtSchedatecnica = "Scheda tecnica";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtManuale = "Richiedi manuale operatore";   // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    // lista news
	    this.titNews= "News";

	    // assistenza
	    this.titlePageHelp= "Inviaci la tua richiesta";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.oggettoForm= "Oggetto";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.textForm= "Testo richiesta";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btHelp= "Invia richiesta";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelObbligatori= "* campi obbligatori";  // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    //katoimer
	    this.titKato = "";
	    this.textKato = "<p>En noviembre de 2016, la multinacional japonesa KATO WORKS CO., LTD. y la conglomerada japonesa IHI Corporation Ltd. (IHI) firmaron un acuerdo para el traspaso del 100% de las acciones de IHI Construction Machinery Ltd., (IK) de IHI a KATO. Desde enero de 2017, IK, que controlaba el 51% de IHIMER S.p.A., con sede en Italia, en San Gimignano (el 49%, en cambio segu&iacute;a posey&eacute;ndolo IMER GROUP S.p.A.), cambi&oacute; su raz&oacute;n social, pasando a ser KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Desde el 17 de febrero de 2017, IHIMER S.p.A. cambi&oacute; su raz&oacute;n social, pasando a ser KATO IMER S.p.A. El coloso jap&oacute;nes KATO WORKS produce una amplia gama de m&aacute;quinas para la construcci&oacute;n y est&aacute; activa en el sector desde 1895; ha decidido invertir en Europa, convencido de la centralidad del mercado, en colaboraci&oacute;n con la italiana Imer Group, l&iacute;der europeo en la producci&oacute;n de m&aacute;quinas para la construcci&oacute;n y equipos de hormig&oacute;n. KATO IMER produce en Italia miniexcavadoras con tecnolog&iacute;a KATO, cargadores de direcci&oacute;n deslizantes y d&uacute;mperes de orugas; distribuye miniexcavadoras y transportadores de orugas producidos en Jap&oacute;n por KATO HICOM. Las miniexcavadoras cubren una gama que va de 0,9 a 8,5 toneladas, short-tail, tradicionales y giratorias. Los cargadores de direcci&oacute;n deslizantes con carga operativa de 400 a 2500 kg y con orugas. Los d&uacute;mperes se subdividen en dos clases: los mini-d&uacute;mperes, con carga operativa de 400 a 2500 kg, para el sector de la construcci&oacute;n y los viveros; los d&uacute;mperes con cargas operativas comprendidas entre 3000 y 11000 kg usados en la ingenier&iacute;a civil y en la construcci&oacute;n de infraestructuras. El establecimiento de KATO IMER en San Gimignano, en la provincia de Siena, se extiende sobre una superficie de m&aacute;s de 36.000 metros cuadrados. La constante b&uacute;squeda de innovaci&oacute;n y la continua actividad de proyecci&oacute;n permiten a la sociedad desarrollar m&aacute;quinas a la vanguardia y que responden perfectamente a las necesidades del mercado. Los productos KATO IMER se comercializan gracias a una red de m&aacute;s de 100 distribuidores y revendedores, que cubre de manera uniforme todos los principales Pa&iacute;ses europeos y algunos m&aacute;s en los 5 continentes. Para las l&iacute;neas skid (cargadores de direcci&oacute;n) y minid&uacute;mper ya se ha puesto en marcha una red de distribuci&oacute;n a nivel mundial.</p>"

	    //MA.MO.T.
	    this.titMamot = "Ampliación de la garantía";
	    this.textMamot = "<p><strong>Máxima tranquilidad</strong></p><p>Para tener siempre la máxima tranquilidad, incluso después del vencimiento de la garantía convencional (1er año), es suficiente con pedir al concesionario KATO IMER de confianza la información sobre el programa de extensión de la garantía MA.MO.T. y trabajar con total seguridad y tranquilidad hasta un máximo de 5 años desde la compra. Gracias a la seguridad de poderse valer durante muchos años de la experiencia de técnicos autorizados y repuestos originales, las máquinas KATO IMER evidentemente se revelarán una excelente inversión.</p><p><strong>Una amplia gama de posibilidades</strong></p><p>La cobertura de seguro MA.MO.T. se puede comprar para todas las máquinas nuevas. Se puede trabajar sin preocupaciones y protegidos de los riesgos de tener que sufragar gastos derivados de reparaciones imprevistas.</p><p><strong>La cobertura anual</strong></p><p>El programa MA.MO.T. permite hacer reparar las averías de naturaleza eléctrica, hidráulica y/o mecánica, causadas por rotura imprevista y accidental de uno o varios componentes.</p><p><strong>Centros de Asistencia autorizados KATO IMER</strong></p><p>El servicio de garantía es válido y se reconoce en todos los Centros de Asistencia autorizados KATO IMER.</p><p>Todas las condiciones de garantía están contenidas en la póliza de seguros.</p>";

	    //contatti
	    this.txtContatti = "<strong>Oficinas Centrales, Ventas y Planta</strong><br/>53037 Loc. Cusona <br/>San Gimignano (SI) - Italy<br/><br/><hr/><br/>Phone: <a href='tel:+39 0577 951 21' >+39 0577 951 21</a><br/>Fax: +39 0577 982 400<br/>info@katoimer.com<br/><br/><hr/><br/><strong>Ventas:</strong><br/>marketing@katoimer.com<br/><strong>Servicio:</strong><br/>service@katoimer.com<br/><strong>Partes:</strong><br/>parts@katoimer.com<br/><br/><br/>";
	
		// messaggi richieste ajax/check form
		this.nackDatabase = "Error on Database request";
		this.nackPrepareQuery = "Errore preparazione Query";
	    this.sendAjax = "Enviando pedido...";
	    this.ackAjaxRequest = "Solicitud enviada correctamente";
	    this.nackAjaxRequest = "Errore enviando solicitud";
	    this.ackAjaxIscritto = "Subscrición ";
	    this.ackAjaxUpdate = "Modifica effettuata correttamente";
	    this.nackAjax001 = "Internal error COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Internal error COD: 002"; // errore sending ajax request
	    this.emptyField = "* Campos requeridos";
	    this.pwNotEqual = "Las contraseñas no son iguales";
	    this.pwWrongEmail = "Formato email errato."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

	    this.userAlreadyReg = "Usuario ya registrado";
	    this.userRemoved = "Utente eliminato dal sistema. Grazie per aver usato la nostra app.";
	    this.nackToken = "Token no permitido";
	    
	    // privacy marketing push label
	    this.checkPrivacy = "Accettazione Privacidad obbligatoria";
	    this.labelPrivacy = "Autorizo el <a href=\"#pages9\"> procesamiento de mis datos personales </a> de conformidad con el Decreto Legislativo del 30 de junio de 2003, n. 196 \"Código relativo a la protección de datos personales\" y el GDPR (Reglamento UE 2016/679). ";
	    this.labelMarketing = "Acepto recibir marketing informativo de KATO IMER";
	    this.labelPush = "Acepto recibir notificaciones push en mi dispositivo";
	    this.codeIubendaPrivacy = "76458544";
	}

	this.setFrench = function() {

		// label menu
		this.menu0 = "Accueil";
		this.menu1 = "Catalogue";
		this.menu2 = "KATO IMER";
		this.menu3 = "MA.MO.T.";
		this.menu4 = "Revendeurs/Ateliers";
		this.menu5 = "Nouvelles";
		this.menu6 = "FAQ";
		this.menu7 = "Contacts";
		this.menu8 = "Support";
		this.menu9 = "YouTube";
		this.menu10 = "Profil de l'utilisateur";
		this.menu11 = "Déconnexion";

		// pagina login
	    this.logiBtLabel = "Entrèe";
	    this.registerBtLabel= "Registre";
	    this.fbBtLabel = "Se connecter avec Facebook";
	    this.gplusBtLabel = "Se connecter avec Google+";
	    this.newRegisterBtLabel= "Nouvelle inscription";
	    	    
		// registrazione
		this.labelOspite = "ospite";
		this.labelProprietario = "proprietario";

		this.ownerAlertLabel = "L'utilisateur propriétaire ne sera actif qu'après avoir vérifié KATO IMER...";
		this.errorNoModels = "Aucune machine insérée";

		this.btLabelRegOspite = "Registrami come ospite";
		this.btLabelRegProprietario = "Registrami come proprietario";
		this.btLabelUpdateOspite = "Aggiornamento ospite";
		this.btLabelUpdateProprietario = "Aggiornamento proprietario";
		this.btLabelUpgradeProprietario = "Upgrade to owner";

		this.btLabelRemoveUser = "Rimuovi il mio account";

	    this.nameReg = "Prenom";
	    this.emailReg = "Email";
	    this.pwReg = "Password";
	    this.pw2Reg = "Répétez Password";
	    this.telReg = "Tél.";

	    this.titleMacchinari = "Machines en votre possession";
	    this.labelModelMacchinari = "Modèle";
	    this.labelSerialMacchinari = "Numéro de série";
	    this.labelBtAggiungi = "Ajouter";

	    // home
	    this.btSearchDealer = "Rechercher Revendeurs/Ateliers";

	    // dealers/officine
	    this.btLabelDealer = "Revendeur";
	    this.btLabelDealers = "Revendeurs";
	    this.btLabelOfficina = "Atelier";
	    this.btLabelOfficine = "Ateliers";

	    // lista catalogo
	    this.titCatalogo= "Catalogue";

	    //dettaglio catalogo
	    this.labelBtBrochure = "Brochure";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtSchedatecnica = "Scheda tecnica";   // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelBtManuale = "Richiedi manuale operatore";   // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    // lista news
	    this.titNews= "News";

	    // assistenza
	    this.titlePageHelp= "Inviaci la tua richiesta";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.oggettoForm= "Oggetto";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.textForm= "Testo richiesta";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.btHelp= "Invia richiesta";  // NEWWWWWWWWWWWWWWWWWWWWWWWW
	    this.labelObbligatori= "* campi obbligatori";  // NEWWWWWWWWWWWWWWWWWWWWWWWW

	    //katoimer
	    this.titKato = "";
	    this.textKato = "<p>En novembre 2016, la multinationale japonaise KATO WORKS CO., LTD. et le conglom&eacute;rat japonais IHI Corporation Ltd. ont sign&eacute; un accord pour le transfert de 100 % des actions de la soci&eacute;t&eacute; IHI Construction Machinery Ltd., (IK) de IHI &agrave; KATO. Depuis janvier 2017 la soci&eacute;t&eacute; IK, qui contr&ocirc;lait 51 % de la soci&eacute;t&eacute; IHIMER S.p.A. avec son si&egrave;ge en Italie &agrave; San Gimignano (49 % continue en revanche &agrave; &ecirc;tre d&eacute;tenu par la soci&eacute;t&eacute; IMER GROUP S.p.A.), elle a modifi&eacute; sa raison sociale en KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Depuis le 17 f&eacute;vrier 2017, IHIMER S.p.A. a modifi&eacute; sa raison sociale en KATO IMER S.p.A. Le colosse japonais KATO WORKS produit une vaste gamme de machines pour la construction et active dans le secteur depuis 1895, il a d&eacute;cid&eacute; d&rsquo;investir en Europe convaincu de l&rsquo;importance du march&eacute;, en collaboration avec la soci&eacute;t&eacute; italienne Imer Group, leader europ&eacute;en dans la production de machines pour le b&acirc;timent et les installations de b&eacute;ton. KATO IMER produit en Italie des mini-pelles m&eacute;caniques &agrave; technologie KATO, skid-loader et dumper &agrave; chenilles ; distribue des mini-pelles m&eacute;caniques et crawler carrier produits au Japon par KATO HICOM. Les mini-pelles m&eacute;caniques couvrent une gamme allant de 0,9 &agrave; 8,5 tonnes, short-tail, traditionnelles et sans d&eacute;port arri&egrave;re. Les skid-loader &agrave; pneus avec un chargement op&eacute;rationnel de 400 &agrave; 2500 kg et &agrave; chenilles. Les dumpers se divisent en deux classes : les mini-dumpers, avec une charge op&eacute;rationnelle de 400 &agrave; 2500 kg, pour les restructurations et les p&eacute;pini&egrave;res ; les dumpers avec des charges op&eacute;rationnelles comprises entre 3000 et 11 000 kg utilis&eacute;s dans le g&eacute;nie civil et dans la construction d&rsquo;infrastructures. L&rsquo;&eacute;tablissement de KATO IMER &agrave; San Gimignano, dans la province de Sienne, s&rsquo;&eacute;tend sur une surface de plus de 36 000 m<sup>2</sup>. La recherche constante d&rsquo;innovation et l&rsquo;activit&eacute; continue de conception permettent &agrave; la soci&eacute;t&eacute; de d&eacute;velopper des machines &agrave; l&rsquo;avant-garde et parfaitement conformes aux exigences du march&eacute;. Les produits KATO IMER sont commercialis&eacute;s gr&acirc;ce &agrave; un r&eacute;seau de plus de 100 distributeurs et revendeurs qui couvre en mode uniforme tous les principaux pays europ&eacute;ens et d&rsquo;autres encore sur les 5 continents. Un r&eacute;seau de distribution a d&eacute;j&agrave; &eacute;t&eacute; d&eacute;marr&eacute; au niveau mondial pour les lignes skid et minidumper.</p>";

	    //MA.MO.T.
	    this.titMamot = "L&rsquo;extension de garantie";
	    this.textMamot = "</p><p><strong>S&eacute;r&eacute;nit&eacute; maximale</strong></p><p>Pour &ecirc;tre toujours en totale s&eacute;r&eacute;nit&eacute;, m&ecirc;me apr&egrave;s l&rsquo;&eacute;ch&eacute;ance de la garantie conventionnelle (1&egrave;re ann&eacute;e), il suffit de demander &agrave; son concessionnaire KATO IMER de confiance les informations concernant le programme d&rsquo;extension de la garantie MA.MO.T. et travailler en totale s&eacute;curit&eacute; et tranquillit&eacute; jusqu&rsquo;&agrave; 5 ans maximum &agrave; partir de l&rsquo;achat. Gr&acirc;ce &agrave; la s&eacute;curit&eacute; de pouvoir b&eacute;n&eacute;ficier pendant de nombreuses ann&eacute;es de l&rsquo;exp&eacute;rience de techniciens autoris&eacute;s et de pi&egrave;ces de rechange originales, les machines KATO IMER se r&eacute;v&eacute;leront certainement un parfait investissement.</p><p><strong>Une vaste gamme de possibilit&eacute;s</strong></p><p>La couverture d&rsquo;assurance MA.MO.T. peut &ecirc;tre acquise pour toutes les machines neuves. Il est possible de travailler sans pr&eacute;occupations et prot&eacute;g&eacute;s des risques de devoir soutenir des d&eacute;penses caus&eacute;es par des r&eacute;parations impr&eacute;vues.</p><p><strong>La couverture annuelle</strong></p><p>Le programme MA.MO.T. permet de faire r&eacute;parer les pannes de nature &eacute;lectrique, hydraulique et/ou m&eacute;canique, caus&eacute;es par une rupture soudaine et accidentelle d&rsquo;un ou plusieurs composants.</p><p><strong>Centres d&rsquo;Assistance autoris&eacute;s KATO IMER </strong></p><p>Le service de garantie est valide et il est reconnu aupr&egrave;s de tous les Centres d&rsquo;Assistance autoris&eacute;s KATO IMER. Toutes les conditions de garantie sont contenues dans la police d&rsquo;assurance.</p>";

	    //contatti
	    this.txtContatti = "<strong>Head Offices, Sales and Plant</strong><br/>53037 Loc. Cusona <br/>San Gimignano (SI) - Italy<br/><br/><hr/><br/>Phone: <a href='tel:+39 0577 951 21' >+39 0577 951 21</a><br/>Fax: +39 0577 982 400<br/>info@katoimer.com<br/><br/><hr/><br/><strong>Sales:</strong><br/>marketing@katoimer.com<br/><strong>Service:</strong><br/>service@katoimer.com<br/><strong>Parts:</strong><br/>parts@katoimer.com<br/><br/><br/>";

		// messaggi richieste ajax/check form 
		this.nackDatabase = "Error on Database request";
		this.nackPrepareQuery = "Errore preparazione Query";
	    this.sendAjax = "Envoyer une requete...";
	    this.ackAjaxRequest = "Demande correctement envoyée";
	    this.nackAjaxRequest = "Erreur demande d'envoi";
	    this.ackAjaxIscritto = "Abonnement ";
	    this.ackAjaxUpdate = "Modifica effettuata correttamente";
	    this.nackAjax001 = "Internal error COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Internal error COD: 002"; // errore sending ajax request
	    this.emptyField = "* Champs obligatoires";
	    this.pwNotEqual = "Passwords ne correspondent pas";
	    this.pwWrongEmail = "Formato email errato."; // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

	    this.userAlreadyReg = "Utilisateur déjà enregistré";
	    this.userRemoved = "Utente eliminato dal sistema. Grazie per aver usato la nostra app.";
	    this.nackToken = "Jeton non autorisé";
	    
	    // privacy marketing push label
	    this.checkPrivacy = "Acceptation de la confidentialité obligatoire";
	    this.labelPrivacy = "J'autorise le <a href=\"#pages9\"> traitement de mes données personnelles </a> conformément au décret-loi du 30 juin 2003, n. 196 \"Code concernant la protection des données personnelles\" et le GDPR (Règlement de l'UE 2016/679). ";
	    this.labelMarketing = "J'accepte de recevoir des communications marketing de KATO IMER";
	    this.labelPush = "J'accepte de recevoir des notifications push sur mon appareil";
	    this.codeIubendaPrivacy = "85846522";
	}

}