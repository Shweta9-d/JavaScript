function x() {
  var a = 7;
  y();
}
x(function y() {
  console.log(a);
});
