var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.printDetails = function (obj) {
        for (var value in obj) {
            console.log(obj[value]);
        }
    };
    return Demo;
}());
var sample1 = /** @class */ (function () {
    function sample1() {
    }
    return sample1;
}());
var tst = new sample1;
tst.msg = ["Hi", "MY", "Name", "Is", "Kishore"];
var obj1 = new Demo;
obj1.printDetails(tst);
