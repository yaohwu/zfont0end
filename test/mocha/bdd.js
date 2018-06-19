/*BDD*/


var chai = require('chai'), assert = chai.assert, should = chai.should();
describe('Demo', function () {
    describe('test1', function () {
        it('should equal', function () {
            assert.equal(1, 1);
        })
    })
});


describe('Array', function () {
    before(function () {
        console.log('Array before');
    });

    after(function () {
        console.log('Array after')
    });

    beforeEach(function () {
        console.log('Array before for each')
    });

    afterEach(function () {
        console.log('Array after for each')
    });

    describe('#indexOf()', function () {
        describe('when not present', function () {
            it('should not throw an error', function () {
                (function () {
                    [1, 2, 3].indexOf(4);
                }).should.not.throw();
            });
            it('should return -1', function () {
                [1, 2, 3].indexOf(4).should.equal(-1);
            });
        });
        describe('when present', function () {
            it('should return the index where the element first appears in the array', function () {
                [1, 2, 3].indexOf(3).should.equal(2);
            });
        });
    });
});
