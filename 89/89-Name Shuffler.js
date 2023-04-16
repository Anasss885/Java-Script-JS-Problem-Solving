function nameShuffler(str){
  let [first,second]=str.split(" ");
  return second+" "+first;
  
}
//another Sol
function nameShuffler(str){
return str.split(" ").reverse().join(" ");
}
