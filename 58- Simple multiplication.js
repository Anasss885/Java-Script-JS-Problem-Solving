function simpleMultiplication(number) {
    return number%2==0?number*8:number*9;
}
//Another Sol
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

