// javaScript program to check whether a string contains a substring.


// Inbulit - function to be used.
// string.includes() - The javaScript string includes() method checks if one string can be found inside another string and returns true or false.
// string.indexOf() - The javaScript string indexOf() method returns the first index of occurrence of a given value in the string, or -1 if it is not present.

var string = prompt("Plese enter a string");
var subString = "the";
console.log(string);
var test1 = string.includes(subString);
console.log(test1);
var test2 = string.lastIndexOf(subString);
console.log(test2);

