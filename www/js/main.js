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
        this.staticAssistenzaPage = Handlebars.compile($("#assistenzaPage").html());

        this.catalogList = Handlebars.compile($("#cataloglist-tpl").html());

        this.categoryPage = Handlebars.compile($("#catalogPage").html());
        this.itemPage = Handlebars.compile($("#itemPage").html());

        //REGEXP per routing
        this.detailsPage = /^#pages(\d{1,})/;
        this.detailsURL = /^#dealoff(\d{1,})/;
        this.catURL = /^#cat(\d{1,})/;
        this.itemURL = /^#item(\d{1,})/;
        this.prodURL = /^#prod(\d{1,})/;

        this.userPage = /^#userprofile/;

        this.mainMenuURL = /^#menu\//;
        this.mainMenuURLClose = /^#menuclose\//;

        this.typeOfItem = "dealers"; // dealers, officine
        this.sortOfItem = "distance"; // distance, alphabet
        this.viewOfItem = "list"; // list, map

        this.winHeight = 0;
        this.headerHeight = 0; // .header

        this.map = "";

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
        navigator.globalization.getPreferredLanguage(
            function (language) { 
                app.setLanguage(language.value); // setto la lingua corrente
                $("#"+language.value).addClass( "actual" );
            } , function () { app.setLanguage('it-IT'); } // errore, setto l'italiano 
        );

        app.messages = new MessageTranslation(); // label traduzioni
        app.winHeight = $(window).height();
        app.dealerObj = new DealersOfficine(); // inizializzo l'oggetto per la classe dealers/officine
        app.renderHomeView();

    },

    renderHomeView: function() {
        
        app.setLanguage(localStorage.getItem('language')); // setto la lingua corrente

        app.catalog = new CatalogoItems();

        if(localStorage.getItem('login') == 0 || localStorage.getItem('login') == null) { // il login in localStorage è false, devo fare il login se ho connessione...
            $('body').html(this.loginTpl());

            $('#btNewRegistration').on('click', this.renderRegisterView);
            $('#login').on('click', this.checkLogin);

            $('#btFbLogin').on('click', this.checkFbLogin);
            $('#btGplusLogin').on('click', this.checkGooglePlugin);

            $("#"+localStorage.getItem("language")).addClass( "actual" );

            $('#it-IT').on('click', this.changedLanguage);
            $('#en-EN').on('click', this.changedLanguage);
            $('#de-DE').on('click', this.changedLanguage);
            $('#fr-FR').on('click', this.changedLanguage);
            $('#es-ES').on('click', this.changedLanguage);
        } else {
            history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
            context = { labelBtRicerca: app.messages.menu4,
                labelBtAssistenza: app.messages.menu8,
                labelBtAreaUtente: app.messages.menu10
            }

            $('body').html(this.homeTpl(context));

            this.initMenu(); // inizializzo il menu laterale

            contextH = { boolMenu: 1 };
            $('.header').html(this.mainHeader(contextH));

            app.headerHeight = $('.header').outerHeight();

            $('.homeBlock').innerHeight(app.winHeight - 100);
            $('.menu-lista').height(app.winHeight - 100); 

            $("#btSearchDealer").html(app.messages.btSearchDealer);

            console.log("Home check conn "+localStorage.getItem( "language")+" conn "+localStorage.getItem('isConn'));
            
            if(localStorage.getItem('isConn') == 1) { // se ho una connessione ad internet
                app.catalog.getListCatalog(localStorage.getItem( "language"), "ul.catalog-list"); // carico il catalogo nella lingua corrente
            } else {
                // versione locale del catalogo
                // app.db.transaction(app.sqlStorage.getCatData());
            }

            // app.showAlert('Store Initialized', 'Info');
        }

    },

    renderRegisterView: function() {
        history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
        context = { messOwner: app.messages.ownerAlertLabel,
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
                    labelPush: app.messages.labelPush}
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

            console.log("add cLick");

            var total_element = $(".element").length; // Finding total number of elements added
            var lastid = $(".element:last").attr("id"); // last <div> with element class id
            var split_id = lastid.split("_");
            var nextindex = Number(split_id[1]) + 1;
            var max = 15;
              
            if(total_element < max ){ // Check total number elements
               // Adding new div container after last occurance of element class
               $(".element:last").after("<div class='element' id='div_"+ nextindex +"'></div>");
               // Adding element to <div>
               $("#div_" + nextindex).append("<input type='text' placeholder='Cod. Modello' id='cod_"+ nextindex +"' class='colModello'><input type='text' placeholder='Num. Seriale' id='_"+ nextindex +"' class='colModello' ><div id='remove_" + nextindex + "' class='remove'>X</div>");
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
        localStorage.setItem('isConn', 0);
        $('#login').prop('disabled', true);
        $('#btFbLogin').prop('disabled', true);
        $('#btGplusLogin').prop('disabled', true);
        $('#btSearchDealer').prop('disabled', true);
        $('#serviceMessageLogin').html('Connessione assente. Impossibile effettuare login...');
        app.setConn();
    },

    onOnline: function() {
        app.receivedEvent('onOnline');
        localStorage.setItem('isConn', 1);
        $('#login').prop('disabled', false);
        $('#btFbLogin').prop('disabled', false);
        $('#btGplusLogin').prop('disabled', false);
        $('#btSearchDealer').prop('disabled', false);
        app.setConn();
    },

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },

    findByName: function() {
        console.log('findByName');
        var self = this;
        // this.dealerObj.findByName($('.search-key').val(), function(employees) {
        //     $('.dealer-list').html(self.employeeLiTpl(employees));
        //     self.initMenu();
        // });
        this.dealerObj.findByName(app.typeOfItem, app.sortOfItem, $('.search-key').val());
        self.initMenu();
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

    route: function() {
        var self = this;
        self.initMenu();
        var hash = window.location.hash;
        if (!hash) {
            self.renderHomeView();
            return;
        }

        var matchPages = hash.match(app.detailsPage);
        var matchDetails = hash.match(app.detailsURL);
        var matchCat = hash.match(app.catURL);
        var matchItem = hash.match(app.itemURL);
        var matchProd = hash.match(app.prodURL);

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
                    app.dealerObj.ajaxCallDealer("dealers"); // ajax call per dealer/officine
                    app.dealerObj.ajaxCallDealer("officine"); // ajax call per dealer/officine

                    $('body').html(self.searchTpl());
                    this.dealerObj.showAllItems(app.typeOfItem, app.sortOfItem, app.viewOfItem );
                    $('#btDealer').on('click', function(){
                        app.typeOfItem = "dealers";
                        app.dealerObj.showAllItems("dealers", app.sortOfItem, app.viewOfItem);
                    });
                    $('#btOfficina').on('click', function(){
                        app.dealerObj.showAllItems("officine", app.sortOfItem, app.viewOfItem);
                        app.typeOfItem = "officine", "distance";
                    });

                    $('.btListDealer').on('click', function(){
                        app.viewOfItem = "list";
                        app.dealerObj.showAllItems(app.typeOfItem, app.sortOfItem, "list");
                    });

                    $('.btListMap').on('click', function(){
                        app.viewOfItem = "map";
                        app.dealerObj.showAllItems(app.typeOfItem, app.sortOfItem, "map");
                    });
   
                    $('.search-key').on('keyup', $.proxy(self.findByName, this));
                    contextH = { pageName: app.messages.menu4, backUrl: "#", boolMenu: 1 };
                    $('.header').html(self.mainHeader(contextH));
                    break;
                case "#pages4":  // pagina Catalogo
                    $('body').html(self.catalogList());
                    contextH = { pageName: app.messages.titCatalogo, backUrl: "#", boolMenu: 1 };
                    $('.header').html(self.mainHeader(contextH));

                    if(localStorage.getItem('isConn') == 1) { // se ho una connessione ad internet
                        app.catalog.getListCatalog(localStorage.getItem( "language"), "ul.catalog-list-int"); // carico il catalogo nella lingua corrente
                    } else {
                        // versione locale del catalogo
                        // app.db.transaction(app.sqlStorage.getCatData());
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
                    console.log("height header!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! "+app.headerHeight);
                    break;
                case "#pages6":  // pagina Assistenza
                    contextP = { pageTitle: "Inviaci la tua richiesta"};
                    $('body').html(self.staticAssistenzaPage(contextP));
                    contextH = { pageName: app.messages.menu8, backUrl: "#", boolMenu: 1 };
                    $('.header').html(self.mainHeader(contextH));
                    $('#emailRequest').val(localStorage.getItem('email'));
                    $("#serviceMessageRequest .preloader5").hide();
                    $('#sendRequest').on('click', app.addRequest);
                    break;
                case "#pages9":  // pagina Privacy
                    var txtPrivacy = app.getPrivacy();
                    contextP = { pageContent: txtPrivacy };
                    $('body').html(self.staticPage1(contextP));
                    contextH = { pageName: "Privacy Policy", backUrl: "#" };
                    $('.header').html(self.mainHeader(contextH));
                    break;
                default:
                    $('body').html(self.homeTpl());
                    contextH = { };
                    $('.header').html(self.mainHeader(contextH));
            }
            
        } else if (matchDetails) { // pagina dettaglio dealer
            var matchParams = hash.match(/iditem=(\d+)/)
            if (matchParams) {
                var itemID = matchParams[1];
            }
            console.log("match details "+itemID);
            this.dealerObj.findById(app.typeOfItem,Number(itemID), function(deal) {
                $('body').html(self.employeeTpl(deal));
                contextH = { backUrl: "#pages3", boolMenu: 1 };
                $('.header').html(self.mainHeader(contextH));
            });

        } else if (matchUser) { // pagina area utente
            history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash

            var userRole;

            if(localStorage.getItem('ospite') == 1){
                userRole = "Ospite";
            } else if(localStorage.getItem('proprietario') == 1) { 
                userRole = "Proprietario"; 
            }

            context = { loginName: localStorage.getItem('email'),
                        loginRole: userRole,
                        nome: app.messages.nameReg,
                        tel: app.messages.telReg,
                        titleMacchinari: app.messages.titleMacchinari,
                        labelModelMacchinari: app.messages.labelModelMacchinari,
                        labelSerialMacchinari: app.messages.labelSerialMacchinari,
                        labelBtAggiungi: app.messages.labelBtAggiungi,
                        labelPrivacy: app.messages.labelPrivacy,
                        labelMarketing: app.messages.labelMarketing,
                        labelPush: app.messages.labelPush}
            $('body').html(self.userTpl(context));

            contextH = { pageName: app.messages.menu10, backUrl: "#", boolMenu: 1 };
            $(".header").html(app.mainHeader(contextH));
            $("#serviceMessageRegister .preloader5").hide();

            if(localStorage.getItem('ospite') == 1){
                $(".formOspiteUser").show();
                $(".formProprietarioUser").hide();
            } else if(localStorage.getItem('proprietario') == 1) { 
                $(".formOspiteUser").hide();
                $(".formProprietarioUser").show();
            }


        } else if (matchCat) { // pagina categoria catalogo
            
            var matchParamsId = hash.match(/idcat=(\d+)/)
            if (matchParamsId) {
                var catID = matchParamsId[1];
            }
            var matchParamsTit = hash.match(/titcat=(\D+)/)
            if (matchParamsTit) {
                var catTit = matchParamsTit[1].toString(); //.replace(/%20/g, "-");
            }

            contextH = { pageName: catTit, backUrl: "#", boolMenu: 1 }; // titolo pagina categoria
            $('body').html(self.categoryPage());
            $('.header').html(self.mainHeader(contextH));
            app.catalog.getListItems(localStorage.getItem( "language"), catID); // carico gli items di quella categoria

        } else if (matchItem) { // pagina dettaglio prodotto
            console.log("item ");
            var matchParamsId = hash.match(/iditem=(\d+)/)
            if (matchParamsId) {
                var itemID = matchParamsId[1];
            }
            var matchParamsTit = hash.match(/titcat=(\D+)/)
            if (matchParamsTit) {
                var catTit = matchParamsTit[1]; //.replace(/%20/g, "-");
            }
            var matchParamsIDcat = hash.match(/idcat=(\d+)/)
            if (matchParamsIDcat) {
                var catId = matchParamsIDcat[1]; //.replace(/%20/g, "-");
            }

            context1 = { idItem: itemID};
            contextH = { pageName: catTit, backUrl: "#cat1?idcat="+catId+"&titcat="+catTit, boolMenu: 1 }; // titolo pagina prodotto
            $('body').html(self.itemPage(context1));
            $('.header').html(self.mainHeader(contextH));
            app.catalog.getItem(localStorage.getItem( "language"), itemID, catID); // carico l'item
        }
    },

    initMenu: function() { 
        var self = this;
        
        var menuHeight = $('.main-menu').outerHeight();
        var menuDxHeight = $('.main-menu-dx').outerHeight();

        var userRole;

        if(localStorage.getItem('ospite') == 1){ userRole = "Ospite"; 
        } else if(localStorage.getItem('proprietario') == 1) { userRole = "Proprietario"; }
        
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
                menu11: app.messages.menu11
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
            history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
            self.renderHomeView();
        });

        // var html = self.mainMenu(context);
    },

    // check if user can be logged
    checkLogin: function() {
        var email=$("#email").val();
        var password=$("#password").val();
        var dataString="email="+email+"&password="+password+"&login=";
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
                        localStorage.setItem("email", email);
                        localStorage.setItem("ospite", data.ospite);
                        localStorage.setItem("proprietario", data.proprietario);
                        console.log("login ok... "+data.ospite+" "+data.proprietario);
                        history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
                        app.renderHomeView();
                    } else if(data.status=="failed") {
                        localStorage.setItem("login", 0);
                        console.log("login error... ");
                        $("#login").html('Login');
                        $("#serviceMessageLogin").html('Utente non trovato!');
                    }
                },
                error: function() {
                    $("#serviceMessageLogin").html(app.messages.nackAjax001);
                }
            });

        } else {
            localStorage.setItem("login", 0);
            console.log("login field error... ");
            $("#serviceMessageLogin").html(app.messages.emptyField);
        }
    },

    // registrazione nuovo utente ospite/proprietario
    addRegistrazione: function(typeReg) {

        var email, password, nome, phone, stato, dataString, arrayModelSerial;
        var flagO = 0, flagP = 0, authPrivacy = 0, authMarketing = 0, authPush = 0;

        var boolRequestedFields = 0;  // campi obbligatori
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
        
        if($.trim(password) == $.trim(password2)) { 
            boolPasswords = 1;
        }

        if(boolRequestedFields != 1){
            $("#serviceMessageRegister").html(app.messages.emptyField);
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
                tokenK: app.tokenAppKato
            };

            // dataString="nome="+nome+"&email="+email+"&phone="+phone+"&password="+password+"&ospite="+flagO+"&proprietario="+flagP+"&stato="+stato+"&checkPriv="+authPrivacy+"&checkMark="+authMarketing+"&checkPush="+authPush+"&tokenK="+app.tokenAppKato;
        
            $.ajax({
                type: "POST",
                url: 'https://app.katoimer.com/appadmin/addIscrittoApp.php',
                data: dataString,
                dataType: "json",
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#serviceMessageLogin").html(app.messages.sendAjax); },
                success: function(data){
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

    // invia richiesta assistenza
    addRequest: function() {
        var emailRequest=$("#emailRequest").val();
        var oggettoRequest=$("#oggettoRequest").val();
        var txtRequest=$("#txtRequest").val();
        var dataString="email="+emailRequest+"&oggetto="+oggettoRequest+"&testo="+txtRequest;
        if($.trim(emailRequest).length>0 && $.trim(oggettoRequest).length>0 && $.trim(txtRequest).length>0)
        {
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
                    $("#oggettoRequest").val("");
                    $("#txtRequest").val("");
                    if(data.status==1) {
                        $("#serviceMessageRequest").html(data.mess);
                        history.pushState('', document.title, window.location.pathname); // ripulisce la url dagli hash
                        $("#serviceMessageLogin").html(app.messages.ackAjaxRequest);
                    } else if(data.status==0) {
                        $("#serviceMessageRequest").html('Error: '+data.mess);
                    }
                },
                error: function() {
                    $("#serviceMessageRequest .preloader5").hide();
                    $("#serviceMessageRequest").html(app.messages.nackAjax001);
                }
            });

        } else {
            $("#serviceMessageRequest").html(app.messages.emptyField);
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
                $("#serviceMessageLogin").html('Autenticazione Facebook riuscita...');
                localStorage.setItem('login',1);
                localStorage.setItem("email", userData.email);
                localStorage.setItem("ospite", 1);
                localStorage.setItem("proprietario", 0);
                app.renderHomeView();
            },function(error){
                //API error callback
                //alert(JSON.stringify(error));
                $("#serviceMessageLogin").html('Autenticazione non riuscita');
            });
        },function(error){
            //authenication error callback
            //alert(JSON.stringify(error));
            $("#serviceMessageLogin").html('Impossibile autenticarsi con Facebook');
        });

    },

    checkGooglePlugin: function() {
        window.plugins.googleplus.login(
        {
          'webClientId': 'client id of the web app/server side', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
          'offline': true // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
        },
        function (obj) {
          alert(JSON.stringify(obj)); // do something useful instead of alerting
        },
        function (msg) {
          alert('error: ' + msg);
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
        console.log("privacyContent "+privacyContent);
        return privacyContent;
        
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
        $("#btFbLogin").html(app.messages.fbBtLabel);
        $("#btGplusLogin").html(app.messages.gplusBtLabel);
        $("#btNewRegistration").html(app.messages.newRegisterBtLabel);
        //console.log(" cambio lingua "+localStorage.getItem( "language"));
        
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
        }
        return errmess;
    }

};

