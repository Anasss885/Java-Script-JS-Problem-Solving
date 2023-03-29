function countPositivesSumNegatives(input) {
  if(input==null || input.length==0){
    return [];
  }
  var cnt=0,sum=0;
  for(var i=0;i<input.length;i++){
    if(input[i]>0)cnt+=1;
    else if(input[i]<0)sum+=input[i];
  }
  var arr=[cnt,sum];
  return arr;
}
// Another Sol:
function countPositivesSumNegatives(input) {
  if(input==null || input.length==0){
    return [];
  }
 var posArray=input.filter((i)=>i>0).length;
  var negSum=input.filter((i)=>i<0).reduce((a,b)=>a+b,0);
  var arr=[posArray,negSum]
  return arr;
}

