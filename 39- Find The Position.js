function position(l){
  var str=" abcdefghijklmnopqrstuvwxyz";
  for(var i=1;i<str.length;i++){
    if(str[i]===l) return "Position of alphabet: "+i;
  }
  
}
//Another Sol
function position(l){
  var str="abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${str.indexOf(l)+1}`;
}
