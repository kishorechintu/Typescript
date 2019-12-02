let msg:string="maY i kNOW uR nAme";
let lwrmsg=msg.toLowerCase();
let msgarr:string[]=lwrmsg.split(" ");
let len:number=msgarr.length;
console.log("Message Array is ="+msgarr);
for(let i=0;i<len;i++){
    msgarr[i]=msgarr[i][0].toUpperCase()+msgarr[i].slice(1);
    console.log("In for Loop ="+msgarr)
}
console.log("Title Case is="+msgarr.join(" "));