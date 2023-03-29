function doubleChar(str) {
  var str2="";
  for(var i=0;i<str.length;i++){
    str2+=str[i]+str[i];
  }
  return str2;
}

///Another Solution 

function doubleChar(str) {
  var str2=str.split('').map((i)=>i.repeat(2)).join('');
  return str2;
}

//Another Sol. 
