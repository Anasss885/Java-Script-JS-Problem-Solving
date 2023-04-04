function noBoringZeros(n) {

while(n%10===0&&n!=0){
    n/=10;
}
  return n;
}
// Another Sol
function noBoringZeros(n) {
return Number(String(n).replace(/0+$/,''));
}
//Another Sol(Recursive Solution)
function noBoringZeros(n) {
return n%10||n==0?n:noBoringZeros(n/10);
}
