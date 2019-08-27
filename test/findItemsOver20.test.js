let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('The findItemsOver20 function' , function(){
    it("Should return all items with a threshold over 20", function(){
        assert.deepEqual(findItemsOver20([{"name":"apples","qty":30},{"name":"pears","qty":37},{"name":"bananas","qty":27}],), [{"name":"apples","qty":30},{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
    });
    it("Should return no items over threshold if no items are over 20", function(){
        assert.deepEqual(findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":7},{"name":"bananas","qty":17}],), "no items over threshold");
    
    });
})