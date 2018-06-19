var Demo = require('../../src/demo.js');

var chai = require('chai'), assert = chai.assert, should = chai.should();
describe('async test', function () {
    before(function () {
        console.log('async test before');
    });

    afterEach(function () {
        console.log('async test after each')
    });

    it('async test #save', function (done) {
        var d = new Demo().save(done);
    })
});