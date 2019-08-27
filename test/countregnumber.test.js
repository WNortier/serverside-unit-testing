assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('registration number counter' , function(){
    it("Should return the amount of registration numbers in a string", function(){
        assert.equal(countRegNumber("1234GP"), 1);
        assert.equal(countRegNumber("1234GP, 123DND"), 2);
    });
    it('Should return invalid input when passed an empty string instead of a string containing registration numbers', function(){
        assert.equal(countRegNumber(''), 'invalid input');
    });
});

