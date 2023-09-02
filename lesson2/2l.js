function Celcius_to_Fahrenheit(temp) {
    return (temp*9/5) +32
}

function Fahrenheit_to_Celcius(temp) {
    return (temp-32) * 5/9
}

// --------------- 2L ----------------
console.log(Celcius_to_Fahrenheit(25));
// --------------- 2M ----------------
console.log(Fahrenheit_to_Celcius(86));
// --------------- 2N ----------------
console.log(Celcius_to_Fahrenheit(-5));