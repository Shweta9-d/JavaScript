function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y; //function + lexical scope is returned
}
var z = x();
console.log(z);
z();

/**
 * output :
 * f y(){
 *    console.log(a);
 * }
 * 7
 */
