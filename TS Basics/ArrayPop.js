var names = ["Tv", "Movile", "Shoe"];
console.log("original items in names is -->" + names.toString());
names.push("kishore", "kumar", "chintu");
console.log("after push  items in names is -->" + names.toString());
names.unshift("venni");
console.log("after Unshift  items in names is -->" + names.toString());
names.splice(1, 3, "we", "are", "together");
console.log("after splice  items in names is -->" + names.toString());
if (names.indexOf("vid") == -1) {
    console.log("not found");
}
else {
    console.log("found at--" + names.indexOf("kishore"));
}
