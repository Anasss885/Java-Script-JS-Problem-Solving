function invert(array) {
  var arr=[];
  for(var i=0;i<array.length;i++){
   arr.push(-array[i]);
  }
  return arr
}
// another sol

function invert(array) {
  return array.map((i)=>i*-1);
}
