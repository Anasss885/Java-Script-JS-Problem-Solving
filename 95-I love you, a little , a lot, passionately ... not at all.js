function howMuchILoveYou(nbPetals) {
   const arr=[
     "I love you",
     "a little",
     "a lot",
     "passionately",
     "madly",
     "not at all"
   ]
   let ind=nbPetals%6-1;
  if(ind===-1)ind=arr.length-1;
   return arr[ind];
}
//Another Sol
function howMuchILoveYou(n) {
     const arr=[
     "I love you",
     "a little",
     "a lot",
     "passionately",
     "madly",
     "not at all"
   ]
  return arr[(n-1)%6]
}
