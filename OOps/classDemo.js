var Test = /** @class */ (function () {
    function Test(y) {
        this.x = 0;
        Test.s = Test.s + y;
        this.x = this.x + y;
    }
    Test.prototype.print = function () {
        console.log("S=" + Test.s + " X=" + this.x);
    };
    Test.s = 0;
    return Test;
}());
var TestObj = new Test(5);
TestObj.print();
var obj2 = new Test(6);
obj2.print();
var obj3 = new Test(5);
obj3.print();
