var paramMethod = /** @class */ (function () {
    function paramMethod() {
    }
    paramMethod.prototype.print = function (n) {
        for (var i = 1; i <= n; i += 2) {
            console.log("The even Numbers is=" + (i));
        }
    };
    return paramMethod;
}());
var obj = new paramMethod;
obj.print(50);
