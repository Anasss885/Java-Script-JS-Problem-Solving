function between(a, b) {
  var arr=[]
  for(var i=a;i<=b;i++){
    arr.push(i);
  }
  return arr;
}
//Another sol
function between(a, b) {
  return Array(b-a+1).fill(a).map((n,i)=>n+i); // n for element , i for index
}
