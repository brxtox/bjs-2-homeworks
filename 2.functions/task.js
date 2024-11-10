
function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = +((arr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  })) / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

/* function isEmpty(arr) {
  if (arr.length === 0) {
    return 0;
  }
} */

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  })
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  arr.map((num) => {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else if (num % 2 !== 0) {
      sumOddElement += num;
    }
  })
  return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    } else {
      continue;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let array of arrOfArr) {
    const funcResult = func(...array);
    if (!!(funcResult > maxWorkerResult)) {
      maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
}
