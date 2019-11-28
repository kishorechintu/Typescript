let msg:string[]=new Array();
msg[0]="kishore";
msg[1]="kumar";
msg[3]="chintu";


let numbers:number[]=[2000,4000,10000,3000,15400,344554];
let newmsgs:string[]=msg.splice(1,0,"hai ","kasdjfklads ","alksfklasf ","klajsflkajsfd");

function price(x)
{
    x>=10000;
    return x;
}
console.log("The Elements in Array is --"+msg.toString());
console.log("The Joined Elements are--->"+msg.join(" "));
console.log("The Sliced elements are--"+msg.slice(1));


console.log("The spliced Elements in New line are-->"+msg.toString());

console.log("Function searched elements are--"+numbers.filter(function f1(price)
{

    price>=5000;
    return price;
}));
console.log("new msgs are--->"+newmsgs.toString());
console.log("Searched elements are"+newmsgs.filter(function search(item)
{
    return item=="kumar";
}
));
