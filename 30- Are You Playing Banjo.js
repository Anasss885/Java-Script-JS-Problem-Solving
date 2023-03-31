
function areYouPlayingBanjo(name) {
  // Implement me
  if(name[0]==='r'||name[0]==='R')
  return name + " plays banjo" ;
  else return name + " does not play banjo";
}
//Another Sol

function areYouPlayingBanjo(name) {
  return name+(name[0].toLowerCase()=='r'?" plays":" does not play") +" banjo";
}
// This Solution Selected as Best Solution ever to this problem
