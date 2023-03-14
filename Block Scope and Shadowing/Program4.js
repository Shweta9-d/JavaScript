var a = 100;
{
  var a = 10;
}
console.log(a);

/**
 * Output :
 * 10
 *
 * Because both a refering to the same memory location i.e global
 */
