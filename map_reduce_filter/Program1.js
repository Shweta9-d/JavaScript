// .map()

const arr = [5, 1, 3, 2, 6];

//Double - [10, 2, 6, 4, 12]

//Triple - [15, 3, 9, 6, 18]

//Binary - ["101", "1", "11", "10", "110"]

function double(x) {
  return x * 2;
}
const doubleOutput = arr.map(double);
console.log(doubleOutput);

function triple(x) {
  return x * 3;
}
const tripleOutput = arr.map(triple);
console.log(tripleOutput);

/**  function binary(x) {
   return x.toString(2);
 }
 const binaryOutput = arr.map(binary);
*/

/** const binaryOutput = arr.map(function binary(x) {
  return x.toString(2);
});
*/

//Arrow function
const binaryOutput = arr.map((x) => x.toString(2));

console.log(binaryOutput);
