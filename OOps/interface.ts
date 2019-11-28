interface IProducts{
    id:number;
    name:string;
}

interface IProcucts2{
    qty:number;
    price:number;
}

interface total extends IProcucts2,IProducts{

}
let product2:total;
    product2.id=1;
    product2.name="Kishore";
    product2.qty=3;
    product2.price=23334;
    

console.log(`ID is--${product2.id} ${`\\n`} Name is ${product2.name} Quantity is ${product2.qty} Price is -->${product2.price}`);

