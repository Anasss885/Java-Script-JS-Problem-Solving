function findAverage(arr) {
  if(arr.length==0)return 0;
  return arr.reduce((a,b)=>a+b)/arr.length;
  
}
