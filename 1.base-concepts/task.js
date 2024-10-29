"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  let r, r1, r2;
  if (d === 0) {
    r = -b / (2 * a);
    arr.push(r);
  } else if (d > 0) {
    r1 = (-b + Math.sqrt(d)) / (2 * a);
    r2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(r1, r2)
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let monthlyAmount = S * (P + (P / ((Math.pow(1 + P, countMonths)) - 1)));
  let totalAmount = monthlyAmount * countMonths;
  totalAmount = totalAmount.toFixed(2);
  return +totalAmount;
}