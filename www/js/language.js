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
	    
		// registrazione
		this.ownerAlertLabel = "L'utente proprietario sarà attivo solo previo controllo di KATO IMER...";
		this.errorNoModels = "Nessuna macchina inserita";

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

	    // lista catalogo
	    this.titCatalogo= "Catalogo";

	    //dettaglio catalogo

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
	    this.ackAjaxIscritto = "Iscrizione effettuata correttamente";
	    this.nackAjax001 = "Errore interno COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Errore interno COD: 002"; // errore sending ajax request
	    this.emptyField = "I campi * non possono essere vuoti.";
	    this.pwNotEqual = "Le password non coincidono.";

	    this.userAlreadyReg = "Utente già registrato";
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
		this.ownerAlertLabel = "The owner user will be active only upon verification by KATO IMER...";
		this.errorNoModels = "No machine inserted";

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

	    // lista catalogo

	    this.titCatalogo= "Catalogue";

	    //dettaglio catalogo

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
	    this.ackAjaxIscritto = "Subscription ";
	    this.nackAjax001 = "Internal error COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Internal error COD: 002"; // errore sending ajax request
	    this.emptyField = "* Required fields";
	    this.pwNotEqual = "Passwords do not match";

	    this.userAlreadyReg = "Already registered user";
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
		this.ownerAlertLabel = "Der Besitzerbenutzer ist nur aktiv, nachdem er KATO IMER überprüft hat...";
		this.errorNoModels = "Keine Maschine eingesetzt";

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

	    // lista catalogo
	    this.titCatalogo= "Katalog";

	    //dettaglio catalogo

	    //katoimer
	    this.titKato = "";
	    this.textKato = "<p>A Novembre 2016, la multinazionale giapponese KATO WORKS CO., LTD. e la conglomerata giapponese IHI Corporation Ltd. (IHI) hanno siglato un accordo per il trasferimento del 100% delle azioni della IHI Construction Machinery Ltd., (IK) da IHI a KATO. Da gennaio 2017 la IK, che controllava il 51% della IHIMER S.p.A. con sede in Italia a San Gimignano (il 49% continua invece ad essere detenuto da IMER GROUP S.p.A.), ha mutato la propria ragione sociale in KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Dal 17 febbraio 2017, IHIMER S.p.A. ha variato la propria ragione sociale in KATO IMER S.p.A.</p><p>Il colosso giapponese KATO WORKS&nbsp;produce una vasta gamma di macchine per costruzione ed &egrave;&nbsp;attiva nel settore dal 1895, ha deciso di investire in Europa convinto della centralit&agrave; del mercato, in collaborazione con l&rsquo;italiana Imer Group, leader europeo nella produzione di macchine per l&rsquo;edilizia e impianti di calcestruzzo.</p><p>KATO IMER produce in Italia miniescavatori a tecnologia KATO, skid-loader e dumper cingolati; distribuisce miniescavatori e crawler carrier prodotti in Giappone da KATO HICOM.</p><p>I miniescavatori, coprono una gamma che va da 0,9 a 8,5 tonnellate, short-tail, tradizionali e girosagoma.</p><p>Gli skid-loader gommati con carico operativo da 400 a 2500 kg e cingolati. I dumper si suddividono in due classi: i mini dumper, con carico operativo da 400 a 2500 kg, per ristrutturazioni e vivaistica; i dumper con carichi operativi compresi tra 3000 e 11000 kg usati nel genio civile e nella costruzione di infrastrutture.</p><p>Lo stabilimento di KATO IMER a San Gimignano, in provincia di Siena, si estende su una superficie di oltre 36mila metri quadrati. La costante ricerca di innovazione e la continua attivit&agrave; di progettazione permettono alla societ&agrave; di sviluppare macchine all&rsquo;avanguardia e perfettamente rispondenti alle esigenze di mercato.</p><p>I prodotti KATO IMER vengono commercializzati grazie a una rete di oltre 100 distributori e rivenditori, che copre in modo uniforme tutti i principali Paesi europei e altri ancora nei 5 continenti. Per le linee skid e minidumper &egrave; stato gi&agrave; avviato un network di distribuzione a livello mondiale.</p>";

	    //MA.MO.T.
	    this.titMamot = "L'estensione di garanzia";
	    this.textMamot = "<p><strong>Massima serenità</strong></p><p>Per avere sempre la massima serenit&agrave; anche dopo la scadenza della garanzia convenzionale (1&deg; anno), &egrave; sufficiente chiedere al concessionario KATO IMER di fiducia le informazioni sul programma di estensione della garanzia MA.MO.T. e lavorare in totale sicurezza e tranquillit&agrave; fino a un massimo di 5 anni dall&rsquo;acquisto. Grazie alla sicurezza di potersi avvalere per molti anni dell&rsquo;esperienza di tecnici autorizzati e di ricambi originali, le macchine KATO IMER si riveleranno certamente un ottimo investimento.</p><p><strong>Un'ampia gamma di possibilità</strong></p><p>La copertura assicurativa MA.MO.T. &egrave; acquistabile per tutte le macchine nuove. &Egrave; possibile lavorare senza preoccupazioni e protetti dai rischi di dover sostenere spese derivanti da riparazioni impreviste.</p><p><strong>La copertura annuale</strong></p><p>Il programma MA.MO.T. consente di far riparare i guasti di natura elettrica, idraulica e/o meccanica, causati da rottura improvvisa e accidentale di uno o pi&ugrave; componenti.</p><p><strong>Centri Assistenza autorizzati KATO IMER</strong></p><p>Il servizio di garanzia &egrave; valido e viene riconosciuto presso tutti i Centri di Assistenza autorizzati KATO IMER.</p><p>Tutte le condizioni di garanzia sono contenute nella polizza assicurativa.</p>";

	    //contatti
	    this.txtContatti = "<strong>Head Offices, Sales and Plant</strong><br/>53037 Loc. Cusona <br/>San Gimignano (SI) - Italy<br/><br/><hr/><br/>Phone: <a href='tel:+39 0577 951 21' >+39 0577 951 21</a><br/>Fax: +39 0577 982 400<br/>info@katoimer.com<br/><br/><hr/><br/><strong>Sales:</strong><br/>marketing@katoimer.com<br/><strong>Service:</strong><br/>service@katoimer.com<br/><strong>Parts:</strong><br/>parts@katoimer.com<br/><br/><br/>";

		// messaggi richieste ajax/check form
		this.nackDatabase = "Error on Database request";
		this.nackPrepareQuery = "Errore preparazione Query";
	    this.sendAjax = "Sending request...";
	    this.ackAjaxRequest = "Request correctly sended";
	    this.ackAjaxIscritto = "Abonnement ";
	    this.nackAjax001 = "Internal error COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Internal error COD: 002"; // errore sending ajax request
	    this.emptyField = "* Pflichtfelder";
	    this.pwNotEqual = "Passwörter stimmen nicht überein";

		this.userAlreadyReg = "Bereits registrierter Benutzer";
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
		this.ownerAlertLabel = "El usuario propietario solo estará activo después de verificar KATO IMER...";
		this.errorNoModels = "Ninguna máquina insertado";

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

	    // lista catalogo
	    this.titCatalogo= "Catálogo";

	    //dettaglio catalogo

	    //katoimer
	    this.titKato = "";
	    this.textKato = "<p>A Novembre 2016, la multinazionale giapponese KATO WORKS CO., LTD. e la conglomerata giapponese IHI Corporation Ltd. (IHI) hanno siglato un accordo per il trasferimento del 100% delle azioni della IHI Construction Machinery Ltd., (IK) da IHI a KATO. Da gennaio 2017 la IK, che controllava il 51% della IHIMER S.p.A. con sede in Italia a San Gimignano (il 49% continua invece ad essere detenuto da IMER GROUP S.p.A.), ha mutato la propria ragione sociale in KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Dal 17 febbraio 2017, IHIMER S.p.A. ha variato la propria ragione sociale in KATO IMER S.p.A.</p><p>Il colosso giapponese KATO WORKS&nbsp;produce una vasta gamma di macchine per costruzione ed &egrave;&nbsp;attiva nel settore dal 1895, ha deciso di investire in Europa convinto della centralit&agrave; del mercato, in collaborazione con l&rsquo;italiana Imer Group, leader europeo nella produzione di macchine per l&rsquo;edilizia e impianti di calcestruzzo.</p><p>KATO IMER produce in Italia miniescavatori a tecnologia KATO, skid-loader e dumper cingolati; distribuisce miniescavatori e crawler carrier prodotti in Giappone da KATO HICOM.</p><p>I miniescavatori, coprono una gamma che va da 0,9 a 8,5 tonnellate, short-tail, tradizionali e girosagoma.</p><p>Gli skid-loader gommati con carico operativo da 400 a 2500 kg e cingolati. I dumper si suddividono in due classi: i mini dumper, con carico operativo da 400 a 2500 kg, per ristrutturazioni e vivaistica; i dumper con carichi operativi compresi tra 3000 e 11000 kg usati nel genio civile e nella costruzione di infrastrutture.</p><p>Lo stabilimento di KATO IMER a San Gimignano, in provincia di Siena, si estende su una superficie di oltre 36mila metri quadrati. La costante ricerca di innovazione e la continua attivit&agrave; di progettazione permettono alla societ&agrave; di sviluppare macchine all&rsquo;avanguardia e perfettamente rispondenti alle esigenze di mercato.</p><p>I prodotti KATO IMER vengono commercializzati grazie a una rete di oltre 100 distributori e rivenditori, che copre in modo uniforme tutti i principali Paesi europei e altri ancora nei 5 continenti. Per le linee skid e minidumper &egrave; stato gi&agrave; avviato un network di distribuzione a livello mondiale.</p>";

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
	    this.ackAjaxIscritto = "Subscrición ";
	    this.nackAjax001 = "Internal error COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Internal error COD: 002"; // errore sending ajax request
	    this.emptyField = "* Campos requeridos";
	    this.pwNotEqual = "Las contraseñas no son iguales";

	    this.userAlreadyReg = "Usuario ya registrado";
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
		this.ownerAlertLabel = "L'utilisateur propriétaire ne sera actif qu'après avoir vérifié KATO IMER...";
		this.errorNoModels = "Aucune machine insérée";

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

	    // lista catalogo
	    this.titCatalogo= "Catalogue";

	    //dettaglio catalogo

	    //katoimer
	    this.titKato = "";
	    this.textKato = "<p>A Novembre 2016, la multinazionale giapponese KATO WORKS CO., LTD. e la conglomerata giapponese IHI Corporation Ltd. (IHI) hanno siglato un accordo per il trasferimento del 100% delle azioni della IHI Construction Machinery Ltd., (IK) da IHI a KATO. Da gennaio 2017 la IK, che controllava il 51% della IHIMER S.p.A. con sede in Italia a San Gimignano (il 49% continua invece ad essere detenuto da IMER GROUP S.p.A.), ha mutato la propria ragione sociale in KATO HEAVY INDUSTRIES CONSTRUCTION MACHINERY CO.,LTD. (KATO HICOM). Dal 17 febbraio 2017, IHIMER S.p.A. ha variato la propria ragione sociale in KATO IMER S.p.A.</p><p>Il colosso giapponese KATO WORKS&nbsp;produce una vasta gamma di macchine per costruzione ed &egrave;&nbsp;attiva nel settore dal 1895, ha deciso di investire in Europa convinto della centralit&agrave; del mercato, in collaborazione con l&rsquo;italiana Imer Group, leader europeo nella produzione di macchine per l&rsquo;edilizia e impianti di calcestruzzo.</p><p>KATO IMER produce in Italia miniescavatori a tecnologia KATO, skid-loader e dumper cingolati; distribuisce miniescavatori e crawler carrier prodotti in Giappone da KATO HICOM.</p><p>I miniescavatori, coprono una gamma che va da 0,9 a 8,5 tonnellate, short-tail, tradizionali e girosagoma.</p><p>Gli skid-loader gommati con carico operativo da 400 a 2500 kg e cingolati. I dumper si suddividono in due classi: i mini dumper, con carico operativo da 400 a 2500 kg, per ristrutturazioni e vivaistica; i dumper con carichi operativi compresi tra 3000 e 11000 kg usati nel genio civile e nella costruzione di infrastrutture.</p><p>Lo stabilimento di KATO IMER a San Gimignano, in provincia di Siena, si estende su una superficie di oltre 36mila metri quadrati. La costante ricerca di innovazione e la continua attivit&agrave; di progettazione permettono alla societ&agrave; di sviluppare macchine all&rsquo;avanguardia e perfettamente rispondenti alle esigenze di mercato.</p><p>I prodotti KATO IMER vengono commercializzati grazie a una rete di oltre 100 distributori e rivenditori, che copre in modo uniforme tutti i principali Paesi europei e altri ancora nei 5 continenti. Per le linee skid e minidumper &egrave; stato gi&agrave; avviato un network di distribuzione a livello mondiale.</p>";

	    //MA.MO.T.
	    this.titMamot = "L'estensione di garanzia";
	    this.textMamot = "<p><strong>Massima serenità</strong></p><p>Per avere sempre la massima serenit&agrave; anche dopo la scadenza della garanzia convenzionale (1&deg; anno), &egrave; sufficiente chiedere al concessionario KATO IMER di fiducia le informazioni sul programma di estensione della garanzia MA.MO.T. e lavorare in totale sicurezza e tranquillit&agrave; fino a un massimo di 5 anni dall&rsquo;acquisto. Grazie alla sicurezza di potersi avvalere per molti anni dell&rsquo;esperienza di tecnici autorizzati e di ricambi originali, le macchine KATO IMER si riveleranno certamente un ottimo investimento.</p><p><strong>Un'ampia gamma di possibilità</strong></p><p>La copertura assicurativa MA.MO.T. &egrave; acquistabile per tutte le macchine nuove. &Egrave; possibile lavorare senza preoccupazioni e protetti dai rischi di dover sostenere spese derivanti da riparazioni impreviste.</p><p><strong>La copertura annuale</strong></p><p>Il programma MA.MO.T. consente di far riparare i guasti di natura elettrica, idraulica e/o meccanica, causati da rottura improvvisa e accidentale di uno o pi&ugrave; componenti.</p><p><strong>Centri Assistenza autorizzati KATO IMER</strong></p><p>Il servizio di garanzia &egrave; valido e viene riconosciuto presso tutti i Centri di Assistenza autorizzati KATO IMER.</p><p>Tutte le condizioni di garanzia sono contenute nella polizza assicurativa.</p>";

	    //contatti
	    this.txtContatti = "<strong>Head Offices, Sales and Plant</strong><br/>53037 Loc. Cusona <br/>San Gimignano (SI) - Italy<br/><br/><hr/><br/>Phone: <a href='tel:+39 0577 951 21' >+39 0577 951 21</a><br/>Fax: +39 0577 982 400<br/>info@katoimer.com<br/><br/><hr/><br/><strong>Sales:</strong><br/>marketing@katoimer.com<br/><strong>Service:</strong><br/>service@katoimer.com<br/><strong>Parts:</strong><br/>parts@katoimer.com<br/><br/><br/>";

		// messaggi richieste ajax/check form 
		this.nackDatabase = "Error on Database request";
		this.nackPrepareQuery = "Errore preparazione Query";
	    this.sendAjax = "Envoyer une requete...";
	    this.ackAjaxRequest = "Demande correctement envoyée";
	    this.ackAjaxIscritto = "Abonnement ";
	    this.nackAjax001 = "Internal error COD: 001"; // errore sending ajax request
	    this.nackAjax002 = "Internal error COD: 002"; // errore sending ajax request
	    this.emptyField = "* Champs obligatoires";
	    this.pwNotEqual = "Passwords ne correspondent pas";

	    this.userAlreadyReg = "Utilisateur déjà enregistré";
	    this.nackToken = "Jeton non autorisé";
	    
	    // privacy marketing push label
	    this.checkPrivacy = "Acceptation de la confidentialité obligatoire";
	    this.labelPrivacy = "J'autorise le <a href=\"#pages9\"> traitement de mes données personnelles </a> conformément au décret-loi du 30 juin 2003, n. 196 \"Code concernant la protection des données personnelles\" et le GDPR (Règlement de l'UE 2016/679). ";
	    this.labelMarketing = "J'accepte de recevoir des communications marketing de KATO IMER";
	    this.labelPush = "J'accepte de recevoir des notifications push sur mon appareil";
	    this.codeIubendaPrivacy = "85846522";
	}

}