// What is Regex ?
// - it is used to match, test and find character(s) from a string.
// to find vowels
// - Expression: [aeiou]
// - modifiers: gi

var string = prompt("Please enter a string");
const reg = /[aeiou]/gi;
var chars = string.match(reg);
console.log(chars.join(','));
console.log(chars.length);
