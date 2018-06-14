var WebSqlStore = function(successCallback, errorCallback) {

    this.initializeDatabase = function(successCallback, errorCallback) {
        var self = this;
        
        app.db.transaction(
            function(tx) {
                self.tranx = tx;
                self.createTable();
                    //self.addItemData();
                    
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
        tx.executeSql('DROP TABLE IF EXISTS items');
        var sql = "CREATE TABLE IF NOT EXISTS items ( " +
            "id INTEGER PRIMARY KEY, " +
            "titolo VARCHAR(200), " +
            "descrizione VARCHAR(100), " +
            "immagine VARCHAR(50), " +
            "id_cat INTEGER)";
        tx.executeSql(sql, null,
                function() {
                    console.log('Create table items success');
                },
                function(tx, error) {
                    alert('Create table error: ' + error.message);
                });

        tx.executeSql('DROP TABLE IF EXISTS cats');
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

        tx.executeSql('DROP TABLE IF EXISTS news');
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

    this.addItemData = function(products) { 
        return function(tx) {
            // var products = [
            //     {"id": 1, "titolo": "Ryan", "descrizione": "Howard", "immagine":"Vice President, North East", "id_cat": 0}
            //     ];
            var l = products.length;
            var sql = "INSERT OR REPLACE INTO items " +
                "(id, titolo, descrizione, immagine, id_cat) " +
                "VALUES (?, ?, ?, ?, ?)";
            var e;
            for (var i = 0; i < l; i++) {
                e = products[i];
                tx.executeSql(sql, [e.id, e.titolo, e.descrizione, e.immagine, e.id_cat],
                    function() {
                        console.log('INSERT success');
                    },
                    function(tx, error) {
                         console.log('INSERT error: ' + error.message);
                    });
            }
        }
    }

    this.addCatData = function(products) { 
        return function(tx) {
            // var products = [
            //     {"id": 1, "titolo": "Ryan", "descrizione": "Howard", "immagine":"Vice President, North East", "id_cat": 0}
            //     ];
            console.log("add cat data "+products);
            var l = products.length;
            var sql = "INSERT OR REPLACE INTO cats " +
                "(id, titolo, descrizione, id_cat) " +
                "VALUES (?, ?, ?, ?)";
            var e;
            for (var i = 0; i < l; i++) {
                e = products[i];
                tx.executeSql(sql, [e.id, e.titolo, e.descrizione, e.id_cat],
                    function() {
                        console.log('INSERT success');
                    },
                    function(tx, error) {
                        console.log('INSERT error: ' + error.message);
                    });
            }
        }
    }

    this.addNewsData = function(products) { 
        return function(tx) {
            // var products = [
            //     {"id": 1, "titolo": "Ryan", "descrizione": "Howard", "immagine":"Vice President, North East", "id_cat": 0}
            //     ];
            var l = products.length;
            var sql = "INSERT OR REPLACE INTO news " +
                "(id, titolo, descrizione, immagine, id_cat) " +
                "VALUES (?, ?, ?, ?, ?)";
            var e;
            for (var i = 0; i < l; i++) {
                e = products[i];
                tx.executeSql(sql, [e.id, e.titolo, e.descrizione, e.immagine, e.id_cat],
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

    this.initializeDatabase(successCallback, errorCallback);

}
