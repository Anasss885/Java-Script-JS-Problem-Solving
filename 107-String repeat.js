function repeatStr (n, s) {
  var str="";
  for(var i=0;i<n;i++){
    str+=s;
  }
  return str;
}
//Another Sol
function repeatStr (n, s) {
  return s.repeat(n);
}
