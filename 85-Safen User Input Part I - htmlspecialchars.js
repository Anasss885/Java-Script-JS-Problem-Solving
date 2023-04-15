function htmlspecialchars(formData) {
  var arr=[];
  for(var i=0;i<formData.length;i++){
    if(formData[i]=="<")arr[i]="&lt;";
    else if(formData[i]==">")arr[i]="&gt;";
    else if(formData[i]=="&")arr[i]="&amp;";
    else if(formData[i]=='"') arr[i]="&quot;";
    else arr.push(formData[i]);
  }
  return arr.join("");
}
//Another Sol
function htmlspecialchars(formData) {
return formData
  .replace(/&/g,"&amp;")
  .replace(/</g,"&lt;")
  .replace(/>/g,"&gt;")
  .replace(/"/g,"&quot;")
}
//AnotherSol
