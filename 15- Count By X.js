function countBy(x, n) {
  var z = [];
  for(var i=0;i<n;i++){
    z[i]=(i+1)*x;
  }
  return z;
}
// Another Sol 

function countBy(x, n) {
  var z = [];
  for(var i=0;i<n;i++){
    z.push((i+1)*x);
  }
  return z;
}

//Another Sol
function countBy(x, n) {
     return  Array.from(Array(n+1).keys()).slice(1).map((i)=>i*x);
 }
