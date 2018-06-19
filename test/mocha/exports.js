/*Exports*/

var chai = require('chai'), assert = chai.assert, should = chai.should();
module.exports = {
    before: function () {
        // ...
    },
    after: function () {
        // ...
    },

    beforeEach: function () {

    },

    afterEach: function () {

    },

    'Array':
        {
            '#indexOf()':
                {
                    'should return -1 when not present':

                        function () {
                            [1, 2, 3].indexOf(4).should.equal(-1);
                        }
                }
        }
};