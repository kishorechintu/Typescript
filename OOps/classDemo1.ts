class Demo{
    constructor(){
    Demo.n=Demo.n+1;
    this.x=this.x+1;
    }
    static n=0;
    x=0;
    print()
    {
        console.log(`The value of N is ${Demo.n} The Value of X is--${this.x}`)
    }
}
let obj1=new Demo;
obj1.print();

let obj2=new Demo;
obj2.print();

let obj3=new Demo;
obj3.print();
