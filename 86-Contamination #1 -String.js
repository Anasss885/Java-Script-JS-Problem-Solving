function contamination(text, char){
  if(text==""||char=='')return"";
  var str=char.repeat(text.length);
 return str;
}
//Another Sol
function contamination(text, char){
  return char.repeat(text.length);
}
