var define = require('requirejs').define;

define([], function () {
    var Demo = function () {
        this.name = "Demo";
    };

    Demo.prototype.hello = function () {
        return "Hello I AM A Demo"
    };

    Demo.prototype.getName = function () {
        return this.name;
    };

    Demo.prototype.save = function (callback) {
        setTimeout(new function () {
            callback();
            console.log('save success')
        }, 5000);
    };

    return Demo;
});