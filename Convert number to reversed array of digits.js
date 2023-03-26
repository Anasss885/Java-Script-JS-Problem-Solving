function digitize(n) {
  return n.toString()
    .split("")
    .map((m)=>Number(m))
    .reverse();
}
/*
Declaration 

firstly i convert the entered number to string to be more flexible , then i split the string elements to be able to loop
over them using map function that convert all string elements to number (int) finally we use reverse fn to reverse the whole array
*/
