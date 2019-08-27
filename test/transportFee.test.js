assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function', function () {
    it('Should return the cost of travelling home after a given shift', function () {
        assert.deepEqual(transportFee('morning'), 'R20');
        assert.deepEqual(transportFee('afternoon'), 'R10');
        assert.deepEqual(transportFee('nightshift'), 'free');
        it('Should return R50 if the transport fee is for the lateshift', function () {
            assert.deepEqual(transportFee('lateshift'), 'R50');
        });
    });
});

