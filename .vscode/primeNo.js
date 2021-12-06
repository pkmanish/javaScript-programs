// A p[rime number is a positive integer that is only divisible by 1 and itself.
// Example -  2,3,5,7,11 are the first few prime numbes.
var number = prompt("plese enter a number ");
if (number == 1) {
    console.log(`${number} is neither prime nor composite number`);
} else if (number < 1) {
    console.log(`${number} is not a prime number`);
} else {
    for (var i = 2; i < number; i++); {
        if (number % i == 0) {
            var res = `${number} is not prime number`;
            break;
        } else {
            var res = `${number} is a prime number`;
        }
    }
    console.log(res);
}