/*qunit*/

var chai = require('chai'), assert = chai.assert, should = chai.should();

var ok = assert.isOk;

suite('Array');

test('#length', function () {
    var arr = [1, 2, 3];
    ok(arr.length === 3);
});

test('#indexOf()', function () {
    var arr = [1, 2, 3];
    ok(arr.indexOf(1) === 1);
    ok(arr.indexOf(2) === 1);
    ok(arr.indexOf(3) === 2);
});

suite('String');

test('#length', function () {
    ok('foo'.length === 3);
});


suite("group a");
before(function () {
    //..
});
afterEach(function () {
    console.log('after');
});

test("a basic test example", function () {
    assert.ok(true);
});
test("a basic test example 2", function () {
    ok(true);
});