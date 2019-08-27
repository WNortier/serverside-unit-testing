assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");

describe('The mostProfitableDepartment function', function () {
    it("Should return the most profitable department from given salesdata", function () {
        assert.deepEqual(mostProfitableDepartment([{ "department": "hardware", "sales": 4500, "day": "Monday" }, { "department": "outdoor", "sales": 1500, "day": "Monday" }]), "hardware");
        assert.deepEqual(mostProfitableDepartment([{ "department": "plumbing", "sales": 9000, "day": "Monday" }, { "department": "outdoor", "sales": 1500, "day": "Monday" }]), "plumbing");
    });
    it("Should return invalid input if the department value has not been defined", function () {
        assert.deepEqual(mostProfitableDepartment([{ "department": "", "sales": 4500, "day": "Monday" }, { "department": "outdoor", "sales": 1500, "day": "Monday" }]), "invalid input");
    });
})