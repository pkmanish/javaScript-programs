// JS program to check whether a string starts and ends with certain characters.



// Inbuilt - function to be used:
// String.startsWith() - it will check the first character of the string, and return true or false.
// String.endsWith() - It will check the last character of the string, and return true or false.


var string = prompt("Please inter a string:");
console.log(string);
var testStart = string.startsWith('W');
var testEnd = string.endsWith('e');
if (testStart == true && testEnd == true) {
    console.log(`${string} starts with w and emds with e`);
} else if (testStart == true && testEnd == false) {
    console.log(`${string} starts with W`);
} else if (testStart == false && testEnd == true) {
    console.log(`${string} end with e`);
} else {
    console.log(`${string} neither starts with W nor ends with e`);
}


//

var string = prompt("Please inter a string:");
console.log(string);
var testStart = string.startsWith('W');
var testEnd = string.endsWith('e');
console.log(`string :${testStart}`);
console.log(`string :${testEnd}`);