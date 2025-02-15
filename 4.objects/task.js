function Student(name, gender, age) {

  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student = new Student('nastya', 'female', 17);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {

  if (!(this.hasOwnProperty("marks")) || marks.length == 0) {
    return;
  }
  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  if (!(this.hasOwnProperty("marks")) || this.marks.length == 0) {
    return 0;
  }
  let sum = this.marks.reduce((alt, mark) => alt + mark, 0);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this["excluded"] = reason;
}