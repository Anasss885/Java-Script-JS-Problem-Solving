function getAverage(marks){
  var sum=marks.reduce((a,b)=>a+b);
  return Math.floor(sum/marks.length);
}
//Another Sol
function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}
