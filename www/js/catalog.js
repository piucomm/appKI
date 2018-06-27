var CatalogoItems = function(successCallback, errorCallback) {

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
                beforeSend: function(){ $("#footer-button .preloader5").show();
                },
                success: function (response){ 
                    $("#footer-button .preloader5").hide();
                    dataCatalog = JSON.parse(response.data);
                    for (var i = 0; i < dataCatalog.length; i++) {
                        $(''+divFather).append(
                        $('<li>').append(
                            $('<a>').attr('href','#cat1?idcat='+dataCatalog[i].id_cat+'&titcat='+dataCatalog[i].titolo).append("<div>"+
                                dataCatalog[i].titolo+"</div>")
                        )); 
                    }
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

            for (var i=0; i<len; i++){
                // dataLocal.rows.item(i).id
                // dataLocal.rows.item(i).titolo
                // dataLocal.rows.item(i).descrizione
                $(''+divFather).append(
                    $('<li>').append(
                        $('<a>').attr('href','#cat1?idcat='+dataLocal.rows.item(i).id_cat+'&titcat='+dataLocal.rows.item(i).titolo).append("<div>"+
                            dataLocal.rows.item(i).titolo+" local </div>")
                )); 
            }
            // $('#serviceMessageRegisterHome').html("Titolo: "+dataLocal.rows.item(0).titolo );
        }

    }

    // recupero la data dell'ultomo items aggiornato
    this.getLastUpdate = function(lin) {
        var self = this;
        var dataLast;
        var dataString="lang="+lin+"&type=lastUpdate";
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

    this.getListItems = function(lin, idcat, isLocal, dataLocal) {
        var self = this;
        if(isLocal == 0) { // ho connessione, versione live
            var dataString="lang="+lin+"&idcat="+idcat+"&type=listitems";
            $.ajax({
                type: 'POST',
                url: 'https://app.katoimer.com/appadmin/catalogApp.php',
                data: dataString,
                dataType: "json",
                crossDomain: true,
                cache: false,
                beforeSend: function(){ //$("#footer-button").html('Charging catalogue...');
                },
                success: function (response){ 
                    dataCatalog = JSON.parse(response.data);
                    for (var i = 0; i < dataCatalog.length; i++) {
                        if(dataCatalog[i].id_cat == idcat){ // filtro per la categoria attuale
                            $('ul.category-list').append(
                            $('<li>').append(
                                $('<a>').attr('href','#item1?iditem='+dataCatalog[i].id+'&idcat='+dataCatalog[i].id_cat+'&titcat='+dataCatalog[i].titolo_cat).append(
                                    "<div>"+dataCatalog[i].titolo+"<small>"+dataCatalog[i].sottotitolo+"</small></div>")
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

            for (var i=0; i<len; i++){
                $('ul.category-list').append(
                    $('<li>').append(
                         $('<a>').attr('href','#item1?iditem='+dataLocal.rows.item(i).id+'&idcat='+dataLocal.rows.item(i).id_cat+'&titcat='+dataLocal.rows.item(i).titolo_cat).append(
                        "<div>"+dataLocal.rows.item(i).titolo+" local<small>"+dataLocal.rows.item(i).sottotitolo+"</small></div>")
                )); 

            }
            // $('#serviceMessageRegisterHome').html("Titolo: "+dataLocal.rows.item(0).titolo );
        }

    }

    this.getItemCat = function(lin, iditem, idcat, isLocal, dataLocal) {
        var self = this;
        if(isLocal == 0) { // ho connessione, versione live
            $('#serviceMessageManuale .preloader5').hide();
            $('#btManuale').prop('disabled', false);
            var dataString="lang="+lin+"&item="+iditem+"&idcat="+idcat+"&type=item";
            $.ajax({
                type: 'POST',
                url: 'https://app.katoimer.com/appadmin/catalogApp.php',
                data: dataString,
                dataType: "json",
                crossDomain: true,
                cache: false,
                beforeSend: function(){ //$("#footer-button").html('Charging catalogue...');
                },
                success: function (response){ 
                    console.log(response.data);

                    dataCatalog = JSON.parse(response.data);
                    for (var i = 0; i < dataCatalog.length; i++) {
                        var tonnellaggio = "";
                        if(dataCatalog[i].attributi != null){
                            tonnellaggio = dataCatalog[i].attributi.split("|");
                        }
                        $('h2#title-item').html(dataCatalog[i].titolo+" <small>"+tonnellaggio[1]+"</small>");
                        $('#subtitle-item').html(dataCatalog[i].sottotitolo);
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

                        if(dataCatalog[i].attach1 != ""){
                            $('#button-item').append(
                                $('<button id="btBrochure" class="rounded-button half-size" onclick="location.href="'+dataCatalog[i].attach1+'" " >'+app.messages.labelBtBrochure+'</button>')
                            );
                        }

                        if(dataCatalog[i].attach2 != ""){
                            $('#button-item').append(
                                $('<button id="btScheda" class="rounded-button half-size" onclick="location.href="'+dataCatalog[i].attach2+'" ">'+app.messages.labelBtSchedatecnica+'</button>')
                            );
                        }

                        // visualizzo la gallery se ho almeno una immagine presente
                        if(dataCatalog[0].imgUrl[0] != 0) {
                            app.showSlides(app.slideIndex);
                            // app.showSlides();
                        }

                    }
                },
                error: function(error){
                             //alert(response.success);
                    console.log("Errore AJAX - getItem " + error);
                            // window.location = "main.html";
                }
            }); 

        } else { // non ho connessione, recupero la versione locale
            $('#serviceMessageManuale .preloader5').hide();
            $('#btManuale').prop('disabled', true);

            $('h2#title-item').html(dataLocal.rows.item(0).titolo+" <small>"+dataLocal.rows.item(0).attributi+" LOCAL</small>");
            $('#subtitle-item').html(dataLocal.rows.item(0).sottotitolo);
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

}