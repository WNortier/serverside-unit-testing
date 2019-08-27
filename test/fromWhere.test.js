let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function' , function(){
    it("Should return the town of a given registration number", function(){
        assert.deepEqual(fromWhere("123CY"), "Bellville");
        assert.deepEqual(fromWhere("123CJ"), "Paarl");
        assert.deepEqual(fromWhere("123CA"), "Cape Town");
        assert.deepEqual(fromWhere("123CL"), "Some other place!");
        it("Should return Gauteng when a GP registration number is given", function(){
        assert.deepEqual(fromWhere("123GP"), "Gauteng");
    });
});

});