function solution(str){
  str2="";
  for(var i=str.length-1;i>=0;i--)str2+=str[i];
  return str2;
}
//Another Sol
function solution(str){
  return str.split('').reverse().join("");
}
//Another Sol
