class Base{
    public id:number=1;
    public name:string="Kishore";
    public print():void{
        console.log("Id is="+this.id+"\n"+"Name is="+this.name);
    }

}

class Derived extends Base{
    public price:number=45444;
    public print():void{
        super.print();
        console.log("Price is ="+this.price);
    }
}
let newObj=new Derived;
newObj.print();
