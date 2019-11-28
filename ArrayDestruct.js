var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var products = ["lg tv", "Mi mob", "Rebon glasses", "Mi band", "Poco f1", "audi car"];
var tv = products[0], mobile = products[1], rest = products.slice(2);
console.log("tv is-->" + tv, +"" + "Mobile is -->" + mobile + "remaining elements are-->" + rest);
//spreading Array
var elect = ["watch", "mob", "usb"];
var shoe = ["bata", "lee", "nike"];
var allproducts = __spreadArrays(["one", "two"], elect, shoe, ["onemore"]);
console.log("After Spreading-->" + allproducts.toString());
