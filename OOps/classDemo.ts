class Test{
    static s=0;
    x=0;
    constructor(y:number){
        Test.s=Test.s+y;
        this.x=this.x+y;
    }
    print()
    {
        console.log(`S=${Test.s} X=${this.x}`);
    }
    
}
let TestObj=new Test(5);
TestObj.print();
let obj2=new Test(6);
obj2.print();
let obj3=new Test(5);
obj3.print();