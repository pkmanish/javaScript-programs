// logic to be implemented
// suooose we have three numbers num1,num2 and num3 
// To check it all of them have the same last digit.
// divide each  number by 10 
// check the remainder
// if all remainders are same, those numbers has the same last digit.

var a = prompt("Please enter 'a' number");
var b = prompt("Please enter 'b' number");
var c = prompt("Please enter 'c' number");

var res1 = a % 10;
var res2 = b % 10;
var res3 = c % 10;

if (res === res2 && res1 === res3) {
    console.log(`${a}, ${b}, ${c} are having the same last digit`);

}else{
     console.log(`${a}, ${b}, ${c} are not having the same last digit`);
}