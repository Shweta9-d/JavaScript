// reduce()
// takes two parameters :
// 1. function : which takes two parameters :
//1. accumulator : accumulator is sum
//2. current : represents each element in array
//2. any initial value which we pass to accumulator in below example it is 0
//return single value

const arr = [5, 1, 3, 2, 6];

//sum or max

//Normal Function
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

console.log(findSum(arr));

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
