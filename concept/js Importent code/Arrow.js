// Arrow function
// - A arrow function is simply a special form of function expression that is shorter and therfor faster to write .

const calaAge3 = birthYear => 2037 - birthYear;
const age3 = calaAge3(1991);
console.log(age3);


const yearsUntilRetirement = birthYear => {
    const age = 2044 - birthYear;
    const retirment = 65 - age;
    return retirment;
}

console.log(yearsUntilRetirement(1999));

// ------------------------------------------------------ 

const yearsUntilRetirement1 = (birthYear, firatName) => {
    const age = 2044 - birthYear;
    const retirment = 65 - age;
  //  return retirment;
    return `${firatName} retires in ${retirment} year`;
}

console.log(yearsUntilRetirement1(1999, 'manish'));
console.log(yearsUntilRetirement1(1989, 'trideep'));

