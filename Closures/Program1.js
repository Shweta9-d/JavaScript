function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

/**
 * Output: 7
 *
 * on sources :
 *
 * Local
 *  this:window
 * Closure(x)
 *  a:7
 */
