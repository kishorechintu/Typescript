class A{
    
public id:number=1;
public name:string="Tv";
public print():void{
    console.log("ID is ="+this.id+"\n"+"Name is ="+this.name);
}
    
}
class B{
    public price:number=6500.45;
    public print():void{
        let obj=new A;
        obj.print();
        console.log("Price is ="+this.price);
    }
}
let obj=new B;
obj.print();
