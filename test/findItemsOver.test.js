let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('items exceeding a specified threshold displayer' , function(){
    it("Should return 'all items over a given threshold'", function(){
        assert.deepEqual(findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27}], 25), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
        assert.deepEqual(findItemsOver([{"name":"kiwis","qty":5},{"name":"pears","qty":60}], 50), [{"name":"pears","qty":60}]);
    });
    it("Should return 'an object with a string value inputted by the user which was not part of the original list of input strings' and then returning all items over a given threshold", function(){
        assert.deepEqual(findItemsOver([{"name":"lemons","qty":60},{"name":"pears","qty":32}], 50), [{"name":"lemons","qty":60}]);
    });
})