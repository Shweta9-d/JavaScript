function x() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 3000);
  console.log("Namaste JavaScript");
}
x();

/**
 * output :
 * Namaste JavaScript
 * 1
 */
