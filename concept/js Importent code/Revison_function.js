const calaAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement3 = function (birthYear, firstName) {
    const age = calaAge(birthYear);
    const retirment = 65 - age;

    if (retirment > 0) {
        console.log(`${firstName} retires in ${retirment} years`);
        return retirment;

    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement3(1991, 'manish'));
console.log(yearsUntilRetirement3(1959, 'pk'));
