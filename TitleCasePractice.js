var tstmsg = "haI hOW aRe yOu";
var lwrmsg = tstmsg.toLocaleLowerCase();
var tstmsgarr = lwrmsg.split(" ");
for (var i = 0; i < tstmsgarr.length; i++) {
    tstmsgarr[i] = tstmsgarr[i][0].toUpperCase() + tstmsgarr[i].slice(1);
}
console.log("New Msg is" + tstmsgarr.toString());
console.log("Length is--" + tstmsgarr.length);
