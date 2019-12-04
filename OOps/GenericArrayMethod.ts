class Demo{
    public printDetails<T>(obj:T){
        for(var value in obj)
        {
            console.log(obj[value]);
        }
    }
}
class sample1{
    msg:string[];
}

let tst=new sample1;
tst.msg=["Hi","MY","Name","Is","Kishore"];
let obj1=new Demo;
obj1.printDetails<sample1>(tst);
