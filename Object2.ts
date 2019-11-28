let product:object;
product=
{
    id:1,
    name:"samsung tv",
    qty:2,
    price:1000.30,
    shippedto:["Mumbai","Chennai"],
    total:function()
    {
        return product.qty*product.price;
    } ,
    print :function()
    {
        console.log("Name="+product.name+"\n"+"Price="+product.price+"\n"+"Quantity="+product.qty+"\n"+"Shipped To="+product.shippedto+"\n"+"Total="+product.total());
    }

}

product.print();
product.name="Nike";
product.price=5030.23;
product.qty=3;
product.shippedto=["Hud","Vizag"];
product.print();