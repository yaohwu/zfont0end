var Demo = require('../../src/demo.js');

var chai = require('chai'), assert = chai.assert, should = chai.should();

describe('async test', function () {
    before(function (done) {
        console.log('async test before');
        sucCallback = function () {
            // some success method
            console.log('test before save success');
            done();
        };
        var d = new Demo().save(sucCallback);
    });

    afterEach(function () {
        console.log('async test after each')
    });

    it('async test #save', function (done) {
        sucCallback = function () {
            // some success method
            console.log('save success');
            done();
        };
        var d = new Demo().save(sucCallback);
    })
});