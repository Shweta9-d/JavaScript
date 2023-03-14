let b = 100; //script scope
{
  let b = 10; //block scope
  console.log(b);
}
console.log(b);

/**
 * Output:
 * 10
 * 100
 */
