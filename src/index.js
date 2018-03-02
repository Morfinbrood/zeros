module.exports = function getZerosCount(number) {
  let five = 0;
  for (let i = 1; i <= number; i++) {
    let tempNumber = i;
   // console.log("i=      " + i);
    while (tempNumber % 5 === 0) {
   //   console.log(tempNumber);
      five++;
      tempNumber = tempNumber / 5;
    }

  }
  let zeroes = five;
  return zeroes;
}
