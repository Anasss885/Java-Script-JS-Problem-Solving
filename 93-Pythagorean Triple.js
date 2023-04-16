function isPythagoreanTriple(integers) {
 var arr=integers.sort((a,b)=>a-b);
  return Math.pow(arr[2],2)==(Math.pow(arr[1],2)+Math.pow(arr[0],2))
}
