function reverseWords(str){
  var str2=[];
  str=str.split(" ");
  var cntr=0;
  for(var i=str.length-1;i>=0;i--){
    str2[cntr]=str[i];
    cntr+=1;
  }
  return str2.join(" ");
}
///Another Sol

function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}

//Another Sol
