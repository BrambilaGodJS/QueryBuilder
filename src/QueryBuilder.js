var QueryBuilder = (function() {
    var obj = {
        "Oracle": {},
        "MySQL": {},
        "SQLServer": {},
        "PostgreSQL": {},
        "DB2": {}
    };

    return function(sgbd) {
        return obj[sgbd];
    };
})();
