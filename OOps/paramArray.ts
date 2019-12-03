class sample{
    public print(price:number,...name:string[]):void{
        for(var value of name)
        {
            console.log(value);
            
        }
        console.log(price);
    }
}
let obj1=new sample;
obj1.print(4500.56,"Kishore","Kumar","chintu");
obj1.print(56700.54,"Hi","How","Are","You");
//Rest parameter should always be declared at last in formal parameters
