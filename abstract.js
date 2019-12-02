var IProductTemplate = /** @class */ (function () {
    function IProductTemplate() {
    }
    IProductTemplate.prototype.total = function () {
        return 0;
    };
    IProductTemplate.prototype.print = function () {
        console.log("Print All Properties Here");
    };
    return IProductTemplate;
}());
var Products = /** @class */ (function () {
    function Products() {
        this.id = 122;
        this.name = "TV";
        this.qty = 2;
        this.price = 4500.65;
    }
    Products.prototype.total = function () {
        return this.qty * this.price;
    };
    Products.prototype.print = function () {
        console.log("ID is=" + this.id + "\n" + "Name is=" + this.name + "\n" + "Qty is=" + this.qty + "\n" + "Price is=" + this.price + "\n" + "Total is=" + this.total());
    };
    return Products;
}());
var productsObj = new Products;
productsObj.print();
