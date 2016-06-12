describe("FROM => ", function() {
    var sqlBuilder = undefined;

    beforeEach(function() {
        sqlBuilder = new SQL();
    })

    it("should select the table with all columns", function() {
        var sql = sqlBuilder.select().from(["tablename"]).build();
        expect(sql).toEqual("SELECT * FROM tablename");
    });

    it("should select the table with few columns", function() {
        var sql = sqlBuilder.select(["column1", "column2"]).from(["tablename"]).build();
        expect(sql).toEqual("SELECT column1, column2 FROM tablename");
    });

    it("should select with multiple tables", function() {
        var sql = sqlBuilder.select().from(["tablename", "tablename2", "tablename3"]).build();
        expect(sql).toEqual("SELECT * FROM tablename, tablename2, tablename3");
    });

    it("should show the alias", function() {
        var sql = sqlBuilder.select().from(["tablename"], ["t"]).build();
        expect(sql).toEqual("SELECT * FROM tablename t");
    });

    it("should show multiple  alias", function() {
        var sql = sqlBuilder.select().from(["name1", "name2", "name3"], ["n1", "n2", "n3"]).build();
        expect(sql).toEqual("SELECT * FROM name1 n1, name2 n2, name3 n3");
    });

    it("should show multiple alias with column filter", function() {
        var sql = sqlBuilder.select(["column1", "column2"]).from(["name1", "name2", "name3"], ["n1", "n2", "n3"]).build();
        expect(sql).toEqual("SELECT column1, column2 FROM name1 n1, name2 n2, name3 n3");
    });
})
