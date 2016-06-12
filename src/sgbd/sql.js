var SQL = (function() {
    function Commands(sql) {
        this.sql = sql || "";
    };

    Commands.prototype.select = function(columns, alias) {
        columns = (typeof columns === "undefined") ? ['*'] : columns;

        this.sql += "SELECT " + columns.join(", ");

        return this;
    };

    Commands.prototype.from = function(tablenames, alias) {
        this.sql += " FROM ";
        var aliasPart = undefined;

        for (var i = 0; i < tablenames.length; i++) {
            // If theres an alias, append it to the end of the string
            aliasPart = (alias && alias[i] ? (" " + alias[i] + ", ") : ", ");
            this.sql += tablenames[i] + "" + aliasPart;
        }

        // Remove last comma
        this.sql = this.sql.replace(/, (?=[^,]*$)/, '');
        return this;
    };

    Commands.prototype.where = function() {

    };

    Commands.prototype.build = function() {
        return this.sql;
    };

    return Commands;
})();
