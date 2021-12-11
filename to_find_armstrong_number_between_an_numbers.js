var a = prompt("please enter lower number");
var b = prompt("please enter upper number");
for (var i = a; i <= b; i++){
    var temp = i;
    var noOfDigits = i.toString().length;
    var sum = o;
    while (temp > 0) {
        var digit = temo % 10;
        temp = parseInt(temp / 10);
        sum += digit ** noOfDigits;
    }
    if (sum == i) {
        console.log(i);
    }
}
