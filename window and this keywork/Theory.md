
1. Shortest JavaScript Program : Empty file
type : `window` on console

2. If we type `this` on console, 
on global level this is pointing to the `window object`

3. Window : it is `global object`,  created along with `Global Execution Context`(GEC) 
and along with GEC `this` is created. (`window` and `this` given by `JS Engine`)

4. `Global object` in case of browser known as `window`

5. Even though our file is empty, JS Engine is creates a global object.

6. this === window : true => at global level in case of browser

7. Global Space : any code we write in javascript which is not inside a function

8. Whenever we create variable and function in global space, these variables and function gets attach to `global object` i.e. `window` .
