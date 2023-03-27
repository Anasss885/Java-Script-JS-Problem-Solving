function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  // this is another case 
  return "Hello, " + name + "!";
}
// another sol
function greet(name){
return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}
