function addLength(str) {
  var arr=str.split(" ");
  var arr2=[];
  for(var i=0;i<arr.length;i++){
    arr2[i]=arr[i]+" "+arr[i].length;
  }
  return arr2;
}

//Another Sol
function addLength(str) {
  return str.split(" ").map((s)=>`${s} ${s.length}`)
}
////Another Sol
function addLength(str) {
return str.split(" ").map((x)=> x+' '+x.length);
}
