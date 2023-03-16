## .map() .filter() .reduce()

- map(), filter() and reduce() are higher order function in JavaScript.

### map() :

- map method is used when we want transformation of whole array.

### filter() :

- filter is used when we want to filter the arrar to obtain required value.


### reduce() : 

- reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).

- reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.
 
- reduce() - takes two parameters 
1. function : which takes two parameters :
    1. accumulator : accumulator is sum
    2. current : represents each element in array
2. any initial value which we pass to accumulator in below example it is 0
- return single value

- Example : calculate sum of elements in the array
```javascript
const arr = [5, 1, 3, 4, 5];

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(output);
```
5. Homework:
```javascript
const output = user.reduce(function(acc, curr){
    if (curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, [ ])

console.log(output);
```