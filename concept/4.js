
var x = 2;
var y = "2";
(x == y)  // Returns true since the value of both x and y is the same

(x === y) // Returns false since the typeof x is "number" and typeof y is "string"


var x = 3;
var y = "3";
x + y // Returns "33" 

var x = 24;
var y = "Hello";
x + y   // Returns "24Hello";

var name = "Vivek";
var surname = " Bisht";
name + surname     // Returns "Vivek Bisht"

var x = 3;
var y = "4";
x - y    //Returns 0 since the variable y (string type) is converted to a number type