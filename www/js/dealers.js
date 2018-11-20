var DealersOfficine = function(successCallback, errorCallback) {

    this.findByName = function(typeItem, orderBy, searchKey, callback) {
        var dataOfficineDealers = JSON.parse(window.localStorage.getItem(typeItem));

        // console.log("findByName "+employees);
        var dataODByName = dataOfficineDealers.filter(function(element) {
            var fullName = element.nome; // element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });

        this.viewList(dataODByName, typeItem, orderBy);
        // callLater(callback, dataOfficine);
    }

    this.findById = function(typeItem,id, callback) {
        var dataOfficineDealers = JSON.parse(window.localStorage.getItem(typeItem));
        var dataOD = null;
        var l = dataOfficineDealers.length;
        for (var i=0; i < l; i++) {
            if (dataOfficineDealers[i].id === id) {
                dataOD = dataOfficineDealers[i];
                break;
            }
        }
        callLater(callback, dataOD);
    }

    this.selectCountry = function(typeItem, orderBy, selectVal, callback) {
        var dataOfficineDealers = JSON.parse(window.localStorage.getItem(typeItem));
        this.viewList(dataOfficineDealers, typeItem, orderBy);

        if (selectVal != '') {
            var elems = $('.dealers-list li[data-country="'+selectVal+'"]');
            $('.dealers-list li').not(elems).hide();
            elems.show();
        }

    }

    this.showAllItems = function(typeItem, orderBy, viewItem, callback){ // typeItem = dealers, officine

        $("#serviceMessageDealersList .preloader5").show(); $("#serviceMessageDealersList  .txt").html(app.messages.sendAjax);

        var dataOfficineDealers = JSON.parse(window.localStorage.getItem(typeItem));

        $('.btListMap').removeClass("active");
        $('.btListDealer').removeClass("active");

        if(viewItem == "list") {
            $('.btListDealer').addClass("active");
            this.viewList(dataOfficineDealers, typeItem, orderBy);
        } else if(viewItem == "map") {
            $('.btListMap').addClass("active");
            this.viewMap(dataOfficineDealers, typeItem);
        }
        
        $('#btOfficina').removeClass("active");
        $('#btDealer').removeClass("active");

        // add classe active su bottone scelta tipo di dato
        if(typeItem == "dealers"){
            $('#btDealer').addClass("active");
        } else if(typeItem == "officine") {
            $('#btOfficina').addClass("active");
        }   

    }

    this.viewList = function(dataItems,typeItem, orderBy) {
        var dataDistance = 0;
        var dataInitials = 0;

        var arrayCountry = new Array();

        $("#serviceMessageDealersList .preloader5").hide(); $("#serviceMessageDealersList .txt").html("");

        $('#dealers-map').empty();
        $('ul.dealers-list').empty();
        
        for (var i = 0; i < dataItems.length; i++) {

            dataInitials = dataItems[i].nome.toString().charCodeAt(0);

            switch(orderBy) {
                case "distance":
                    // COMMENTATO getDIstance per non consumare risorse Firebase
                    //dataDistance = this.getDistance(dataItems[i].lat, dataItems[i].long);
                    // dataDistance = i + Math.floor((Math.random() * 100) +1);
                    if(dataItems[i].distance != 111111111){
                        dataDistance = (dataItems[i].distance / 1000 ).toFixed(2);
                        kmDistance =  ' - ' + dataDistance + ' Km';
                    } else{
                        dataDistance = 111111111
                        kmDistance =  ' --- Km';
                    }
                    
                    
                break;
                case "alphabet":
                    dataDistance = 0;
                    kmDistance = '';
                break;
            }

            country = dataItems[i].nazione.toLowerCase();
            country = country.replace(/ /g, "-");
            
            // non metto le nazioni duplicate
            if (arrayCountry.indexOf(country) === -1) arrayCountry.push(country);

            $('ul.dealers-list').attr('class',"dealers-list "+typeItem).append(
            $('<li>').attr('data-distance',dataDistance).attr('data-letters',dataInitials).attr('data-country',country).append(
                $('<a>').attr('href','#dealoff1?iditem='+dataItems[i].id).append(
                    '<div class="nomeItem" >'+dataItems[i].nome+'<br/><span class="addressItem">'+dataItems[i].citta+' - '+dataItems[i].nazione + kmDistance +' </span></div>')
            ));
        }

        // riempio la select nazioni
        var $countries = $('select#selCountry');

        $countries.empty().append(function() {
            var output = '';
             output += '<option value="" >'+app.messages.allCountries+'</option>';
            $.each(arrayCountry, function(key,value) {
                output += '<option value="'+value+'" >' + value.toUpperCase() + '</option>';
            });
            return output;
        });

        // riordino la lista
        this.sortOrder(orderBy);  
    }

    this.viewMap = function(dataItems,typeItem) {
        var dataDistance = 0;
        var dataInitials = 0;
        var iconMarker = "";

        var latD = parseFloat(localStorage.getItem("latDevice")); // COMMENTATO getDIstance per non consumare risorse Firebase
        var longD = parseFloat(localStorage.getItem("longDevice")); // COMMENTATO getDIstance per non consumare risorse Firebase

        $("#serviceMessageDealersList .preloader5").hide(); $("#serviceMessageDealersList .txt").html("");

        $('#dealers-map').empty();
        $('ul.dealers-list').empty();

        if(typeItem == "dealers"){
            iconMarker = "img/icon-dealers.png";
        } else if(typeItem == "officine") {
            iconMarker = "img/icon-officine.png";
        }   

        // setto l'altezza della mappa con la massima altezza disponibile
        var heightBtScelta = $(".bottoneScelta").height();
        var heightBtFilter = $(".dealerTable").height();
        $('#dealers-map').height(app.winHeight - 180); 

        var zoomMap = 8;
        var markers = [];

        var latLngDevice = new google.maps.LatLng(latD, longD);
        var markerDevice = new google.maps.Marker({
                position: latLngDevice,
                draggable: false,
                icon: "img/icon-yourposition.png"
            });

        if(latD == 0 && longD == 0){
            zoomMap = 1;
        } else {
            markers.push(markerDevice);
        }
        
        // inizializzo la mappa
        var map = new google.maps.Map(document.getElementById('dealers-map'), {
          center: {lat: latD ,lng: longD},
          zoom: zoomMap
        });

        for (var i = 0; i < dataItems.length; i++) {
            var latLng = new google.maps.LatLng(dataItems[i].lat, dataItems[i].long);
            var idD = "#"+dataItems[i].id;
            var marker = new google.maps.Marker({
                position: latLng,
                draggable: false,
                // label: idD,
                icon: iconMarker,
                title: dataItems[i].nome
            });

            var content = "<b><a href=\"#dealoff1?iditem="+dataItems[i].id+"\">"+dataItems[i].nome+"</a></b><br/>"+dataItems[i].indirizzo+"<br/>"+dataItems[i].citta;

            var infowindow = new google.maps.InfoWindow({ content: "test" });

            google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
                return function() {
                    infowindow.setContent(content);
                    infowindow.open(map,marker);
                };
            })(marker,content,infowindow)); 

            markers.push(marker);
        }

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }  

    this.sortOrder = function(typeOfSort) {
        switch(typeOfSort) {
            case "distance":
                $(".dealers-list li").sort(sort_li_dist).appendTo('.dealers-list');
            break;
            case "alphabet":
                $(".dealers-list li").sort(sort_li_alph).appendTo('.dealers-list');
            break;
        }
        
        function sort_li_dist(a,b){
            return($(b).data('distance') < $(a).data('distance')) ? 1 : -1;
        }

        function sort_li_alph(a,b){
            // if('a'.charCodeAt(0)) a += 100;
            // if('b'.charCodeAt(0)) b += 100;
            return($(b).data('letters') < $(a).data('letters')) ? 1 : -1;
        }
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    // popolo il localStorage per Officine/Dealers
    this.ajaxCallDealer = function(typeData, latDevice, longDevice) {

        $("#serviceMessageDealersList .preloader5").hide(); $("#serviceMessageDealersList .txt").html("");

        $('#dealers-map').empty();
        $('ul.dealers-list').empty();

        $.ajax({
            method: 'GET',
            url: 'https://app.katoimer.com/appadmin/officineapp.php?'+typeData+'=1&latDevice='+latDevice+'&longDevice='+longDevice+'&tokenK='+app.tokenAppKato,
            crossDomain : true,
            dataType: 'json', 
            async: true,
            beforeSend: function(){ $("#serviceMessageDealersList .preloader5").show(); $("#serviceMessageDealersList .txt").html(app.messages.sendAjax);},
            success: function (response){ 
                console.log(" ajaxCallDealer "+typeData+" --- "+JSON.stringify(response.data));
                window.localStorage.setItem(typeData, JSON.stringify(response.data));  // JSON.stringify(response) response.data
                $("#serviceMessageDealersList .preloader5").hide();
                $("#serviceMessageDealersList .txt").html("");
                app.dealerObj.showAllItems(typeData, app.sortOfItem, app.viewOfItem );
                callLater(successCallback);
            },
            error: function(error){
                console.log(" ERROR ajaxCallDealer "+typeData+" --- "+JSON.stringify(response.data));
                $("#serviceMessageDealersList .preloader5").hide();
                $("#serviceMessageDealersList .txt").html(app.messages.nackAjaxRequest);
            }

        });


    }


}