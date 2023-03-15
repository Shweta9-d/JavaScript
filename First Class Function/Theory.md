## First Class Function and Anonumpus Function

### Function Statement / Function Declaration
- A normal function that we create using Naming convention. & By this we can do the Hoisting.
```javascript
function a(){
    console.log("a called");
}
```

### Function Expression 
- When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
```javascript
var b = function {
    console.log("a called");
}
```

### Anonymous Function
- A Function without the name is known as Anonymous Function. It is used in a place where function are treated as value.
-  function where there is no need to define name for the function, it just can be assigned to variable
```javascript
function(){

}
```

### Named Function Expression
- A function with  name is known as Named Function Expression.
-  Normal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain)
```javascript
var a = function xyz(){
    console.log("Named Function Expression");
}
```

### Function Parameters and Arguments 
- When we create function and put some variables in () that is our `Parameters`
```javascript
function a( param1, param2 ){
   console.log("Parameters")
}
```
- When we call this function & pass a variable in this ( ) that is our `Arguments`. 

```javascript
ab( 4, 5 );
```

### First Class Function or First Class Citizens
The Ability of use function as value :
1. Can be passed as an Argument,
2. Can be executed inside a closured function. 
3. Can be taken as return form.

```javascript
var b = function(param){
    return function xyz(){
        console.log("First Class Function")
    }
}
```
- Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.