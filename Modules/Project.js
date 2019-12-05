var Project1;
(function (Project1) {
    var TeamA;
    (function (TeamA) {
        var Class1 = /** @class */ (function () {
            function Class1() {
            }
            Class1.prototype.print = function () {
                console.log("Team A -Class 1");
            };
            return Class1;
        }());
        TeamA.Class1 = Class1;
    })(TeamA = Project1.TeamA || (Project1.TeamA = {}));
})(Project1 || (Project1 = {}));
var Project1;
(function (Project1) {
    var TeamB;
    (function (TeamB) {
        var class1 = /** @class */ (function () {
            function class1() {
            }
            class1.prototype.print = function () {
                console.log("Team B- Class 1");
            };
            return class1;
        }());
        TeamB.class1 = class1;
    })(TeamB = Project1.TeamB || (Project1.TeamB = {}));
})(Project1 || (Project1 = {}));
///<reference path="TeamA.ts"/>
///<reference path="TeamB.ts"/>
var Aobj = new Project1.TeamA.Class1();
var Bobj = new Project1.TeamB.class1();
Aobj.print();
Bobj.print();
