//let msg:string="hoiasdf kheoid ksdfhie3 i know whor ksjdfi kuksKIJIKIKFK kjsak fk";
let newmsg:string="hiai sahfioe aksdjfl KLJUIJ asjei kijuaif iksljfas idfi;eirfasf00";
let str=newmsg.toLowerCase();
let strarr:string[]=str.split(" ");

for(let i=0;i<strarr.length;i++)
{
    strarr[i]=strarr[i][0].toUpperCase()+strarr[i].slice(1);

}
console.log("Without join="+strarr);
console.log("new sting is="+strarr.join("--"));
