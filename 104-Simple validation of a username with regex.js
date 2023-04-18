function validateUsr(u) {
  return /^[abcdefghijklmnopqrstuvwxyz\d_]{4,16}$/.test(u);
}
//Another Sol
function validateUsr(u) {
  return /^[a-z\d_]{4,16}$/.test(u);
}
