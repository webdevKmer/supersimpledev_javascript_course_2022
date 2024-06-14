const convertLength = (length, unit1, unit2) => {
  if (unit1 === unit2) {
    if (unit1 in ['miles', 'km', 'ft']) {
      console.log(length, unit1);
    }
  } else {
    if (unit1 === 'miles') && (unit2 == '') {
      console.log("length is ", length * 1.6, 'miles');
    } else {
      console.log("length is ", length / 1.6, 'km');
    }
  }
}
convertLength(50, 'km', 'km')
convertLength(50, 'miles', 'km')
convertLength(32, 'km', 'miles')