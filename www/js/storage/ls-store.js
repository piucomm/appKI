var LocalStorageStore = function(successCallback, errorCallback) {

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

    this.findById = function(id, callback) {
        var employees = JSON.parse(window.localStorage.getItem("dealers"));
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
    }

    this.showAllItems = function(typeItem, orderBy, viewItem, callback){ // typeItem = dealers, officine

        var dataOfficineDealers = JSON.parse(window.localStorage.getItem(typeItem));

        if(viewItem == "list") {
            this.viewList(dataOfficineDealers, typeItem, orderBy);
        } else if(viewItem == "map") {
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

          
        //console.log("showAllID "+employees);
        //callLater(callback, employees);
    }

    this.viewList = function(dataItems,typeItem, orderBy) {
        var dataDistance = 0;
        var dataInitials = 0;

        $('#dealers-map').empty();
        $('ul.dealers-list').empty();
        
        for (var i = 0; i < dataItems.length; i++) {
            //dataDistance = this.getDistance(dataItems[i].lat, dataItems[i].long);
            dataDistance = i + Math.floor((Math.random() * 100) +1);
            dataInitials = dataItems[i].nome.toString().charCodeAt(0);

            $('ul.dealers-list').attr('class',"dealers-list "+typeItem).append(
            $('<li>').attr('data-distance',dataDistance).attr('data-letters',dataInitials).append(
                $('<a>').attr('href','#employees/?id='+dataItems[i].id).append(
                    '<div class="nomeItem" >'+dataItems[i].nome+'<br/><span class="addressItem">'+dataItems[i].citta+' - '+dataItems[i].nazione+' - '+dataDistance+' Km </span></div>'),
            ));  // dataCatalog[i].nome
        }

        // riordino la lista
        this.sortOrder(orderBy);  
    }

    this.viewMap = function(dataItems,typeItem) {
        var dataDistance = 0;
        var dataInitials = 0;
        var iconMarker = "";

        var latD = 43.48832915873673; //parseFloat(localStorage.getItem("latDevice"));
        var longD = 11.12504082682124; //parseFloat(localStorage.getItem("longDevice"));

        $('#dealers-map').empty();
        $('ul.dealers-list').empty();

        if(typeItem == "dealers"){
            iconMarker = "/img/icon-dealers.png";
        } else if(typeItem == "officine") {
            iconMarker = "/img/icon-officine.png";
        }   

        // inizializzo la mappa
        var map = new google.maps.Map(document.getElementById('dealers-map'), {
          center: {lat: latD ,lng: longD},
          zoom: 8
        });

        var markers = [];

        var latLngDevice = new google.maps.LatLng(latD, longD);
        var markerDevice = new google.maps.Marker({
                position: latLngDevice,
                draggable: false,
                label: "X"
            });
        markers.push(markerDevice);

        for (var i = 0; i < dataItems.length; i++) {
            var latLng = new google.maps.LatLng(dataItems[i].lat, dataItems[i].long);
            var marker = new google.maps.Marker({
                position: latLng,
                draggable: false,
                label: i+"A"
                // icon: iconMarker
            });
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
            if('a'.charCodeAt(0)) a += 100;
            if('a'.charCodeAt(0)) b += 100;
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
    this.ajaxCallDealer = function(typeData) {
        $.ajax({
            method: 'GET',
            url: 'https://app.katoimer.com/appadmin/officineapp.php?'+typeData+'=1&tokenK='+app.tokenAppKato, //employeesApp.php  officineApp.php
            crossDomain : true,
            dataType: 'json', 
            async: false,

            success: function (response){ 
                // console.log(JSON.stringify(response));
                window.localStorage.setItem(typeData, response.data);  // JSON.stringify(response) response.data
                callLater(successCallback);
            },
            error: function(error){
                         //alert(response.success);
                alert('Could not connect to the database per ' + typeData + '' + error);
                        // window.location = "main.html";
            }
        }); 
    }

    this.getDistance = function(itemLat, itemLong) {
        var valDist = 0;
        var urlDist = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins="+itemLat+","+itemLong+"&destinations="+localStorage.getItem("latDevice")+","+localStorage.getItem("longDevice")+"&mode=driving&language=it-IT&key=AIzaSyBkM3TGhJ-xPVTp3406S4fyMhUkwxY7NAo";
        $.ajax({
            method: 'GET',
            url: urlDist, 
            crossDomain : true,
            dataType: 'json', 
            async: false,
            success: function (response){ 
                if(response.status == "OK"){
                    console.log(JSON.stringify(response));
                    if(valDist = response.rows[0].elements[0].status == "OK"){
                        valDist = response.rows[0].elements[0].distance.value  / 1000 ;
                        valDist = valDist.toFixed(2);
                    } else {
                        valDist = "0";
                    }
                    
                }
            },
            error: function(error){
                         //alert(response.success);
                alert('Could not connect to the database ls-store' + error);
                        // window.location = "main.html";
            }
        }); 
        return valDist;
    }

}