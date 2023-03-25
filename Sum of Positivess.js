//First traditional Solution 
function positiveSum(arr) {
  var sum = 0;
  for ( i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {      
      sum += arr[i]; 
    }
  }
  return sum;
}
// another More optimized sol

function positiveSum(arr) {
  return arr.filter((i)=>i>0) // filtering all arr elements to be only +ve 
  .reduce((a,b)=>a+b,0) 
  // reduce function is taking a random pair of elements from arr in order to get the sum of whole elements and ,0 is essential as it's a default init value to sum over it 
}
