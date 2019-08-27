assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function () {
	it('Should return true if a registration is from  GP, L, EC or MP', function () {
		assert.equal(true, regCheck("333444L", "L"));
	});
	it('should return true if a registration is from  GP, L, EC or MP', function () {
		assert.equal(true, regCheck("222333GP", "GP"));
	});
	it('should return true if a registration is from  GP, L, EC or MP', function () {
		assert.equal(true, regCheck("22245EC", "EC"));
	});
	it('should return true if a registration is from  GP, L, EC or MP', function () {
		assert.equal(true, regCheck("222333MP", "MP"));
	});
	it('should return false if a registration is not from  GP, L, EC or MP', function () {
		assert.equal(false, regCheck("222333ND", "GP"));
	});
});
