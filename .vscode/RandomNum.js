// using Math.random() method
//MAth.random() returns a randome floating-point number ranging from 0 to less than 1
var x = Math.random();
console.log(x);

// MAth.random()* (highestNumber - lowestNumber) + LowestNumber
// generate a random number 
// MAth.floor(Math.random() * (highestNumber - lowestNumber)) + lowestnumber
//  let a = Math.random()* (10 - 1) + 1 
// cosole.log(`Randome value between 1 and 10 is ${a}`);

var x = Math.random();
console.log("Before calculation");
x = x * (10000 - 1) + 1;
console.log("After calculation" + x);
console.log("floor calculation " + Math, floor(x));
