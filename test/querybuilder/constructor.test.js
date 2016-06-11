describe("Easy Test => ", function(){
	var querybuilder;

	beforeEach(function(){
		querybuilder = new QueryBuilder("Undefined");
	});

	it("should return empty =>", function(){
		querybuilder = new QueryBuilder("Undefined");
		console.log(querybuilder);

		expect(querybuilder).toEqual({});
	});

	it("should return sgbd", function(){
		querybuilder = new QueryBuilder("MySQL");

		expect(querybuilder).toEqual();
	})
});