var msg;
msg = {
    id: 1,
    name: "Kishore",
    price: 3400,
    qty: 5
};
for (var product in msg) {
    console.log(product + " " + typeof product + " " + msg[product]);
}
