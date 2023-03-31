function remove (string) {
 return string.replace(/!$/,"")
}
// Another Sol
function remove (string) {
  if(string.endsWith("!"))
    return string.slice(0,-1);
  else return string
}
