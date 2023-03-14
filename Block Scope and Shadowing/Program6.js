const c = 100; //script scope
{
  const c = 10; //block scope
  console.log(c);
}
console.log(c);

/**
 * Output:
 * 10
 * 100
 */
