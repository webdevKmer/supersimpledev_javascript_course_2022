const toaster = 18.99
const shipping_toaster = 4.99

const basketball = 19
const tshirt = 10

let cart_items = toaster + basketball + tshirt
let total_before_tax = cart_items + shipping_toaster
let order_total = total_before_tax * (1.1)
console.log("Items :", cart_items);
console.log("Shipping & handling :", shipping_toaster);
console.log("Total before tax :", total_before_tax);
console.log("Estimated tax (10%):", total_before_tax*0.1);
console.log("Order Total :", order_total);

console.log(Math.floor(2.8));
console.log(Math.ceil(2.2));
