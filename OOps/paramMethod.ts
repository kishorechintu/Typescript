class paramMethod{
    public print(n:number):void{
        for(let i=1;i<=n;i+=2)
        {
            console.log("The even Numbers is="+(i));
        }

    }
}
let obj=new paramMethod;
obj.print(50);