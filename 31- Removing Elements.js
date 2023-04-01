function removeEveryOther(arr){
  let temp=arr[1];
  let arr2=[];
  for(var i=0;i<arr.length;i++){
    if(i%2==0)
      arr2.push(arr[i]);
  }
  return arr2;
}
//Another sol
function removeEveryOther(arr){
  return arr.filter((el,i)=>i%2==0);
}
