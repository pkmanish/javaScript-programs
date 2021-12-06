// A string is a palandrome if it is read the same from forward or backward.
// Example
// - dad reads the same either from forward or backeard.
// so the word dad is a palindrome. similarly, madam is also a palindrome.

var string = prompt("please enter a string");
var len = string.length;
var msg = 'It is a palindrome';
for (var i = 0; i < len / 2; i++){
    if (string[i] != string[len - 1 - i]) {
        msg = 'It is not a palindrome';
    }
}
console.log(`${string}: ${msg}`);
