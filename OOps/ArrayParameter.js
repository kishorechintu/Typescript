var ArrayParam = /** @class */ (function () {
    function ArrayParam() {
    }
    ArrayParam.prototype.print = function (names) {
        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
            var x = names_1[_i];
            console.log(x);
        }
    };
    return ArrayParam;
}());
var obj2 = new ArrayParam;
obj2.print(["Tv", "shoe", "Mobile"]);
obj2.print(new Array("Hi", "How", "Are", "You"));
