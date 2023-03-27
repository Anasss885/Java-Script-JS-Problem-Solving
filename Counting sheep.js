function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let cnt=0;
  for(let i=0;i<arrayOfSheep.length;i++){
    if(arrayOfSheep[i]===true)cnt+=1;
  }
  return cnt;
}

/*
Another solution :
*/

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let cnt=0;
  arrayOfSheep.map((m)=>{
    if(m==true)cnt+=1;
  })
  return cnt;
}
