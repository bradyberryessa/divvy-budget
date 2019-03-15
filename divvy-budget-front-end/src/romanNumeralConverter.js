export default number => {
  var romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  var romanNumber = "";
  Object.keys(romanNumerals).forEach(numeral => {
    var numOfTimes = Math.floor(number / romanNumerals[numeral]);
    if (numOfTimes) {
      romanNumber += numeral.repeat(numOfTimes);
      number = number % romanNumerals[numeral];
    }
  });
  return romanNumber;
};
