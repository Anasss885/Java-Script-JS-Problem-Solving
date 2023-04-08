function sumMix(x){
return x.map((a)=>+a).reduce((a,b)=>a+b)
}
//Another Sol
function sumMix(x){
return x.reduce((a,b)=>+a+ +b)
}
