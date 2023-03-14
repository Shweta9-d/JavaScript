//Illegal shadowing

let a = 20;
{
  var a = 20;
}

/**
 * Output :
 * SyntaxError: Identifier 'a' has already been declared
 */
