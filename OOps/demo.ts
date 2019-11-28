interface IProduct{
    Id:number;
   readonly Name:string;
    Price:number;
    Qty:Number;
    Total?():number;
}

let product:IProduct={

    Id:1,
    Name:"RedmiMobile",
    Price:13000.54,
    Qty:2,

    

}
//product.Name="Samsung Mobile";
console.log("Product Name is-->"+product.Name);