//Closure with Event Listeners

function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
  });

  /**
   * Scope
   * Local
   *    this: button#clickMe
   * Closure (attchEventListener)
   *    count: 4
   * Global
   */
}
