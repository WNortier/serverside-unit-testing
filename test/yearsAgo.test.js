assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function () {
    it("Should return how many years ago a given date is", function () {
        assert.deepEqual(yearsAgo(1955), 64);
        assert.deepEqual(yearsAgo(1510), 509);
    });
    it("Should return a negative number when passed a year higher than the current year", function () {
        assert.deepEqual(yearsAgo(2020), -1);
    });
})