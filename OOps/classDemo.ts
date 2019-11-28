class Database
{
    constructor(dbName:string){
        console.log("Connection Created Database Name is..."+dbName);
    }
    public insert(){
        console.log("Record Inserted");
    }
    public delete(){
        console.log("Record Deleted");
    }

}

let obj=new Database("MongoDB");
obj.insert();
obj.delete();

