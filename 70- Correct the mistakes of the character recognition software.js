function correct(s)
{
  var s2="";
	for(var i=0;i<s.length;i++){
    if(s[i]=='0')s2+='O';
    else  if(s[i]=='1')s2+='I';
    else if(s[i]=='5')s2+='S';
    else s2+=s[i];
  }
  return s2;
}
//Another Sol
function correct(s)
{
	return s.replace(/0/g,'O').replace(/5/g,'S').replace(/1/g,'I')
}
//Another Sol
