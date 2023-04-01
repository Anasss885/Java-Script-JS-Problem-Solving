function rentalCarCost(d) {
  var money=d*40;
  if(d<3) return money;
  else if(d>=7) return money-50;
  else return money-20;
}
//Another Sol
function rentalCarCost(d) {
  
  return d*40-(d>=7?50:(d>=3?20:0));
}
