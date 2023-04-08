function updateLight(current) {
  if(current=="green") return "yellow"
  else  if(current=="yellow") return "red"
  else return "green";

}
//Another Sol
function updateLight(c) {
  return c==="green"?"yellow":c==="red"?  "green":"red";
}
//Another Sol

