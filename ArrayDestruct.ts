let products:string[]=["lg tv","Mi mob","Rebon glasses","Mi band","Poco f1","audi car"];
let [tv,mobile,...rest]=products;

console.log("tv is-->"+tv,+""+"Mobile is -->"+mobile+"remaining elements are-->"+rest);


//spreading Array

let elect:string[]=["watch","mob","usb"];
let shoe:string[]=["bata","lee","nike"];
let allproducts:string[]=["one","two",...elect,...shoe,"onemore"];

console.log("After Spreading-->"+allproducts.toString());
