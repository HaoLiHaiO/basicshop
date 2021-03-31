import products from "./products";

let productName: string = products[2].name;

const product = products.filter((product) => product.name === productName)[0];

const isAvailable =
  product.preOrder === true
    ? "Your product is on its way."
    : "Not available at the moment. Sorry for the inconvenience.";

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "9th Avenue, N. 72, Delaware, NY";

if (product.price >= 25) {
  shipping = 0;
  console.log("Free shipping for this product.");
} else {
  shipping = 5;
  console.log("Sorry, no free shipping under 25 dollars.");
}

if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;

console.log(`
Product: ${product.name} 
Address: ${shippingAddress} 
Price: ${product.price} 
Tax total: ${taxTotal} 
Shipping: ${shipping} 
Total: ${total}
`);
