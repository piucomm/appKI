var WebSqlStore = function(successCallback, errorCallback) {

    this.initializeDatabase = function(successCallback, errorCallback) {
        var self = this;
        
        app.db.transaction(
            function(tx) {
                self.tranx = tx;
                self.createTable();
                //self.addItemsData();
                    
            },
            function(error) {
                console.log('Transaction error: ' + error);
                if (errorCallback) errorCallback();
            },
            function() {
                console.log('Transaction success');
                if (successCallback) successCallback();
            }
        )
    }

    this.getTransaction = function() {
        return this.tranx;
    }

    this.createTable = function() {
        console.log(" create local table... ");
        var self = this;
        tx = self.getTransaction();
        // tx.executeSql('DROP TABLE IF EXISTS items');
        var sql = "CREATE TABLE IF NOT EXISTS items ( " +
            "id INTEGER PRIMARY KEY, " +
            "titolo VARCHAR(200), " +
            "sottotitolo VARCHAR(200), " +
            "descrizione VARCHAR(100), " +
            "immagine VARCHAR(50), " +
            "tonnellaggio VARCHAR(50), " +
            "pesooperativo VARCHAR(50), " +
            "caricooperativo VARCHAR(50), " +
            "peso VARCHAR(50), " +
            "id_cat INTEGER, " +
            "titolo_cat VARCHAR(200))";
        tx.executeSql(sql, null,
                function() {
                    console.log('Create table items success');
                },
                function(tx, error) {
                    alert('Create table error: ' + error.message);
                });

        // tx.executeSql('DROP TABLE IF EXISTS cats');
        var sql2 = "CREATE TABLE IF NOT EXISTS cats ( " +
            "id INTEGER PRIMARY KEY, " +
            "titolo VARCHAR(200), " +
            "descrizione VARCHAR(100), " +
            "id_cat INTEGER)";
        tx.executeSql(sql2, null,
                function() {
                    console.log('Create table cats success');
                },
                function(tx, error) {
                    alert('Create table error: ' + error.message);
                });

        // tx.executeSql('DROP TABLE IF EXISTS news');
        var sql = "CREATE TABLE IF NOT EXISTS news ( " +
            "id INTEGER PRIMARY KEY, " +
            "titolo VARCHAR(200), " +
            "descrizione VARCHAR(100), " +
            "immagine VARCHAR(50), " +
            "id_cat INTEGER)";
        tx.executeSql(sql, null,
                function() {
                    console.log('Create table news success');
                },
                function(tx, error) {
                    alert('Create table News error: ' + error.message);
                });


    }

    this.addItemsData = function(products) { 
        var self = this;
        return function(tx) {
            var nowDate = new Date().getTime();
            localStorage.setItem("localCatalogoListDate", nowDate);

            var prodl = products.length;
            var sql = "INSERT OR REPLACE INTO items " +
                "(id, titolo, sottotitolo, descrizione, tonnellaggio, pesooperativo, caricooperativo, peso, id_cat, titolo_cat) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            var proditem;
            var tonnellaggio = new Array();
            var dataImg = "";
                
            for (var i = 0; i < prodl; i++) {
                proditem = products[i];
                dataImg = self.getImageDataURL("https://app.katoimer.com/appadmin/upload/"+proditem.immagine);

                console.log("DEBUG::: Insert data items... "+proditem.titolo);

                tx.executeSql(sql, [proditem.id, proditem.titolo, proditem.sottotitolo, proditem.descrizione, proditem.tonnellaggio, proditem.pesooperativo, proditem.caricooperativo, proditem.peso, proditem.id_cat, proditem.titolo_cat],
                    function() {
                        console.log("DEBUG::: SUCCESS Insert data items... "+proditem.titolo);
                    },
                    function(tx, error) {
                        console.log("DEBUG::: ERROR Insert data items... "+proditem.titolo);
                });
            }

        }
    }

    this.getImageDataURL = function(url) {
        var data, canvas, ctx;
        var img = new Image();
        img.onload = function(){
            // Create the canvas element.
            canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            // Get '2d' context and draw the image.
            ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            // Get canvas data URL
            try{
                data = canvas.toDataURL();
                return {image:img, data:data};
            }catch(e){
                return e;
            }
        }
    }

    this.addCatData = function(cats) { 
        return function(tx) {

            var nowDate = new Date().getTime();
            localStorage.setItem("localCatalogoDate", nowDate); // setto la data di ultimo salvataggio in locale

            var catl = cats.length;
            var sql = "INSERT OR REPLACE INTO cats " +
                "(id, titolo, descrizione, id_cat) " +
                "VALUES (?, ?, ?, ?)";
            var cat;
            for (var i = 0; i < catl; i++) {
                cat = cats[i];
                tx.executeSql(sql, [cat.id, cat.titolo, cat.descrizione, cat.id_cat],
                    function() {
                        console.log('INSERT success');
                    },
                    function(tx, error) {
                        console.log('INSERT error: ' + error.message);
                });
            }

        }
    }

    this.addNewsData = function(news) { 
        return function(tx) {

            var newsl = news.length;
            var sql = "INSERT OR REPLACE INTO news " +
                "(id, titolo, descrizione, immagine, id_cat) " +
                "VALUES (?, ?, ?, ?, ?)";
            var itemnew;
            for (var i = 0; i < newsl; i++) {
                itemnew = news[i];
                tx.executeSql(sql, [itemnew.id, itemnew.titolo, itemnew.descrizione, itemnew.immagine, itemnew.id_cat],
                    function() {
                        console.log('INSERT success');
                    },
                    function(tx, error) {
                         console.log('INSERT error: ' + error.message);
                    });
            }
        }
    }


    this.getCatData = function(tx) { 
        console.log("Ok. leggo i dati in locale.");
        tx.executeSql("SELECT * FROM cats",[], this.getSuccess, this.getError);
        
    }

    this.getSuccess = function(tx,result) { 
        console.log("Titolo "+result.rows[0].titolo);
        $('#serviceMessageRegisterHome').html("Ok. leggo i dati in locale.");
        
    }

    this.getError = function(tx,result) { 
        console.log("Errore get cats local");
    }

    this.findByName = function(searchKey, callback) {
        this.db.transaction(
            function(tx) {

                var sql = "SELECT e.id, e.firstName, e.lastName, e.title, count(r.id) reportCount " +
                    "FROM employee e LEFT JOIN employee r ON r.managerId = e.id " +
                    "WHERE e.firstName || ' ' || e.lastName LIKE ? " +
                    "GROUP BY e.id ORDER BY e.lastName, e.firstName";

                tx.executeSql(sql, ['%' + searchKey + '%'], function(tx, results) {
                    var len = results.rows.length,
                        employees = [],
                        i = 0;
                    for (; i < len; i = i + 1) {
                        employees[i] = results.rows.item(i);
                    }
                    callback(employees);
                });
            },
            function(error) {
                alert("Transaction Error: " + error.message);
            }
        );
    }

    this.findById = function(id, callback) {
        this.db.transaction(
            function(tx) {

                var sql = "SELECT e.id, e.firstName, e.lastName, e.title, e.city, e.officePhone, e.cellPhone, e.email, e.managerId, m.firstName managerFirstName, m.lastName managerLastName, count(r.id) reportCount " +
                    "FROM employee e " +
                    "LEFT JOIN employee r ON r.managerId = e.id " +
                    "LEFT JOIN employee m ON e.managerId = m.id " +
                    "WHERE e.id=:id";

                tx.executeSql(sql, [id], function(tx, results) {
                    callback(results.rows.length === 1 ? results.rows.item(0) : null);
                });
            },
            function(error) {
                alert("Transaction Error: " + error.message);
            }
        );
    };

    /* rimuovo la tabella passata come parametro */
    this.deleteTable = function(table) {
        var self = this;
        return function(tx) {
 
            var sql = "DELETE FROM "+table;
            tx.executeSql(sql, null,
                function() {
                    console.log('Delete table '+table+' success');
                },
                function(tx, error) {
                    console.log('Delete table  '+table+'  error: ' + error.message);
                });
        }
    }


    this.initializeDatabase(successCallback, errorCallback);


}
