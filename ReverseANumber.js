function MyReverseFunction(num) {
    var reverse = 0;
    while(num != 0){
        reverse = reverse * 10 ;
        reverse = reverse + num%10;
        //to remove the decimal place
        num = Math.trunc(num/10);
    }
    return reverse;
}
console.log(MyReverseFunction(123)); //321
console.log(MyReverseFunction(12345678)); //87654321
console.log(MyReverseFunction(809)); //908