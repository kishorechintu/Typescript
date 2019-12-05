var obj3;
obj3 =
    {
        id: 3,
        name: "New Object",
        price: 4500.54,
        qty: 6,
        shippedto: ["Delhi,hyd"],
        print: function () {
            console.log("Id is=" + obj3.id + "\n" + "Name is=" + obj3.name + "\n" + "Price is=" + obj3.price + "\n" + "Qty is =" + obj3.qty + "\n" + "Shipped to=" + obj3.shippedto);
        },
        calc: function () {
            var total;
            console.log("Total is =" + obj3.price * obj3.qty);
            ;
        }
    };
obj3.print();
obj3.calc();
obj3.id = 5;
obj3.name = "Kishore";
obj3.shippedto = ["new Delhi", "sec"];
obj3.qty = 6;
obj3.price = 12000;
obj3.print();
obj3.calc();
