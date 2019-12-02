class Employee{
public id:number=132;
public name:string="Kishore";
public Desig:string="Developer";
public print():void{
    console.log("Employee Id is="+this.id+"\n"+"Name is="+this.name+"\n"+"Designation is="+this.Desig+"\n");
}
}
class ParttimeEmployee{

    public id:number=234;
    public name:string="Chinni";
    public Desig:string="Tester";
    public print():void{
        console.log("Employee Id is="+this.id+"\n"+"Name is="+this.name+"\n"+"Designation is="+this.Desig+"\n");
    }
    
}
class FulltimeEmployee{
    public id:number=543;
    public name:string="Chintu";
    public Desig:string="Admin";
    public print():void{
        console.log("Employee Id is="+this.id+"\n"+"Name is="+this.name+"\n"+"Designation is="+this.Desig+"\n");
    }
    
}
let Employees:any[]=new Array();

Employees[0]=new Employee;
Employees[1]=new ParttimeEmployee;
Employees[2]=new FulltimeEmployee;

for(var i=0;i<Employees.length;i++)
{   console.log("Type is="+typeof Employees)
    Employees[i].print();
}
