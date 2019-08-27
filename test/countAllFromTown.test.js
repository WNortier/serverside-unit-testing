assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function' , function(){
    it("Should return the number of registrations from a given town", function(){
        assert.deepEqual(countAllFromTown("CJ345123, CK123192","CJ"), 1);
    });

    it("Should return registration numbers that begin or end with letters from a given town", function(){
        assert.deepEqual(countAllFromTown("345123CJ, 123192CK","CJ"), 1);
    });

})