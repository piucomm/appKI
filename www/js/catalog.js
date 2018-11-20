var CatalogoItems = function(successCallback, errorCallback) {

    /* LISTA CATEGORIE */
    this.getListCatalog = function(lin, divFather, isLocal, dataLocal) {  //lingua, div su cui caricare il catolog
        var self = this;
        if(isLocal == 0) { // ho connessione, versione live
            // recupero le categorie
            var dataString="lang="+lin+"&type=listcat"; // "+lin+"
            $.ajax({
                type: 'POST',
                url: 'https://app.katoimer.com/appadmin/catalogApp.php',
                data: dataString,
                dataType: "json",
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#serviceMessageCatalogo .preloader5").show(); $("#serviceMessageCatalogo .txt").html(app.messages.sendAjax); 
                },
                success: function (response){ 
                    $("#serviceMessageCatalogo .preloader5").hide();
                    $("#serviceMessageCatalogo .txt").html(""); 
                    dataCatalog = JSON.parse(response.data);
                    for (var i = 0; i < dataCatalog.length; i++) {
                        var div_title = "<div class=\"divCat\" >";
                        if(dataCatalog[i].immagine != "" ) { div_title += "<img src=\""+dataCatalog[i].immagine+"\" class=\"thumbCat\" />"; }
                        div_title += "<div class=\"titleCat\" >"+dataCatalog[i].titolo+"</div></div>";
                        $(''+divFather).append(
                        $('<li>').append(
                            $('<a>').attr('href','#cat1?idcat='+dataCatalog[i].id_cat+'&titcat='+dataCatalog[i].titolo).append(div_title)
                        )); 
                    }

                    // CONTROLLO SE DEVO SALVARE I DATI IN LOCALE OPPURE NO
                    // salvo nello storage sql locale, devo salvare sempre o se il catalogo è aggiornato?
                    var lastUpdCatalogDate = self.getLastUpdate(localStorage.getItem( "language")); // recupero la data di ultima modifica items convertita in data JS

                    if(localStorage.getItem("localCatalogoDate") == 0){ // non ho mai salvato il catalogo in locale
                        console.log("localCatalogoDate è 0.... "+lastUpdCatalogDate+" ---- "+localStorage.getItem("localCatalogoDate"));
                        app.db.transaction(app.sqlStorage.addCatData(dataCatalog));
                    } else {
                        console.log("Confronto le date.... "+lastUpdCatalogDate+" ---- "+localStorage.getItem("localCatalogoDate"));
                        if(lastUpdCatalogDate > localStorage.getItem("localCatalogoDate")){ // ho dati non aggiornati, aggiorno la versione locale
                            app.db.transaction(app.sqlStorage.addCatData(dataCatalog));
                            console.log("Catalogo locale non aggiornato.... "+lastUpdCatalogDate+" ---- "+localStorage.getItem("localCatalogoDate"));
                        }
                    }

                },
                error: function(error){
                    $("#footer-button .preloader5").hide();
                    console.log("Errore AJAX - getListCatalog "+error);
                    // window.location = "main.html";
                }
            }); 
        } else { // non ho connessione, recupero la versione locale
            var len = dataLocal.rows.length;
            if(len > 0){
                $("#serviceMessageCatalogo .preloader5").hide();
                $("#serviceMessageCatalogo").html("");  
                for (var i=0; i<len; i++){
                    var div_title = "<div class=\"divCat\" >";
                    div_title += "<div class=\"titleCat\" >"+dataLocal.rows.item(i).titolo+"</div></div>";
                    $(divFather).append(
                        $('<li>').append(
                            $('<a>').attr('href','#cat1?idcat='+dataLocal.rows.item(i).id_cat+'&titcat='+dataLocal.rows.item(i).titolo).append(div_title)
                    )); 
                }

            } else {
                $("#serviceMessageCatalogo .preloader5").hide();
                $("#serviceMessageCatalogo").html("No local data...");  
            }

        }

    }

    /* LISTA ITEMS DI UNA CATEGORIA */
    this.getListItems = function(lin, idcat, isLocal, dataLocal) {
        var self = this;
        if(isLocal == 0) { // ho connessione, versione live
            var dataString="lang="+lin+"&idcat="+idcat+"&type=listitems&tokenK="+app.tokenAppKato;
            $.ajax({
                type: 'POST',
                url: 'https://app.katoimer.com/appadmin/catalogApp.php',
                data: dataString,
                dataType: "json",
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#serviceMessageCatlist .preloader5").show(); $("#serviceMessageCatlist .txt").html(app.messages.sendAjax);
                },
                success: function (response){ 
                    $("#serviceMessageCatlist .preloader5").hide();
                    $("#serviceMessageCatlist .txt").html(""); 
                    dataCatalog = JSON.parse(response.data);
                    for (var i = 0; i < dataCatalog.length; i++) {
                        if(dataCatalog[i].id_cat == idcat){ // filtro per la categoria attuale
                            var attributes = "";  // dataCatalog[i].tonnellaggio
                            var subtitle = "";
                            var labelAttribute = "";
                            if(dataCatalog[i].sottotitolo != ""){ subtitle = "<div class=\"subTitle\">"+dataCatalog[i].sottotitolo+"</div>"; }
                            if(dataCatalog[i].pesooperativo != "" && dataCatalog[i].pesooperativo != null ){ attributes += dataCatalog[i].pesooperativo+" Kg"; labelAttribute = app.messages.labelPesoOp; }
                            if(dataCatalog[i].caricooperativo != "" && dataCatalog[i].caricooperativo != null ){ attributes += dataCatalog[i].caricooperativo+" Kg"; labelAttribute = app.messages.labelCaricoOp;  }
                            if(dataCatalog[i].peso != "" && dataCatalog[i].peso != null ){ attributes += dataCatalog[i].peso+" Kg"; labelAttribute = app.messages.labelPeso; }
                            // $('.barraHeader').html(labelAttribute);
                            $('ul.category-list').append(
                            $('<li>').append(
                                $('<a>').attr('href','#item1?iditem='+dataCatalog[i].id+'&idcat='+dataCatalog[i].id_cat+'&titcat='+dataCatalog[i].titolo_cat).append(
                                    "<div>"+dataCatalog[i].titolo+"<small>"+attributes+"</small>"+subtitle+"</div>")
                            )); 
                        }
                    }

                    // salvo nello storage sql locale, devo salvare sempre o se il catalogo è aggiornato?
                    var lastUpdCatalogDate = self.getLastUpdate(localStorage.getItem( "language")); // recupero la data di ultima modifica items convertita in data JS

                    if(localStorage.getItem("localCatalogoListDate") == 0){ // non ho mai salvato il catalogo in locale
                        console.log("getListItems è 0.... "+lastUpdCatalogDate+" ---- "+localStorage.getItem("localCatalogoListDate"));
                        app.db.transaction(app.sqlStorage.addItemsData(dataCatalog));
                    } else {
                        console.log("Confronto le date list items.... "+lastUpdCatalogDate+" ---- "+localStorage.getItem("localCatalogoListDate"));
                        if(lastUpdCatalogDate > localStorage.getItem("localCatalogoListDate")){ // ho dati non aggiornati, aggiorno la versione locale
                            app.db.transaction(app.sqlStorage.addItemsData(dataCatalog));
                            console.log("Catalogo list items non aggiornato.... "+lastUpdCatalogDate+" ---- "+localStorage.getItem("localCatalogoListDate"));
                        }
                    }

                    
                },
                error: function(error){
                    console.log("Errore AJAX - getListItems "+error);
                }
            });
        } else { // non ho connessione, recupero la versione locale
            var len = dataLocal.rows.length;
            if(len > 0){
                $("#serviceMessageCatlist .preloader5").hide();
                $("#serviceMessageCatlist .txt").html("");  
                for (var i=0; i<len; i++){
                    var localAttributes = ""; 
                    var localSubtitle = ""; 
                    var localLabelAttribute = "";
                    if(dataLocal.rows.item(i).sottotitolo != ""){ localSubtitle = "<div class=\"subTitle\">"+dataLocal.rows.item(i).sottotitolo+"</div>"; }
                    if(dataLocal.rows.item(i).pesooperativo != "" && dataLocal.rows.item(i).pesooperativo != null ){ localAttributes += dataLocal.rows.item(i).pesooperativo+" Kg"; localLabelAttribute = app.messages.labelPesoOp; }
                    if(dataLocal.rows.item(i).caricooperativo != "" && dataLocal.rows.item(i).caricooperativo != null ){ localAttributes += dataLocal.rows.item(i).caricooperativo+" Kg"; localLabelAttribute = app.messages.labelCaricoOp;  }
                    if(dataLocal.rows.item(i).peso != "" && dataLocal.rows.item(i).peso != null ){ localAttributes += dataLocal.rows.item(i).peso+" Kg"; localLabelAttribute = app.messages.labelPeso; }


                    $('ul.category-list').append(
                        $('<li>').append(
                            $('<a>').attr('href','#item1?iditem='+dataLocal.rows.item(i).id+'&idcat='+dataLocal.rows.item(i).id_cat+'&titcat='+dataLocal.rows.item(i).titolo_cat).append(
                            "<div>"+dataLocal.rows.item(i).titolo+"<small>"+localAttributes+"</small>"+localSubtitle+"</div>")
                    )); 
                }
            } else {
                $("#serviceMessageCatlist .preloader5").hide();
                $("#serviceMessageCatlist .txt").html("No local data...");  
            }
        }

    }

    /* DETTAGLIO ITEM */
    this.getItemCat = function(lin, iditem, idcat, isLocal, dataLocal) {
        var self = this;
        if(isLocal == 0) { // ho connessione, versione live
            $('#serviceMessageItem .preloader5').hide();
            $("#serviceMessageItem .txt").html("");
            $('#btManuale').prop('disabled', false);
            var dataString="lang="+lin+"&item="+iditem+"&idcat="+idcat+"&type=item&tokenK="+app.tokenAppKato;
            $.ajax({
                type: 'POST',
                url: 'https://app.katoimer.com/appadmin/catalogApp.php',
                data: dataString,
                dataType: "json",
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#serviceMessageItem .preloader5").show(); $("#serviceMessageItem .txt").html(app.messages.sendAjax);
                },
                success: function (response){ 
                    //console.log(response.data);
                    $("#serviceMessageItem .preloader5").hide(); 
                    $("#serviceMessageItem .txt").html("");
                    dataCatalog = JSON.parse(response.data);
                    for (var i = 0; i < dataCatalog.length; i++) {
                        // var tonnellaggio = "";
                        // if(dataCatalog[i].attributi != null){
                        //     tonnellaggio = dataCatalog[i].attributi.split("|");
                        // }
                        // tonnellaggio[1];
                        var attributes = "";  // dataCatalog[i].tonnellagio
                        if(dataCatalog[i].pesooperativo != "" && dataCatalog[i].pesooperativo != null ){ attributes += app.messages.labelPesoOp+": "+dataCatalog[i].pesooperativo+" Kg "; }
                        if(dataCatalog[i].caricooperativo != "" && dataCatalog[i].caricooperativo != null ){ attributes += app.messages.labelCaricoOp+": "+dataCatalog[i].caricooperativo+" Kg "; }
                        if(dataCatalog[i].peso != "" && dataCatalog[i].peso != null ){ attributes += app.messages.labelPeso+": "+dataCatalog[i].peso+" Kg "; }
                        $('h2#title-item').html(dataCatalog[i].titolo);
                        $('#subtitle-item').html(dataCatalog[i].sottotitolo);
                        $('#attribute-item').html(attributes);
                        $('#content-item').append(
                            $('<div class="slideshow-container">').append(
                                $('<div class="mySlides fade">').append(
                                    $('<img/>', {
                                    id: 'gallery-item',
                                    class: 'gallery-item',
                                    src: dataCatalog[i].immagine
                                    })
                                )
                            )
                        );

                        if(dataCatalog[0].imgUrl[0] != 0) { // Dots navigation
                            $('#content-item').append($('<div id="dotNav"><span class="dot" onclick="app.currentSlide(1)"></span></div>'));
                        } else {
                            $("#content-item .slideshow-container .mySlides").show();
                        }

                        if(dataCatalog[i].imgUrl[0] != 0) {
                            for (var ii = 0; ii < dataCatalog[i].imgUrl.length; ii++) {
                                var indexSlide = ii + 2;
                                // console.log("url "+dataCatalog[0].imgUrl[ii]);
                                $('.slideshow-container').append(
                                    $('<div class="mySlides">').append(
                                        $('<img/>', {
                                        id: 'gallery-item',
                                        class: 'gallery-item',
                                        src: dataCatalog[i].imgUrl[ii]
                                        })
                                    )
                                ),
                                $('#dotNav').append($('<span class="dot" onclick="app.currentSlide('+indexSlide+')"></span>'));
                            }
                            // Arrows navigation
                            $('.slideshow-container').append(
                              $('<a class="prev" onclick="app.plusSlides(-1)">&#10094;</a>'),
                              $('<a class="next" onclick="app.plusSlides(1)">&#10095;</a>')
                            )
                        }

                        $('#content-item').append(
                            $('<div class="text-item">').append(
                            dataCatalog[i].descrizione)
                        ); 

                        if(dataCatalog[i].attach1 != "" &&  dataCatalog[i].attach1 != undefined){
                            $('#button-item').append(
                                $('<button id="btBrochure" class="rounded-button half-size" onclick="window.open(\''+encodeURI(dataCatalog[i].attach1)+'\');" >'+app.messages.labelBtBrochure+'</button>')
                            );
                        }

                        if(dataCatalog[i].attach2 != ""  &&  dataCatalog[i].attach2 != undefined){
                            $('#button-item').append(
                                $('<button id="btScheda" class="rounded-button half-size" onclick="window.open(\''+encodeURI(dataCatalog[i].attach2)+'\');">'+app.messages.labelBtSchedatecnica+'</button>')
                            );
                        }

                        $(".slideshow-container").swipe({
                            //Single swipe handler for left swipes
                            swipeLeft:function(event, direction, distance, duration, fingerCount) {
                                app.plusSlides(1);
                            },
                            swipeRight:function(event, direction, distance, duration, fingerCount) {
                                app.plusSlides(-1);
                            },
                            //Default is 75px, set to 0 for demo so any distance triggers swipe
                            threshold:0
                        });

                        // visualizzo la gallery se ho almeno una immagine presente
                        if(dataCatalog[0].imgUrl[0] != 0) {
                            app.showSlides(app.slideIndex);
                            // app.showSlides();
                        }

                    }
                },
                error: function(error){
                    $("#serviceMessageItem .preloader5").hide(); 
                    $("#serviceMessageItem .txt").html("Errore AJAX - getItem " + error);
                    console.log("Errore AJAX - getItem " + error);
                }
            }); 

        } else { // non ho connessione, recupero la versione locale
            $("#serviceMessageItem .preloader5").hide(); 
            $("#serviceMessageItem .txt").html("");
            $('#btManuale').prop('disabled', true);

            var attributes = "";  // dataCatalog[i].tonnellagio
            if(dataLocal.rows.item(0).pesooperativo != "" && dataLocal.rows.item(0).pesooperativo != null ){ attributes += app.messages.labelPesoOp+": "+dataLocal.rows.item(0).pesooperativo+" Kg "; }
            if(dataLocal.rows.item(0).caricooperativo != "" && dataLocal.rows.item(0).caricooperativo != null ){ attributes += app.messages.labelCaricoOp+": "+dataLocal.rows.item(0).caricooperativo+" Kg "; }
            if(dataLocal.rows.item(0).peso != "" && dataLocal.rows.item(0).peso != null ){ attributes += app.messages.labelPeso+": "+dataLocal.rows.item(0).peso+" Kg "; }

            $('h2#title-item').html(dataLocal.rows.item(0).titolo);
            $('#subtitle-item').html(dataLocal.rows.item(0).sottotitolo);
            $('#attribute-item').html(attributes);
            $('#content-item').append(
            $('<div class="img-item">').append(
                $('<img/>', {
                    id: 'gallery-item',
                    class: 'gallery-item',
                    src: dataLocal.rows.item(0).immagine
                    })
                ),
                $('<div class="text-item">').append(
                dataLocal.rows.item(0).descrizione)
            ); 

        }
    }


    // recupero la data dell'ultimo items aggiornato dal DB
    this.getLastUpdate = function(lin) {
        var self = this;
        var dataLast;
        var dataString="lang="+lin+"&type=lastUpdate&tokenK="+app.tokenAppKato;
        $.ajax({
            type: 'POST',
            url: 'https://app.katoimer.com/appadmin/catalogApp.php',
            data: dataString,
            dataType: "json",
            crossDomain: true,
            cache: false,
            async: false,
            beforeSend: function(){ //$("#footer-button").html('Charging catalogue...');
            },
            success: function(response){ 
                dataLast = response.data;
            },
            error: function(error){
                dataLast = 0;
                console.log("Errore AJAX - getListItems "+error);
            }
        }); 

        return self.sqlToJsDate(dataLast);
    }   

    this.sqlToJsDate = function(sqlDate){
        var a=sqlDate.split(" ");
        var d=a[0].split("-");
        var t=a[1].split(":");
        var formatedDate = new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]).getTime();
        
        return formatedDate;
    }

}