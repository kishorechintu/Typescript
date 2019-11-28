var nam = new Array("klshore", "kumar");
var room = ["venni", "Chinni"];
var another = ["one", "two", "three"];
var combine = nam.concat(room, another);
another.copyWithin(1, 2);
console.log("Combined Array is-->" + combine.toString());
console.log("After Copied .." + another.toString());
