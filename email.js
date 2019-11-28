var email = "Kishore.p29@gmail.com";
var atpos = email.indexOf("@");
var charnumber = email.indexOf(".");
var lastindex = email.lastIndexOf(".");
if (atpos == -1) {
    console.error("Invalid Email");
}
else {
    console.log("Email verified");
}
var emailId = email.substring(0, atpos);
var domain = email.substring(atpos + 1);
console.log("Your Id=" + emailId + "\n" + "Domain=" + domain);
console.log("... Charecter is =" + charnumber);
console.log("...last index is =" + lastindex);
