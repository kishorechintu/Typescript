var sample = /** @class */ (function () {
    function sample() {
    }
    sample.prototype.print = function (price) {
        var name = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            name[_i - 1] = arguments[_i];
        }
        for (var _a = 0, name_1 = name; _a < name_1.length; _a++) {
            var value = name_1[_a];
            console.log(value);
        }
        console.log(price);
    };
    return sample;
}());
var obj1 = new sample;
obj1.print(4500.56, "Kishore", "Kumar", "chintu");
obj1.print(56700.54, "Hi", "How", "Are", "You");
//Rest parameter should always be declared at last in formal parameters
