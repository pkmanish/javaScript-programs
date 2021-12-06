// checking using if-else
var x = 53;
if (x % 2 == 0) {
    //even
    console.log(`${x} is an even number`);
} else {
    //odd
    console.log(`${x} is an odd number`);
}

// checking using ternary operation
var x = 4;
var res = x % 2 == 0 ? "even" : "odd";
console.log(`${x} is an ${res} number`);
