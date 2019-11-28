var Demo = /** @class */ (function () {
    function Demo() {
        this.x = 0;
        Demo.n = Demo.n + 1;
        this.x = this.x + 1;
    }
    Demo.prototype.print = function () {
        console.log("The value of N is " + Demo.n + " The Value of X is--" + this.x);
    };
    Demo.n = 0;
    return Demo;
}());
var obj1 = new Demo;
obj1.print();
var obj2 = new Demo;
obj2.print();
var obj3 = new Demo;
obj3.print();
