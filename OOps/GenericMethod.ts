class Product{
    name:string;
    qty:number;
}
class Employee{
    name:string;
    salary:number;
    desig:string;

}

class sample{
    public printDetails<T>(obj:T){
        for(var value in obj)
        {
            console.log(value+"   "+obj[value]);
        }
    }
}
let obj=new sample;
let prod=new Product;
prod.name="TV";
prod.qty=4;

let emp=new Employee;
emp.name="Kishore";
emp.salary=55000;
emp.desig="MEAN STACK Developer";
obj.printDetails<Product>(prod);
obj.printDetails<Employee>(emp);