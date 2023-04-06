function isPalindrome(x) {
  for(var i=0;i<x.length;i++){
    if(x[i].toLowerCase()!=x[(x.length-1)-i].toLowerCase()) return false;
  }
  return true;
}
//Another Sol
function isPalindrome(x) {
  return x.split("").reverse().join("").toLowerCase()==x.toLowerCase()?true:false;
}
//Another Sol
function isPalindrome(x) {
  return x.split("").reverse().join("").toLowerCase()==x.toLowerCase();
}
