function squareOrSquareRoot(array) {
  //return array;  
  var arr=[];
  for(var i=0;i<array.length;i++){
    if(Number.isInteger(Math.sqrt(array[i])))
      arr[i]=Math.sqrt(array[i]);
    else
      arr[i]=array[i]*array[i];
  }
  return arr;
  
}
// Another sol;

function squareOrSquareRoot(arr) {
  return arr.map((i)=>Number.isInteger(Math.sqrt(i))?Math.sqrt(i):i*i);
}
