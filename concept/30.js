// . What is Object Destructuring?
// Object destructuring is a new way to extract elements from an object or an array.


// Before ES6 version:

const classDetails = {
  strength: 78,
  benches: 39,
  blackBoard:1
}

const classStrength = classDetails.strength;
const classBenches = classDetails.benches;
const classBlackBoard = classDetails.blackBoard;

// --------------------

const classDetails = {
  strength: 78,
  benches: 39,
  blackBoard:1
}

const {strength:classStrength, benches:classBenches,blackBoard:classBlackBoard} = classDetails;

console.log(classStrength); // Outputs 78
console.log(classBenches); // Outputs 39
console.log(classBlackBoard); // Outputs 1

// -------------------------

const { strength: strength } = classDetails;
// The above line of code can be written as:
const { strength } = classDetails;


//  -------------------------------
const arr = [1, 2, 3, 4];
const first = arr[0];
const second = arr[1];
const third = arr[2];
const fourth = arr[3];

// -------------------------------------
const arr = [1, 2, 3, 4];
const [first,second,third,fourth] = arr;

console.log(first); // Outputs 1
console.log(second); // Outputs 2
console.log(third); // Outputs 3
console.log(fourth); // Outputs 4
