describe("SQL => ", function() {
    var sqlBuilder = undefined;

    beforeEach(function() {
        sqlBuilder = new SQL();
    });

    it("Should be an empty string", function() {
        expect(sqlBuilder).toBeDefined();
        expect(sqlBuilder.build()).toEqual("");
    });

    it("Should do a full select", function() {
        expect(sqlBuilder.select().build()).toEqual("SELECT *");
    });

    it("should filter columns", function() {
        expect(sqlBuilder.select(["nome", "turma"]).build()).toEqual("SELECT nome, turma");
    });
});
