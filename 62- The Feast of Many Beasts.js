function feast(beast, dish) {
return beast[0]==dish[0]&&beast[beast.length-1]==dish[dish.length-1];
}
//Another Sol
function feast(beast, dish) {
return beast.startsWith(dish[0])&&beast.endsWith(dish[dish.length-1])
}
//Another Sol
function feast(beast, dish) {
return beast.startsWith(dish[0])&&dish.endsWith(beast[beast.length-1])
}
