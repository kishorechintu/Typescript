var mfd = new Date();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("Date is=" + mfd + "Day is=" + day[mfd.getDay()] + "Month is=" + month[mfd.getMonth()]);
console.log("Date is " + day[mfd.getDay()] + ", Month is " + month[mfd.getMonth()] + ", Year is " + mfd.getFullYear() + "\nLocal Date is " + mfd.toLocaleDateString() + ", Time is " + mfd.toLocaleTimeString() + "\n\n");
