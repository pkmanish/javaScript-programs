// generator functions
// Generator functions are declared with the function* keyword instead of the normal function keyword:
function* genFunc(){
  // Perform operation
}

// ----------------

function normalFunc(){
  return 22;
  console.log(2); // This line of code does not get executed
}

// ---------------------
function* genFunc(){
  yield 3;
  yield 4;
}
genFunc(); // Returns Object [Generator] {}

// ---------------------------

genFunc().next(); // Returns {value: 3, done:false}

// --------------------

function* iteratorFunc() {
  let count = 0;
  for (let i = 0; i < 2; i++) {
      count++;
      yield i;
  }
  return count;
}

let iterator = iteratorFunc();
console.log(iterator.next()); // {value:0,done:false}
console.log(iterator.next()); // {value:1,done:false}
console.log(iterator.next()); // {value:2,done:true}
