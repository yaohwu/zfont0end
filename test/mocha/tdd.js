/*TDD*/
var chai = require('chai'), assert = chai.assert, should = chai.should();
suite('Array', function () {

    suiteSetup(function () {
        console.log('suite set up');
    });

    suiteTeardown(function () {
        console.log('suite tear down');
    });

    setup(function () {
        // ...
    });
    teardown(function () {
        // ...
    });

    suite('#indexOf()', function () {
        test('should return -1 when not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});