// function to be used .
// charAt() - to get a cgaracter at an index
// toUpperCase() - To upper case characters.
// slice() - To slide any character from the string.

var string = prompt("please enter a string");
// console.log(string);
var first = string.charAt(0);
// console.log(first);
// console.log(first.toUpperCase());
var rem = string.slice(1);
// console.log(rem);
var caps = first.toUpperCase() + rem;
console.log(`${caps}`);