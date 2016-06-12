var SQL = (function() {
    function Commands(sql) {
        this.sql = sql || ""
    };

    Commands.prototype.select = function(columns) {
        columns = (typeof columns === "undefined") ? ['*'] : columns;

        this.sql += "SELECT " + columns.join(", ");

        return this;
    };

    Commands.prototype.from = function(tablename) {
        this.sql += " from " + tablename;
    };

    Commands.prototype.build = function() {
        return this.sql;
    };

    var commands = new Commands();

    return Commands;
})();
