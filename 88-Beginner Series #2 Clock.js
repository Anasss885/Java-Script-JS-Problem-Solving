function past(h, m, s){
return (s*1000)+((m*60)*1000)+((h*60*60)*1000);
}
//Another Sol
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;

}
