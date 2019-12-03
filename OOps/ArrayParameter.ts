class ArrayParam{
    public print(names:string[]):void{
        for(var x of names)
        {
            console.log(x);
        }
    }
}
let obj2=new ArrayParam;
obj2.print(["Tv","shoe","Mobile"]);
obj2.print(new Array("Hi","How","Are","You"));