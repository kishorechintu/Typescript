var Database = /** @class */ (function () {
    function Database(dbName) {
        console.log("Connection Created Database Name is..." + dbName);
    }
    Database.prototype.insert = function () {
        console.log("Record Inserted");
    };
    Database.prototype["delete"] = function () {
        console.log("Record Deleted");
    };
    return Database;
}());
var obj = new Database("MongoDB");
obj.insert();
obj["delete"]();
