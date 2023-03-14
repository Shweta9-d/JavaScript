function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y; //function + lexical scope is returned
}
var z = x();
console.log(z);
z();

/**
 * Output :
 * f y(){
 *    console.log(a);
 * }
 * 100
 */
