## Promises

- A promise is an object which represents an eventual completion or failure of an async operation

- We use promises to have control and trust in our code. so that we don't need to pass a callback function to another function which may fail. Promises are immutable we can use it any where in the code and extract data from it

- Promises helps us to keep control of our code with us, instead of passing control to another function. 

- Promises ensures that our function is executed only once.

- Promise object is immutable, so we don't need to worry about it's immutability.

- It helps prevent callback hell, through promise chaining.

- It only has 3 states  only: "Pending", "Fulfilled", "Rejected".

`pending`: initial state, neither fulfilled nor rejected.

`fulfilled`: meaning that the operation was completed successfully.

`rejected`: meaning that the operation failed.