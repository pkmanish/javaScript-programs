// Using predefined function
// replace() - The replace function finds, replaces and returns a new string.
// syntax - replace(find,replace)

var string = "Mr. red has red car and a red bike";
console.log(string);
var reg = new RegExp('red', 'gi');
var newString = string.replace(reg, 'blue');
console.log(newString);

