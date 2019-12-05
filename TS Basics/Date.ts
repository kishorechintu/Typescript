let mfd:any=new Date();
let day:string[]=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];
let month:string[]=["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log("Date is="+mfd+"Day is="+day[mfd.getDay()]+"Month is="+month[mfd.getMonth()]);

console.log(`Date is ${day[mfd.getDay()]}, Month is ${month[mfd.getMonth()]}, Year is ${mfd.getFullYear()}
Local Date is ${mfd.toLocaleDateString()}, Time is ${mfd.toLocaleTimeString()}

`);