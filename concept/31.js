// Temporal Dead Zone
x = 23; // Gives reference error

let x;


function anotherRandomFunc(){
  message = "Hello"; // Throws a reference error

  let message;
}
anotherRandomFunc();