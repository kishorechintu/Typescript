var pass = "Helloworld123";
var regexp = /(?=.[A-Z])\w{4-15}/;
if (pass == pass.match(regexp)) {
    console.log("Strong Password");
}
else {
    console.log("Weak Password");
}
