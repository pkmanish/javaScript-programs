// function calcAge1(birthYear) {
//     const age = 2021 - birthYear;
//     return age;
// }


// Generic function
// function declaration
const age1 = calcAge1(1994);
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
console.log(age1);


// function Expression
// function without a name basically called Anonymous function.

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1994);
console.log(age2);



// What is diff b/t function declarations and function expressions?
// Ans -  the main diff is we can actually call function declarations before they are defined in the code  
//        but if we attempet to do the same with Expration then that should not work. because of a process called hoisting.
