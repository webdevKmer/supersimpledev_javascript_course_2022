const basketball = 20.95 * 2
const shipping_basketball = 4.99
const tshirt = 7.99 * 2
const shipping_tshirt = 4.99

let cart_items = basketball + tshirt
let shipping_handling = shipping_basketball + shipping_tshirt
let total_before_tax = cart_items + shipping_handling
let order_total = total_before_tax * (1.1)

console.log("Items :", `$${cart_items.toFixed(2)}`);
console.log("Shipping & handling :", `$${shipping_handling}`);
console.log("Total before tax :", `$${total_before_tax}`);
console.log("Estimated tax (10%):", `$${(total_before_tax*0.1).toFixed(2)}`);
console.log("Order Total :", `$${order_total.toFixed(2)}`);

