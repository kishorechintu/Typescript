var msg = "Hai Myname is Kishore";
var len = msg.length;
for (var i = 0; i < len; i++) {
    var first = msg.charAt(i);
    for (var j = i + 1; j < len; j++) {
        var second = msg.charAt(j);
        if (first === second) {
            if (first && second != " ") {
                console.log("Found At=" + i + "  And  " + j + " " + second);
            }
        }
    }
}
