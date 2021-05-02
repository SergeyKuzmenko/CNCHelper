const DB = {
    DB_DEFAULT_NAME: 'cnchelper_db',
    DB_DEFAULT_FILE: 'app/db.json',
    DB_ITEMS: {},
    init: function () {
        if (!this.dbExists()) {
            this.insertDefaultsValues();
            console.log('Database: Initialized');
        } else {
            this.readDB();
            console.log('Database: Read');
        }
    },
    dbExists: function () {
        return !(localStorage.getItem(this.DB_DEFAULT_NAME) === null || localStorage.getItem(this.DB_DEFAULT_NAME) === undefined);
    },
    insertDefaultsValues: function () {
        this.loadJSON(this.DB_DEFAULT_FILE, function (data) {
            localStorage.setItem(DB.DB_DEFAULT_NAME, data);
            DB.readDB();
        });
    },
    loadJSON: function (filelocation, callback) {
        const xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open('GET', filelocation, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.responseText);
            }
        };
        xhr.send(null);
    },
    readDB: function () {
        if (this.dbExists()) {
            this.DB_ITEMS = JSON.parse(localStorage.getItem(this.DB_DEFAULT_NAME));
            return this.DB_ITEMS;
        }
    },
    writeDB: function () {
        if (this.dbExists()) {
            localStorage.setItem(this.DB_DEFAULT_NAME, JSON.stringify(this.DB_ITEMS));
            return true;
        } else {
            return false;
        }
    },
    get: function (table, item) {
        this.readDB();
        if (typeof table !== 'undefined' && typeof item !== 'undefined') {
            return this.DB_ITEMS[table][item];
        } else if (typeof table !== 'undefined' && typeof item == 'undefined') {
            return this.DB_ITEMS[table];
        } else if (typeof table == 'undefined') {
            return this.DB_ITEMS;
        } else {
            return undefined;
        }
    },
    set: function (table, item, value) {
        this.DB_ITEMS[table][item] = value;
        if (this.writeDB()) {
            return this.DB_ITEMS[table][item];
        }
    },
    clear: function () {
        this.DB_ITEMS = [];
        localStorage.removeItem(this.DB_DEFAULT_NAME);
        return true;
    }
};