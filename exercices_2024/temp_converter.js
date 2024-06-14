// Fahrenheit = (Celsius * 9/5) + 32
// Celsius = (Fahrenheit -32) * 5/9

const convert_temp = (value, unit) => {
  if (unit.toLowerCase() === 'f') {
    console.log("Converting in Fahrenheit...")
    console.log("Result : ", (value * 9 / 5) + 32);
  } else if (unit.toLowerCase() === 'c') {
    console.log("Converting in Celsius...")
    console.log("Result : ", (value - 32) * 5 / 9);
  } else {
    console.log("Don't know this conversion...")
  }
}

convert_temp(25, 'f')
convert_temp(86, 'c')
convert_temp(16, 'w')
convert_temp(-5, 'f')