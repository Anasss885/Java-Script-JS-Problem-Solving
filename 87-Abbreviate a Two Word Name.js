function abbrevName(name){
  var str=name[0].toUpperCase();
  for(var i=0;i<name.length;i++){
    if(name[i]==" "){
      str+="."+(name[i+1].toUpperCase());
    }
  }
  return str;
}
//Another Sol 
function abbrevName(name){
  var n=name.split(" ");
  return (n[0][0]+"."+n[1][0]).toUpperCase();

}
