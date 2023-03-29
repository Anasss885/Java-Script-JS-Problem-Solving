function basicOp(operation, value1, value2)
{
  if(operation=='+')return value1+value2;
  else if(operation=='-')return (value1-value2);
   else if(operation=='*')return value1*value2;
  else if(operation=='/')return value1/value2;
}

// Another Sol

function basicOp(operation, value1, value2)
{
 return eval(value1+operation+value2)
}

/*  Worth saying that eval built-in function is
generally discouraged in JavaScript because it can introduce security risks, 
as well as making code harder to understand and debug.
*/
