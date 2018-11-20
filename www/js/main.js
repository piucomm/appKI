var app = {

    // GOOGLE PUSH NOTIFICATION:  https://console.developers.google.com
    // Project ID: newpush-204215
    // Project number: 428188435311
    // API KEY: AIzaSyAOw5vMKvSQnjL9C-bgYqemE5RGMweRbdY

    initialize: function() {

        this.bindEvents();

        this.tokenAppKato = "sae45v4b64566(Ad3";

        this.mainMenu = Handlebars.compile($("#main-menu-tpl").html());
        this.mainHeader = Handlebars.compile($("#main-header").html());

        this.loginTpl = Handlebars.compile($("#login-tpl").html()); // pagina login
        this.registerTpl = Handlebars.compile($("#register-tpl").html()); // pagina registrazione
        this.homeTpl = Handlebars.compile($("#home-tpl").html()); // home page

        this.userTpl = Handlebars.compile($("#userprofile-tpl").html()); // profilo utente

        this.searchTpl = Handlebars.compile($("#search-tpl").html());
        this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
        this.employeeTpl = Handlebars.compile($("#details-dealer-tpl").html());

        this.staticPage1 = Handlebars.compile($("#page1").html());
        this.staticContactPage = Handlebars.compile($("#contactPage").html());
        this.staticPageFaq = Handlebars.compile($("#faqPage").html());
        this.staticAssistenzaPage = Handlebars.compile($("#assistenzaPage").html());

        this.catalogList = Handlebars.compile($("#cataloglist-tpl").html());

        this.categoryPage = Handlebars.compile($("#catalogPage").html());
        this.itemPage = Handlebars.compile($("#itemPage").html());

        this.newsList = Handlebars.compile($("#newslist-tpl").html());

        this.catNewsPage = Handlebars.compile($("#catnewsPage").html());
        this.newsPage = Handlebars.compile($("#newsPage").html());

        //REGEXP per routing
        this.detailsPage = /^#pages(\d{1,})/;
        this.detailsURL = /^#dealoff(\d{1,})/;
        this.catURL = /^#cat(\d{1,})/;
        this.itemURL = /^#item(\d{1,})/;
        this.prodURL = /^#prod(\d{1,})/;

        this.catnewsURL = /^#catnews(\d{1,})/;
        this.newsURL = /^#news(\d{1,})/;
        this.dettnewsURL = /^#dettnews(\d{1,})/;

        this.userPage = /^#userprofile/;

        this.mainMenuURL = /^#menu\//;
        this.mainMenuURLClose = /^#menuclose\//;

        this.typeOfItem = "dealers"; // dealers, officine
        this.sortOfItem = "distance"; // distance, alphabet
        this.viewOfItem = "list"; // list, map

        this.winHeight = 0;
        this.headerHeight = 0; // .header

        this.map = "";

        this.slideIndex = 1; // 0

        this.registerEvents();
        
    },


    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("offline", this.onOffline, false);
        document.addEventListener("online", this.onOnline, false);
        // document.addEventListener("pause", onPause, false);   when app goes in background...
    },

    // deviceready fires once Cordova has fully loaded.
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        app.setConn(); // inizializzo il network status

        app.db = window.openDatabase("CatalogDB", "1.0", "Kato Imer product DB", 200000); // inizializzo il local DB
        app.sqlStorage = new WebSqlStore();
        
        // inizializzo settaggi lingua
        localStorage.setItem("language", 'it-IT');
        navigator.globalization.getPreferredLanguage(
            function (language) { 
                localStorage.setItem("language", language.value);
                $("#"+language.value).addClass( "actual" );
            } , function () { localStorage.setItem("language", 'it-IT'); } // errore, setto l'italiano 
        );

        // window.FirebasePlugin.grantPermission(); // solo per IOS

        window.FirebasePlugin.getToken(function(token) {
        // save this server-side and use it to push notifications to this device
            console.log("FireBaseeeeeeeeeeeeeeeeeeeeee ok "+token);
        }, function(error) {
            console.error("FireBaseeeeeeeeeeeeeeeeeeeeee Error "+error);
        });

        window.FirebasePlugin.onNotificationOpen(function(notification) {
            if(localStorage.getItem("push") == 1){ // solo per Android
                app.showAlert(notification.body,"KATOIMER"); // solo per Android
            } // solo per Android
        }, function(error) {
            console.log("Notification error",error);
        });

        app.messages = new MessageTranslation(); // label traduzioni
        app.winHeight = $(window).height();
        app.dealerObj = new DealersOfficine(); // inizializzo l'oggetto per la classe dealers/officine
        app.renderHomeView();

    },

    renderHomeView: function(txtMessage) {
        
        app.setLanguage(localStorage.getItem('language')); // setto la lingua corrente

        app.catalog = new CatalogoItems();
        app.news = new NewsItems();

        if(localStorage.getItem('login') == 0 || localStorage.getItem('login') == null) { // il login in localStorage è false, devo fare il login se ho connessione...
            
            var contCookie = app.messages.contentCookie;

            if(localStorage.getItem('ackCookie') == 1){
                contCookie = "";
            }

            context ={ contentCookie: contCookie,
                buttonCookie: app.messages.buttonCookie,
                buttonClose: app.messages.buttonClose,
                labelBtLogin: app.messages.logiBtLabel,
                labelBtFb: app.messages.fbBtLabel,
                labelBtGplus: app.messages.gplusBtLabel,
                labelBtNewReg: app.messages.newRegisterBtLabel
            }
            $('body').html(this.loginTpl(context));

            $('#btAckCookie').on('click', function(){
                console.log("accetto i cookies");
                localStorage.setItem('ackCookie', 1);
                $('.cookieModal').hide();
            });

            $('#btNackCookie').on('click', function(){
                console.log("chiudi app");
                localStorage.setItem('ackCookie', 0);
                if (navigator.app) {
                        navigator.app.exitApp();
                } else if (navigator.device) {
                    navigator.device.exitApp();
                } else {
                    window.close();
                }
            });

            $('#btNewRegistration').on('click', this.renderRegisterView);
            $('#login').on('click', this.checkLogin);

            $('#btFbLogin').on('click', this.checkFbLogin);
            $('#btGplusLogin').on('click', this.checkGooglePlugin);

            $('#serviceMessageLogin').html(app.messages.labelObbligatori);

            $("#"+localStorage.getItem("language")).addClass( "actual" );
            app.setLanguage(localStorage.getItem("language")); // setto la lingua corrente

            $('#it-IT').on('click', this.changedLanguage);
            $('#en-EN').on('click', this.changedLanguage);
            $('#de-DE').on('click', this.changedLanguage);
            $('#fr-FR').on('click', this.changedLanguage);
            $('#es-ES').on('click', this.changedLanguage);
        } else {
            history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
            context = { labelBtRicerca: app.messages.menu4,
                labelBtAssistenza: app.messages.menu8,
                labelBtAreaUtente: app.messages.menu10,
                labelFlagHome: app.messages.labelFlagHome,
                labelBtCatalogueHome: app.messages.labelBtCatalogueHome,
                claimHome: app.messages.claimHome,
                txtMessage: txtMessage
            }

            $('body').html(this.homeTpl(context));

            this.initMenu(); // inizializzo il menu laterale

            contextH = { boolMenu: 1 };
            $('.header').html(this.mainHeader(contextH));

            app.headerHeight = $('.header').outerHeight();

            $('.homeBlock').innerHeight(app.winHeight - 100);
            $('.menu-lista').height(app.winHeight - 100); 

            $("#btSearchDealer").html(app.messages.btSearchDealer);
            
            // if(localStorage.getItem('isConn') == 1) { // se ho una connessione ad internet
            //     app.catalog.getListCatalog(localStorage.getItem( "language"), "ul.catalog-list", 0); // carico il catalogo nella lingua corrente
            // } else {
            //     //versione locale del catalogo
            //     app.db.transaction(this.getLocalCatalogHome);
            // }

        }

    },

    // getLocalCatalogHome: function(tx) {
    //     tx.executeSql("SELECT * FROM cats",[], app.getSuccessCatLocalHome, app.getErrorCatLocalHome);
    //     $('#serviceMessageRegisterHome').html("Ok. leggo i dati in locale.");
        
    // },

    // getSuccessCatLocalHome: function(tx,results) {
    //     $("#footer-button .preloader5").hide();
    //     app.catalog.getListCatalog(localStorage.getItem( "language"), "ul.catalog-list", 1, results);
    // },

    // getErrorCatLocalHome: function(tx,result) { 
    //     $("#footer-button .preloader5").hide();
    //     $('#serviceMessageRegisterHome').html("Errore lettura catalogo locale");
    // },

    renderRegisterView: function() {
        history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
        context = { messOwner: app.messages.ownerAlertLabel,
                    labelOspite: app.messages.labelOspite,
                    labelProprietario: app.messages.labelProprietario,
                    email: app.messages.emailReg,
                    password: app.messages.pwReg,
                    password2: app.messages.pw2Reg,
                    nome: app.messages.nameReg,
                    tel: app.messages.telReg,
                    titleMacchinari: app.messages.titleMacchinari,
                    labelModelMacchinari: app.messages.labelModelMacchinari,
                    labelSerialMacchinari: app.messages.labelSerialMacchinari,
                    labelBtAggiungi: app.messages.labelBtAggiungi,
                    labelPrivacy: app.messages.labelPrivacy,
                    labelMarketing: app.messages.labelMarketing,
                    labelPush: app.messages.labelPush,
                    btLabelRegOspite: app.messages.btLabelRegOspite,
                    btLabelRegProprietario:app.messages.btLabelRegProprietario
                };

        $('body').html(app.registerTpl(context));

        contextH = { pageName: app.messages.newRegisterBtLabel, backUrl: "#" };
        $(".header").html(app.mainHeader(contextH));
        $(".formOspite").show();
        $(".formProprietario").hide();
        $("#serviceMessageRegister .preloader5").hide();

        $('#btOspite').addClass("active");
        $('#btProprietario').removeClass("active");

        // add classe active su bottone scelta tipo di dato
        $('#btOspite').on('click', function(){
            $('#btProprietario').removeClass("active");
            $(this).addClass("active");
            $(".formOspite").show();
            $(".formProprietario").hide();
            // app.typeOfItem = "dealers";
            // app.dealerObj.showAllItems("dealers", app.sortOfItem, app.viewOfItem);
        });
        $('#btProprietario').on('click', function(){
            $('#btOspite').removeClass("active");
            $(this).addClass("active");
            $(".formOspite").hide();
            $(".formProprietario").show();
            // app.dealerObj.showAllItems("officine", app.sortOfItem, app.viewOfItem);
            // app.typeOfItem = "officine", "distance";
        });        

         // Add new macchinario
        $("#addModel").on('click', function(){

            var total_element = $(".element").length; // Finding total number of elements added
            var lastid = $(".element:last").attr("id"); // last <div> with element class id
            var split_id = lastid.split("_");
            var nextindex = Number(split_id[1]) + 1;
            var max = 15;
              
            if(total_element < max ){ // Check total number elements
               // Adding new div container after last occurance of element class
               $(".element:last").after("<div class='element' id='div_"+ nextindex +"'></div>");
               // Adding element to <div>
               $("#div_" + nextindex).append("<input type='text' placeholder='"+app.messages.labelModelMacchinari+"' id='cod_"+ nextindex +"' class='colModello'><input type='text' placeholder='"+app.messages.labelSerialMacchinari+"' id='_"+ nextindex +"' class='colModello' ><div id='remove_" + nextindex + "' class='remove'><div class='btRemoveModel'>-</div></div>");
              }
             
        });

        // Remove macchinario
        $('.containerModelli').on('click','.remove', function(){
             
            var id = this.id;
            var split_id = id.split("_");
            var deleteindex = split_id[1];

            $("#div_" + deleteindex).remove();// Remove <div> with id
        }); 

        $('#registerOspite').on('click', function(){
            app.addRegistrazione('ospite');
        }); 
        $('#registerProprietario').on('click', function(){
            app.addRegistrazione('proprietario');
        }); 

    },

    getSuccess: function(tx,result) {
        console.log(result.rows[0].titolo);
    },

    getError: function() {
        console.log("Errore select locale... ");
    },

    onOffline: function() {
        app.receivedEvent('onOffline');
        localStorage.setItem('isConn', 0); // per sicurezza, in realtà lo setta la funzione setConn() sotto
        app.setConn();
        /* LOGIN PAGE */
        $('#login').prop('disabled', true);
        $('#btFbLogin').prop('disabled', true);
        $('#btGplusLogin').prop('disabled', true);
        $('#btNewRegistration').prop('disabled', true);

        /* HOME PAGE */
        $('#btSearchDealer').prop('disabled', true);
        $('#btHelp').prop('disabled', true);
        $('#btProfile').prop('disabled', true);

        /* MENU DX */
        $('#menuDxRicerca').prop('disabled', true);
        $('#menuDxNews').prop('disabled', true);
        $('#menuDxAdv').prop('disabled', true);
        $('#menuDxHelp').prop('disabled', true);
        $('#menuDxYoutube').prop('disabled', true);
        $('#menuDxUser').prop('disabled', true);

        $('#serviceMessageLogin').html(app.messages.labelAlertNoconn);
        app.renderHomeView(app.messages.labelAlertNoconnHome);
    },

    onOnline: function() {
        app.receivedEvent('onOnline');
        localStorage.setItem('isConn', 1); // per sicurezza, in realtà lo setta la funzione setConn() sotto
        app.setConn();
        /* LOGIN PAGE */
        $('#login').prop('disabled', false);
        $('#btFbLogin').prop('disabled', false);
        $('#btGplusLogin').prop('disabled', false);
        $('#btNewRegistration').prop('disabled', false);

        /* HOME PAGE */
        $('#btSearchDealer').prop('disabled', false);
        $('#btHelp').prop('disabled', false);
        $('#btProfile').prop('disabled', false);

        /* MENU DX */
        $('#menuDxRicerca').prop('disabled', false);
        $('#menuDxNews').prop('disabled', false);
        $('#menuDxAdv').prop('disabled', false);
        $('#menuDxHelp').prop('disabled', false);
        $('#menuDxYoutube').prop('disabled', false);
        $('#menuDxUser').prop('disabled', false);

        $('#serviceMessageLogin').html("");
        $('#serviceMessageRegisterHome').html("");
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },

    findByName: function() {
        console.log('findByName');

        app.dealerObj.findByName(app.typeOfItem, app.sortOfItem, $('.search-key').val());
        app.initMenu();
    },

    selectCountries: function() {
        console.log('selectCountries '+$('select#selCountry').val());
        $('.search-key').val("");
        app.dealerObj.selectCountry(app.typeOfItem, app.sortOfItem, $('select#selCountry').val());
        app.initMenu();
    },

    registerEvents: function() {
        var self = this;
        $(window).on('hashchange', $.proxy(this.route, this)); // router per la navigazione pagine interne
        // Check of browser supports touch events...
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
            // ... if yes: register touch event listener to change the "selected" state of the item
            $('body').on('touchstart', 'a', function(event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('touchend', 'a', function(event) {
                $(event.target).removeClass('tappable-active');
            });
        } else {
            // ... if not: register mouse events instead
            $('body').on('mousedown', 'a', function(event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('mouseup', 'a', function(event) {
                $(event.target).removeClass('tappable-active');
            });
        }

    },

    renderUserProfile: function(isUpgrade){

        var userData = JSON.parse(app.getUserData()); //recupero i dati ajax dell'utente

        var userRole, modelliArr;
        var checkPriv = "", checkMark = "", checkPush = "", statoAtt = 0;

        statoAtt = userData[0].statoAtt;

        if(userData[0].authPrivacy == 1){ checkPriv = "checked"; }
        if(userData[0].authMarketing == 1){ checkMark = "checked"; }
        if(userData[0].authPush == 1){ checkPush = "checked"; }

        if(isUpgrade == 1 || statoAtt == 2){
            userRole = "upgrading to: "+app.messages.labelProprietario;
        } else {
            if(userData[0].ospite == 1){
                userRole = app.messages.labelOspite;
                localStorage.setItem("ospite", 1);
                localStorage.setItem("proprietario", 0);
            } else if(userData[0].proprietario == 1) { 
                userRole = app.messages.labelProprietario;
                localStorage.setItem("ospite", 0);
                localStorage.setItem("proprietario", 1);
            }
        }

        contextTpl = { loginName: userData[0].email,
                loginRole: userRole,
                labelNome: app.messages.nameReg,
                nome: userData[0].nome,
                labelTel: app.messages.telReg,
                tel: userData[0].telefono,
                titleMacchinari: app.messages.titleMacchinari,
                labelModelMacchinari: app.messages.labelModelMacchinari,
                labelSerialMacchinari: app.messages.labelSerialMacchinari,
                labelBtAggiungi: app.messages.labelBtAggiungi,
                labelPrivacy: app.messages.labelPrivacy,
                checkedPriv: checkPriv,
                labelMarketing: app.messages.labelMarketing,
                checkedMark: checkMark,
                labelPush: app.messages.labelPush,
                checkedPush: checkPush,
                btLabelUpdateOspite: app.messages.btLabelUpdateOspite,
                btLabelUpdateProprietario: app.messages.btLabelUpdateProprietario,
                btLabelRemoveUser: app.messages.btLabelRemoveUser,
                btLabelUpgradeProprietario: app.messages.btLabelUpgradeProprietario,
                tokenK: app.tokenAppKato
        };
        
        $('body').html(app.userTpl(contextTpl));

        contextH = { pageName: app.messages.menu10, backUrl: "#", boolMenu: 1 };
        $(".header").html(app.mainHeader(contextH));
        $("#serviceMessageProfile .preloader5").hide();

        if(isUpgrade==1){
            localStorage.setItem("ospite", 0);
            localStorage.setItem("proprietario", 1);
            $(".formOspiteUser").hide();
            $(".formProprietarioUser").show();
        } else {
            if(localStorage.getItem('ospite') == 1){
                $(".formOspiteUser").show();
                $(".formProprietarioUser").hide();
            } else if(localStorage.getItem('proprietario') == 1) { 
                $(".formOspiteUser").hide();
                $(".formProprietarioUser").show();
            }
        }

        // inserisco le macchine già presenti
        modelliArr = userData[0].modelli;

        if(modelliArr.length > 0) {

            $("#idUpd_1").val(modelliArr[0].idm);
            $("#codUpd_1").val(modelliArr[0].mod);
            $("#serUpd_1").val(modelliArr[0].ser);

            for (var i = 1; i < modelliArr.length; i++) {
                nextindex = i + 1;
                $(".elementUpd:last").after("<div class='elementUpd' id='divUpd_"+ nextindex +"'></div>");
                $("#divUpd_" + nextindex).append("<input type='hidden' id='idUpd_"+ nextindex +"' ><input type='text' placeholder='"+app.messages.labelModelMacchinari+"' id='codUpd_"+ nextindex +"' class='colModello'><input type='text' placeholder='"+app.messages.labelSerialMacchinari+"' id='serUpd_"+ nextindex +"' class='colModello' ><div id='removeUpd_" + nextindex + "' class='remove'><div class='btRemoveModelUpd'>-</div></div>");
                $("#idUpd_" + nextindex).val(modelliArr[i].idm);
                $("#codUpd_" + nextindex).val(modelliArr[i].mod);
                $("#serUpd_" + nextindex).val(modelliArr[i].ser);
            }
        }

        // Add new macchinario
        $("#addModelUpd").on('click', function(){

            var total_element = $(".elementUpd").length; // Finding total number of elements added
            var lastid = $(".elementUpd:last").attr("id"); // last <div> with element class id
            var split_id = lastid.split("_");
            var nextindex = Number(split_id[1]) + 1;
            var max = 15;
              
            if(total_element < max ){ // Check total number elements
               // Adding new div container after last occurance of element class
               $(".elementUpd:last").after("<div class='elementUpd' id='divUpd_"+ nextindex +"'></div>");
               // Adding element to <div>
               $("#divUpd_" + nextindex).append("<input type='hidden' id='idUpd_"+ nextindex +"' ><input type='text' placeholder='"+app.messages.labelModelMacchinari+"' id='codUpd_"+ nextindex +"' class='colModello'><input type='text' placeholder='"+app.messages.labelSerialMacchinari+"' id='serUpd_"+ nextindex +"' class='colModello' ><div id='removeUpd_" + nextindex + "' class='remove'><div class='btRemoveModelUpd'>-</div></div>");
              }
             
        });

        // Remove macchinario
        $('.containerModelliUpd').on('click','.remove', function(){
             
            var id = this.id;
            var split_id = id.split("_");
            var deleteindex = split_id[1];

            $("#divUpd_" + deleteindex).remove();// Remove <div> with id
        }); 

        if(statoAtt == 2){ // se sono in attesa di attivazione proprietario disattivo i bottoni upgrade e update
            $('#upgradeOspite').hide();
            $('#updateOspite').hide();
        } else {
            $('#upgradeOspite').show();
            $('#updateOspite').show();
        }

        if(isUpgrade==1){
            $('#updateProprietario').html(app.messages.confirmUpgradeProprietario+' '+app.messages.labelProprietario);
        } else {
            $('#upgradeOspite').on('click', function(){
                app.renderUserProfile(1);  // 1 è isUpgrade
            }); 
        }

        $('#updateOspite').on('click', function(){
            app.updateRegistrazione('ospite', 1);
        }); 
        $('#updateProprietario').on('click', function(){
            if(isUpgrade==1){ // ADD 5 sett 2018
                app.updateRegistrazione('proprietario',2); // upgrade, in attivazione
            } else {
                app.updateRegistrazione('proprietario',1);
            }
        });


        $('#removeUser').on('click', function(){
            app.showConfirmDeleteUser(app.messages.txtRemoveUser,app.messages.titleRemoveUser);
        });

    },

    route: function() {
        var self = this;
        self.initMenu();
        var hash = window.location.hash;
        hash = hash.replace(/ /g, '%20');
        if (!hash) {
            self.renderHomeView();
            return;
        }

        var matchPages = hash.match(app.detailsPage);
        var matchDetails = hash.match(app.detailsURL);
        var matchCat = hash.match(app.catURL);
        var matchItem = hash.match(app.itemURL);
        var matchProd = hash.match(app.prodURL);

        var matchCatNews = hash.match(app.catnewsURL);
        var matchNews = hash.match(app.newsURL);
        var matchNewsDett = hash.match(app.dettnewsURL);

        var matchMenu = hash.match(app.mainMenuURL);
        var matchMenuClose = hash.match(app.mainMenuURLClose);

        var matchUser = hash.match(app.userPage);

        var context = {pageName: "", backUrl: "#" };

        if(matchMenuClose) {
            $('.main-menu').removeClass('hover-menu');
        } 

        if(matchMenu) {
            var hasC = $('.main-menu').hasClass('hover-menu');
            if(!hasC){
                $('.main-menu').addClass('hover-menu');
            }
            
        } 

        if (matchPages) {
            $('.main-menu').removeClass('hover-menu');
            switch(hash) {
                case "#pages1":  // pagina KatoImer
                    contextP = { pageTitle: app.messages.titKato,
                                pageContent: app.messages.textKato };
                    $('body').html(self.staticPage1(contextP));
                    contextH = { pageName: app.messages.menu2, backUrl: "#", boolMenu: 1 };
                    $('.header').html(self.mainHeader(contextH));
                    break;
                case "#pages2":  // pagina Mamot
                    contextP = { pageTitle: app.messages.titMamot,
                                pageContent: app.messages.textMamot };
                    $('body').html(self.staticPage1(contextP));
                    contextH = { pageName: app.messages.menu3, backUrl: "#", boolMenu: 1 };
                    $('.header').html(self.mainHeader(contextH));
                    break;
                case "#pages3": // pagina dealers/officine
                    if(localStorage.getItem('isConn') == 1) { // se ho una connessione ad internet

                        var contModal= "<strong>"+app.messages.titleAlertPosition+"</strong><br/>"+app.messages.textAlertPosition;

                        if(localStorage.getItem('ackModal') == 1){
                            contModal = "";
                        }

                        context = { contentModal: contModal,
                            buttonModal: app.messages.ackPosition,
                            buttonClose: app.messages.nackPosition,
                            btLabelDealer: app.messages.btLabelDealer, 
                            btLabelOfficine: app.messages.btLabelOfficine }

                        $('body').html(app.searchTpl(context));
                        contextH = { pageName: app.messages.menu4, backUrl: "#", boolMenu: 1 };
                        $('.header').html(app.mainHeader(contextH));

                        if(localStorage.getItem(app.typeOfItem) == "" || localStorage.getItem(app.typeOfItem) == null ){
                            app.dealerObj.ajaxCallDealer(app.typeOfItem, localStorage.getItem("latDevice") , localStorage.getItem("longDevice") ); // ajax call per dealer                            
                        } else {
                            app.dealerObj.showAllItems(app.typeOfItem, app.sortOfItem, app.viewOfItem);
                        }

                        $('#btDealer').on('click', function(){
                            app.typeOfItem = "dealers";
                            $('#btOfficina').removeClass("active");
                            $('#btDealer').removeClass("active");
                            $('#btDealer').addClass("active");
                            if(localStorage.getItem(app.typeOfItem) == "" || localStorage.getItem(app.typeOfItem) == null ){
                                app.dealerObj.ajaxCallDealer(app.typeOfItem, localStorage.getItem("latDevice") , localStorage.getItem("longDevice") ); // ajax call per dealer
                            } else {
                                app.dealerObj.showAllItems(app.typeOfItem, app.sortOfItem, app.viewOfItem);
                            }
                        });
                        
                        $('#btOfficina').on('click', function(){
                            app.typeOfItem = "officine";
                            $('#btDealer').removeClass("active");
                            $('#btOfficina').removeClass("active");
                            $('#btOfficina').addClass("active");
                            if(localStorage.getItem(app.typeOfItem) == "" || localStorage.getItem(app.typeOfItem) == null ){
                                app.dealerObj.ajaxCallDealer(app.typeOfItem, localStorage.getItem("latDevice") , localStorage.getItem("longDevice") ); // ajax call per dealer
                            } else {
                                app.dealerObj.showAllItems(app.typeOfItem, app.sortOfItem, app.viewOfItem);
                            }
                        });

                        $('.btListDealer').on('click', function(){
                            app.viewOfItem = "list";
                            app.dealerObj.showAllItems(app.typeOfItem, app.sortOfItem, "list");
                            $('select#selCountry').removeAttr('disabled');
                            $('.search-key').removeAttr('disabled');
                        });

                         $('.btListMap').on('click', function(){
                            app.viewOfItem = "map";
                            app.dealerObj.showAllItems(app.typeOfItem, app.sortOfItem, "map");
                            $('select#selCountry').attr('disabled','disabled');
                            $('.search-key').attr('disabled','disabled');
                        });

                        $('#btAckModal').on('click', function(){  // accetto posizione
                            console.log("accetto modale");
                            $('.positionModal').hide();
                            localStorage.setItem('ackModal', 1);
                            //recupero posizione corrente utente
                            navigator.geolocation.getCurrentPosition(app.getSuccessPosition, app.getErrorPosition, { enableHighAccuracy: true, timeout: 30000 });
                        });

                        $('#btNackModal').on('click', function(){ // rifiuto posizione
                            console.log("chiudi modale");
                            $('.positionModal').hide();
                            localStorage.setItem('ackModal', 0);
                            localStorage.setItem("latDevice", 0);
                            localStorage.setItem("longDevice", 0);

                            app.sortOfItem = "alphabet";

                            app.dealerObj.ajaxCallDealer("dealers",0 ,0); // ajax call per dealer
                        });

                        $('.search-key').on('keyup', $.proxy(app.findByName, this));
                        $('select#selCountry').on('change', $.proxy(app.selectCountries, this));

                        // app.showConfirmPosition(app.messages.textAlertPosition,app.messages.titleAlertPosition);
                    }
                    break;
                case "#pages4":  // pagina Catalogo
                    $('body').html(self.catalogList());
                    contextH = { pageName: app.messages.titCatalogo, backUrl: "#", boolMenu: 1 };
                    $('.header').html(self.mainHeader(contextH));

                    if(localStorage.getItem('isConn') == 1) { // se ho una connessione ad internet
                        app.catalog.getListCatalog(localStorage.getItem( "language"), "ul.catalog-list-int",0); // carico il catalogo nella lingua corrente
                    } else {
                        //versione locale del catalogo
                        app.db.transaction(this.getLocalCatalog);
                    }
                    break;
                case "#pages5":  // pagina Contatti
                    contextP = { pageTitle: "KATO IMER S.p.A.",
                                pageContent: app.messages.txtContatti }
                                //app.messages.txtContatti };
                    $('body').html(self.staticContactPage(contextP));
                    contextH = { pageName: app.messages.menu7, backUrl: "#", boolMenu: 1 };
                    $('.header').html(self.mainHeader(contextH));
                    app.headerHeight = $('.header').outerHeight();
                    app.headerTitleHeight = $('.header').outerHeight();
                    break;
                case "#pages6":  // pagina Assistenza
                    if(localStorage.getItem('isConn') == 1) { // se ho una connessione ad internet
                        contextP = { pageTitle: app.messages.titlePageHelp, 
                            labelEmail: app.messages.emailReg,
                            labelNome: app.messages.nameReg,
                            labelEmailNew: app.messages.emailReg,
                            labelModello: app.messages.labelModelMacchinari,
                            labelOggetto: app.messages.oggettoForm,
                            labelRequest: app.messages.textForm,
                            btInvia: app.messages.btHelp,
                            labelObbligatori: app.messages.labelObbligatori,
                            labelPrivacy: app.messages.labelPrivacy
                        };
                        $('body').html(self.staticAssistenzaPage(contextP));
                        contextH = { pageName: app.messages.menu8, backUrl: "#", boolMenu: 1 };
                        $('.header').html(self.mainHeader(contextH));
                        $('#emailRequest').val(localStorage.getItem('email'));
                        $("#serviceMessageRequest .preloader5").hide();
                        $('#sendRequest').on('click', app.addRequest);
                    }
                    break;
                case "#pages7":  // pagina News
                    $('body').html(self.newsList());
                    contextH = { pageName: app.messages.titNews, backUrl: "#", boolMenu: 1 };
                    $('.header').html(self.mainHeader(contextH));

                    if(localStorage.getItem('isConn') == 1) { // se ho una connessione ad internet
                        app.news.getListNewsCat(localStorage.getItem( "language"), "ul.news-list-int",0); 
                    } 
                    break;

                case "#pages9":  // pagina Privacy
                    if(localStorage.getItem('isConn') == 1) { // se ho una connessione ad internet
                        var txtPrivacy = app.getPrivacy();
                        contextP = { pageContent: txtPrivacy };
                        $('body').html(self.staticPage1(contextP));
                        contextH = { pageName: "Privacy Policy", backUrl: "#" };
                        $('.header').html(self.mainHeader(contextH));
                    }
                    break;
                case "#pages0":  // pagina Faq

                    var faqList = "";

                    for (ifaq = 0; ifaq < app.messages.questionsFaq.length; ifaq++) {
                        faqList += "<button class=\"accordion\">"+app.messages.questionsFaq[ifaq]+"</button>";
                        faqList += "<div class=\"panel\">";
                        faqList += "<p>"+app.messages.answersFaq[ifaq]+"</p>";
                        faqList += "</div>";
                    }

                    contextP = { pageTitle: app.messages.titFaq,
                                pageContent: faqList };
                    $('body').html(self.staticPageFaq(contextP));
                    contextH = { pageName: app.messages.menu12, backUrl: "#", boolMenu: 1 };
                    $('.header').html(self.mainHeader(contextH));

                    var acc = document.getElementsByClassName("accordion");
                    var i;

                    for (i = 0; i < acc.length; i++) {
                        acc[i].addEventListener("click", function() {
                            /* Toggle between adding and removing the "active" class,
                            to highlight the button that controls the panel */
                            this.classList.toggle("active");

                            /* Toggle between hiding and showing the active panel */
                            var panel = this.nextElementSibling;
                            if (panel.style.display === "block") {
                                panel.style.display = "none";
                            } else {
                                panel.style.display = "block";
                            }
                        });
                    }

                    break;

                default:
                    $('body').html(self.homeTpl());
                    contextH = { };
                    $('.header').html(self.mainHeader(contextH));
            }
            
        } else if (matchDetails) { // pagina dettaglio dealer
            if(localStorage.getItem('isConn') == 1) { // se ho una connessione ad internet
                var matchParams = hash.match(/iditem=(\d+)/)
                if (matchParams) {
                    var itemID = matchParams[1];
                }
                context = { btLabelDealer: app.messages.btLabelDealer, btLabelOfficine: app.messages.btLabelOfficine }
                this.dealerObj.findById(app.typeOfItem,Number(itemID), function(deal) {
                    $('body').html(self.employeeTpl(deal));
                    contextH = { pageName: app.messages.menu4, backUrl: "#pages3", boolMenu: 1 };
                    $('.header').html(self.mainHeader(contextH));
                    $("#serviceMessageDealers .preloader5").hide();
                    $('#labelRoleDealer').hide();
                    $('#labelRoleOfficina').hide();
                    if(deal.dealer == 1){
                        $('#labelRoleDealer').html(app.messages.btLabelDealer);
                        $('#labelRoleDealer').show();
                    }
                    if(deal.officina == 1){
                        $('#labelRoleOfficina').html(app.messages.btLabelOfficina);
                        $('#labelRoleOfficina').show();
                    }
                    
                });
            }

        } else if (matchUser) { // pagina area utente
            app.renderUserProfile(0);
        } else if (matchCat) { // pagina categoria catalogo
            var matchParamsId = hash.match(/idcat=(\d+)/)
            if (matchParamsId) {
                var catID = Number(matchParamsId[1]);
            }
            var matchParamsTit = hash.match(/titcat=(\S+)/)
            if (matchParamsTit) {
                var catTit = matchParamsTit[1].toString(); //.replace(/%20/g, " ");
            }

            var labelHeader = "";
            switch(catID){
                case 2: labelHeader = app.messages.labelPesoOp; break;
                case 271: labelHeader = app.messages.labelCaricoOp; break;
                case 302: labelHeader = app.messages.labelCaricoOp; break;
                case 272: labelHeader = app.messages.labelCaricoOp; break;
                case 270: labelHeader = app.messages.labelCaricoOp; break;
                case 326: labelHeader = app.messages.labelPeso; break;
            }

            //catTit = catTit.replace(/%20/g, ' ');
            var catTit2 = decodeURI(catTit);

            contextH = { pageName: catTit2, backUrl: "#pages4", boolMenu: 1, pageHeader: labelHeader }; // titolo pagina categoria hash+" "+
            $('body').html(self.categoryPage());
            $('.header').html(self.mainHeader(contextH));
            if(localStorage.getItem('isConn') == 1) { // se ho una connessione ad internet
                app.catalog.getListItems(localStorage.getItem( "language"), catID, 0 ); // carico gli items di quella categoria
            } else {
                app.db.transaction(function(tx){
                    tx.executeSql("SELECT * FROM items WHERE id_cat = "+catID,[], app.getSuccessListItems, app.getErrorListItems);
                });
            }

        } else if (matchItem) { // pagina dettaglio prodotto
            var matchParamsId = hash.match(/iditem=(\d+)/)
            if (matchParamsId) {
                var itemID = matchParamsId[1];
            }
            var matchParamsTit = hash.match(/titcat=(\S+)/)
            if (matchParamsTit) {
                var catTit = matchParamsTit[1].toString();
            }
            var catTit2 = decodeURI(catTit);

            var matchParamsIDcat = hash.match(/idcat=(\d+)/)
            if (matchParamsIDcat) {
                var catID = matchParamsIDcat[1];
            }

            context1 = { idItem: itemID, labelBtManuale: app.messages.labelBtManuale};
            contextH = { pageName: catTit2, backUrl: "#cat1?idcat="+catID+"&titcat="+catTit, boolMenu: 1 }; // titolo pagina prodotto
            $('body').html(self.itemPage(context1));
            $('.header').html(self.mainHeader(contextH));

            if(localStorage.getItem('isConn') == 1) { // se ho una connessione ad internet
                    app.catalog.getItemCat(localStorage.getItem( "language"), itemID, catID, 0); // carico il macchinario
                    $('#btManuale').prop('disabled', false);
                    if(localStorage.getItem('proprietario') == 1) { $('#btManuale').show(); } else { $('#btManuale').hide(); }
                    $('#btBrochure').prop('disabled', false);
                    $('#btScheda').prop('disabled', false);
            } else {
                    app.db.transaction(function(tx){
                        tx.executeSql("SELECT * FROM items WHERE id = "+itemID,[], app.getSuccessItem, app.getErrorItem);
                    });
                    $('#btManuale').hide();
                    $('#btBrochure').prop('disabled', true);
                    $('#btScheda').prop('disabled', true);
            }

            $('#btManuale').on('click', function(){
                app.requestManuale();
            }); 

        } else if (matchCatNews) { // pagina categoria news
            if(localStorage.getItem('isConn') == 1) { // se ho una connessione ad internet
                var matchParamsId = hash.match(/idcat=(\d+)/)
                if (matchParamsId) {
                    var catID = matchParamsId[1];
                }
                var matchParamsTit = hash.match(/titcat=(\S+)/)
                if (matchParamsTit) {
                    var catTit = matchParamsTit[1].toString();
                }

                var catTit2 = decodeURI(catTit);

                contextH = { pageName: catTit2, backUrl: "#", boolMenu: 1 }; // titolo pagina categoria, backUrl: "#pages7"
                $('body').html(self.catNewsPage());
                $('.header').html(self.mainHeader(contextH));
                app.news.getListNews(localStorage.getItem( "language"), catID); // carico gli items di quella categoria
            }

        } else if (matchNews) { // pagina dettaglio News
            if(localStorage.getItem('isConn') == 1) { // se ho una connessione ad internet
                var matchParamsId = hash.match(/iditem=(\d+)/)
                if (matchParamsId) {
                    var itemID = matchParamsId[1];
                }
                var matchParamsTit = hash.match(/titcat=(\S+)/)
                if (matchParamsTit) {
                    var catTit = matchParamsTit[1].toString();
                }
                var catTit2 = decodeURI(catTit);

                var matchParamsIDcat = hash.match(/idcat=(\d+)/)
                if (matchParamsIDcat) {
                    var catId = matchParamsIDcat[1];
                }

                context1 = { idItem: itemID};
                contextH = { pageName: catTit2, backUrl: "#catnews1?idcat="+catId+"&titcat="+catTit, boolMenu: 1 }; // titolo pagina prodotto
                $('body').html(self.newsPage(context1));
                $('.header').html(self.mainHeader(contextH));
                app.news.getNews(localStorage.getItem( "language"), itemID, catID); // carico il dettaglio news
            }
        }
    },

    getLocalCatalog: function(tx) {
        console.log("Ok. leggo le cat in locale.");
        tx.executeSql("SELECT * FROM cats",[], app.getSuccessCatLocal, app.getErrorCatLocal);
    },

    getSuccessCatLocal: function(tx,results) {
        app.catalog.getListCatalog(localStorage.getItem( "language"), "ul.catalog-list-int", 1, results);
    },

    getErrorCatLocal: function(tx,result) { 
        console.log("Errore get cats local");
    },

    getSuccessListItems: function(tx,results) {
        app.catalog.getListItems(localStorage.getItem( "language"), "ul.catalog-list-int", 1, results);
    },

    getErrorListItems: function(tx,result) { 
        console.log("Errore get cats local");
    },

    getSuccessItem: function(tx,results) {
        app.catalog.getItemCat(localStorage.getItem( "language"), 1, 1 , 1, results);
    },

    getErrorItem: function(tx,result) { 
        console.log("Errore get item local");
    },

    initMenu: function() { 
        var self = this;
        
        var menuHeight = $('.main-menu').outerHeight();
        var menuDxHeight = $('.main-menu-dx').outerHeight();

        var userRole;

        if(localStorage.getItem('ospite') == 1){ 
            userRole = app.messages.labelOspite;
        } else if(localStorage.getItem('proprietario') == 1) { 
            userRole = app.messages.labelProprietario;
        }
 
        var context = {loginName: ""};
        if(localStorage.getItem('login') == 1){ // se sono loggato
            context = {
                loginName: localStorage.getItem('email'), 
                loginRole: userRole,
                menu0: app.messages.menu0,
                menu1: app.messages.menu1,
                menu2: app.messages.menu2,
                menu3: app.messages.menu3,
                menu4: app.messages.menu4,
                menu5: app.messages.menu5,
                menu6: app.messages.menu6,
                menu7: app.messages.menu7,
                menu8: app.messages.menu8,
                menu9: app.messages.menu9,
                menu10: app.messages.menu10,
                menu11: app.messages.menu11,
                menu12: app.messages.menu12
            };
        }

        // renderizzo il div menu
        $('.main-menu').html(self.mainMenu(context));
        $('#main-menu').height(app.winHeight);
        
        $('.menu-lista').height(app.winHeight - 100);

        $("#main-menu-close").click(function(){
            location.href="#menuclose/";
        });

        $("#menuDxLogout").click(function(){
            localStorage.setItem("login", 0);
            localStorage.setItem("idUser", "");
            localStorage.setItem("email", "");
            localStorage.setItem("ospite", 0);
            localStorage.setItem("proprietario", 0);
            localStorage.setItem("push", 0);
            localStorage.setItem("localCatalogoDate", 0);
            localStorage.setItem("localCatalogoListDate", 0);
            localStorage.setItem("latDevice", 0);
            localStorage.setItem("longDevice", 0);
            localStorage.setItem('ackCookie', 0);
            localStorage.setItem('ackModal', 0);

            app.db.transaction(app.sqlStorage.deleteTable("cats")); // svuoto la tabella locale cats
            app.db.transaction(app.sqlStorage.deleteTable("items")); // svuoto la tabella locale items
            app.db.transaction(app.sqlStorage.deleteTable("news")); // svuoto la tabella locale news

            if(localStorage.getItem('isConn') != 1) { // se NON ho una connessione ad internet
                $('#login').prop('disabled', true);
                $('#btFbLogin').prop('disabled', true);
                $('#btGplusLogin').prop('disabled', true);
                $('#btNewRegistration').prop('disabled', true);
            } else {
                $('#login').prop('disabled', false);
                $('#btFbLogin').prop('disabled', false);
                $('#btGplusLogin').prop('disabled', false);
                $('#btNewRegistration').prop('disabled', false);
            }

            history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
            self.renderHomeView();
        });

        if(localStorage.getItem('isConn') != 1) { // se NON ho una connessione ad internet
            $('#menuDxRicerca').prop('disabled', true);
            $('#menuDxNews').prop('disabled', true);
            $('#menuDxAdv').prop('disabled', true);
            $('#menuDxHelp').prop('disabled', true);
            $('#menuDxYoutube').prop('disabled', true);
            $('#menuDxUser').prop('disabled', true);
            /* HOME PAGE */
            $('#btSearchDealer').prop('disabled', true);
            $('#btHelp').prop('disabled', true);
            $('#btProfile').prop('disabled', true);
        } else {
            $('#menuDxRicerca').prop('disabled', false);
            $('#menuDxNews').prop('disabled', false);
            $('#menuDxAdv').prop('disabled', false);
            $('#menuDxHelp').prop('disabled', false);
            $('#menuDxYoutube').prop('disabled', false);
            $('#menuDxUser').prop('disabled', false);
            /* HOME PAGE */
            $('#btSearchDealer').prop('disabled', false);
            $('#btHelp').prop('disabled', false);
            $('#btProfile').prop('disabled', false);
        }
        
    },

    // check if user can be logged
    checkLogin: function() {
        var email=$("#email").val();
        var password=$("#password").val();
        var dataString="email="+email+"&password="+password+"&tokenK="+app.tokenAppKato+"&login=";
        if($.trim(email).length>0 & $.trim(password).length>0)
        {
            $.ajax({
                type: "POST",
                url: 'https://app.katoimer.com/appadmin/loginApp.php',
                data: dataString,
                dataType: "json",
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#login").html(app.messages.sendAjax); },
                success: function(data){
                    if(data.status=="success") {
                        localStorage.setItem("login", 1);
                        localStorage.setItem("idUser", data.id_iscritto);
                        localStorage.setItem("email", email);
                        localStorage.setItem("ospite", data.ospite);
                        localStorage.setItem("proprietario", data.proprietario);
                        localStorage.setItem("localCatalogoDate", 0);
                        localStorage.setItem("localCatalogoListDate", 0);
                        localStorage.setItem("push", data.push);
                        localStorage.setItem("statoAtt", data.statoAtt);
                        localStorage.setItem("latDevice", 0);
                        localStorage.setItem("longDevice", 0);
                        history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
                        app.renderHomeView();
                    } else if(data.status=="failed") {
                        localStorage.setItem("login", 0);
                        localStorage.setItem("idUser", "");
                        localStorage.setItem("email", "");
                        localStorage.setItem("ospite", 0);
                        localStorage.setItem("proprietario", 0);
                        localStorage.setItem("localCatalogoDate", 0);
                        localStorage.setItem("localCatalogoListDate", 0);
                        localStorage.setItem("push", 0);
                        localStorage.setItem("statoAtt", 0);
                        localStorage.setItem("latDevice", 0);
                        localStorage.setItem("longDevice", 0);
                        $("#login").html('Login');
                        $("#serviceMessageLogin").html(app.messages.labelUserNotFound);
                    }
                },
                error: function() {
                    localStorage.setItem("login", 0);
                    localStorage.setItem("idUser", "");
                    localStorage.setItem("email", "");
                    localStorage.setItem("ospite", 0);
                    localStorage.setItem("proprietario", 0);
                    localStorage.setItem("localCatalogoDate", 0);
                    localStorage.setItem("localCatalogoListDate", 0);
                    localStorage.setItem("push", 0);
                    localStorage.setItem("statoAtt", 0);
                    $("#serviceMessageLogin").html(app.messages.nackAjax001);
                }
            });

        } else {
            localStorage.setItem("login", 0);
            localStorage.setItem("idUser", "");
            localStorage.setItem("email", "");
            localStorage.setItem("ospite", 0);
            localStorage.setItem("proprietario", 0);
            localStorage.setItem("push", 0);
            localStorage.setItem("statoAtt", 0);
            console.log("login field error... ");
            $("#serviceMessageLogin").html(app.messages.emptyField);
        }
    },

    /* REGISTRAZIONE UTENTE OSPITE/PROPRIETARIO */
    addRegistrazione: function(typeReg) {

        var email, password, password2, nome, phone, stato, dataString, arrayModelSerial;
        var flagO = 0, flagP = 0, authPrivacy = 0, authMarketing = 0, authPush = 0;

        var boolRequestedFields = 0;  // campi obbligatori
        var boolWrongEmail = 0;  // email non corretta
        var boolPasswords = 0;  // password coincidono?
        var boolModels = 0; // almeno un modello inserito

        var messError = "";

        if(typeReg == "ospite") {
            nome= "";
            email=$("#emailO").val();
            phone= "";
            password=$("#passwordO").val();
            password2=$("#passwordO2").val();
            flagO = 1;
            stato=1; // già attivo
            boolModels = 1;
            if($.trim(email).length>0 & $.trim(password).length>0 & $.trim(password2).length>0 ){
                boolRequestedFields = 1;
            }
            if(document.getElementById("privacyCheckO").checked == true){ authPrivacy = 1; }  // checkbox privacy
            if(document.getElementById("marketingCheckO").checked == true){ authMarketing = 1; }   // checkbox marketing
            if(document.getElementById("pushCheckO").checked == true){ authPush = 1; }   // checkbox push

        } else if(typeReg == "proprietario") {
            nome=$("#nomeP").val();
            email=$("#emailP").val();
            phone=$("#telP").val();
            password=$("#passwordP").val();
            password2=$("#passwordP2").val();
            flagP = 1;
            stato=2; // da attivare
            if($.trim(nome).length>0 & $.trim(email).length>0 & $.trim(password).length>0 & $.trim(password2).length>0 ){
                boolRequestedFields = 1;
            }
            if(document.getElementById("privacyCheckP").checked == true){ authPrivacy = 1; }  // checkbox privacy
            if(document.getElementById("marketingCheckP").checked == true){ authMarketing = 1; }   // checkbox marketing
            if(document.getElementById("pushCheckP").checked == true){ authPush = 1; }   // checkbox push

            var modserValue = new Array();
            var arrayModelSerial = new Array();

            if($("#cod_1").val() && $("#ser_1").val()){
                $('.containerModelli').children('.element').each(function () {
                    $(this).children('input').each(function () {
                        modserValue.push($(this).val());
                    });
                    arrayModelSerial.push(modserValue);
                    modserValue = new Array();
                });
                boolModels = 1;
            }
        } 

        if(app.validateEmail(email)){
            boolWrongEmail = 1;
        }
        
        if($.trim(password) == $.trim(password2)) { 
            boolPasswords = 1;
        }

        if(boolRequestedFields != 1){
            $("#serviceMessageRegister").html(app.messages.emptyField);
        } else if (boolWrongEmail != 1) {
            $("#serviceMessageRegister").html(app.messages.pwWrongEmail);
        } else if (boolPasswords != 1) {
            $("#serviceMessageRegister").html(app.messages.pwNotEqual);
        } else if (boolModels != 1) {
            $("#serviceMessageRegister").html(app.messages.errorNoModels);
        } else if (authPrivacy != 1) {
            $("#serviceMessageRegister").html(app.messages.checkPrivacy);
        } else {
        
            dataString = { nome: nome,
                email:  email,
                phone: phone,
                password: password,
                ospite: flagO,
                proprietario: flagP,
                stato: stato,
                checkPriv: authPrivacy,
                checkMark: authMarketing,
                checkPush: authPush,
                arrayModels: arrayModelSerial,
                tokenK: app.tokenAppKato,
                lin: localStorage.getItem("language")
            };

            $.ajax({
                type: "POST",
                url: 'https://app.katoimer.com/appadmin/addIscrittoApp.php',
                data: dataString,
                dataType: "json",
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#serviceMessageRegister .preloader5").show(); $("#serviceMessageRegister").html(app.messages.sendAjax); },
                success: function(data){
                    $("#serviceMessageRegister .preloader5").hide();
                    if(data.status==1) {
                        history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
                        app.renderHomeView();
                        $("#serviceMessageLogin").html(app.messages.ackAjaxIscritto);
                        // in data.mess ho la mail dell'iscritto
                    } else if(data.status==0) {
                        messError = app.codifyErr(data.cod)
                        $("#serviceMessageRegister").html(messError);
                    }
                },
                error: function() {
                    $("#serviceMessageRegister").html(app.messages.nackAjax001);
                }
            });

        }

    },

    /* AGGIORNAMENTO UTENTE OSPITE/PROPRIETARIO */
    updateRegistrazione: function(typeUpd, statusUpd) {  // status 2 è un upgrade // ADD 5 sett 2018

        var email, password, nome, phone, stato, dataStringUpd, arrayModelSerial;
        var flagO = 0, flagP = 0, authPrivacy = 0, authMarketing = 0, authPush = 0;

        var boolRequestedFields = 0;  // campi obbligatori
        var boolPasswords = 0;  // password coincidono?
        var boolModels = 0; // almeno un modello inserito

        var messError = "";

        if(typeUpd == "ospite") {
            nome= "";
            email=$("#userName").html();
            phone= "";
            flagO = 1;
            stato = 1; // già attivo
            boolRequestedFields = 1; // non ho campi obbligatori
            boolModels = 1; // non ho macchine da inserire
            if(document.getElementById("privacyCheckOUser").checked == true){ authPrivacy = 1; }  // checkbox privacy
            if(document.getElementById("marketingCheckOUser").checked == true){ authMarketing = 1; }   // checkbox marketing
            if(document.getElementById("pushCheckOUser").checked == true){ authPush = 1; }   // checkbox push

        } else if(typeUpd == "proprietario") {
            nome=$("#nomePUser").val();
            email= localStorage.getItem('email');
            phone=$("#telPUser").val();
            password=$("#passwordP").val();
            password2=$("#passwordP2").val();
            flagP = 1;
            stato = statusUpd; // 1 attivo, 2 in attivazione (per upgrade) // ADD 5 sett 2018
            if($.trim(nome).length>0){
                boolRequestedFields = 1;
            }
            if(document.getElementById("privacyCheckPUser").checked == true){ authPrivacy = 1; }  // checkbox privacy
            if(document.getElementById("marketingCheckPUser").checked == true){ authMarketing = 1; }   // checkbox marketing
            if(document.getElementById("pushCheckPUser").checked == true){ authPush = 1; }   // checkbox push

            var modserValue = new Array();
            var arrayModelSerial = new Array();

            if($("#codUpd_1").val() && $("#serUpd_1").val()){
                $('.containerModelliUpd').children('.elementUpd').each(function () {
                    $(this).children('input').each(function () {
                        modserValue.push($(this).val());
                    });
                    arrayModelSerial.push(modserValue);
                    modserValue = new Array();
                });
                boolModels = 1;
            }
        } 

        // if($.trim(password) == $.trim(password2)) { 
        //     boolPasswords = 1;
        // }
        document.getElementById("profiloUtente").scrollTop = 0; // scroll to top div

        if(boolRequestedFields != 1){
            $("#serviceMessageProfile .txt").html(app.messages.emptyField);
        // } else if (boolPasswords != 1) {
        //     $("#serviceMessageProfile").html(app.messages.pwNotEqual);
        } else if (boolModels != 1) {
            $("#serviceMessageProfile .txt").html(app.messages.errorNoModels);
        } else if (authPrivacy != 1) {
            $("#serviceMessageProfile .txt").html(app.messages.checkPrivacy);
        } else {
        
            dataStringUpd = { id: localStorage.getItem("idUser"),
                email: email,
                nome: nome,
                phone: phone,
                ospite: flagO,
                proprietario: flagP,
                stato: stato,
                checkPriv: authPrivacy,
                checkMark: authMarketing,
                checkPush: authPush,
                arrayModels: arrayModelSerial,
                tokenK: app.tokenAppKato,
                lin: localStorage.getItem("language")
            };

            $.ajax({
                type: "POST",
                url: 'https://app.katoimer.com/appadmin/updateIscrittoApp.php',
                data: dataStringUpd,
                dataType: "json",
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#serviceMessageProfile .preloader5").show(); $("#serviceMessageProfile .txt").html(app.messages.sendAjax); },
                success: function(data){
                    $("#serviceMessageProfile .preloader5").hide();
                    if(data.status==1) {
                        // localStorage.setItem("ospite", 0);
                        // localStorage.setItem("proprietario", 1);
                        history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
                        
                        if(data.isUpg == 2){ // arrivo da un upgrade a proprietario, vado alla home e rimane dentro come Ospite
                            app.renderHomeView(app.messages.ackRequestUpgradeProprietario);
                            $("#serviceMessageLogin").html(app.messages.btLabelUpgradeProprietario);
                        } else { // arrivo da un update
                            app.renderUserProfile(0);
                            $("#serviceMessageProfile .txt").html(app.messages.ackAjaxUpdate);
                        }
                        
                        // in data.mess ho la mail dell'iscritto
                    } else if(data.status==0) {
                        messError = app.codifyErr(data.cod)
                        $("#serviceMessageProfile .txt").html(messError);
                    }
                },
                error: function() {
                    history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
                    app.renderUserProfile(0);
                    $("#serviceMessageRequest .preloader5").hide();
                    $("#serviceMessageProfile .txt").html(app.messages.nackAjax001);
                }
            });

        }

    },

    /* RICHIESTA MANUALE OPERATORE (SOLO PROPRIETARIO) */
    requestManuale: function() {
        var emailRequest=localStorage.getItem('email');
        var modelRequest=$('h2#title-item').html();

        var dataString = { email:  emailRequest,
            model: modelRequest,
            tokenK: app.tokenAppKato,
            lin: localStorage.getItem("language")
        };

        $.ajax({
            type: "POST",
            url: 'https://app.katoimer.com/appadmin/manualeRequestApp.php',
            data: dataString,
            dataType: "json",
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $("#serviceMessageItem .preloader5").show(); $("#serviceMessageItem .txt").html(app.messages.sendAjax); },
            success: function(data){
                $("#serviceMessageItem .preloader5").hide();
                if(data.status==1) {
                    $("#serviceMessageItem .txt").html(app.messages.ackAjaxRequest);
                } else if(data.status==0) {
                    $("#serviceMessageItem .txt").html(app.messages.nackAjaxRequest);
                }
            },
            error: function() {
                $("#serviceMessageItem .preloader5").hide();
                $("#serviceMessageItem .txt").html(app.messages.nackAjax001);
            }
        });

    },

    // invia richiesta assistenza
    addRequest: function() {
        var emailRequest=$("#emailRequest").val();
        var nomeRequest=$("#nomeRequest").val();
        nomeRequest=$.trim(nomeRequest);
        var oggettoRequest=$("#oggettoRequest").val();
        oggettoRequest = $.trim(oggettoRequest);
        var modelRequest=$("#modelRequest").val();
        modelRequest=$.trim(modelRequest);
        var txtRequest=$("#txtRequest").val();
        txtRequest=$.trim(txtRequest);

        var authPrivacy = 0;
        if(document.getElementById("privacyCheckManuale").checked == true){ authPrivacy = 1; }  // checkbox privacy

        document.getElementById("assistenzaContent").scrollTop = 0; // scroll to top div

        if(authPrivacy != 1){
            $("#serviceMessageRequest").html(app.messages.checkPrivacy);
        } else if( oggettoRequest.length === 0 && modelRequest.length === 0 && txtRequest.length === 0) {
            $("#serviceMessageRequest").html(app.messages.emptyField);
        } else {
            var dataString = { nome: nomeRequest,
                email:  emailRequest,
                model: modelRequest,
                oggetto: oggettoRequest,
                testo: txtRequest,
                tokenK: app.tokenAppKato,
                lin: localStorage.getItem("language")
            };

            $.ajax({
                type: "POST",
                url: 'https://app.katoimer.com/appadmin/addRequestApp.php',
                data: dataString,
                dataType: "json",
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#serviceMessageRequest .preloader5").show(); },
                success: function(data){
                    $("#serviceMessageRequest .preloader5").hide();
                    $("#serviceMessageRequest .txt").html("");
                    $("#nomeRequest").val("");
                    $("#modelRequest").val("");
                    $("#oggettoRequest").val("");
                    $("#txtRequest").val("");
                    if(data.status==1) {
                        app.renderHomeView(app.messages.ackAjaxRequest);
                    } else if(data.status==0) {
                        $("#serviceMessageRequest").html(app.messages.nackAjaxRequest);
                    }
                },
                error: function() {
                    $("#serviceMessageRequest .preloader5").hide();
                    $("#serviceMessageRequest").html(app.messages.nackAjax001);
                }
            });
        }

    },

    checkFbLogin: function() {

        var fbLoginSuccess = function (userData) {
          console.log("UserInfo: ", userData);
        }

        facebookConnectPlugin.login(["public_profile","email"],function(result){
            //calling api after login success
            facebookConnectPlugin.api("/me?fields=email,name,picture",
             ["public_profile","email"]
             ,function(userData){
                //API success callback
                //alert(JSON.stringify(userData.email)); userData.name userData.email
                $("#serviceMessageLogin").html(app.messages.ackAuth);
                localStorage.setItem('login',1);
                localStorage.setItem("email", userData.email);
                localStorage.setItem("ospite", 1);
                localStorage.setItem("proprietario", 0);
                localStorage.setItem("push", 0);
                localStorage.setItem("latDevice", 0);
                localStorage.setItem("longDevice", 0);
                app.renderHomeView();
            },function(error){
                //API error callback
                //alert(JSON.stringify(error));
                $("#serviceMessageLogin").html(app.messages.nackAuth);
            });
        },function(error){
            //authenication error callback
            //alert(JSON.stringify(error));
            $("#serviceMessageLogin").html(app.messages.errorAuth);
        });

    },

    checkGooglePlugin: function() {
        console.log("click google+ login");
        window.plugins.googleplus.login(
        {
        },
        function (obj) {
            $("#serviceMessageLogin").html(app.messages.ackAuth);
            localStorage.setItem('login',1);
            localStorage.setItem("email", obj.email);
            localStorage.setItem("ospite", 1);
            localStorage.setItem("proprietario", 0);
            localStorage.setItem("push", 0);
            localStorage.setItem("latDevice", 0);
            localStorage.setItem("longDevice", 0);
            app.renderHomeView();
            /* obj.familyName  -- cognome
            obj.givenName  -- nome
            obj.displayName  -- nome e cognome
            obj.familyName  -- cognome
            obj.email  -- email
            obj.imageUrl  -- imageUrl
            */
        },
        function (error) {
            $("#serviceMessageLogin").html(app.messages.nackAuth + error);
        }
        );
    },

    // API per IUBENDA Privacy Policy
    getPrivacy: function() {

        var privacyContent = "";

        $.ajax({
            type: "GET",
            url: "https://www.iubenda.com/api/privacy-policy/"+app.messages.codeIubendaPrivacy,
            dataType: "json",
            crossDomain: true,
            cache: false,
            async: false,
            beforeSend: function(){ },
            success: function(data){
                if(data.success) {
                    privacyContent = data.content;
                } else{
                    privacyContent = app.messages.nackAjax001+data.error;
                }
                
            },
            error: function() {
                privacyContent = app.messages.nackAjax001;
                
            }
        });
        return privacyContent;
        
    },

    // rceupero dati utente registrato ospite/proprietario
    getUserData: function() {

        dataString = { idUser: localStorage.getItem("idUser"), tokenK: app.tokenAppKato };

        $.ajax({
            type: "POST",
            url: 'https://app.katoimer.com/appadmin/userApp.php',
            data: dataString,
            dataType: "json",
            crossDomain: true,
            cache: false,
            async: false,
            beforeSend: function(){ $("#serviceMessageRequest .preloader5").show(); $("#serviceMessageProfile").html(app.messages.sendAjax);  },
            success: function(response){
                $("#serviceMessageRequest .preloader5").hide();
                userData = response.data;
                if(response.status==1) {
                    history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
                    $("#serviceMessageProfile").html(app.messages.ackAjaxIscritto);
                } else if(response.status==0) {
                    messError = app.codifyErr(data.cod)
                    $("#serviceMessageProfile").html(messError);
                }
            },
            error: function() {
                $("#serviceMessageRegister").html(app.messages.nackAjax001);
            }
        });
        return userData;
        
    },    

    // check if there is or not a connection
    setConn: function() {
        var self = this;

        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';  // IOS7 e Windows Phone hanno solo questo valore
        states[Connection.NONE] = 'No network connection';

        switch(states[networkState]) {
            case "No network connection":
                localStorage.setItem('isConn',0);
                break;
            default:
                localStorage.setItem('isConn',1);
            }

        console.log('setConn: ' + states[networkState]);
        
    },

    changedLanguage:function() {
        
        localStorage.setItem( "language", this.id);
        switch (this.id) {
            case "it-IT":
                app.messages.setItalian();break;
            case "en-EN":
                app.messages.setEnglish();break;
            case "fr-FR":
                app.messages.setFrench();break;
            case "es-ES":
                app.messages.setSpanish();break;
            case "de-DE":
                app.messages.setDeutch();break;
        }

        $( "ul.flag-list li" ).each(function() {
            $( this ).find("div").removeClass( "actual" );
        });

        $("#"+this.id).addClass( "actual" );

        $("#login").html(app.messages.logiBtLabel);
        $("#btNewRegistration").html(app.messages.newRegisterBtLabel);
        $("#btFbLogin").html(app.messages.fbBtLabel);
        $("#btGplusLogin").html(app.messages.gplusBtLabel);
        $("#serviceMessageLogin").html(app.messages.labelObbligatori);

        $("#txtModal").html(app.messages.contentCookie);
        $("#btAckCookie").html(app.messages.buttonCookie);
        $("#btNackCookie").html(app.messages.buttonClose);
        
    },

    setLanguage:function(lin) {
        localStorage.setItem( "language", lin);
        switch (lin) {
            case "it-IT":
                app.messages.setItalian();break;
            case "en-EN":
                app.messages.setEnglish();break;
            case "fr-FR":
                app.messages.setFrench();break;
            case "es-ES":
                app.messages.setSpanish();break;
            case "de-DE":
                app.messages.setDeutch();break;
            default:
                app.messages.setItalian();break;
        }
    },

    codifyErr: function(errCod){
        var errmess = "";
        switch(errCod){
            case "err01": errmess = app.messages.nackToken;
            break;
            case "err02": errmess = app.messages.userAlreadyReg;
            break;
            case "err03": errmess = app.messages.emptyField;
            break;
            case "err04": errmess = app.messages.nackDatabase;
            break;
            case "err05": errmess = app.messages.nackPrepareQuery;
            break;
            case "err06": errmess = app.messages.nackSendingEmail;
            break;
        }
        return errmess;
    },

    validateEmail: function(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    showConfirmDeleteUser: function (message, title) {
        navigator.notification.confirm(
            message, // message
            app.onConfirmDeleteUser,            // callback to invoke with index of button pressed
            title,           // title
            ['OK','annulla']         // buttonLabels
        );
    },

    onConfirmDeleteUser: function (buttonIndex) {
        console.log("confirm "+buttonIndex);
        if(buttonIndex == 1){
            // elimino l'utente
            dataString = { idUser: localStorage.getItem("idUser"), 
                email: localStorage.getItem('email'), 
                tokenK: app.tokenAppKato,
                lin: localStorage.getItem("language")
            };

            $.ajax({
                type: "POST",
                url: 'https://app.katoimer.com/appadmin/userDeleteApp.php',
                data: dataString,
                dataType: "json",
                crossDomain: true,
                cache: false,
                async: false,
                beforeSend: function(){ $("#serviceMessageRequest .preloader5").show(); $("#serviceMessageProfile").html(app.messages.sendAjax);  },
                success: function(response){
                    $("#serviceMessageRequest .preloader5").hide();
                    if(response.status==1) {
                        localStorage.setItem("login", 0);
                        localStorage.setItem("idUser", "");
                        localStorage.setItem("email", "");
                        localStorage.setItem("ospite", 0);
                        localStorage.setItem("proprietario", 0);
                        localStorage.setItem("push", 0);
                        localStorage.setItem("latDevice", 0);
                        localStorage.setItem("longDevice", 0);
                        history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
                        app.renderHomeView();
                        $("#serviceMessageLogin").html(app.messages.ackAjaxRemove);
                    } else if(response.status==0) {
                        messError = app.codifyErr(data.cod)
                        $("#serviceMessageProfile").html(app.messages.nackAjaxRequest);
                    }
                },
                error: function() {
                    $("#serviceMessageProfile").html(app.messages.nackAjax001);
                }
            });

        }
        
    },

    showConfirmPosition: function (message, title) {
        navigator.notification.confirm(
            message,
            app.onConfirmPosition,            // callback to invoke with index of button pressed
            title,           // title
            [app.messages.ackPosition, app.messages.nackPosition]         // buttonLabels
        );
    },

    onConfirmPosition: function (buttonIndex) {

        if(buttonIndex == 1){ // CONSENTI
            // recupero posizione corrente utente
            navigator.geolocation.getCurrentPosition(app.getSuccessPosition, app.getErrorPosition, { enableHighAccuracy: true, timeout: 30000 });

        } else if(buttonIndex == 2) {   //NON CONSENTI
            localStorage.setItem("latDevice", 0);
            localStorage.setItem("longDevice", 0);

            app.sortOfItem = "alphabet";

            // app.dealerObj.ajaxCallDealer("officine",0 ,0 ); // ajax call  per officine
            app.dealerObj.ajaxCallDealer("dealers",0 ,0); // ajax call per dealer

            // app.dealerObj.showAllItems(app.typeOfItem, app.sortOfItem, app.viewOfItem );
        } 

    },

    getSuccessPosition: function(position){
        var positionObject = {};

        if ('coords' in position) {
            positionObject.coords = {};

            if ('latitude' in position.coords) {
                positionObject.coords.latitude = position.coords.latitude;
            }
            if ('longitude' in position.coords) {
                positionObject.coords.longitude = position.coords.longitude;
            }
            if ('accuracy' in position.coords) {
                positionObject.coords.accuracy = position.coords.accuracy;
            }
            if ('altitude' in position.coords) {
                positionObject.coords.altitude = position.coords.altitude;
            }
            if ('altitudeAccuracy' in position.coords) {
                positionObject.coords.altitudeAccuracy = position.coords.altitudeAccuracy;
            }
            if ('heading' in position.coords) {
                positionObject.coords.heading = position.coords.heading;
            }
            if ('speed' in position.coords) {
                positionObject.coords.speed = position.coords.speed;
            }
        }

        if ('timestamp' in position) {
             positionObject.timestamp = position.timestamp;
        }

        // Use the positionObject instead of the position 'object'
        console.log(JSON.stringify(positionObject));  

        // localStorage.setItem("latDevice", 43.484519);
        // localStorage.setItem("longDevice", 11.128464);
        localStorage.setItem("latDevice", positionObject.coords.latitude);
        localStorage.setItem("longDevice", positionObject.coords.longitude);
        
        app.sortOfItem = "distance";

        // app.dealerObj.ajaxCallDealer("officine", localStorage.getItem("latDevice") , localStorage.getItem("longDevice") ); // ajax call per dealer
        app.dealerObj.ajaxCallDealer("dealers", localStorage.getItem("latDevice") , localStorage.getItem("longDevice") ); // ajax call per dealer

    },
    
    getErrorPosition: function(error){
        console.log('Position error code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        localStorage.setItem("latDevice", 0);
        localStorage.setItem("longDevice", 0);

        app.sortOfItem = "alphabet";

        //app.dealerObj.ajaxCallDealer("officine",0 ,0 ); // ajax call  per officine
        app.dealerObj.ajaxCallDealer("dealers",0 ,0); // ajax call per dealer
    },

    // Next/previous controls
    plusSlides: function (n) {
        app.showSlides(app.slideIndex += n);
    },

    // Thumbnail image controls
    currentSlide: function (n) {
        app.showSlides(app.slideIndex = n);
    },

    showSlides: function (n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {app.slideIndex = 1} 
        if (n < 1) {app.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[app.slideIndex-1].style.display = "block"; 
        dots[app.slideIndex-1].className += " active";
        // slider automatico
        // var i;
        // var slides = document.getElementsByClassName("mySlides");
        // for (i = 0; i < slides.length; i++) {
        //     slides[i].style.display = "none";
        //     $(slides[i]).removeClass("fade");
        // }
        // app.slideIndex++;
        // if (app.slideIndex > slides.length) {app.slideIndex = 1} 
        // slides[app.slideIndex-1].style.display = "block"; 
        // $(slides[app.slideIndex-1]).addClass("fade");
        // setTimeout(app.showSlides, 6000); // Change image every 2 seconds
    }


};

