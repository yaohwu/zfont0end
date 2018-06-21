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
    }, 5000);
};

module.exports = Demo;
