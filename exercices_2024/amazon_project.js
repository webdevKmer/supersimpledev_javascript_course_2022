basketball = 20.95
t_shirt = 7.99
cart = basketball * 2 + t_shirt * 2
console.log('Total Cart: $' + cart.toFixed(2));
shipping = 4.99
total_shipping = shipping * 2
console.log('Shipping and Handling : $' + total_shipping);
total_before_tax = cart + total_shipping
console.log('Total before Tax : $' + total_before_tax);
estimated_tax = total_before_tax * 0.1
console.log('Estimated Tax : $' + estimated_tax.toFixed(2));
order_total = total_before_tax + estimated_tax
console.log('Order Total : $' + order_total.toFixed(2));
