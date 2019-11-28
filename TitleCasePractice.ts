let tstmsg:string="haI hOW aRe yOu";
let lwrmsg:string=tstmsg.toLocaleLowerCase();
let tstmsgarr:string[]=lwrmsg.split(" ");

for(let i=0;i<tstmsgarr.length;i++)
{
    tstmsgarr[i]=tstmsgarr[i][0].toUpperCase()+tstmsgarr[i].slice(1);
}
console.log("New Msg is"+tstmsgarr.toString());
console.log("Length is--"+tstmsgarr.length);






















































































