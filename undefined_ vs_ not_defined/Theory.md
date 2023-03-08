##undefined and not defined

`JavaScript` is `loosely` typed language / `weakly` typed  language

## undefined
- `undefined` is like a placeholder which is place in the memory.
- `undefined` is different than `not defined`.
- `undefined` is a speacial keyword it takes up its own memory
- `undefined` is kept for time being until variable assign some other value

### Examples :

```javascript
    var a;
    console.log(a);
```

```javascript
    console.log(a);
    var a = 10;
```

## not defined

- `not defined` means not allocated memory.

### Example : 

```javascript
    console.log(x);
```

### Note :
- Never do 
    ```javascript
        a = undefined;
    ```
- It is possible to assign `undefined` to a variable.It is not good practice