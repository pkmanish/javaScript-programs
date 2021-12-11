 // currying in JavaScript?
function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4)

// ----------------------

function multiply(a, b) {
  return a*b;
}

function currying(fn){
  return function(a){
    return function(b){
      return fn(a,b);
    }
  }
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12

curriedMultiply(4)(3); // Also returns 12