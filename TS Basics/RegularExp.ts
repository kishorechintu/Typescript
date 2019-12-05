let pass:string="Helloworld123";
let regexp:any=/(?=.[A-Z])\w{4-15}/;

if(pass==match(regexp))
{
    console.log("Strong Password");
}
else
{
    console.log("Weak Password");
}