var msg = "maY i kNOW uR nAme";
var lwrmsg = msg.toLowerCase();
var msgarr = lwrmsg.split(" ");
var len = msgarr.length;
console.log("Message Array is =" + msgarr);
for (var i = 0; i < len; i++) {
    msgarr[i] = msgarr[i][0].toUpperCase() + msgarr[i].slice(1);
    console.log("In for Loop =" + msgarr);
}
console.log("Title Case is=" + msgarr.join(" "));
