assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellVille function', function () {
	it('should return true if a registration is from Bellville', function () {
		assert.equal(true, isFromBellville('CY224422'));
	});
	it('should return false if a registration is not from Bellville', function () {
		assert.equal(false, isFromBellville('CA999'));
	});
});
