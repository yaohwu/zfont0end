// 使用 qunit 时注释掉该文件

// var assert = require('assert');
var chai = require('chai'), assert = chai.assert;
var should = chai.should;
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('Demo', function () {
    describe('test1', function () {
        it('should equal', function () {
            assert.equal(1, 1);
        })
    })
});


