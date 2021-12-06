// The factorial of a number is the product if all the numbers from 1 to that number .
// Example -  factorial of 5 is equal to 1*2*3*4*5 = 120 
// The formula for the factorial of n: (n!) = 1 *2 *3 *4...N
var number = prompt("please enter a number");
var fact = 1;
if (number == o) {
    console.log(`The factorila of ${number} ia 1 `)
} else if (number < 0) {
    console.log(`The factorial of -ve number is not possible`);
} else {
    for (var i = 1; i <= number; i++){
        fact = fact * i;
    }
    console.log(`The factorial of${number} is ${fact}`);
}