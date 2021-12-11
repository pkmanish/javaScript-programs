// javaScript program to check palindrome using Array method.


// What is palindrome string ? 
// - A string is a palindrome if it is read the same from forward or backward.
// -  Example - va reads the same either from forward or baclward.
// - So the word dad is a palindorme. similarly, madam is also a palindrome.



// Array methiod to be used.
// -  split(''): splits a string and returns an array 
// - reverse(): - Reverse an array 
// join(''): - join the array elements and returns a string.


var string = prompt("Please enter a string");
var stringArray = string.split('');
var stringArrayRev = stringArray.reverse();
var revString = stringArrayRev.join('');
if (string === revString) {
    console.log(`${string}: Is palindrome`);

} else {
    console.log(`${string}: Is not palindrome`);
}