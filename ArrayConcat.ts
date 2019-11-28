let nam:string[]=new Array("klshore","kumar");
let room:string[]=["venni","Chinni"];
let another:string[]=["one","two","three"];
let combine:string[]=nam.concat(room,another);

another.copyWithin(1,2);
console.log("Combined Array is-->"+combine.toString());

console.log("After Copied .."+another.toString());