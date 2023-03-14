## Closure

### Q. What is closure?
Ans: The function bundled with its lexical environment closed to that function.
` simply function + Lexical environment`
- closures have very special place in runtime environment


The function in JavaScript is you can assign a variable for a function and also you can pass function as a parameter even you can return the function in JavaScript!!

### Q .What does the closure do in my JavaScript programs?
Ans: Whenever I call a function in JavaScript the closure maintains its values(lexical env.) and function in its own runtime and when that specific function executed, it returns with own environment even the variable vanished after its execution

In `closures`, values in variable are `pass by reference` hence there values can be changed, and whenever comes the closure inside closure(multilevel one) we can see the function refers the 'parent' variable 