function firstNonConsecutive (arr) {
  for(var i=0;i<arr.length-1;i++){
    if(Math.abs(arr[i]-arr[i+1])!=1)
      return arr[i+1];
  }
  return null;
}
//Another Sol
