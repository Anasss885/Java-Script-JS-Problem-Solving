function divisibleBy(numbers, divisor){
  var arr=[];
  arr=numbers.filter((i)=>i%divisor===0);
  return arr;
}
//Another Sol
function divisibleBy(numbers, divisor){
return numbers.filter((i)=>i%divisor==0)
}
