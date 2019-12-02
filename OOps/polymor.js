var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 132;
        this.name = "Kishore";
        this.Desig = "Developer";
    }
    Employee.prototype.print = function () {
        console.log("Employee Id is=" + this.id + "\n" + "Name is=" + this.name + "\n" + "Designation is=" + this.Desig + "\n");
    };
    return Employee;
}());
var ParttimeEmployee = /** @class */ (function () {
    function ParttimeEmployee() {
        this.id = 234;
        this.name = "Chinni";
        this.Desig = "Tester";
    }
    ParttimeEmployee.prototype.print = function () {
        console.log("Employee Id is=" + this.id + "\n" + "Name is=" + this.name + "\n" + "Designation is=" + this.Desig + "\n");
    };
    return ParttimeEmployee;
}());
var FulltimeEmployee = /** @class */ (function () {
    function FulltimeEmployee() {
        this.id = 543;
        this.name = "Chintu";
        this.Desig = "Admin";
    }
    FulltimeEmployee.prototype.print = function () {
        console.log("Employee Id is=" + this.id + "\n" + "Name is=" + this.name + "\n" + "Designation is=" + this.Desig + "\n");
    };
    return FulltimeEmployee;
}());
var Employees = new Array();
Employees[0] = new Employee;
Employees[1] = new ParttimeEmployee;
Employees[2] = new FulltimeEmployee;
for (var i = 0; i < Employees.length; i++) {
    console.log("Type is=" + typeof Employees);
    Employees[i].print();
}
