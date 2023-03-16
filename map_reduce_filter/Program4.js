const arr = [5, 2, 4, 1, 3];

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax(arr));

const output = arr.reduce(function (max, curr) {
  if (max > curr) {
    max = curr;
  }
  return max;
}, 0);

console.log(output);
