"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else if (discriminant > 0) {
    let rootNumberOne = (-b + Math.sqrt(discriminant)) / (2 * a);
    let rootNumberTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(rootNumberOne, rootNumberTwo);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = (percent / 100) / 12;
  let loanPrincipal = amount - contribution;
  let monthlyAmount = loanPrincipal * (monthlyPercent + (monthlyPercent / ((Math.pow(1 + monthlyPercent, countMonths)) - 1)));
  let totalAmount = monthlyAmount * countMonths;

  return +totalAmount.toFixed(2);
}