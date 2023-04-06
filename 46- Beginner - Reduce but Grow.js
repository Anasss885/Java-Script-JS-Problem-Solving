function grow(x){
  var mul=1;
  for(var i=0;i<x.length;i++){
    mul*=x[i];
  }
  return mul;
}
//Another Sol
function grow(x){
  return x.reduce((a, b)=> a * b);
}
