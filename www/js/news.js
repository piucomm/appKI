var NewsItems = function(successCallback, errorCallback) {

    this.getListNewsCat = function(lin, divFather, local, dataLocal) {  //lingua, div su cui caricare il catolog

        if(local == 0) { // ho connessione, versione live
            var dataString="lang="+lin+"&type=listcat"; // "+lin+"
            $.ajax({
                type: 'POST',
                url: 'https://app.katoimer.com/appadmin/newsApp.php',
                data: dataString,
                dataType: "json",
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#footer-button .preloader5").show();
                },
                success: function (response){ 
                    $("#footer-button .preloader5").hide();
                    dataCatNews = JSON.parse(response.data);
                    for (var i = 0; i < dataCatNews.length; i++) {
                        $(''+divFather).append(
                        $('<li>').append(
                            $('<a>').attr('href','#catnews1?idcat='+dataCatNews[i].id_cat+'&titcat='+dataCatNews[i].titolo).append("<div>"+
                                dataCatNews[i].titolo+"</div>")
                        )); 
                    }
                    // salvo nello storage sql locale
                    app.db.transaction(app.sqlStorage.addCatData(dataCatNews));

                },
                error: function(error){
                    $("#footer-button .preloader5").hide();
                    console.log("Errore AJAX - getListCatalog "+error);
                }
            }); 
        } 

    }

    this.getListNews = function(lin, idcat) {
        var dataString="lang="+lin+"&idcat="+idcat+"&type=listitems";
        $.ajax({
            type: 'POST',
            url: 'https://app.katoimer.com/appadmin/newsApp.php',
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
                    $('ul.news-list').append(
                    $('<li>').append(
                        $('<a>').attr('href','#news1?iditem='+dataCatalog[i].id+'&idcat='+dataCatalog[i].id_cat+'&titcat='+dataCatalog[i].titolo_cat).append(
                            "<div class='list-content' ><div class='data-news'>"+dataCatalog[i].data_creazione+"</div>"+dataCatalog[i].titolo+"<small>"+dataCatalog[i].sottotitolo+"</small></div>")
                    )); 
                }

                // salvo nello storage sql locale
                app.db.transaction(app.sqlStorage.addNewsData(dataCatalog));
            },
            error: function(error){
                         //alert(response.success);
                // alert('Could not connect to the database' + error);
                console.log("Errore AJAX - getListItems "+error);
                        // window.location = "main.html";
            }
        }); 
    }

    this.getNews = function(lin, iditem, idcat) {
        var dataString="lang="+lin+"&item="+iditem+"&idcat="+idcat+"&type=item";
        $.ajax({
            type: 'POST',
            url: 'https://app.katoimer.com/appadmin/newsApp.php',
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
                    $('h2#title-news').html(dataCatalog[i].titolo);
                    $('#content-item').append(
                        $('<div class="data-news">').append(
                        dataCatalog[i].data_creazione),
                        $('<div class="text-news">').append(
                        dataCatalog[i].descrizione)
                    ); 
                }
            },
            error: function(error){
                         //alert(response.success);
                console.log("Errore AJAX - getItem " + error);
                        // window.location = "main.html";
            }
        }); 
    }    


}