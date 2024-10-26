"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  // let d = b ** 2 - 4 * a * c;
  let d = Math.pow(b, 2) - 4 * a * c;
  let r;
  let r1;
  let r2;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    r = -b / (2 * a);
    arr.push(r);
  } else {
    r1 = (-b + Math.sqrt(d)) / (2 * a);
    r2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(r1, r2)
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

}