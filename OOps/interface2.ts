interface IOne{
    readonly id:number;
    name:string;
}
interface ITwo {
    qty:number;
}
interface IThree {
    price:number;
}
interface all extends IOne,ITwo,IThree{

}
let four:all={
    id:1,
    name:"Kumar",
    qty:3,
    price:45666.43
}

four.name="chintu";

four.qty=5;
four.price=5000;
console.log(`Id is ${four.id} Name is --${four.name} Quantity is --${four.qty} Price is --${four.price}`);