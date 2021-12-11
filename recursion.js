// Recursion
// - The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursion function

/*function demo() {
    if (condition) {
        return;
    }
    demo();
}
*/

var number = prompt('please enter a number');
var fact = 1;
console.log(fact);
function factr(n) {
    if (n > number) {
        return;
    }
    var tmp = fact;
    fact = fact * n;
    n++;
    factr(n);
}

factr(1);
//console.log(tmp + "x" + n + "=" + fact);
console.log(`The fact of ${number} is ${fact}`);
