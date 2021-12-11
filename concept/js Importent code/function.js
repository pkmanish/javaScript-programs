// function
// - A function is a piece of code that we can reuse over and over again in our code.
// - A function can hold one or more complete lines of code.

function logger() {
    console.log("manish");
}
// calling , running , invoking , function

logger();
logger();
logger();
logger(); 

// parameters are like variables that are specific only to this function and they will get defined once we call the function.

function food(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applesJuice = food(5, 0);
console.log(applesJuice);
console.log(food(5, 0));

const orangeJuice = food(2, 4);
console.log(orangeJuice);


const num = Number('23');
// ----------------------------------------------------

function calcAge(birthYear, firstName) {
    const age = 2034 - birthYear;
    console.log(`${firstName} is ${age} year old`);
    return age;
}

const age = calaAge(1991, 'manish')