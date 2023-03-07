var a = 10;
function b() {
  var x = 10;
}

//so to access the variables/function defined in the global space ,
//we can use any of the below:
console.log(window.a);
console.log(a);
console.log(this.a);
