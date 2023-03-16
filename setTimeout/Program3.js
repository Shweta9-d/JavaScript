console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 0);

console.log("End");

/**
 * Output :
 * Start
 * End
 * Callback
 */
