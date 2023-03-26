function sumArray(array) {
if (array == null){return 0}
return array.sort((a,b) => a-b).slice(1, -1).reduce((a,b) => a+b, 0);
}
/*
sort acendingly using arrow function shortCut, then slice function used to remove first element (1) and the last element (-1) then reduce function 
as usual returns our sum logic 

*/
