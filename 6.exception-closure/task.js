function parseCount(parsedItem) {
  let result = Number.parseFloat(parsedItem);

  if (Number.isNaN(result)) {
    throw new Error("Невалидное значение");
  }

  return result;
}

function validateCount(parsedItem) {
  try {
    return parseCount(parsedItem);
  } catch (error) {
    return error;

  }
}

//Задача 2. Треугольник

class Triangle {
  constructor(firstSide, secondSide, thirdSide) {
    if (firstSide + secondSide <= thirdSide || firstSide + thirdSide <= secondSide || secondSide + thirdSide <= firstSide) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;
  }
  get perimeter() {
    return this.firstSide + this.secondSide + this.thirdSide;
  }
  get area() {
    const p = this.perimeter / 2;
    const areaValue = Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide));
    return Number(areaValue.toFixed(3));
  }
}

function getTriangle(firstSide, secondSide, thirdSide) {
  try {
    return new Triangle(firstSide, secondSide, thirdSide);
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }

}
