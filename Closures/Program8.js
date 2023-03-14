function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();

/**
 * Scope :
 *
 * Local
 *  this: Window
 * Closure(x)
 *  a: 7
 * Closure(z)
 *  b: 900
 */
