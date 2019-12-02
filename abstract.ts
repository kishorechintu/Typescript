interface IProduct{
    id:number;
    name:string;
    qty:number;
    price:number;
    total():number;
    print():void;

}
abstract class IProductTemplate implements IProduct{
    public id:number;
    public name:string;
    public qty:number;
    public price:number;
    abstract total():number;
    public print():void{
        console.log("Print All Properties Here");
    }
}
class Products implements IProductTemplate{
    id=122;
    name="TV";
    qty=2;
    price=4500.65;
    total():number{
        return this.qty * this.price;
    }
    print():void{
        console.log("ID is="+this.id+"\n"+"Name is="+this.name+"\n"+"Qty is="+this.qty+"\n"+"Price is="+this.price+"\n"+"Total is="+this.total());
    }
}

let productsObj=new Products;
productsObj.print();