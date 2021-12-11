// using MAth.max() method
// -  MAth.max() returns the largest number among the provided numbers.
 // Syntex - MAth.max(n1,n2,n3);
var a = prompt("please enter the first number");
var b = prompt("please enter the second number")
var c = prompt("please enter the third number")
var x = Math.max(a, b, c);
console.log(`${a},${b},${c}: Largest = ${x}`);

// using user defined mathod 
function check(p, q, r) {
    if (p >= q && p >= r) {
        return p;
    } else if (q >= p && q >= r) {
        return q;
    } else {
        return r;
    }

}
var a = prompt("please enter the first number");
var b = prompt("please enter the second number")
var c = prompt("please enter the third number")
var x = Math.max(a, b, c);
console.log(`${a},${b},${c}: Largest = ${x}`);