var CatalogoItems = function(successCallback, errorCallback) {

    this.getListCatalog = function(lin, divFather) {  //lingua, div su cui caricare il catolog
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

                // salvo nello storage sql locale
                app.db.transaction(app.sqlStorage.addCatData(dataCatalog));

            },
            error: function(error){
                $("#footer-button .preloader5").hide();
                console.log("Errore AJAX - getListCatalog "+error);
                // window.location = "main.html";
            }
        }); 
    }

    this.getListItems = function(lin, idcat) {
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
                console.log(response.data);

                dataCatalog = JSON.parse(response.data);
                for (var i = 0; i < dataCatalog.length; i++) {
                    $('ul.category-list').append(
                    $('<li>').append(
                        $('<a>').attr('href','#item1?iditem='+dataCatalog[i].id+'&idcat='+dataCatalog[i].id_cat+'&titcat='+dataCatalog[i].titolo_cat).append(
                            "<div>"+dataCatalog[i].titolo+"<small>"+dataCatalog[i].sottotitolo+"</small></div>")
                    )); 
                }

                // salvo nello storage sql locale
                app.db.transaction(app.sqlStorage.addItemData(dataCatalog));
            },
            error: function(error){
                         //alert(response.success);
                // alert('Could not connect to the database' + error);
                console.log("Errore AJAX - getListItems "+error);
                        // window.location = "main.html";
            }
        }); 
    }

    this.getItem = function(lin, iditem, idcat) {
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
                    $('#content-item').append(
                        $('<div class="img-item">').append(
                            $('<img/>', {
                            id: 'gallery-item',
                            class: 'gallery-item',
                            src: dataCatalog[i].immagine
                            })
                        ),
                        $('<div class="text-item">').append(
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