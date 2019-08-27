assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function () {
    it('Should return the number of given Paarl registrations in a string', function () {
        assert.deepEqual(countAllPaarl("CJ345123, CK123192"), 1);

        it("Should return 0 when passed an empty string", function () {
            assert.deepEqual(countAllPaarl(""), 0);
        });

    })
});