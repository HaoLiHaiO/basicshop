"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = products_1["default"][2].name;
var product = products_1["default"].filter(function (product) { return product.name === productName; })[0];
var isAvailable = product.preOrder === true
    ? "Your product is on its way."
    : "Not available at the moment. Sorry for the inconvenience.";
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = "9th Avenue, N. 72, Delaware, NY";
if (product.price >= 25) {
    shipping = 0;
    console.log("Free shipping for this product.");
}
else {
    shipping = 5;
    console.log("Sorry, no free shipping under 25 dollars.");
}
if (shippingAddress.match("New York")) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
console.log("\nProduct: " + product.name + " \nAddress: " + shippingAddress + " \nPrice: " + product.price + " \nTax total: " + taxTotal + " \nShipping: " + shipping + " \nTotal: " + total + "\n");
