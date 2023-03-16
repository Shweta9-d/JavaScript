//Optimizing Program2.js
// Writing generic function
//we are passing logic to a function

const radius = [3, 1, 2, 3];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (arr, logic) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};

//Here we created function like map()
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

//calculate() works exactly like a map
console.log(radius.map(area));

console.log(radius.calculate(area));

// console.log(calculate(radius, circumference));
// console.log(calculate(radius.diameter));
