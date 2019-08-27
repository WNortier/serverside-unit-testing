assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function' , function(){
    it('Should return the total phone bill amounting from calls and sms', function(){
        assert.deepEqual(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
        assert.deepEqual(totalPhoneBill('call, sms, call, sms, sms, sms,'), 'R8.10');
    });
    it('Should return R0.00 if no input is passed', function(){
        assert.deepEqual(totalPhoneBill(''), 'R0.00');

    });
});