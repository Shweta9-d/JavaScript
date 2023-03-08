### The Scope Chain, Scope and Lexical Environment

## Scope : 
It means where we can access a specific variable/function in our code.

There are two aspects : 
1. What is the scope of the variable : where we can access variable
2. Is variable inside the scope : When we say variable is inside the scope, means can we access variable b inside c() 
    check `Program4`

# `Scope` is directly dependent on `lexical environment`.

## Lexical Environment :    
`Lexical` means in hierarchy or in sequence.

- Whenever a `Global Execution Context` is created, `lexical environment` also created.
- Lexical environment is local memory along with lexical environment of its parent.

### Example:
```javascript
function a() {
  var b = 10;
  c();
  function c() {}
}
a();
console.log(b);
```

- c() is physically present inside a() & a() is lexically inside global scope. This is known as lexical.
- In memory creation phase we also get refernce of lexical env of its parent along with variable/function.
- Lexical parent of c() is a, lexical parent of a() is GEC and lexical parent of GEC is null. 
because GEC has no parent and there procedure is nown as scope chaining.

- If variable accessed is not found in scope chain, then we get `not defined` error.