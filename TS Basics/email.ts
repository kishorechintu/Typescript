let email:string="Kishore.p29@gmail.com";
let atpos:number=email.indexOf("@");
let charnumber=email.indexOf(".");
let lastindex=email.lastIndexOf(".");
if(atpos==-1)
{
    console.error("Invalid Email");
}
else{
    console.log("Email verified");

}
let emailId:string=email.substring(0,atpos);
let domain:string=email.substring(atpos+1);

console.log("Your Id="+emailId+"\n"+"Domain="+domain);  
console.log("... Charecter is ="+charnumber);
console.log("...last index is ="+lastindex
);