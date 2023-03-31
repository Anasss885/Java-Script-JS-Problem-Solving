function monkeyCount(n) {
  var arr=[];
  for(var i=1;i<=n;i++){
    arr.push(i);
  }
  return arr;
}
// another Sol
function monkeyCount(n) {
return [...Array(n).keys()].map((a)=>a+1); 
}
