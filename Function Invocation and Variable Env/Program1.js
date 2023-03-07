//Debug the code

var x = 1;
a();
b();
console.log("Outside : ", x);

function a() {
  var a = 10;
  console.log("Inside : ", x);
}

function b() {
  var x = 100;
  console.log(x);
}
