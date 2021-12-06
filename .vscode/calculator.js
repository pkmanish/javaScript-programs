var num1 = prompt("please enter 1st number");
var num2 = prompt("please enter 2nd number");
var opr = prompt("please select among +,-,*,/");
switch (opr)
{
    case "+":
        var res = parseFloat(num1) + parseFloat(num2);
        console.log(`${num1} + ${num2} = ${res}`);
        break;
    case "-":
        var res = parseFloat(num1) + parseFloat(num2);
        console.log(`${num1} - ${num2} = ${res}`);
        break;
    case "*":
        var res = parseFloat(num1) + parseFloat(num2);
        console.log(`${num1} * ${num2} = ${res}`);
        break;
    case "/":
        var res = parseFloat(num1) + parseFloat(num2);
        console.log(`${num1} / ${num2} = ${res}`);
        break;
    default:
        console.log('Invalid operator')
}