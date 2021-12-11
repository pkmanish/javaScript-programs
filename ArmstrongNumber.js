// Armstrong number - in the case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself.
// for example, 153 is an Armstrong number
// abcd = an + bn + cn + dn + ....
// 153 = 1*1*1 +5*5*5 + 3*3*3
var number = prompt("please enter a number");
var temp = number;
var noOfDigits = number.toString().length;


var sum = 0;
while (temp > 0) {
    var digit = temp % 10;
    sum += digit ** 3;
    temp = parseInt(temp / 10);
}
if (sum == number) {
    console.log(`${number} is an armstrong number`);

} else {
    console.log(`${number} is not armstrong number`)
}