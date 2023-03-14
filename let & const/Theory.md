## let & const and ReferenceError vs SyntaxError vs TypeError 

- let and const are hoisted. we cant use them before initialization is result of `"temporal dead zone"`.
- js use different memory than global execution context to store let and cost. which is reason behind `"temporal dead zone"`
- level of strictness : `var << let<< const` .
- `var` //no temporal dead zone, can redeclare and re-initialize, stored in GES
- `let` //use TDZ, can't re-declare, can re-initialize, stored in separate memory
- `const` //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
- syntax error is similar to compile error. while type and reference error falls under run time error.
- `syntax error` : violation of JS syntax
- `type error` : while trying to re-initialize const variable
- `reference error` : while trying to access variable which is not there in global memory.