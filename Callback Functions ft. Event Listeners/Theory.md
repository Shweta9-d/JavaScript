## Callback Functions ft. Event Listeners

## Callback Functions 
 - Function that is passed on as argument to another function is called callback function.
- Using callback we can do async things inside JS as JS is synchronous and single threaded language.
 ```javascript
 function x(y){

 }

 x(function y(){

 })
 ```

 - function y is callback function.

 ## setTimeout for asynchronous
 ```javascript
 setTimeout(function () {
  console.log("Timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});
 ```

 ### Why we need to remove EventListeners ?
 Ans : EventListeners are heavry it takes memory so wee meed to remove