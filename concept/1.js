var str = "Vivek Singh Bisht"; //using double quotes
var str2 = 'John Doe'; //using single quotes

var x = 3; //without decimal
var y = 3.6; //with decimal

var a = 2;
var b =  3;
var c =  2;
(a == b) // returns false
(a == c) //returns true

var x; // value of x is undefined
var y = undefined; // we can also set the value of a variable as undefined

var z = null;

var symbol1 = Symbol('symbol');

typeof "John Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined"
typeof null // Returns "object" (kind of a bug in JavaScript)
typeof Symbol('symbol') // Returns Symbol
