// Swapping using temporary variable
var a = prompt('plese enter the a value');
var b = prompt('plese enter the b value');
console.log(`The value is a is:${a}, The value of b is: ${b}`);
var temp;
temp = a;
a = b;
b = temp;
console.log(`After swapping \n The value of a is: ${a}, The value of b is:${b}`);



// Swapping without using temporary variable 
// logic
// a = 5 and b = 6
// a = a + b(5 + 6 = 11) || a = 11
// b = a - b(11 - 6 = 5) || b = 5
// a = a - b(11 - 5 = 6) || a = 6

var a = prompt('plese enter the a value');
var b = prompt('plese enter the b value');
console.log(`The value is a is:${a}, The value of b is: ${b}`);
a = a + b;
b = a - b;
a = a - b;
console.log(`After swapping \n The value of a is: ${a}, The value of b is:${b}`);




