console.log(a); //undefined : this is the value which JS Engine allocates to a while creating a memory

var a = 7; //after this line value of a is changed to 7

console.log(x);

/**
 * Output :
 * Uncaught ReferenceError: x is not defined
 */
