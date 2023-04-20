function mergeArrays(arr1, arr2) {
  var arr3=arr1.concat(arr2);
  arr3=new Set(arr3);
  arr3=Array.from(arr3);
  return arr3.sort((a,b)=>a-b)
}
//Another Sol
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr2.concat(arr1).sort((a,b)=>a-b)));
}
