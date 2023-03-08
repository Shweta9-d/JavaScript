function a() {
  var b = 10;
  c();
  function c() {}
}
a();
console.log(b);

/**
 * Output = ReferenceError : b is not defined
 */
