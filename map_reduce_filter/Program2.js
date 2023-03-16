//filter() ->  used when we want to filter the arrar to obtain required value.

const arr = [5, 1, 3, 2, 6];

//filter odd values

function idOdd(x) {
  return x % 2;
}
const output = arr.filter(isOdd);

console.log(output);

//We can also like :

const output1 = arr.filter(function idOdd(x) {
  return x % 2;
});
console.log(output1);
//Arrow Function

const output2 = arr.filter((x) => x < 3);

console.log(output2);
