/**
 *We are trying to access getName() even before initializing it
 *We are trying to access x before initializing it
 */

getName();
console.log(x);

var x = 7;

function getName() {
  console.log("Namaste JavaScript");
}
