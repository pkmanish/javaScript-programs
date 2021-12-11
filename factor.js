// to be the factors of a number, the factor number should exactly divide the number (with 0 remainder).
// Example -  The factor of 12 is 1,2,3,4,6 and 12.

var number = prompt("Please enter number");
for (var i = 1; i <= number; i++){
    if (number % i == 0) {
        console.log(i);
    }
}