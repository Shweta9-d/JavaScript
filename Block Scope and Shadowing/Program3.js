//Shadowing
var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a);
}

/**
 * Output :
 * 10
 * 20
 * 30
 *
 * var a inside bthe block shadows the var a which is outside the block
 */
