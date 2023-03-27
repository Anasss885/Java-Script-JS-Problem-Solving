function findNeedle(haystack) {
  for(var i=0;i<haystack.length;i++){
    if(haystack[i]=="needle")
      return "found the needle at position "+i;
  }
}
// another Sol
function findNeedle(haystack) {
  return "found the needle at position "+haystack.indexOf("needle");
}
// another sol
function findNeedle(haystack) {
    haystack.map(function(el,index,arr){
        if(arr[index]=="needle") // or you also can say : if(el=="needle") 
        console.log("found the needle at position "+index)
    })
}
