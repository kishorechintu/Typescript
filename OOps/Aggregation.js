var A = /** @class */ (function () {
    function A() {
        this.id = 1;
        this.name = "Tv";
    }
    A.prototype.print = function () {
        console.log("ID is =" + this.id + "\n" + "Name is =" + this.name);
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
        this.price = 6500.45;
    }
    B.prototype.print = function () {
        var obj = new A;
        obj.print();
        console.log("Price is =" + this.price);
    };
    return B;
}());
var obj = new B;
obj.print();
