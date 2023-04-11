function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
 let arr= birds.filter((i)=>{
   return !geese.includes(i)
 })
 return arr;
};
