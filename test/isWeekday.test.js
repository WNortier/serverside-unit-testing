assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function' , function(){
    it("Should return true if passed a day of the work week", function(){
        assert.deepEqual(isWeekday("Monday"), true);
        assert.deepEqual(isWeekday("Tuesday"), true);
        assert.deepEqual(isWeekday("Wednesday"), true);
        assert.deepEqual(isWeekday("Thursday"), true);
        assert.deepEqual(isWeekday("Friday"), true);
        
    });
    it("Should return false if a passed a day of the weekend", function(){
        assert.deepEqual(isWeekday("Saturday"), false);
})
});