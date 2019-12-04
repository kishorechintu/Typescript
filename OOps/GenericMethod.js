var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var sample = /** @class */ (function () {
    function sample() {
    }
    sample.prototype.printDetails = function (obj) {
        for (var value in obj) {
            console.log(value + "   " + obj[value]);
        }
    };
    return sample;
}());
var obj = new sample;
var prod = new Product;
prod.name = "TV";
prod.qty = 4;
var emp = new Employee;
emp.name = "Kishore";
emp.salary = 55000;
emp.desig = "MEAN STACK Developer";
obj.printDetails(prod);
obj.printDetails(emp);
