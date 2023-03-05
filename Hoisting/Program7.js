/**
 * getName as a arrow function
 */

getName();
console.log(x);
console.log(getName);

var x = 7;

var getName = () => {
  console.log("Namaste JavaScript");
};

/**
 * O/P:
Program7.js:5 Uncaught TypeError: getName is not a function

Explanation : When getName is an arrow function, so it is behave
same like a variable annd not a function.
-So in memory allocation phase, it allocates undefined to getName

 */
