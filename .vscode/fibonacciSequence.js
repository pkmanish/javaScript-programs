// fibonaccis sequence
// - The fibonaccis sequance is the integer sequence where the first two terms are 0 ans 1 . After that, the next term is defined 
//   as the sum of the previous rwo number.
// ,01,1,2,3,4,5,6,8,13,21,...............

var a = 0, b = 1;
console.log(a);
console.log(b);
for (var i = 0; i <= 7; i++){
    var temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
}