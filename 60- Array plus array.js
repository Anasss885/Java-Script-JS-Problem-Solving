function arrayPlusArray(arr1, arr2) {
 return arr1.reduce((a,b)=>a+b) + arr2.reduce((c,d)=>c+d);
}
//Another Sol
function arrayPlusArray(arr1, arr2) {
  return arr2.concat(arr1).reduce((a,b)=>a+b);
}
//Another Sol
function arrayPlusArray(arr1, arr2) {
  let bigArr=[...arr1,...arr2];
  return bigArr.reduce((a,b)=>a+b);
}
